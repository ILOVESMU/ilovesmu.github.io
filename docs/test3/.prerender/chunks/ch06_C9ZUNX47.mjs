//#region src/content/chapters/ch06.mdx?astroPropagatedAssets
async function getMod() {
	return import("./ch06_CjmAPExM.mjs");
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
