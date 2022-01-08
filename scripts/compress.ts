import { createReadStream, createWriteStream } from "fs";
import { writeFile } from "fs/promises";
import path from "path";
import { createGzip, createBrotliCompress } from "zlib";

import readDir from "recursive-readdir";

import type { Gzip, BrotliCompress } from "zlib";

const dist = path.resolve(__dirname, "../dist");
// Provided by NearlyFreeSpeech:
// https://members.nearlyfreespeech.net/wiki/HowTo/GzipStatic
const dotHtAccess = `
Header add Vary accept-encoding
RewriteEngine on

RewriteCond %{HTTP:Accept-Encoding} gzip
RewriteCond %{REQUEST_FILENAME}.gz -f
RewriteRule ^(.*)$ $1.gz [L]
`;

const shouldCompress = (filename: string) =>
	[".js", ".css", ".html", ".png", ".json"].includes(path.extname(filename));

const compressAssetWith =
	(getCompressor: () => Gzip | BrotliCompress, extension: string) =>
	(assetPath: string) => {
		const input = createReadStream(assetPath);
		const output = createWriteStream(`${assetPath}.${extension}`);

		return new Promise<string>((resolve, reject) => {
			input.on("error", reject);
			output.on("error", reject);
			output.on("finish", () => resolve(`${assetPath} compressed`));

			input.pipe(getCompressor()).pipe(output);
		});
	};

const compressGzip = compressAssetWith(createGzip, "gz");

const compressBrotli = compressAssetWith(createBrotliCompress, "br");

const compressAsset = (assetPath: string) =>
	Promise.all([compressGzip(assetPath), compressBrotli(assetPath)]);

const writeHtAccess = (destPath: string) => writeFile(destPath, dotHtAccess);

readDir(dist)
	.then((files) => files.filter(shouldCompress))
	.then((files) => Promise.all(files.map(compressAsset)))
	.then((compressed) => console.log(`${compressed.length} files compressed`))
	.then(() => writeHtAccess(`${dist}/.htaccess`))
	.catch(console.error);
