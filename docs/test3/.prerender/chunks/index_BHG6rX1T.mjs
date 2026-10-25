import { i as __exportAll, r as createComponent, t as $$BaseLayout } from "./BaseLayout_CgphDgKw.mjs";
import { b as renderTemplate, f as renderComponent, x as maybeRenderHead } from "./jsx-runtime_NDG3pEuD.mjs";
import { t as getAllQuestions } from "./questions_BwonQCMK.mjs";
import { t as $$ModeSwitch } from "./ModeSwitch_mLnc5uQI.mjs";
import { t as buildPracticeQueue } from "./quiz_Dfp8Pm43.mjs";
import { a as readWrongIds, c as savePracticeSettings } from "./SourceBadge_BpFlzZcy.mjs";
import { t as QuizRunner } from "./QuizRunner_BWVfUfqz.mjs";
import { useEffect, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/components/quiz/PracticeSetup.tsx
var typeLabels = {
	single: "单选题",
	multiple: "多选题",
	true_false: "判断题",
	short_answer: "问答",
	english: "英文"
};
function PracticeSetup({ questions, onStart }) {
	const [selectedChapters, setSelectedChapters] = useState([]);
	const [selectedTypes, setSelectedTypes] = useState([]);
	const [wrongOnly, setWrongOnly] = useState(false);
	const [source, setSource] = useState("all");
	const [hydrated, setHydrated] = useState(false);
	useEffect(() => {
		setHydrated(true);
	}, []);
	const chapterOptions = Array.from(new Map(questions.map((question) => [question.chapterKey, question.chapter])));
	const wrongIds = readWrongIds();
	const filters = {
		chapters: selectedChapters,
		types: selectedTypes,
		wrongOnly,
		quizOnly: source === "quiz",
		pastExamOnly: source === "past"
	};
	const matchCount = buildPracticeQueue(questions, filters, wrongIds).length;
	function toggle(value, values, setValues) {
		setValues(values.includes(value) ? values.filter((item) => item !== value) : [...values, value]);
	}
	return /* @__PURE__ */ jsxs("form", {
		className: "practice-setup",
		"data-hydrated": hydrated ? "true" : "false",
		onSubmit: (event) => {
			event.preventDefault();
			onStart(filters);
		},
		children: [
			/* @__PURE__ */ jsxs("fieldset", {
				className: "practice-filter-group",
				children: [
					/* @__PURE__ */ jsx("legend", { children: "章节" }),
					/* @__PURE__ */ jsx("div", {
						className: "practice-check-grid",
						children: chapterOptions.map(([key, label]) => /* @__PURE__ */ jsxs("label", { children: [/* @__PURE__ */ jsx("input", {
							type: "checkbox",
							checked: selectedChapters.includes(key),
							onChange: () => toggle(key, selectedChapters, setSelectedChapters)
						}), /* @__PURE__ */ jsx("span", { children: label })] }, key))
					}),
					/* @__PURE__ */ jsx("p", {
						className: "practice-hint",
						children: "不选则包含全部章节。"
					})
				]
			}),
			/* @__PURE__ */ jsxs("fieldset", {
				className: "practice-filter-group",
				children: [/* @__PURE__ */ jsx("legend", { children: "题型" }), /* @__PURE__ */ jsx("div", {
					className: "practice-check-grid",
					children: Object.keys(typeLabels).map((type) => /* @__PURE__ */ jsxs("label", { children: [/* @__PURE__ */ jsx("input", {
						type: "checkbox",
						checked: selectedTypes.includes(type),
						onChange: () => toggle(type, selectedTypes, setSelectedTypes)
					}), /* @__PURE__ */ jsx("span", { children: typeLabels[type] })] }, type))
				})]
			}),
			/* @__PURE__ */ jsxs("fieldset", {
				className: "practice-order practice-source",
				children: [
					/* @__PURE__ */ jsx("legend", { children: "题目来源" }),
					/* @__PURE__ */ jsxs("label", { children: [/* @__PURE__ */ jsx("input", {
						type: "radio",
						name: "practice-source",
						value: "all",
						checked: source === "all",
						onChange: () => setSource("all")
					}), /* @__PURE__ */ jsx("span", { children: "全部题目" })] }),
					/* @__PURE__ */ jsxs("label", { children: [/* @__PURE__ */ jsx("input", {
						type: "radio",
						name: "practice-source",
						value: "quiz",
						checked: source === "quiz",
						onChange: () => setSource("quiz")
					}), /* @__PURE__ */ jsx("span", { children: "爱课测验原题" })] }),
					/* @__PURE__ */ jsxs("label", { children: [/* @__PURE__ */ jsx("input", {
						type: "radio",
						name: "practice-source",
						value: "past",
						checked: source === "past",
						onChange: () => setSource("past")
					}), /* @__PURE__ */ jsx("span", { children: "往年考过" })] })
				]
			}),
			/* @__PURE__ */ jsxs("label", {
				className: "practice-wrong-only",
				children: [/* @__PURE__ */ jsx("input", {
					type: "checkbox",
					checked: wrongOnly,
					disabled: wrongIds.length === 0,
					onChange: (event) => setWrongOnly(event.target.checked)
				}), /* @__PURE__ */ jsxs("span", { children: ["只刷错题", wrongIds.length === 0 ? "（还没有错题）" : `（${wrongIds.length} 道）`] })]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "practice-start-row",
				children: [/* @__PURE__ */ jsxs("p", {
					className: "practice-match",
					"aria-live": "polite",
					children: [
						"匹配到 ",
						matchCount,
						" 道题"
					]
				}), /* @__PURE__ */ jsx("button", {
					className: "quiz-submit",
					type: "submit",
					disabled: matchCount === 0,
					children: "开始答题"
				})]
			})
		]
	});
}
//#endregion
//#region src/components/quiz/PracticeApp.tsx
function PracticeApp({ questions }) {
	const [queue, setQueue] = useState(null);
	function start(filters) {
		savePracticeSettings(filters);
		setQueue(buildPracticeQueue(questions, filters, readWrongIds()));
	}
	if (!queue) return /* @__PURE__ */ jsx(PracticeSetup, {
		questions,
		onStart: start
	});
	if (queue.length === 0) return /* @__PURE__ */ jsxs("div", {
		className: "quiz-empty",
		children: [
			/* @__PURE__ */ jsx("strong", { children: "没有匹配的题目。" }),
			/* @__PURE__ */ jsx("span", { children: "换一个筛选条件，或重置后再试。" }),
			/* @__PURE__ */ jsx("button", {
				className: "quiz-secondary-link",
				type: "button",
				onClick: () => setQueue(null),
				children: "返回筛选"
			})
		]
	});
	return /* @__PURE__ */ jsxs("div", {
		className: "practice-session",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "practice-session-bar",
			children: [/* @__PURE__ */ jsx("span", { children: "纯刷题 · 本次练习" }), /* @__PURE__ */ jsx("button", {
				className: "practice-exit",
				type: "button",
				onClick: () => setQueue(null),
				children: "退出练习"
			})]
		}), /* @__PURE__ */ jsx(QuizRunner, {
			questions: queue,
			mode: "practice",
			onRestart: () => setQueue(null)
		}, queue.map((question) => question.id).join("|"))]
	});
}
//#endregion
//#region src/pages/practice/index.astro
var practice_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => $$url
});
var $$Index = createComponent(($$result, $$props, $$slots) => {
	const questions = getAllQuestions();
	return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "纯刷题 · 儿童少年卫生学" }, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<section class="practice-page"><header class="practice-heading"><p class="kicker">题库练习</p><h1>选章节，直接答题。</h1><p>可以按章节、题型和来源筛选，匹配到的题会全部列出。 提交后看解析，答错自动进错题本。</p>${renderComponent($$result, "ModeSwitch", $$ModeSwitch, {})}</header>${renderComponent($$result, "PracticeApp", PracticeApp, {
		"client:load": true,
		"questions": questions,
		"client:component-hydration": "load",
		"client:component-path": "C:/Users/15417/Documents/ChatGPT/课程网站/src/components/quiz/PracticeApp.tsx",
		"client:component-export": "default"
	})}</section>` })}`;
}, "C:/Users/15417/Documents/ChatGPT/课程网站/src/pages/practice/index.astro", void 0);
var $$file = "C:/Users/15417/Documents/ChatGPT/课程网站/src/pages/practice/index.astro";
var $$url = "/practice";
//#endregion
//#region \0virtual:astro:page:src/pages/practice/index@_@astro
var page = () => practice_exports;
//#endregion
export { page };
