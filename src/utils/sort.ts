export function sortIds<T extends { id: string }>(a: T, b: T) {
	return idNum(a.id) - idNum(b.id);
}

function idNum(id: string) {
	return Number(id.split("-")[0]);
}
