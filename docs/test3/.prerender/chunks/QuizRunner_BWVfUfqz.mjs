import { n as gradeAnswer, r as summarizeSession } from "./quiz_Dfp8Pm43.mjs";
import { o as recordWrongAnswers, t as SourceBadge } from "./SourceBadge_BpFlzZcy.mjs";
import { useEffect, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/components/quiz/QuizProgress.tsx
function QuizProgress({ current, total, answered }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "quiz-progress",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "quiz-progress-copy",
			children: [/* @__PURE__ */ jsxs("span", { children: [
				"第 ",
				current + 1,
				" / ",
				total,
				" 题"
			] }), /* @__PURE__ */ jsxs("span", { children: [answered, " 已作答"] })]
		}), /* @__PURE__ */ jsxs("progress", {
			value: answered,
			max: total,
			"aria-label": "答题进度",
			children: [
				answered,
				" / ",
				total
			]
		})]
	});
}
//#endregion
//#region src/components/quiz/QuizResult.tsx
function QuizResult({ summary, mode, nextHref, onRestart, totalQuestions }) {
	const accuracy = Math.round(summary.accuracy * 100);
	const unanswered = Math.max(0, (totalQuestions ?? summary.total) - summary.total);
	return /* @__PURE__ */ jsxs("section", {
		className: "quiz-finish",
		"aria-labelledby": "quiz-finish-title",
		children: [
			/* @__PURE__ */ jsx("p", {
				className: "quiz-eyebrow",
				children: mode === "chapter" ? "本章完成" : "本次练习完成"
			}),
			/* @__PURE__ */ jsxs("h3", {
				id: "quiz-finish-title",
				children: [
					summary.correct,
					" / ",
					summary.total,
					" 题正确"
				]
			}),
			/* @__PURE__ */ jsxs("p", {
				className: "quiz-accuracy",
				children: [
					"正确率 ",
					accuracy,
					"%"
				]
			}),
			/* @__PURE__ */ jsx("p", {
				className: "quiz-finish-note",
				children: unanswered > 0 ? `已答 ${summary.total} / ${totalQuestions} 题，还有 ${unanswered} 道未作答。` : summary.wrongIds.length > 0 ? `还有 ${summary.wrongIds.length} 道题需要复习，已加入错题本。` : mode === "chapter" ? "这一轮全部答对。可以进入下一章，或者先去错题本翻翻以前错的题。" : "这一轮全部答对。可以回筛选换个范围再练，或者先停在这里。"
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "quiz-finish-actions",
				children: [
					nextHref && /* @__PURE__ */ jsx("a", {
						className: "quiz-next",
						href: nextHref,
						children: "进入下一章"
					}),
					mode === "practice" && (onRestart ? /* @__PURE__ */ jsx("button", {
						className: "quiz-next",
						type: "button",
						onClick: onRestart,
						children: "返回筛选"
					}) : /* @__PURE__ */ jsx("a", {
						className: "quiz-next",
						href: "/practice/",
						children: "返回筛选"
					})),
					/* @__PURE__ */ jsx("a", {
						className: "quiz-secondary-link",
						href: "/wrong/",
						children: "去错题本"
					})
				]
			})
		]
	});
}
//#endregion
//#region src/components/quiz/QuestionCard.tsx
var trueFalseOptions = [{
	key: "true",
	text: "对"
}, {
	key: "false",
	text: "错"
}];
function optionText(question, key) {
	if (question.type === "true_false") return key === "true" ? "对" : "错";
	const option = question.options?.find((item) => item.key === key);
	return option ? `${option.key}. ${option.text}` : key;
}
var typeLabels = {
	single: "单选题",
	multiple: "多选题",
	true_false: "判断题",
	short_answer: "问答题",
	english: "英文题"
};
function QuestionCard({ question, index, total, isLast, hasPrev, initialResult = null, onAnswered, onNext, onPrev }) {
	const [selected, setSelected] = useState(initialResult?.selected ?? []);
	const [result, setResult] = useState(initialResult);
	const options = question.type === "true_false" ? trueFalseOptions : question.options ?? [];
	const isMultiple = question.type === "multiple";
	const isTextAnswer = question.type === "short_answer" || question.type === "english";
	const canSubmit = isTextAnswer ? (selected[0] ?? "").trim().length > 0 : selected.length > 0;
	function toggleOption(key) {
		if (isMultiple) {
			setSelected((current) => current.includes(key) ? current.filter((item) => item !== key) : [...current, key]);
			return;
		}
		setSelected([key]);
	}
	function submit() {
		if (!canSubmit || result) return;
		const nextResult = gradeAnswer(question, selected);
		setResult(nextResult);
		onAnswered(nextResult);
	}
	return /* @__PURE__ */ jsxs("article", {
		className: "quiz-card",
		"aria-labelledby": `question-${question.id}`,
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "quiz-card-meta",
				children: [/* @__PURE__ */ jsx("span", { children: question.section ?? question.chapter }), /* @__PURE__ */ jsx("span", { children: typeLabels[question.type] })]
			}),
			/* @__PURE__ */ jsx("h3", {
				id: `question-${question.id}`,
				className: "quiz-stem",
				children: question.stem
			}),
			/* @__PURE__ */ jsxs("form", {
				onSubmit: (event) => {
					event.preventDefault();
					submit();
				},
				children: [isTextAnswer ? /* @__PURE__ */ jsxs("label", {
					className: "quiz-short-answer",
					children: [/* @__PURE__ */ jsx("span", { children: "先写下你的答案" }), /* @__PURE__ */ jsx("textarea", {
						value: selected[0] ?? "",
						onChange: (event) => setSelected([event.target.value]),
						rows: 5,
						placeholder: "用自己的话回答，再对照参考答案。",
						disabled: Boolean(result)
					})]
				}) : /* @__PURE__ */ jsxs("fieldset", {
					className: "quiz-options",
					children: [/* @__PURE__ */ jsx("legend", {
						className: "sr-only",
						children: isMultiple ? "选择所有正确选项" : "选择一个选项"
					}), options.map((option) => {
						const checked = selected.includes(option.key);
						const inputType = isMultiple ? "checkbox" : "radio";
						return /* @__PURE__ */ jsxs("label", {
							className: "quiz-option",
							"data-checked": checked,
							"data-correct": result && question.answer.includes(option.key) ? "true" : void 0,
							"data-wrong": result && checked && !question.answer.includes(option.key) ? "true" : void 0,
							children: [
								/* @__PURE__ */ jsx("input", {
									type: inputType,
									name: `question-${question.id}`,
									value: option.key,
									checked,
									onChange: () => toggleOption(option.key),
									disabled: Boolean(result)
								}),
								question.type !== "true_false" && /* @__PURE__ */ jsx("span", {
									className: "quiz-option-key",
									children: option.key
								}),
								/* @__PURE__ */ jsx("span", { children: option.text }),
								result && question.answer.includes(option.key) && /* @__PURE__ */ jsx("span", {
									className: "quiz-option-tag",
									children: "正确答案"
								}),
								result && checked && !question.answer.includes(option.key) && /* @__PURE__ */ jsx("span", {
									className: "quiz-option-tag is-wrong",
									children: "你的选择"
								})
							]
						}, option.key);
					})]
				}), !result && /* @__PURE__ */ jsx("button", {
					className: "quiz-submit",
					type: "submit",
					disabled: !canSubmit,
					children: "提交答案"
				})]
			}),
			result && /* @__PURE__ */ jsxs("div", {
				className: `quiz-answer ${result.correct ? "is-correct" : "is-wrong"}`,
				"aria-live": "polite",
				children: [
					/* @__PURE__ */ jsx("p", {
						className: "quiz-verdict",
						children: result.correct ? "回答正确" : "这道题需要再看一遍"
					}),
					question.type === "multiple" && result.missing.length > 0 && /* @__PURE__ */ jsxs("p", {
						className: "quiz-gap",
						children: ["漏选：", result.missing.map((key) => optionText(question, key)).join("；")]
					}),
					question.type === "multiple" && result.extra.length > 0 && /* @__PURE__ */ jsxs("p", {
						className: "quiz-gap",
						children: ["多选：", result.extra.map((key) => optionText(question, key)).join("；")]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "quiz-reference",
						children: [/* @__PURE__ */ jsx("span", { children: isTextAnswer ? "参考答案" : "正确答案" }), /* @__PURE__ */ jsx("strong", { children: isTextAnswer ? question.answer.join("；") : question.answer.map((key) => optionText(question, key)).join("；") })]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "quiz-explanation",
						children: [/* @__PURE__ */ jsx("span", { children: "解析" }), /* @__PURE__ */ jsx("p", { children: question.explanation })]
					}),
					question.memoryAid && /* @__PURE__ */ jsxs("details", {
						className: "quiz-memory-aid",
						children: [
							/* @__PURE__ */ jsx("summary", { children: "这题怎么记" }),
							/* @__PURE__ */ jsx("p", { children: question.memoryAid }),
							/* @__PURE__ */ jsx("a", {
								className: "quiz-memory-link",
								href: `/learn/${question.chapterKey}/`,
								children: "回本章看知识点"
							})
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "quiz-sources",
						children: [/* @__PURE__ */ jsx("span", { children: "来源" }), /* @__PURE__ */ jsx("ul", { children: question.sources.map((source, sourceIndex) => /* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx(SourceBadge, { type: source.type }), /* @__PURE__ */ jsxs("span", { children: [
							source.title,
							source.page ? source.page === "爱课测验" ? " · 爱课测验" : ` · 第 ${source.page} 页` : "",
							source.chapter ? ` · ${source.chapter}` : ""
						] })] }, `${source.type}-${source.title}-${sourceIndex}`)) })]
					}),
					question.discrepancy && (question.discrepancy.status === "conflict" || question.discrepancy.status === "flawed" || question.discrepancy.status === "unverified") && /* @__PURE__ */ jsxs("aside", {
						className: "quiz-discrepancy",
						children: [/* @__PURE__ */ jsx("strong", { children: question.discrepancy.status === "conflict" ? "资料差异" : question.discrepancy.status === "flawed" ? "题库疑点" : "待核实" }), /* @__PURE__ */ jsx("p", { children: question.discrepancy.note })]
					})
				]
			}),
			!result && /* @__PURE__ */ jsx("p", {
				className: "quiz-nav-hint",
				children: "先点“提交答案”查看解析；“下一题”可以直接跳过本题。"
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "quiz-nav",
				children: [/* @__PURE__ */ jsx("button", {
					className: "quiz-nav-button",
					type: "button",
					disabled: !hasPrev,
					onClick: onPrev,
					children: "上一题"
				}), /* @__PURE__ */ jsx("button", {
					className: "quiz-next",
					type: "button",
					onClick: onNext,
					children: isLast ? "查看结果" : "下一题"
				})]
			}),
			/* @__PURE__ */ jsxs("span", {
				className: "quiz-count",
				children: [
					index + 1,
					" / ",
					total
				]
			})
		]
	});
}
//#endregion
//#region src/components/quiz/QuizRunner.tsx
function QuizRunner({ questions, mode, nextHref, onRestart }) {
	const [index, setIndex] = useState(0);
	const [answers, setAnswers] = useState([]);
	const [finished, setFinished] = useState(false);
	const [hydrated, setHydrated] = useState(false);
	useEffect(() => {
		setHydrated(true);
	}, []);
	if (questions.length === 0) return /* @__PURE__ */ jsxs("div", {
		className: "quiz-empty",
		children: [/* @__PURE__ */ jsx("strong", { children: "这一章还没有题目。" }), /* @__PURE__ */ jsx("span", { children: "题库导入后会显示在这里。" })]
	});
	const current = questions[index];
	const currentAnswer = answers.find((answer) => answer.questionId === current.id)?.result ?? null;
	const summary = summarizeSession(answers);
	function recordAnswer(result) {
		if (!result.correct) recordWrongAnswers([current.id]);
		setAnswers((currentAnswers) => currentAnswers.some((answer) => answer.questionId === current.id) ? currentAnswers : [...currentAnswers, {
			questionId: current.id,
			result
		}]);
	}
	function next() {
		if (index >= questions.length - 1) {
			setFinished(true);
			return;
		}
		setIndex((currentIndex) => currentIndex + 1);
	}
	function prev() {
		setIndex((currentIndex) => Math.max(0, currentIndex - 1));
	}
	if (finished) return /* @__PURE__ */ jsx("div", {
		className: "quiz-shell",
		"data-hydrated": hydrated ? "true" : "false",
		children: /* @__PURE__ */ jsx(QuizResult, {
			summary,
			mode,
			nextHref,
			onRestart,
			totalQuestions: questions.length
		})
	});
	return /* @__PURE__ */ jsxs("div", {
		className: "quiz-shell",
		"data-hydrated": hydrated ? "true" : "false",
		children: [/* @__PURE__ */ jsx(QuizProgress, {
			current: index,
			total: questions.length,
			answered: answers.length
		}), /* @__PURE__ */ jsx(QuestionCard, {
			question: current,
			index,
			total: questions.length,
			isLast: index === questions.length - 1,
			hasPrev: index > 0,
			initialResult: currentAnswer,
			onAnswered: recordAnswer,
			onNext: next,
			onPrev: prev
		}, current.id)]
	});
}
//#endregion
export { QuizRunner as t };
