//#region src/content/chapters/ch02.mdx?astroPropagatedAssets
async function getMod() {
	return import("./ch02_Dn3xS7pa.mjs");
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
