import { C as addAttribute, N as ASTRO_GENERATOR, S as renderHead, _ as renderSlot, b as renderTemplate } from "./jsx-runtime_NDG3pEuD.mjs";
import { G as UnavailableAstroGlobal, X as AstroError, _ as InvalidComponentArgs } from "./errors-data_WsI_B1TX.mjs";
//#region \0rolldown/runtime.js
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
//#endregion
//#region node_modules/astro/dist/runtime/server/astro-component.js
function validateArgs(args) {
	if (args.length !== 3) return false;
	if (!args[0] || typeof args[0] !== "object") return false;
	return true;
}
function baseCreateComponent(cb, moduleId, propagation) {
	const name = moduleId?.split("/").pop()?.replace(".astro", "") ?? "";
	const fn = (...args) => {
		if (!validateArgs(args)) throw new AstroError({
			...InvalidComponentArgs,
			message: InvalidComponentArgs.message(name)
		});
		return cb(...args);
	};
	Object.defineProperty(fn, "name", {
		value: name,
		writable: false
	});
	fn.isAstroComponentFactory = true;
	fn.moduleId = moduleId;
	fn.propagation = propagation;
	return fn;
}
function createComponentWithOptions(opts) {
	return baseCreateComponent(opts.factory, opts.moduleId, opts.propagation);
}
function createComponent(arg1, moduleId, propagation) {
	if (typeof arg1 === "function") return baseCreateComponent(arg1, moduleId, propagation);
	else return createComponentWithOptions(arg1);
}
//#endregion
//#region node_modules/astro/dist/runtime/server/astro-global.js
function createError(name) {
	return new AstroError({
		...UnavailableAstroGlobal,
		message: UnavailableAstroGlobal.message(name)
	});
}
function createAstro(site) {
	return {
		get site() {
			console.warn(`Astro.site inside getStaticPaths is deprecated and will be removed in a future major version of Astro. Use import.meta.env.SITE instead`);
			return site ? new URL(site) : void 0;
		},
		get generator() {
			console.warn(`Astro.generator inside getStaticPaths is deprecated and will be removed in a future major version of Astro.`);
			return ASTRO_GENERATOR;
		},
		get callAction() {
			throw createError("callAction");
		},
		get clientAddress() {
			throw createError("clientAddress");
		},
		get cookies() {
			throw createError("cookies");
		},
		get csp() {
			throw createError("csp");
		},
		get currentLocale() {
			throw createError("currentLocale");
		},
		get getActionResult() {
			throw createError("getActionResult");
		},
		get isPrerendered() {
			throw createError("isPrerendered");
		},
		get locals() {
			throw createError("locals");
		},
		get originPathname() {
			throw createError("originPathname");
		},
		get params() {
			throw createError("params");
		},
		get preferredLocale() {
			throw createError("preferredLocale");
		},
		get preferredLocaleList() {
			throw createError("preferredLocaleList");
		},
		get props() {
			throw createError("props");
		},
		get redirect() {
			throw createError("redirect");
		},
		get request() {
			throw createError("request");
		},
		get response() {
			throw createError("response");
		},
		get rewrite() {
			throw createError("rewrite");
		},
		get routePattern() {
			throw createError("routePattern");
		},
		get self() {
			throw createError("self");
		},
		get slots() {
			throw createError("slots");
		},
		get url() {
			throw createError("url");
		},
		get session() {
			throw createError("session");
		},
		get cache() {
			throw createError("cache");
		},
		get logger() {
			throw createError("logger");
		}
	};
}
var $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$BaseLayout;
	const { title = "儿童少年卫生学 · 学习站", description = "按章节学习儿童少年卫生学，或直接进入题库练习。" } = Astro.props;
	const path = Astro.url.pathname;
	return renderTemplate`<html lang="zh-CN" data-theme="glass"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="description"${addAttribute(description, "content")}><meta name="theme-color" content="#2f6bff"><script>
      (() => {
        try {
          const saved = localStorage.getItem("cah.theme.v1");
          if (saved === "glass" || saved === "night" || saved === "green") {
            document.documentElement.dataset.theme = saved;
          }
        } catch {}
      })();
    <\/script><title>${title}</title>${renderHead($$result)}</head><body><a class="skip-link" href="#main">跳到主要内容</a><header class="site-header"><a class="brand" href="/"><span class="brand-mark" aria-hidden="true"><img class="brand-clock" src="/images/brand-clock.png" alt=""></span><span class="brand-copy"><strong>儿童少年卫生学</strong></span></a><div class="header-actions"><nav class="site-nav" aria-label="主导航">${[
		{
			href: "/learn/",
			label: "顺序学习"
		},
		{
			href: "/practice/",
			label: "纯刷题"
		},
		{
			href: "/wrong/",
			label: "错题本"
		},
		{
			href: "/about/",
			label: "来源说明"
		}
	].map((item) => renderTemplate`<a${addAttribute(item.href, "href")}${addAttribute({ active: path === item.href || path.startsWith(item.href) }, "class:list")}>${item.label}</a>`)}</nav><div class="theme-switcher" role="group" aria-label="配色主题"><button type="button" data-theme-choice="glass">冰蓝</button><button type="button" data-theme-choice="night">夜间</button><button type="button" data-theme-choice="green">原绿</button></div></div></header><main id="main">${renderSlot($$result, $$slots["default"])}</main><footer class="site-footer"><p>内容依据课程课件、指定教材和公开资料整理。个人理解部分会单独标注。</p><p>内容以课程课件和指定教材为准；本站不替代课堂学习。</p><div class="visit-stats" aria-label="阅读统计"><span id="busuanzi_container_page_pv" style="display:none">本文阅读 <strong id="busuanzi_page_pv">...</strong> 次</span><span id="busuanzi_container_site_pv" style="display:none">本站访问 <strong id="busuanzi_site_pv">...</strong> 次</span></div></footer><script src="https://busuanzi.9420.ltd/js"><\/script><script>
      (() => {
        const choices = [...document.querySelectorAll("[data-theme-choice]")];
        const apply = (theme) => {
          document.documentElement.dataset.theme = theme;
          try {
            localStorage.setItem("cah.theme.v1", theme);
          } catch {}
          choices.forEach((button) => {
            button.setAttribute(
              "aria-pressed",
              String(button.dataset.themeChoice === theme),
            );
          });
        };
        choices.forEach((button) => {
          button.addEventListener("click", () => apply(button.dataset.themeChoice));
        });
        apply(document.documentElement.dataset.theme || "glass");
      })();
    <\/script></body></html>`;
}, "C:/Users/15417/Documents/ChatGPT/课程网站/src/layouts/BaseLayout.astro", void 0);
//#endregion
export { __exportAll as i, createAstro as n, createComponent as r, $$BaseLayout as t };
