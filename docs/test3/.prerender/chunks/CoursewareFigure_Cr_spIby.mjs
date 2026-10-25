import { n as createAstro, r as createComponent } from "./BaseLayout_CgphDgKw.mjs";
import { C as addAttribute, b as renderTemplate, x as maybeRenderHead } from "./jsx-runtime_NDG3pEuD.mjs";
//#region src/components/content/CoursewareFigure.astro
createAstro("https://astro.build");
var $$CoursewareFigure = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$CoursewareFigure;
	const { src, alt, caption, source = "课程课件" } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<figure class="concept-figure courseware-figure"><img${addAttribute(src, "src")}${addAttribute(alt, "alt")} loading="lazy" decoding="async"><figcaption>${caption}<span class="courseware-source">来源：${source}</span></figcaption></figure>`;
}, "C:/Users/15417/Documents/ChatGPT/课程网站/src/components/content/CoursewareFigure.astro", void 0);
//#endregion
export { $$CoursewareFigure as t };
