import { i as __exportAll, r as createComponent, t as $$BaseLayout } from "./BaseLayout_CgphDgKw.mjs";
import { C as addAttribute, b as renderTemplate, f as renderComponent, x as maybeRenderHead } from "./jsx-runtime_NDG3pEuD.mjs";
//#region src/pages/references.astro
var references_exports = /* @__PURE__ */ __exportAll({
	default: () => $$References,
	file: () => $$file,
	url: () => $$url
});
var $$References = createComponent(($$result, $$props, $$slots) => {
	const references = [
		{
			year: "全部",
			title: "儿童少年卫生学笔记（全） 后附PDF文档",
			url: "https://mp.weixin.qq.com/s/9d3sswRvuKVAX21SEU17gQ",
			note: "按章节整理的知识点笔记，适合和课件对照阅读。",
			pastExam: false
		},
		{
			year: "全部",
			title: "儿童少年卫生学重点整理",
			url: "https://mp.weixin.qq.com/s/PKYh-HULMRy98qTCWmGgMA",
			note: "按章节排序的重点整理，内容以 PPT 和考题为线索。",
			pastExam: false
		},
		{
			year: "全部",
			title: "儿童少年卫生学",
			url: "https://mp.weixin.qq.com/s/0xXLYW6I7OAeIz_ZrX_b9w",
			note: "学习经验、实验报告要求和考试题型说明。",
			pastExam: false
		},
		{
			year: "全部",
			title: "复习 | 儿童少年卫生学知识点（完整版）",
			url: "https://mp.weixin.qq.com/s/sAh5w0RffE1Z1elVCIzFGg",
			note: "较完整的知识点整理，覆盖生长发育、身体、心理、青春期、影响因素和调查评价。",
			pastExam: false
		},
		{
			year: "全部",
			title: "（大四上）儿童少年卫生学I",
			url: "https://mp.weixin.qq.com/s/y77Qc7IM-ZiU-2Lz4FDMLQ",
			note: "爱课习题导出说明，可作为练习来源参考。",
			pastExam: false
		},
		{
			year: "2022",
			title: "考试 | 22年儿少卫生（预防）",
			url: "https://mp.weixin.qq.com/s/fOw8227094lKra21zO98AQ",
			note: "简答题回忆：Haddon 模型、饥饿实验、组织改变理论戒烟、哮喘、Scammon、百分位法。",
			pastExam: true
		},
		{
			year: "2023",
			title: "考试 | 23年儿童少年卫生学（预防）",
			url: "https://mp.weixin.qq.com/s/tYprl3obA7DbUP1ac7tulQ",
			note: "简答与论述回忆：Scammon、追赶性生长、戒烟干预、主要健康问题、疲劳、DOHaD、两校身高比较。",
			pastExam: true
		},
		{
			year: "2024",
			title: "考试 | 24年儿童少年卫生学（预防）",
			url: "https://mp.weixin.qq.com/s/BlGXCsyQJYDkDoDDqdTVVA",
			note: "简答与论述回忆：puberty timing、哮喘、自伤案例、戒烟干预、肥胖易感环境、生长发育可塑性。",
			pastExam: true
		}
	];
	return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "往年参考 · 儿童少年卫生学" }, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<section class="reference-page"><header class="reference-heading"><p class="kicker">外部资料</p><h1>往年参考</h1><p>这些是公众号文章和同学回忆版资料，用来补充课件没有展开的考点。 标有“往年考过”的链接是考试回忆，不是官方原卷，题量和表述可能与实际考试有差异。</p></header><div class="reference-warning"><strong>使用原则</strong><p>课件和指定教材优先；公众号内容用于补充和提示重点。遇到说法冲突，以课件和老师口径为准。</p></div><ol class="reference-list">${references.map((item) => renderTemplate`<li${addAttribute(["reference-item", { "is-past-exam": item.pastExam }], "class:list")}><div class="reference-meta"><span>${item.year}</span>${item.pastExam && renderTemplate`<strong>往年考过 · 回忆版</strong>`}</div><h2><a${addAttribute(item.url, "href")} target="_blank" rel="noreferrer">${item.title}</a></h2><p>${item.note}</p></li>`)}</ol></section>` })}`;
}, "C:/Users/15417/Documents/ChatGPT/课程网站/src/pages/references.astro", void 0);
var $$file = "C:/Users/15417/Documents/ChatGPT/课程网站/src/pages/references.astro";
var $$url = "/references";
//#endregion
//#region \0virtual:astro:page:src/pages/references@_@astro
var page = () => references_exports;
//#endregion
export { page };
