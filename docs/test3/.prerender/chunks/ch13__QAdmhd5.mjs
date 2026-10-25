//#region src/content/chapters/ch13.mdx?astroPropagatedAssets
async function getMod() {
	return import("./ch13_OKqLEvWC.mjs");
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
