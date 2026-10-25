import { n as createAstro, r as createComponent } from "./BaseLayout_CgphDgKw.mjs";
import { C as addAttribute, b as renderTemplate, x as maybeRenderHead } from "./jsx-runtime_NDG3pEuD.mjs";
//#region src/components/navigation/ModeSwitch.astro
createAstro("https://astro.build");
var $$ModeSwitch = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$ModeSwitch;
	const path = Astro.url.pathname;
	return renderTemplate`${maybeRenderHead($$result)}<nav class="mode-switch" aria-label="学习模式"><a href="/learn/"${addAttribute({ active: path.startsWith("/learn") }, "class:list")}>顺序学习</a><a href="/practice/"${addAttribute({ active: path.startsWith("/practice") }, "class:list")}>纯刷题</a><a href="/story/"${addAttribute({ active: path.startsWith("/story") }, "class:list")}>文字游戏</a></nav>`;
}, "C:/Users/15417/Documents/ChatGPT/课程网站/src/components/navigation/ModeSwitch.astro", void 0);
//#endregion
export { $$ModeSwitch as t };
