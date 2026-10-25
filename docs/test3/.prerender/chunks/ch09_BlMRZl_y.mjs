//#region src/content/chapters/ch09.mdx?astroPropagatedAssets
async function getMod() {
	return import("./ch09_CzVEN1eX.mjs");
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
