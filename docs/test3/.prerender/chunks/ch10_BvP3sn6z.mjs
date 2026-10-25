//#region src/content/chapters/ch10.mdx?astroPropagatedAssets
async function getMod() {
	return import("./ch10_B37Aa8S8.mjs");
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
