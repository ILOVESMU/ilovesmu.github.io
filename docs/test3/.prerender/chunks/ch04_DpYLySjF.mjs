//#region src/content/chapters/ch04.mdx?astroPropagatedAssets
async function getMod() {
	return import("./ch04_DgxZZJzl.mjs");
}
var defaultMod = {
	__astroPropagation: true,
	getMod,
	collectedLinks: [],
	collectedStyles: [],
	collectedScripts: []
};
//#endregion
export { defaultMod as default };
