//#region src/content/chapters/ch12.mdx?astroPropagatedAssets
async function getMod() {
	return import("./ch12_BMhTDF_x.mjs");
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
