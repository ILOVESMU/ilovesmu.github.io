import { i as __exportAll, r as createComponent, t as $$BaseLayout } from "./BaseLayout_CgphDgKw.mjs";
import { b as renderTemplate, f as renderComponent, x as maybeRenderHead } from "./jsx-runtime_NDG3pEuD.mjs";
import { t as getAllQuestions } from "./questions_BwonQCMK.mjs";
import { t as $$ModeSwitch } from "./ModeSwitch_mLnc5uQI.mjs";
import { r as getWrongRecords, s as removeWrong, t as SourceBadge } from "./SourceBadge_BpFlzZcy.mjs";
import { useEffect, useMemo, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/components/wrong/WrongBook.tsx
function answerText(question, key) {
	if (question.type === "true_false") return key === "true" ? "对" : "错";
	const option = question.options?.find((item) => item.key === key);
	return option ? `${option.key}. ${option.text}` : key;
}
function formatDate(value) {
	const date = new Date(value);
	return Number.isNaN(date.getTime()) ? "时间未知" : date.toLocaleDateString("zh-CN");
}
function WrongBook({ questions }) {
	const [records, setRecords] = useState([]);
	const [hydrated, setHydrated] = useState(false);
	useEffect(() => {
		setRecords(getWrongRecords());
		setHydrated(true);
	}, []);
	const questionsById = useMemo(() => new Map(questions.map((question) => [question.id, question])), [questions]);
	const groups = useMemo(() => {
		const grouped = /* @__PURE__ */ new Map();
		for (const record of records) {
			const question = questionsById.get(record.id);
			const chapter = question?.chapter ?? "未知章节";
			const items = grouped.get(chapter) ?? [];
			items.push({
				record,
				question
			});
			grouped.set(chapter, items);
		}
		return [...grouped.entries()];
	}, [questionsById, records]);
	function remove(id) {
		removeWrong(id);
		setRecords((current) => current.filter((record) => record.id !== id));
	}
	if (!hydrated) return /* @__PURE__ */ jsx("div", {
		className: "wrong-loading",
		children: "正在读取错题本..."
	});
	if (records.length === 0) return /* @__PURE__ */ jsxs("div", {
		className: "wrong-empty",
		children: [
			/* @__PURE__ */ jsx("strong", { children: "错题本是空的。" }),
			/* @__PURE__ */ jsx("p", { children: "答错的题会自动出现在这里。先去刷几道题，再回来复习。" }),
			/* @__PURE__ */ jsx("a", {
				className: "quiz-next",
				href: "/practice/",
				children: "去刷题"
			})
		]
	});
	return /* @__PURE__ */ jsxs("div", {
		className: "wrong-book",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "wrong-summary",
			children: [/* @__PURE__ */ jsxs("span", { children: [records.length, " 道错题"] }), /* @__PURE__ */ jsx("a", {
				href: "/practice/",
				children: "去纯刷题中练习"
			})]
		}), groups.map(([chapter, items]) => /* @__PURE__ */ jsxs("section", {
			className: "wrong-group",
			children: [/* @__PURE__ */ jsx("h2", { children: chapter }), items.map(({ record, question }) => /* @__PURE__ */ jsxs("article", {
				className: "wrong-item",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "wrong-item-head",
					children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("p", {
						className: "wrong-meta",
						children: [
							"错 ",
							record.wrongCount,
							" 次 · 最近 ",
							formatDate(record.lastWrongAt)
						]
					}), /* @__PURE__ */ jsx("h3", { children: question?.stem ?? `题目 ${record.id} 已不在当前题库中` })] }), /* @__PURE__ */ jsx("button", {
						className: "wrong-remove",
						type: "button",
						onClick: () => remove(record.id),
						children: "移除"
					})]
				}), question && /* @__PURE__ */ jsxs("details", {
					className: "wrong-details",
					children: [/* @__PURE__ */ jsx("summary", { children: "查看答案与解析" }), /* @__PURE__ */ jsxs("div", {
						className: "wrong-answer",
						children: [
							/* @__PURE__ */ jsxs("p", { children: [/* @__PURE__ */ jsx("strong", { children: "正确答案：" }), question.type === "short_answer" ? question.answer.join("；") : question.answer.map((key) => answerText(question, key)).join("；")] }),
							/* @__PURE__ */ jsxs("p", { children: [/* @__PURE__ */ jsx("strong", { children: "解析：" }), question.explanation] }),
							question.memoryAid && /* @__PURE__ */ jsxs("details", {
								className: "wrong-memory-aid",
								children: [
									/* @__PURE__ */ jsx("summary", { children: "这题怎么记" }),
									/* @__PURE__ */ jsx("p", { children: question.memoryAid }),
									/* @__PURE__ */ jsx("a", {
										className: "wrong-memory-link",
										href: `/learn/${question.chapterKey}/`,
										children: "回本章看知识点"
									})
								]
							}),
							/* @__PURE__ */ jsx("ul", { children: question.sources.map((source, index) => /* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx(SourceBadge, { type: source.type }), /* @__PURE__ */ jsxs("span", { children: [
								source.title,
								source.page ? source.page === "爱课测验" ? " · 爱课测验" : ` · 第 ${source.page} 页` : "",
								source.chapter ? ` · ${source.chapter}` : ""
							] })] }, `${source.type}-${source.title}-${index}`)) })
						]
					})]
				})]
			}, record.id))]
		}, chapter))]
	});
}
//#endregion
//#region src/pages/wrong/index.astro
var wrong_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => $$url
});
var $$Index = createComponent(($$result, $$props, $$slots) => {
	const questions = getAllQuestions();
	return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "错题本 · 儿童少年卫生学" }, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<section class="wrong-page"><header class="wrong-heading"><p class="kicker">复习</p><h1>错题本</h1><p>答错的题会自动留在本地。先看错在哪里，再回纯刷题里只刷错题。</p>${renderComponent($$result, "ModeSwitch", $$ModeSwitch, {})}</header>${renderComponent($$result, "WrongBook", WrongBook, {
		"client:load": true,
		"questions": questions,
		"client:component-hydration": "load",
		"client:component-path": "C:/Users/15417/Documents/ChatGPT/课程网站/src/components/wrong/WrongBook.tsx",
		"client:component-export": "default"
	})}</section>` })}`;
}, "C:/Users/15417/Documents/ChatGPT/课程网站/src/pages/wrong/index.astro", void 0);
var $$file = "C:/Users/15417/Documents/ChatGPT/课程网站/src/pages/wrong/index.astro";
var $$url = "/wrong";
//#endregion
//#region \0virtual:astro:page:src/pages/wrong/index@_@astro
var page = () => wrong_exports;
//#endregion
export { page };
