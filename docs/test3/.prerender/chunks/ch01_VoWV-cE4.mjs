//#region src/content/chapters/ch01.mdx?astroPropagatedAssets
async function getMod() {
	return import("./ch01_DlShSrNm.mjs");
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
