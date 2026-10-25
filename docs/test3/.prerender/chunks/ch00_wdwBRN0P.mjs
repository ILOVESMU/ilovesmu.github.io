//#region src/content/chapters/ch00.mdx?astroPropagatedAssets
async function getMod() {
	return import("./ch00_C-aD7K-E.mjs");
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
