import { i as __exportAll, r as createComponent, t as $$BaseLayout } from "./BaseLayout_CgphDgKw.mjs";
import { C as addAttribute, b as renderTemplate, f as renderComponent, x as maybeRenderHead } from "./jsx-runtime_NDG3pEuD.mjs";
import { t as getCollection } from "./_astro_content_Xb-_pjdD.mjs";
import { t as $$ModeSwitch } from "./ModeSwitch_mLnc5uQI.mjs";
//#region src/pages/learn/index.astro
var learn_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => $$url
});
var $$Index = createComponent(async ($$result, $$props, $$slots) => {
	const chapters = (await getCollection("chapters")).sort((left, right) => left.data.order - right.data.order);
	return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "顺序学习 · 儿童少年卫生学" }, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<section class="learn-index"><div class="learn-heading"><p class="kicker">章节学习</p><h1>按章读，读完就练。</h1><p>每章先看正文，再做本章和相关题。提交后显示答案与解析， 也可以直接进入下一题。</p>${renderComponent($$result, "ModeSwitch", $$ModeSwitch, {})}</div><ol class="learn-list">${chapters.map((chapter) => renderTemplate`<li><a${addAttribute(`/learn/${chapter.id}/`, "href")}><span class="chapter-order">${String(chapter.data.order).padStart(2, "0")}</span><span class="chapter-copy"><strong>${chapter.data.title}</strong><small>${chapter.data.summary}</small></span><span class="chapter-status ready">进入本章</span></a></li>`)}</ol></section>` })}`;
}, "C:/Users/15417/Documents/ChatGPT/课程网站/src/pages/learn/index.astro", void 0);
var $$file = "C:/Users/15417/Documents/ChatGPT/课程网站/src/pages/learn/index.astro";
var $$url = "/learn";
//#endregion
//#region \0virtual:astro:page:src/pages/learn/index@_@astro
var page = () => learn_exports;
//#endregion
export { page };
