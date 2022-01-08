import path from "path";

import { config } from "dotenv";
import rsync from "rsyncwrapper";

const envResult = config();

if (envResult.error) throw envResult.error;

const { DEPLOY_DOMAIN, DEPLOY_USER, DEPLOY_PATH } = envResult.parsed ?? {};

if (!(DEPLOY_DOMAIN && DEPLOY_USER && DEPLOY_PATH)) {
	throw new Error("Missing env vars");
}

rsync(
	{
		src: path.join(__dirname, "../dist/"),
		dest: `${DEPLOY_USER}@${DEPLOY_DOMAIN}:${DEPLOY_PATH}`,
		ssh: true,
		recursive: true,
		delete: true,
		exclude: [".well-known/"],
		args: ["--group=www-data", "--chmod=u=rwX,go=rX", "--progress"],
		onStdout(data) {
			process.stdout.write(data);
		},
		onStderr(data) {
			process.stdout.write(data);
		},
	},
	(error) => {
		if (error) console.error(error.message);
	},
);
