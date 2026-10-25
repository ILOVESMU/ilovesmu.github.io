//#region src/content/chapters/ch08.mdx?astroPropagatedAssets
async function getMod() {
	return import("./ch08_0HMfyWJe.mjs");
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
