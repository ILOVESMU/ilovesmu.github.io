//#region src/content/chapters/ch03.mdx?astroPropagatedAssets
async function getMod() {
	return import("./ch03_BR3MnPHf.mjs");
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
