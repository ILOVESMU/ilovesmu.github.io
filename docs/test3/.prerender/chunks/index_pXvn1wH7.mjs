import { i as __exportAll, r as createComponent, t as $$BaseLayout } from "./BaseLayout_CgphDgKw.mjs";
import { b as renderTemplate, f as renderComponent, x as maybeRenderHead } from "./jsx-runtime_NDG3pEuD.mjs";
import { t as getAllQuestions } from "./questions_BwonQCMK.mjs";
/* empty css                */
import { t as $$ModeSwitch } from "./ModeSwitch_mLnc5uQI.mjs";
import { n as gradeAnswer } from "./quiz_Dfp8Pm43.mjs";
import { i as readJson, l as writeJson, n as STORAGE_KEYS, t as SourceBadge } from "./SourceBadge_BpFlzZcy.mjs";
import { useEffect, useRef, useState } from "react";
import { z } from "zod";
import { Fragment as Fragment$1, jsx, jsxs } from "react/jsx-runtime";
//#region src/lib/story-engine.ts
var START_VALUE = 50;
var CORRECT_TRUST = 5;
var CORRECT_HEALTH = 3;
var WRONG_TRUST = -8;
var WRONG_HEALTH = -5;
function clampPercent(value) {
	return Math.max(0, Math.min(100, value));
}
function createInitialStoryState() {
	return {
		actIndex: 0,
		sceneIndex: 0,
		trust: START_VALUE,
		health: START_VALUE,
		insight: 0,
		answered: {}
	};
}
function getCurrentStoryAct(acts, state) {
	return acts[state.actIndex] ?? null;
}
function getCurrentStoryScene(act, state) {
	return act.scenes[state.sceneIndex] ?? null;
}
function isStoryFinished(acts, state) {
	return state.actIndex >= acts.length;
}
function resolveStoryChoice(act, scene, question, state, selected) {
	if (!scene.choice) throw new Error(`Act ${act.id}: scene ${scene.id} has no choice`);
	if (scene.choice.questionId !== question.id) throw new Error(`Act ${act.id}: scene ${scene.id} expects ${scene.choice.questionId}, received ${question.id}`);
	const result = gradeAnswer(question, selected);
	if (state.answered[scene.id]) return {
		feedback: {
			questionId: question.id,
			correct: result.correct,
			selected: result.selected,
			missing: result.missing,
			extra: result.extra,
			outcome: result.correct ? scene.choice.correctOutcome : scene.choice.wrongOutcome
		},
		previewState: state,
		committedState: null
	};
	if (!result.correct) return {
		feedback: {
			questionId: question.id,
			correct: false,
			selected: result.selected,
			missing: result.missing,
			extra: result.extra,
			outcome: scene.choice.wrongOutcome
		},
		previewState: {
			...state,
			trust: clampPercent(state.trust + WRONG_TRUST),
			health: clampPercent(state.health + WRONG_HEALTH)
		},
		committedState: null
	};
	const committedState = {
		...state,
		sceneIndex: state.sceneIndex + 1,
		trust: clampPercent(state.trust + CORRECT_TRUST),
		health: clampPercent(state.health + CORRECT_HEALTH),
		insight: state.insight + 1,
		answered: {
			...state.answered,
			[scene.id]: "correct"
		}
	};
	return {
		feedback: {
			questionId: question.id,
			correct: true,
			selected: result.selected,
			missing: result.missing,
			extra: result.extra,
			outcome: scene.choice.correctOutcome
		},
		previewState: committedState,
		committedState
	};
}
function advanceStory(acts, state) {
	const act = getCurrentStoryAct(acts, state);
	if (!act || state.sceneIndex < act.scenes.length) return state;
	return {
		...state,
		actIndex: state.actIndex + 1,
		sceneIndex: 0
	};
}
function isInteger(value, minimum = 0) {
	return typeof value === "number" && Number.isInteger(value) && value >= minimum;
}
function normalizeStoryState(raw, acts) {
	if (!raw || typeof raw !== "object" || Array.isArray(raw)) return createInitialStoryState();
	const value = raw;
	if (!isInteger(value.actIndex) || !isInteger(value.sceneIndex) || !isInteger(value.trust) || !isInteger(value.health) || !isInteger(value.insight) || value.trust > 100 || value.health > 100 || !value.answered || typeof value.answered !== "object" || Array.isArray(value.answered)) return createInitialStoryState();
	if (value.actIndex > acts.length) return createInitialStoryState();
	if (value.actIndex === acts.length) {
		if (value.sceneIndex !== 0) return createInitialStoryState();
	} else {
		const act = acts[value.actIndex];
		if (!act || value.sceneIndex > act.scenes.length) return createInitialStoryState();
	}
	const answered = {};
	for (const [sceneId, answer] of Object.entries(value.answered)) if (answer === "correct") answered[sceneId] = "correct";
	return {
		actIndex: value.actIndex,
		sceneIndex: value.sceneIndex,
		trust: value.trust,
		health: value.health,
		insight: value.insight,
		answered
	};
}
function loadStoryState(acts) {
	return normalizeStoryState(readJson(STORAGE_KEYS.story, null), acts);
}
function saveStoryState(state) {
	return writeJson(STORAGE_KEYS.story, state);
}
function clearStoryState() {
	if (typeof window !== "undefined") try {
		window.localStorage.removeItem(STORAGE_KEYS.story);
	} catch {}
	return createInitialStoryState();
}
//#endregion
//#region src/components/story/StoryChoices.tsx
var trueFalseOptions = [{
	key: "true",
	text: "对"
}, {
	key: "false",
	text: "错"
}];
function optionText(question, key) {
	if (question.type === "true_false") return key === "true" ? "对" : "错";
	return question.options?.find((option) => option.key === key)?.text ?? key;
}
function StoryChoices({ question, feedback, onSubmit, onContinue, onRollback }) {
	const options = question.type === "true_false" ? trueFalseOptions : question.options ?? [];
	const isMultiple = question.type === "multiple";
	const [selected, setSelected] = useState([]);
	const [submitting, setSubmitting] = useState(false);
	const hadFeedback = useRef(false);
	useEffect(() => {
		if (hadFeedback.current && !feedback) {
			setSelected([]);
			setSubmitting(false);
		}
		hadFeedback.current = Boolean(feedback);
	}, [feedback]);
	useEffect(() => {
		function onKeyDown(event) {
			if (feedback) return;
			const index = Number(event.key) - 1;
			if (index >= 0 && index < options.length) {
				event.preventDefault();
				toggle(options[index].key);
				return;
			}
			if (event.key === "Enter" && selected.length > 0 && !submitting) {
				event.preventDefault();
				submit();
			}
		}
		window.addEventListener("keydown", onKeyDown);
		return () => window.removeEventListener("keydown", onKeyDown);
	}, [
		feedback,
		options,
		selected,
		submitting
	]);
	function toggle(key) {
		if (feedback) return;
		setSelected((current) => isMultiple ? current.includes(key) ? current.filter((item) => item !== key) : [...current, key] : [key]);
	}
	function submit() {
		if (selected.length === 0 || submitting || feedback) return;
		setSubmitting(true);
		onSubmit(selected);
	}
	const correctText = question.answer.map((key) => `${key}. ${optionText(question, key)}`).join("；");
	return /* @__PURE__ */ jsxs("div", {
		className: "story-choice-panel",
		children: [
			/* @__PURE__ */ jsx("p", {
				className: "story-choice-kicker",
				children: "系统判断"
			}),
			/* @__PURE__ */ jsx("h3", { children: question.stem }),
			/* @__PURE__ */ jsxs("fieldset", {
				className: "story-options",
				children: [/* @__PURE__ */ jsx("legend", {
					className: "sr-only",
					children: isMultiple ? "选择所有正确选项" : "选择一个选项"
				}), options.map((option, index) => {
					const checked = selected.includes(option.key);
					return /* @__PURE__ */ jsxs("label", {
						className: "story-option",
						"data-checked": checked,
						"data-correct": feedback && question.answer.includes(option.key) ? "true" : void 0,
						"data-wrong": feedback && checked && !question.answer.includes(option.key) ? "true" : void 0,
						children: [
							/* @__PURE__ */ jsx("input", {
								type: isMultiple ? "checkbox" : "radio",
								name: question.id,
								value: option.key,
								checked,
								onChange: () => toggle(option.key),
								disabled: Boolean(feedback)
							}),
							/* @__PURE__ */ jsx("span", {
								className: "story-option-key",
								children: index + 1
							}),
							/* @__PURE__ */ jsx("span", { children: option.text })
						]
					}, option.key);
				})]
			}),
			!feedback && /* @__PURE__ */ jsx("button", {
				className: "story-submit",
				type: "button",
				disabled: selected.length === 0 || submitting,
				onClick: submit,
				children: "提交判断"
			}),
			feedback && /* @__PURE__ */ jsxs("div", {
				className: `story-outcome ${feedback.correct ? "is-correct" : "is-wrong"}`,
				"aria-live": "polite",
				children: [
					/* @__PURE__ */ jsx("strong", { children: feedback.correct ? "破局" : "失手" }),
					/* @__PURE__ */ jsx("p", { children: feedback.outcome }),
					/* @__PURE__ */ jsxs("div", {
						className: "story-answer",
						children: [
							/* @__PURE__ */ jsx("span", { children: "正确判断" }),
							/* @__PURE__ */ jsx("b", { children: correctText }),
							/* @__PURE__ */ jsx("p", { children: question.explanation })
						]
					}),
					feedback.missing.length > 0 && /* @__PURE__ */ jsxs("p", {
						className: "story-gap",
						children: ["漏选：", feedback.missing.map((key) => optionText(question, key)).join("；")]
					}),
					feedback.extra.length > 0 && /* @__PURE__ */ jsxs("p", {
						className: "story-gap",
						children: ["多选：", feedback.extra.map((key) => optionText(question, key)).join("；")]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "story-sources",
						children: [/* @__PURE__ */ jsx("span", { children: "依据" }), question.sources.map((source, index) => /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(SourceBadge, { type: source.type }), /* @__PURE__ */ jsxs("span", { children: [source.title, source.page ? ` · ${source.page}` : ""] })] }, `${source.type}-${index}`))]
					}),
					/* @__PURE__ */ jsx("button", {
						className: feedback.correct ? "story-continue" : "story-rollback",
						type: "button",
						onClick: feedback.correct ? onContinue : onRollback,
						children: feedback.correct ? "继续" : "读档重来"
					})
				]
			})
		]
	});
}
//#endregion
//#region src/components/story/StoryClear.tsx
function StoryClear({ onClear }) {
	const [confirming, setConfirming] = useState(false);
	function clear() {
		onClear();
		setConfirming(false);
	}
	if (!confirming) return /* @__PURE__ */ jsx("button", {
		className: "story-clear",
		type: "button",
		onClick: () => setConfirming(true),
		children: "清空记录"
	});
	return /* @__PURE__ */ jsxs("div", {
		className: "story-clear-confirm",
		role: "group",
		"aria-label": "确认清空记录",
		children: [
			/* @__PURE__ */ jsx("span", { children: "进度和数值都会清空" }),
			/* @__PURE__ */ jsx("button", {
				className: "story-clear-yes",
				type: "button",
				onClick: clear,
				children: "确定清空"
			}),
			/* @__PURE__ */ jsx("button", {
				className: "story-clear-no",
				type: "button",
				onClick: () => setConfirming(false),
				children: "取消"
			})
		]
	});
}
//#endregion
//#region src/components/story/StoryRecap.tsx
function StoryRecap({ act, isLast, onAdvance }) {
	return /* @__PURE__ */ jsxs("section", {
		className: "story-recap",
		children: [
			/* @__PURE__ */ jsx("p", {
				className: "story-choice-kicker",
				children: "本幕收束"
			}),
			/* @__PURE__ */ jsxs("h2", { children: [act.title, " · 这幕留下了什么"] }),
			/* @__PURE__ */ jsx("div", {
				className: "story-anchor-grid",
				children: act.anchors.map((anchor) => /* @__PURE__ */ jsxs("article", { children: [/* @__PURE__ */ jsx("h3", { children: anchor.title }), /* @__PURE__ */ jsx("p", { children: anchor.text })] }, anchor.title))
			}),
			/* @__PURE__ */ jsx("p", {
				className: "story-next-hook",
				children: act.nextHook
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "story-recap-actions",
				children: [
					/* @__PURE__ */ jsx("a", {
						href: `/learn/${act.chapterKey}/`,
						children: "回本章"
					}),
					/* @__PURE__ */ jsx("a", {
						href: "/practice/",
						children: "去题库"
					}),
					/* @__PURE__ */ jsx("button", {
						className: "story-next",
						type: "button",
						onClick: onAdvance,
						children: isLast ? "看结局" : "进入下一幕"
					})
				]
			})
		]
	});
}
//#endregion
//#region src/components/story/StoryScene.tsx
function StoryScene({ act, scene }) {
	return /* @__PURE__ */ jsxs("section", {
		className: "story-scene",
		"aria-labelledby": `${scene.id}-title`,
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "story-scene-meta",
				children: [/* @__PURE__ */ jsx("span", { children: act.title }), /* @__PURE__ */ jsx("span", { children: scene.title ?? "现场" })]
			}),
			scene.title && /* @__PURE__ */ jsx("h2", {
				id: `${scene.id}-title`,
				children: scene.title
			}),
			/* @__PURE__ */ jsx("div", {
				className: "story-copy",
				children: scene.paragraphs.map((paragraph, index) => /* @__PURE__ */ jsx("p", { children: paragraph }, `${scene.id}-${index}`))
			})
		]
	});
}
//#endregion
//#region src/components/story/StoryStatus.tsx
function StoryStatus({ act, state, totalActs, canGoPrev, canGoNext, onPrev, onNext, onClear }) {
	const chapter = act.order === 0 ? "绪论" : `第 ${String(act.order).padStart(2, "0")} 章`;
	return /* @__PURE__ */ jsxs("aside", {
		className: "story-status",
		"aria-label": "本轮状态",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "story-status-head",
				children: [/* @__PURE__ */ jsx("span", { children: chapter }), /* @__PURE__ */ jsxs("strong", { children: [
					state.actIndex + 1,
					" / ",
					totalActs
				] })]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "story-stat",
				"data-stat": "trust",
				children: [
					/* @__PURE__ */ jsx("span", { children: "家长信任" }),
					/* @__PURE__ */ jsx("strong", { children: state.trust }),
					/* @__PURE__ */ jsx("progress", {
						value: state.trust,
						max: 100,
						"aria-label": "家长信任"
					})
				]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "story-stat",
				"data-stat": "health",
				children: [
					/* @__PURE__ */ jsx("span", { children: "校园健康" }),
					/* @__PURE__ */ jsx("strong", { children: state.health }),
					/* @__PURE__ */ jsx("progress", {
						value: state.health,
						max: 100,
						"aria-label": "校园健康"
					})
				]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "story-stat story-stat-insight",
				"data-stat": "insight",
				children: [/* @__PURE__ */ jsx("span", { children: "洞察" }), /* @__PURE__ */ jsx("strong", { children: state.insight })]
			}),
			/* @__PURE__ */ jsx("p", {
				className: "story-status-note",
				children: "先把孩子当孩子，再谈方案。"
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "story-act-nav",
				"aria-label": "跳转章节",
				children: [/* @__PURE__ */ jsx("button", {
					type: "button",
					disabled: !canGoPrev,
					onClick: onPrev,
					children: "上一幕"
				}), /* @__PURE__ */ jsx("button", {
					type: "button",
					disabled: !canGoNext,
					onClick: onNext,
					children: "下一幕"
				})]
			}),
			/* @__PURE__ */ jsx(StoryClear, { onClear })
		]
	});
}
//#endregion
//#region src/components/story/StoryGame.tsx
function StoryGame({ acts, questions }) {
	const [storyState, setStoryState] = useState(createInitialStoryState);
	const [displayState, setDisplayState] = useState(createInitialStoryState);
	const [feedback, setFeedback] = useState(null);
	const [previewState, setPreviewState] = useState(null);
	const [hydrated, setHydrated] = useState(false);
	useEffect(() => {
		const loaded = loadStoryState(acts);
		setStoryState(loaded);
		setDisplayState(loaded);
		setHydrated(true);
	}, [acts]);
	const currentAct = getCurrentStoryAct(acts, displayState);
	const currentScene = currentAct ? getCurrentStoryScene(currentAct, displayState) : null;
	const currentQuestion = currentScene?.choice ? questions.find((question) => question.id === currentScene.choice?.questionId) : null;
	const shownState = previewState ?? displayState;
	function submitChoice(selected) {
		if (!currentAct || !currentScene || !currentQuestion || feedback) return;
		const resolution = resolveStoryChoice(currentAct, currentScene, currentQuestion, storyState, selected);
		setFeedback(resolution.feedback);
		setPreviewState(resolution.previewState);
		if (resolution.committedState) {
			setStoryState(resolution.committedState);
			saveStoryState(resolution.committedState);
		}
	}
	function continueStory() {
		setDisplayState(storyState);
		setFeedback(null);
		setPreviewState(null);
	}
	function rollback() {
		setFeedback(null);
		setPreviewState(null);
	}
	function advanceFromRecap() {
		const next = advanceStory(acts, storyState);
		setStoryState(next);
		setDisplayState(next);
		saveStoryState(next);
	}
	function restart() {
		const initial = clearStoryState();
		setStoryState(initial);
		setDisplayState(initial);
		setFeedback(null);
		setPreviewState(null);
	}
	function jumpToAct(target) {
		if (target < 0 || target >= acts.length) return;
		const targetAct = acts[target];
		const nextSceneIndex = targetAct.scenes.findIndex((scene) => !storyState.answered[scene.id]);
		const next = {
			...storyState,
			actIndex: target,
			sceneIndex: nextSceneIndex === -1 ? targetAct.scenes.length : nextSceneIndex
		};
		setStoryState(next);
		setDisplayState(next);
		setFeedback(null);
		setPreviewState(null);
		saveStoryState(next);
	}
	function clearRecords() {
		const initial = clearStoryState();
		setStoryState(initial);
		setDisplayState(initial);
		setFeedback(null);
		setPreviewState(null);
	}
	useEffect(() => {
		if (!feedback) return;
		const currentFeedback = feedback;
		function onKeyDown(event) {
			if (event.key !== "Enter") return;
			event.preventDefault();
			if (currentFeedback.correct) continueStory();
			else rollback();
		}
		window.addEventListener("keydown", onKeyDown);
		return () => window.removeEventListener("keydown", onKeyDown);
	}, [feedback, storyState]);
	if (isStoryFinished(acts, storyState) && displayState.actIndex >= acts.length) return /* @__PURE__ */ jsxs("div", {
		className: "story-finish",
		"data-hydrated": hydrated ? "true" : "false",
		children: [
			/* @__PURE__ */ jsx("p", {
				className: "story-choice-kicker",
				children: "本轮结束"
			}),
			/* @__PURE__ */ jsx("h2", { children: "你留在了学校，错误方案被撤下" }),
			/* @__PURE__ */ jsx("p", { children: "学期末复核会上，成长云拿不出原始证据。学校撤下通用模板，改用儿童少年专用方案。 上一世压在你档案里的那份投诉，也终于撤回了。" }),
			/* @__PURE__ */ jsxs("p", { children: [
				"家长信任 ",
				storyState.trust,
				"，校园健康 ",
				storyState.health,
				"，积累洞察",
				" ",
				storyState.insight,
				"。下一轮可以换一种选择，再走一遍。"
			] }),
			/* @__PURE__ */ jsx("button", {
				className: "story-next",
				type: "button",
				onClick: restart,
				children: "重新开始"
			}),
			/* @__PURE__ */ jsx(StoryClear, { onClear: clearRecords })
		]
	});
	if (!currentAct) return null;
	const isRecap = !currentScene;
	const isLast = currentAct.order === acts.length - 1;
	return /* @__PURE__ */ jsxs("div", {
		className: "story-shell",
		"data-hydrated": hydrated ? "true" : "false",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "story-main",
			children: [/* @__PURE__ */ jsxs("header", {
				className: "story-heading",
				children: [
					/* @__PURE__ */ jsx("p", {
						className: "story-choice-kicker",
						children: "文字游戏"
					}),
					/* @__PURE__ */ jsx("h2", {
						className: "story-act-title",
						children: currentAct.title
					}),
					/* @__PURE__ */ jsx("p", { children: currentAct.hook })
				]
			}), isRecap ? /* @__PURE__ */ jsx(StoryRecap, {
				act: currentAct,
				isLast,
				onAdvance: advanceFromRecap
			}) : /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx(StoryScene, {
				act: currentAct,
				scene: currentScene
			}), currentQuestion && /* @__PURE__ */ jsx(StoryChoices, {
				question: currentQuestion,
				feedback,
				onSubmit: submitChoice,
				onContinue: continueStory,
				onRollback: rollback
			}, currentScene.id)] })]
		}), /* @__PURE__ */ jsx(StoryStatus, {
			act: currentAct,
			state: shownState,
			totalActs: acts.length,
			canGoPrev: displayState.actIndex > 0,
			canGoNext: displayState.actIndex < acts.length - 1,
			onPrev: () => jumpToAct(displayState.actIndex - 1),
			onNext: () => jumpToAct(displayState.actIndex + 1),
			onClear: clearRecords
		})]
	});
}
//#endregion
//#region src/data/story/acts.json
var acts_default = /*#__PURE__*/ JSON.parse("[{\"id\":\"act-00\",\"order\":0,\"chapterKey\":\"ch00\",\"title\":\"第 0 幕｜绪论\",\"hook\":\"上一世他在一张验收单上签了字，十二月十八日校门口撞死一个孩子。睁眼回到九月一日七点四十，第二个抽屉里有本手记：十四个日期，最后一个用红笔圈了两圈。距十二月十八日还有 108 天。\",\"scenes\":[{\"id\":\"act-00-scene-01\",\"title\":\"服务范围\",\"paragraphs\":[\"入学体检名单上，一个 19 岁的复读生被划掉了。手记第一页只有一行字：名单按年龄算，不按学籍算。\"],\"choice\":{\"questionId\":\"ch00-001\",\"correctOutcome\":\"19 岁在 0～24 岁之内，照样建档。手记第一页没写错——他先得确认自己管得着这些人。\",\"wrongOutcome\":\"人漏了，题也答错了：研究对象是 0～24 岁，6～18 岁的中小学生只是重点人群。\"}},{\"id\":\"act-00-scene-02\",\"title\":\"干预层级\",\"paragraphs\":[\"门口要挂标语，模板给的是「早发现、早诊断、早干预——一级预防」。上一世这块牌子挂了整整一学期。\"],\"choice\":{\"questionId\":\"ch00-002\",\"correctOutcome\":\"三早是二级预防：病已可能发生，靠早查出阻断进展。一级防的是病因本身。\",\"wrongOutcome\":\"牌子挂上去，一学期没人改。他现在才知道：一级预防是疫苗、控烟、把课桌椅调对。\"}},{\"id\":\"act-00-scene-03\",\"title\":\"优先项\",\"paragraphs\":[\"健康促进经费只有一笔，四个选项：体检设备、绿化、告知书、单杠和课桌椅。上一世这笔钱买了设备。\"],\"choice\":{\"questionId\":\"ch00-003\",\"correctOutcome\":\"先修单杠和课桌椅。权重最高的是生活方式，它正好落在学校能改的地方。\",\"wrongOutcome\":\"告知书发十遍，单杠还是锈的。上一世那一笔钱，花在了没人用的设备上。\"}}],\"anchors\":[{\"title\":\"研究对象\",\"text\":\"0～24 岁儿童少年。重点人群是中小学生，向前延伸到婴幼儿，向后延伸到大学生。考「通常是」选 0～24。\"},{\"title\":\"三级预防\",\"text\":\"一级：防病因（疫苗、控烟、改环境、合理营养）。二级：早发现、早诊断、早干预。三级：防残疾、促康复。\"},{\"title\":\"健康决定因素\",\"text\":\"权重从高到低：生活方式、环境、遗传、卫生服务。生活方式占比最高，所以学校是主战场。\"},{\"title\":\"四大任务\",\"text\":\"生长发育监测、健康教育、改善学校环境、常见病防治，四条并行，不能只剩体检。\"}],\"nextHook\":\"手记上第二个日期是九月四日。距十二月十八日还有 105 天。\"},{\"id\":\"act-01\",\"order\":1,\"chapterKey\":\"ch01\",\"title\":\"第 1 幕｜生长发育\",\"hook\":\"家长拿着生长曲线来问，孩子是不是「晚长」。手记上第二个日期就是今天。距十二月十八日还有 105 天。\",\"scenes\":[{\"id\":\"act-01-scene-01\",\"title\":\"速度高峰\",\"paragraphs\":[\"家长问：孩子什么时候长得最快，是不是青春期？上一世他答的就是「青春期」。\"],\"choice\":{\"questionId\":\"ch01-001\",\"correctOutcome\":\"最快是胎儿期到 1 岁末，青春期是第二次突增。上一世他答的是后半句。\",\"wrongOutcome\":\"只记住青春期，就会把婴儿期的掉队当成「以后会补上」。上一世这个孩子就是这么被耽误的。\"}},{\"id\":\"act-01-scene-02\",\"title\":\"动作顺序\",\"paragraphs\":[\"发育筛查表上印着两行：先翻身再抬头；精细动作早于大动作。这张表是区里发的模板。\"],\"choice\":{\"questionId\":\"ch01-002\",\"correctOutcome\":\"三条一起改：头尾发展（先抬头后翻身）、近侧到远侧、大动作早于精细动作。\",\"wrongOutcome\":\"顺序错了，筛查会把正常孩子判成落后，也会把真落后的判成正常。\"}}],\"anchors\":[{\"title\":\"两个突增期\",\"text\":\"第一突增期：胎儿期～1 岁末，速度最快。第二突增期：青春期。评价时先看属于哪一段。\"},{\"title\":\"四条规律\",\"text\":\"头尾律（先头后四肢）、近侧律（先躯干后远端）、大动作早于精细动作、发育程序不可逆。\"},{\"title\":\"常用指标\",\"text\":\"身高、体重、坐高、头围、胸围、皮褶厚度。不同年龄看不同指标，婴儿期头围优先。\"},{\"title\":\"关键量\",\"text\":\"出生身长约 50cm，1 岁约 75cm，2 岁约 85cm。体重出生约 3kg，1 岁约 3 倍。\"}],\"nextHook\":\"重测拖到了九月中。手记第三个日期是九月九日。\"},{\"id\":\"act-02\",\"order\":2,\"chapterKey\":\"ch02\",\"title\":\"第 2 幕｜身体发育\",\"hook\":\"一个瘦长的孩子被记成「营养不良」，家长要求补。手记上第三个日期是今天。距十二月十八日还有 100 天。\",\"scenes\":[{\"id\":\"act-02-scene-01\",\"title\":\"体型分类\",\"paragraphs\":[\"一个瘦长、四肢长、反应快的孩子，在记录里被写成「营养不良」。上一世他批过这张单子。\"],\"choice\":{\"questionId\":\"ch02-002\",\"correctOutcome\":\"这是外胚层体型：瘦长，神经系统和感觉器官相对发达，属于正常体型差异。\",\"wrongOutcome\":\"把体型当营养不良，补出来的是脂肪。上一世他批过这张单子。\"}},{\"id\":\"act-02-scene-02\",\"title\":\"体重成分\",\"paragraphs\":[\"孩子体重低于同龄，家长要求「补上去」，问先补什么。\"],\"choice\":{\"questionId\":\"ch02-003\",\"correctOutcome\":\"先分体脂重和去脂体重。低的是哪一块，决定怎么补。\",\"wrongOutcome\":\"只盯总重量，会把去脂体重正常的瘦孩子喂成体脂超标。\"}},{\"id\":\"act-02-scene-03\",\"title\":\"突增起点\",\"paragraphs\":[\"讲「0～18 岁生长」，有人从出生第一年才开始讲。手记边角有一行小字：孕中期。\"],\"choice\":{\"questionId\":\"ch02-001\",\"correctOutcome\":\"第一生长突增期从孕中期开始，宫内已经长过最快的一段。起点在出生之前。\",\"wrongOutcome\":\"缺了孕中期，早产和低出生体重就无从解释。孙八那行小字划掉的正是这一条。\"}}],\"anchors\":[{\"title\":\"Sheldon 三型\",\"text\":\"内胚层：矮胖、脂肪多。中胚层：健壮、肌肉发达。外胚层：瘦长、神经与感觉器官发达。\"},{\"title\":\"二成分模型\",\"text\":\"体重 = 体脂重 + 去脂体重。胖瘦看体脂率或皮褶厚度，不只看体重数值。\"},{\"title\":\"突增与比例\",\"text\":\"第一突增孕中期开始到 1 岁末；头身比随年龄下降（出生约 1:4，成人约 1:7～8）；坐高/身高比逐年减小。\"},{\"title\":\"易混点\",\"text\":\"体型类型 ≠ 营养状况。外胚层不等于营养不良，内胚层也不等于肥胖。\"}],\"nextHook\":\"手记第四个日期是九月十六日。那天的事，他一点都想不起来，只有两个字：评语。\"},{\"id\":\"act-03\",\"order\":3,\"chapterKey\":\"ch03\",\"title\":\"第 3 幕｜心理行为发育\",\"hook\":\"手记上第四个日期是今天，后面没有名字，只写着两个字：评语。他得自己去找那天出了什么事。距十二月十八日还有 93 天。\",\"scenes\":[{\"id\":\"act-03-scene-01\",\"title\":\"认知阶段\",\"paragraphs\":[\"一年级评语写着「自私、不会换位思考」。写评语的老师，上一世没被追过责。\"],\"choice\":{\"questionId\":\"ch03-001\",\"correctOutcome\":\"6 岁在前运算阶段，形式运算要到 11～12 岁。评语写行为，不写品格。\",\"wrongOutcome\":\"用成人标准评儿童认知，「自私」两个字会跟这个孩子六年。上一世就是六年。\"}},{\"id\":\"act-03-scene-02\",\"title\":\"气质类型\",\"paragraphs\":[\"一个班四十人，老师说有七八个「难带」。\"],\"choice\":{\"questionId\":\"ch03-002\",\"correctOutcome\":\"困难型气质约占 10%，四十人里四个左右是常态。超出的部分才需要找原因。\",\"wrongOutcome\":\"没有基准比例，就会把气质差异当班级管理问题，越管越紧。\"}}],\"anchors\":[{\"title\":\"皮亚杰四阶段\",\"text\":\"感知运动 0～2 岁；前运算 2～7 岁；具体运算 7～11 岁；形式运算 11～12 岁以后。\"},{\"title\":\"气质三型\",\"text\":\"容易型约 40%，困难型约 10%，迟缓型约 15%，其余为混合型。\"},{\"title\":\"评估维度\",\"text\":\"认知、语言、情绪、社会适应、行为。五条分开看，不合并成一个「问题儿童」。\"},{\"title\":\"判断顺序\",\"text\":\"先比同年龄水平，再看是否影响功能，最后才谈是否构成障碍。\"}],\"nextHook\":\"九月二十三日，手记上第五个日期。第一个孩子来找他了。\"},{\"id\":\"act-04\",\"order\":4,\"chapterKey\":\"ch04\",\"title\":\"第 4 幕｜青春期\",\"hook\":\"一个女孩来问，自己是不是不正常。手记上第五个日期是今天。距十二月十八日还有 86 天。\",\"scenes\":[{\"id\":\"act-04-scene-01\",\"title\":\"女性顺序\",\"paragraphs\":[\"家长问：女儿十岁两个月，什么算最早出现的发育表现？\"],\"choice\":{\"questionId\":\"ch04-004\",\"correctOutcome\":\"乳房发育是最早的表现，月经初潮在后面，一般晚两三年。\",\"wrongOutcome\":\"等初潮才判断，就晚了两三年。骨龄的窗口期，上一世就这么过去了。\"}},{\"id\":\"act-04-scene-02\",\"title\":\"男性顺序\",\"paragraphs\":[\"父亲很肯定地说：我儿子先长的胡子，天天洗脸都看得见。\"],\"choice\":{\"questionId\":\"ch04-003\",\"correctOutcome\":\"顺序是阴毛→腋毛→胡须。下巴软毛多为汗毛，真胡须是硬的，从嘴角两侧往上走。\",\"wrongOutcome\":\"顺序判错，会把正常发育当成性早熟，也会漏掉真正的异常。\"}},{\"id\":\"act-04-scene-03\",\"title\":\"成熟裂隙\",\"paragraphs\":[\"女生说体育老师让她「来那个就坐着看」，她坐了两节课就不想去了。\"],\"choice\":{\"questionId\":\"ch04-005\",\"correctOutcome\":\"身体先到、心理社会角色后到，这个落差就是成熟裂隙。受限的是环境，不是她。\",\"wrongOutcome\":\"把生理当理由限制活动，等于替她把成熟裂隙再拉大一点。\"}}],\"anchors\":[{\"title\":\"女性顺序\",\"text\":\"乳房发育→阴毛腋毛→身高突增→月经初潮（多在乳房发育后 2～3 年）。\"},{\"title\":\"男性顺序\",\"text\":\"睾丸增大→阴毛→腋毛→胡须→变声与遗精。睾丸增大是最早体征。\"},{\"title\":\"成熟裂隙\",\"text\":\"生理成熟早于心理社会成熟，二者不同步，是青春期矛盾的核心。\"},{\"title\":\"性早熟\",\"text\":\"女 8 岁前乳房发育或 10 岁前初潮；男 9 岁前睾丸增大。按骨龄与激素水平判定。\"}],\"nextHook\":\"九月过完了。手记第六个日期在十月八日，横跨了一整个国庆。\"},{\"id\":\"act-05\",\"order\":5,\"chapterKey\":\"ch05\",\"title\":\"第 5 幕｜影响因素\",\"hook\":\"一个从厂区搬来的孩子，两年掉了两条生长带。手记上第六个日期是今天。距十二月十八日还有 71 天。\",\"scenes\":[{\"id\":\"act-05-scene-01\",\"title\":\"遗传与环境\",\"paragraphs\":[\"家长追问：孩子长不高，到底怪遗传还是怪环境？上一世他答的是「遗传占大头」。\"],\"choice\":{\"questionId\":\"ch05-001\",\"correctOutcome\":\"遗传决定潜能，环境决定潜能实现的程度。问「怪哪个」本身问错了方向。\",\"wrongOutcome\":\"只选一个当答案，就放弃了另一半还能改的部分。上一世他答的是「遗传占大头」。\"}},{\"id\":\"act-05-scene-02\",\"title\":\"遗传度研究\",\"paragraphs\":[\"家长群转来一句话：「身高八成靠遗传」。有人问这个结论怎么算出来的。\"],\"choice\":{\"questionId\":\"ch05-002\",\"correctOutcome\":\"估计遗传度最常用的设计是双生子研究。遗传度高说的是群体差异，不是个体定局。\",\"wrongOutcome\":\"用横断面调查回答这个问题，方法上就不成立，也接不住追问。\"}},{\"id\":\"act-05-scene-03\",\"title\":\"季节差异\",\"paragraphs\":[\"春季测的身高比秋季那次高四公分，有人提出换测量仪器。\"],\"choice\":{\"questionId\":\"ch05-003\",\"correctOutcome\":\"身高春季增长快、体重秋季增长快。两批数据月份不同，先看时间再看仪器。\",\"wrongOutcome\":\"换仪器不解决月份差。钱花了，四公分的差还在。\"}}],\"anchors\":[{\"title\":\"遗传与环境\",\"text\":\"遗传定潜能上限，环境定实现程度。是范围与落点的关系，不是二选一。\"},{\"title\":\"遗传度\",\"text\":\"群体内变异中遗传因素所占比例。常用双生子研究：同卵与异卵比较。\"},{\"title\":\"季节规律\",\"text\":\"身高春季增长快，体重秋季增长快。跨季节比较数据必须先校准测量时间。\"},{\"title\":\"影响层次\",\"text\":\"社会经济、营养、疾病、体育活动、睡眠、心理社会应激，可叠加作用。\"}],\"nextHook\":\"十月十五日，手记第七个日期。这一次，他得先证明自己不是在胡闹。\"},{\"id\":\"act-06\",\"order\":6,\"chapterKey\":\"ch06\",\"title\":\"第 6 幕｜调查与评价\",\"hook\":\"系统里有两万条数据，上面要「生长速度」。手记上第七个日期是今天。距十二月十八日还有 64 天。\",\"scenes\":[{\"id\":\"act-06-scene-01\",\"title\":\"横断面\",\"paragraphs\":[\"两万人的身高体重，各测一次。上面要求据此给出「生长速度」。上一世他签了「可以」。\"],\"choice\":{\"questionId\":\"ch06-006\",\"correctOutcome\":\"横断面只看一个时点，看不出速度。速度要同一个人测两次。\",\"wrongOutcome\":\"两万个点不等于两万条速度线。上一世签的那张，让十一个孩子晚判了半年。\"}},{\"id\":\"act-06-scene-02\",\"title\":\"纵向设计\",\"paragraphs\":[\"一份纵向调查方案上写着三条优点：高效、花费小、一天量完。\"],\"choice\":{\"questionId\":\"ch06-001\",\"correctOutcome\":\"纵向能反映速度和进程，代价是耗时长、易失访、花费大。「花费小」自相矛盾。\",\"wrongOutcome\":\"认下「花费小」，后面失访补测的钱会全部超预算。\"}},{\"id\":\"act-06-scene-03\",\"title\":\"正常值\",\"paragraphs\":[\"报告里有一句：「现状正常值高于理想正常值」。\"],\"choice\":{\"questionId\":\"ch06-003\",\"correctOutcome\":\"反了。理想正常值取自发育较好人群，水平更高。正常值有时代性，要定期修订。\",\"wrongOutcome\":\"这句留着，等于说现在的人比理想的还好。后面所有评价标准都站不住。\"}}],\"anchors\":[{\"title\":\"横断面 vs 纵向\",\"text\":\"横断面看现状与分布；纵向看速度、进程与个体差异。纵向的代价是时间长、易失访、花费大。\"},{\"title\":\"两种正常值\",\"text\":\"现状正常值取自当前人群；理想正常值取自发育较好人群。**理想高于现状**。\"},{\"title\":\"时代性\",\"text\":\"正常值每 5～10 年修订一次。跨年代比较前，先确认用的是哪一版。\"},{\"title\":\"评价方法\",\"text\":\"均值±标准差、百分位数、Z 评分（标准差记分）、生长曲线图。群体用前两种，个体随访用曲线。\"}],\"nextHook\":\"十月二十二日，手记第八个日期。只剩五十七天。\"},{\"id\":\"act-07\",\"order\":7,\"chapterKey\":\"ch07\",\"title\":\"第 7 幕｜健康问题与策略\",\"hook\":\"学校的健康看板上只有一条曲线。手记上第八个日期是今天。距十二月十八日还有 57 天。\",\"scenes\":[{\"id\":\"act-07-scene-01\",\"title\":\"DOHaD\",\"paragraphs\":[\"孩子出生体重四斤八两，现在已经追到同龄正常，家长问还要不要管。\"],\"choice\":{\"questionId\":\"ch07-001\",\"correctOutcome\":\"要管。胎儿～婴幼儿期营养不良会抬高成年慢性病风险，体重追上不代表风险清零。\",\"wrongOutcome\":\"只看当下体重，会漏掉要长期随访的血压、腰围和空腹血糖。\"}},{\"id\":\"act-07-scene-02\",\"title\":\"主要健康问题\",\"paragraphs\":[\"学校的健康看板上只有一条曲线：近视率。\"],\"choice\":{\"questionId\":\"ch07-003\",\"correctOutcome\":\"至少五类并存：近视、超重肥胖、营养不足、心理行为问题、传染病威胁。一条线装不下。\",\"wrongOutcome\":\"只盯一条，其余四类就永远没有数据，也永远进不了议程。\"}},{\"id\":\"act-07-scene-03\",\"title\":\"死亡指标\",\"paragraphs\":[\"上报材料的死亡指标一栏，填的是新生儿死亡率。\"],\"choice\":{\"questionId\":\"ch07-002\",\"correctOutcome\":\"反映 18 岁以下儿童 90% 以上死亡情况的是 5 岁以下儿童死亡率。\",\"wrongOutcome\":\"新生儿口径太窄，数字小、降起来好看，但看不见真正的死因分布。\"}}],\"anchors\":[{\"title\":\"DOHaD\",\"text\":\"胎儿～婴幼儿期的不良暴露，与成年期慢性非传染性疾病风险相关。追赶上体重不等于风险归零。\"},{\"title\":\"五类主要问题\",\"text\":\"近视、超重肥胖、营养不足、心理行为问题、传染病威胁，五类同时存在。\"},{\"title\":\"核心指标\",\"text\":\"5 岁以下儿童死亡率可反映 18 岁以下儿童 90% 以上死亡情况。\"},{\"title\":\"策略三层\",\"text\":\"全人群（政策与环境）→ 重点人群（高危筛查）→ 个体（干预与随访），漏一层就断链。\"}],\"nextHook\":\"十月二十九日，手记第九个日期。只剩五十天。\"},{\"id\":\"act-08\",\"order\":8,\"chapterKey\":\"ch08\",\"title\":\"第 8 幕｜常见病\",\"hook\":\"一个孩子的吸入剂，从口袋换到了课桌抽屉。手记上第九个日期是今天。距十二月十八日还有 50 天。\",\"scenes\":[{\"id\":\"act-08-scene-01\",\"title\":\"屈光参数\",\"paragraphs\":[\"一份近视筛查只测了眼轴长度，就给出了「是否近视」的结论。\"],\"choice\":{\"questionId\":\"ch08-004\",\"correctOutcome\":\"决定近视及程度的是眼轴长度、角膜屈光力、晶状体屈光力三项，缺两项判断不成立。\",\"wrongOutcome\":\"单看眼轴，会把角膜偏平的孩子判成近视，也会漏掉真正的高危。\"}},{\"id\":\"act-08-scene-02\",\"title\":\"哮喘因素\",\"paragraphs\":[\"哮喘危险因素清单上，第三行写着「清洁空气」。\"],\"choice\":{\"questionId\":\"ch08-002\",\"correctOutcome\":\"危险因素是室内外变应原、呼吸道病毒感染、气候变化。清洁空气属保护因素。\",\"wrongOutcome\":\"把保护因素写成危险因素，干预方向整个反了——通风反而被当成风险。\"}},{\"id\":\"act-08-scene-03\",\"title\":\"龋齿四联\",\"paragraphs\":[\"防龋方案只有一条：少吃糖。\"],\"choice\":{\"questionId\":\"ch08-005\",\"correctOutcome\":\"四联因素是细菌和菌斑、宿主、食物、时间。糖只占食物这一项。\",\"wrongOutcome\":\"只控糖，刷牙时长、频率、氟化物这几项就全空着。\"}}],\"anchors\":[{\"title\":\"近视三参数\",\"text\":\"眼轴长度、角膜屈光力、晶状体屈光力，共同决定屈光状态与程度。\"},{\"title\":\"近视防控\",\"text\":\"每天户外活动 2 小时以上、减少持续近距离用眼、定期查视力与屈光度。\"},{\"title\":\"哮喘危险因素\",\"text\":\"室内外变应原、呼吸道病毒感染、气候变化。清洁空气是保护因素，不是诱因。\"},{\"title\":\"龋齿四联\",\"text\":\"细菌和菌斑、宿主（牙与唾液）、食物（尤其蔗糖）、时间。四环齐断才有效。\"}],\"nextHook\":\"十一月五日，手记第十个日期。只剩四十三天。\"},{\"id\":\"act-09\",\"order\":9,\"chapterKey\":\"ch09\",\"title\":\"第 9 幕｜心理卫生问题\",\"hook\":\"同一份名单里混着两类完全不同的病。手记上第十个日期是今天。距十二月十八日还有 43 天。\",\"scenes\":[{\"id\":\"act-09-scene-01\",\"title\":\"孤独症谱系\",\"paragraphs\":[\"男孩 5 岁，不会讲话，不主动交流，喜欢独自玩，经常充耳不闻。妈妈一直以为是自己带得不好。\"],\"choice\":{\"questionId\":\"quiz1-05\",\"correctOutcome\":\"孤独症谱系障碍。核心是社交沟通障碍加重复刻板行为，不是「带得太少」。\",\"wrongOutcome\":\"判成多动或精神发育迟滞，训练重点就整个偏了。\"}},{\"id\":\"act-09-scene-02\",\"title\":\"情绪障碍\",\"paragraphs\":[\"一份统计表把孤独症放进了「情绪障碍」那一栏。\"],\"choice\":{\"questionId\":\"ch09-003\",\"correctOutcome\":\"情绪障碍是焦虑、抑郁、强迫、恐怖。孤独症属神经发育障碍，走另一条评估路径。\",\"wrongOutcome\":\"混在一栏，两类数据同时失效，明年上报口径接不上。\"}},{\"id\":\"act-09-scene-03\",\"title\":\"学习困难\",\"paragraphs\":[\"申请表上写着「智力偏低」，唯一的理由是语文三十八分。\"],\"choice\":{\"questionId\":\"ch09-004\",\"correctOutcome\":\"学习困难不等于智商低，可能与特定认知能力、注意、情绪或环境有关，要做具体能力评估。\",\"wrongOutcome\":\"一句「智力偏低」进了档案，这个孩子后面的路会一直按这句话走。\"}}],\"anchors\":[{\"title\":\"孤独症谱系\",\"text\":\"社交沟通障碍 + 局限重复的行为与兴趣。早期筛查、早期行为干预，越早越好。\"},{\"title\":\"情绪障碍\",\"text\":\"焦虑障碍、抑郁障碍、强迫障碍、恐怖症。不含孤独症谱系。\"},{\"title\":\"学习困难\",\"text\":\"智力正常而学业显著落后。要查阅读、书写、注意、情绪等具体能力，不能凭总分判断。\"},{\"title\":\"分类原则\",\"text\":\"先定类别（神经发育／情绪／行为），再定评估工具，最后定干预路径。顺序不能倒。\"}],\"nextHook\":\"十一月十二日，手记第十一个日期。后面写着两个字：路口。\"},{\"id\":\"act-10\",\"order\":10,\"chapterKey\":\"ch10\",\"title\":\"第 10 幕｜伤害与暴力\",\"hook\":\"手记上第十一个日期是今天，后面写着两个字：路口。上一世这天他什么都没做。距十二月十八日还有 36 天。\",\"scenes\":[{\"id\":\"act-10-scene-01\",\"title\":\"伤害分类\",\"paragraphs\":[\"统计表把自伤和被打，一并记进了「意外伤害」。\"],\"choice\":{\"questionId\":\"ch10-001\",\"correctOutcome\":\"交通事故、跌落、溺水、烧伤属意外伤害。分界线是意图，自伤与暴力要另立口径。\",\"wrongOutcome\":\"混在一栏，意外伤害发生率被抬高，针对性干预也就无从设计。\"}},{\"id\":\"act-10-scene-02\",\"title\":\"Haddon 模型\",\"paragraphs\":[\"清单里有一栏叫「社会」，要求逐格填写措施。上一世这四格填的都是「加强教育」。\"],\"choice\":{\"questionId\":\"ch10-003\",\"correctOutcome\":\"三因素是宿主、媒介物、环境，再乘发生前、发生中、发生后三阶段，形成 3×3 矩阵。\",\"wrongOutcome\":\"用「社会」去填，只能写出「加强教育」。上一世那四格，就是一整页的「加强教育」。\"}},{\"id\":\"act-10-scene-03\",\"title\":\"干预策略\",\"paragraphs\":[\"家具推出磨平棱角的款式，宣传册把这个做法归为「教育策略」。\"],\"choice\":{\"questionId\":\"quiz3-03\",\"correctOutcome\":\"这是工程策略：改的是物，不依赖人的注意力。教育靠提醒，工程靠设计。\",\"wrongOutcome\":\"认成教育策略，钱就会花在提示牌上——提示牌仍然要求人一直小心。\"}}],\"anchors\":[{\"title\":\"意外伤害类型\",\"text\":\"交通事故、跌落伤、溺水、烧伤。自伤与暴力不属于意外伤害。\"},{\"title\":\"Haddon 模型\",\"text\":\"三因素（宿主、媒介物、环境）× 三阶段（发生前、发生中、发生后）。\"},{\"title\":\"五大策略\",\"text\":\"教育、工程、强制、经济、评估。工程策略改变物，最不依赖人的自觉。\"},{\"title\":\"学校重点\",\"text\":\"校门口交通、体育活动、楼梯栏杆、水域与用电。按发生频率排优先级。\"}],\"nextHook\":\"十一月十九日，手记第十二个日期。只剩二十九天。校门口的专用停靠区，划在三十米外。\"},{\"id\":\"act-11\",\"order\":11,\"chapterKey\":\"ch11\",\"title\":\"第 11 幕｜教育过程卫生\",\"hook\":\"课表排了四节连堂，理由是「进入状态快」。手记上第十二个日期是今天。距十二月十八日还有 29 天。\",\"scenes\":[{\"id\":\"act-11-scene-01\",\"title\":\"课程轮换\",\"paragraphs\":[\"课表排了四节连堂，理由是「这样进入状态快」。\"],\"choice\":{\"questionId\":\"ch11-001\",\"correctOutcome\":\"轮换不同课程依据的是镶嵌式活动：不同皮质区轮流兴奋、轮流休息，一块区不能一直亮着。\",\"wrongOutcome\":\"认成动力定型，就会支持连堂。动力定型说的是同一顺序反复后的省力，不是防疲劳。\"}},{\"id\":\"act-11-scene-02\",\"title\":\"疲劳临界\",\"paragraphs\":[\"系统的疲劳预警，设在「显著疲劳」这一档。\"],\"choice\":{\"questionId\":\"ch11-002\",\"correctOutcome\":\"生理负荷达到临界限度的指标是早期疲劳：兴奋过程泛化、内抑制减弱。\",\"wrongOutcome\":\"等到显著疲劳再干预，已经晚了一节课。过劳则是长期疲劳积累的结果。\"}},{\"id\":\"act-11-scene-03\",\"title\":\"运动密度\",\"paragraphs\":[\"体育课上，两排人一直站着看，剩下的人绕圈跑。\"],\"choice\":{\"questionId\":\"ch11-004\",\"correctOutcome\":\"群体运动密度不低于 75%，个体不低于 50%。站着的那两排，密度是零。\",\"wrongOutcome\":\"只记「有活动」，密度永远不达标：一节课四十分钟，要三十分钟在动。\"}}],\"anchors\":[{\"title\":\"镶嵌式活动\",\"text\":\"不同课程轮换，使皮质各功能区轮流兴奋与休息。这是排课表的基本依据。\"},{\"title\":\"疲劳三阶段\",\"text\":\"早期疲劳（兴奋泛化、内抑制减弱）→ 显著疲劳 → 过劳（长期积累）。临界限是早期疲劳。\"},{\"title\":\"运动密度\",\"text\":\"群体不低于 75%，个体不低于 50%。40 分钟一节课对应约 30 分钟在动。\"},{\"title\":\"一日作息\",\"text\":\"学习能力上午第一高峰、下午次高峰。课间休息与课间操不可取消，取消等于延长单区兴奋。\"}],\"nextHook\":\"十一月二十六日，手记第十三个日期。只剩二十二天。\"},{\"id\":\"act-12\",\"order\":12,\"chapterKey\":\"ch12\",\"title\":\"第 12 幕｜教学设施与设备\",\"hook\":\"孩子写作业总耸肩，家长认定是书包太重。手记上第十三个日期是今天。距十二月十八日还有 22 天。\",\"scenes\":[{\"id\":\"act-12-scene-01\",\"title\":\"照度均匀度\",\"paragraphs\":[\"课桌面平均照度 410 勒克斯，施工方说远超 300，验收合格。\"],\"choice\":{\"questionId\":\"ch12-001\",\"correctOutcome\":\"平均够不等于合格：照度均匀度不低于 0.7。0.46 意味着靠墙那片只有平均值的一半。\",\"wrongOutcome\":\"只看平均值，最暗处永远查不出来。而眼睛是按最暗处调节的。\"}},{\"id\":\"act-12-scene-02\",\"title\":\"桌椅高差\",\"paragraphs\":[\"孩子写作业总耸肩，家长认定是书包太重，已经买了两个。\"],\"choice\":{\"questionId\":\"ch12-006\",\"correctOutcome\":\"我国确定桌椅高差主要依据 1/3 坐高。高差偏大，写字时耸肩或一侧横架，久了姿势定型。\",\"wrongOutcome\":\"换轻书包不改变高差。那四公分一直留在那里。\"}},{\"id\":\"act-12-scene-03\",\"title\":\"黑板视角\",\"paragraphs\":[\"看黑板上缘的视线与黑板面夹角，实测 38 度。\"],\"choice\":{\"questionId\":\"ch12-004\",\"correctOutcome\":\"垂直夹角不低于 45 度。差七度不会致病，但会让人整节课仰头。\",\"wrongOutcome\":\"觉得「差不多」，一个孔位的差别就变成了一整个学期的姿势问题。\"}}],\"anchors\":[{\"title\":\"采光照明\",\"text\":\"课桌面平均照度不低于 300 lx，黑板不低于 500 lx；照度均匀度不低于 0.7。\"},{\"title\":\"视角\",\"text\":\"看黑板上缘的垂直视角不低于 45 度，水平视角不低于 30 度；黑板下缘与课桌面平齐或略高。\"},{\"title\":\"桌椅高差\",\"text\":\"按 1/3 坐高确定（欧美多用坐姿肘高）。高差过大易致耸肩、单臂横架，久则脊柱侧弯。\"},{\"title\":\"其他常规\",\"text\":\"教室噪声不高于 50 dB；课桌椅按坐高分档，不按身高绝对值；课桌前排距黑板不近于 2 米。\"}],\"nextHook\":\"手记上最后一个日期是十二月十八日。只剩八天。\"},{\"id\":\"act-13\",\"order\":13,\"chapterKey\":\"ch13\",\"title\":\"第 13 幕｜学校健康教育\",\"hook\":\"十二月的课表上只剩一件事：健康教育。手记上最后一个日期，是十二月十八日。\",\"scenes\":[{\"id\":\"act-13-scene-01\",\"title\":\"最常用方法\",\"paragraphs\":[\"要写「目前国内最普遍采用的学校健康教育传播方法」这一栏。上学期这栏填的是「同伴教育」。\"],\"choice\":{\"questionId\":\"ch13-001\",\"correctOutcome\":\"课堂讲授。覆盖面最大、成本最低，所以最普遍——但普遍不等于最有效。\",\"wrongOutcome\":\"写同伴教育或辩论，那是推荐做法，不是「最普遍采用」。\"}},{\"id\":\"act-13-scene-02\",\"title\":\"参与式方法\",\"paragraphs\":[\"方案把「讲座」列进了参与式方法，理由是有提问环节。\"],\"choice\":{\"questionId\":\"ch13-002\",\"correctOutcome\":\"参与式是同伴教育、角色扮演、小组讨论这类要学生开口动手的。讲座属讲授法。\",\"wrongOutcome\":\"讲座混进参与式，方案看着方法多样，实际还是单向灌输。\"}},{\"id\":\"act-13-scene-03\",\"title\":\"间接方法\",\"paragraphs\":[\"家长群转发的短视频，被算成了面对面课时。距十二月十八日还有一天。\"],\"choice\":{\"questionId\":\"ch13-003\",\"correctOutcome\":\"大众媒体属间接方法：覆盖广但不针对个体，不能算作面对面课时。\",\"wrongOutcome\":\"混算课时，健康教育覆盖率就成了一个漂亮的空数字。\"}}],\"anchors\":[{\"title\":\"方法三分\",\"text\":\"直接：课堂讲授、讲座。参与式：同伴教育、角色扮演、小组讨论、头脑风暴。间接：大众媒体、宣传栏、网络。\"},{\"title\":\"最普遍采用\",\"text\":\"课堂讲授。记忆点：覆盖面最大、成本最低，因此最普遍。\"},{\"title\":\"按目标选方法\",\"text\":\"知识用讲授，技能用参与式，覆盖面用大众媒体。三条接上才算完整方案。\"},{\"title\":\"效果评价\",\"text\":\"覆盖率只算到场人数。要评效果，需做技能抽查或行为指标。\"}],\"nextHook\":\"十二月十八日，六点四十。他在校门口站到七点五十。那辆接送车没有来——专用停靠区划在三十米外，司机得走过来。卫小宇从他身边跑过去，书包带断了一根，用绳系着。\"}]");
//#endregion
//#region src/lib/story-schema.ts
var storyChoiceSchema = z.object({
	questionId: z.string().min(1),
	correctOutcome: z.string().min(1),
	wrongOutcome: z.string().min(1)
});
var storySceneSchema = z.object({
	id: z.string().min(1),
	title: z.string().min(1).optional(),
	paragraphs: z.array(z.string().min(1)).min(1),
	choice: storyChoiceSchema.optional()
});
var storyAnchorSchema = z.object({
	title: z.string().min(1),
	text: z.string().min(1)
});
var storyActInputSchema = z.object({
	id: z.string().min(1),
	order: z.number().int().nonnegative(),
	chapterKey: z.string().regex(/^ch\d{2}$/),
	title: z.string().min(1),
	hook: z.string().min(1),
	scenes: z.array(storySceneSchema).min(1),
	anchors: z.array(storyAnchorSchema).min(3),
	nextHook: z.string().min(1)
});
var choiceQuestionTypes = /* @__PURE__ */ new Set([
	"single",
	"multiple",
	"true_false"
]);
function fail(message) {
	throw new Error(message);
}
function parseStoryActs(input) {
	if (!Array.isArray(input)) fail("story acts: root must be an array");
	const acts = input.map((raw, index) => {
		const result = storyActInputSchema.safeParse(raw);
		if (!result.success) {
			const details = result.error.issues.map((issue) => `${issue.path.join(".") || "root"}: ${issue.message}`).join("; ");
			fail(`story act ${index + 1}: ${details}`);
		}
		return result.data;
	});
	const ids = /* @__PURE__ */ new Set();
	const orders = /* @__PURE__ */ new Set();
	const chapters = /* @__PURE__ */ new Set();
	for (const [index, act] of acts.entries()) {
		if (ids.has(act.id)) fail(`story act ${act.id}: 重复的 act id`);
		if (orders.has(act.order)) fail(`story act ${act.id}: 重复的 order ${act.order}`);
		if (chapters.has(act.chapterKey)) fail(`story act ${act.id}: 重复的章节 ${act.chapterKey}`);
		ids.add(act.id);
		orders.add(act.order);
		chapters.add(act.chapterKey);
		if (act.order !== index) fail(`story act ${act.id}: order 必须从 0 连续排列`);
		const sceneIds = /* @__PURE__ */ new Set();
		let choiceCount = 0;
		for (const scene of act.scenes) {
			if (sceneIds.has(scene.id)) fail(`story act ${act.id}: 重复的 scene id ${scene.id}`);
			sceneIds.add(scene.id);
			if (scene.choice) choiceCount += 1;
		}
		if (choiceCount < 2) fail(`story act ${act.id}: 每一幕至少两个选择场景`);
	}
	return acts;
}
function validateStoryQuestions(acts, questions) {
	const byId = new Map(questions.map((question) => [question.id, question]));
	for (const act of acts) {
		const usedQuestions = /* @__PURE__ */ new Set();
		for (const scene of act.scenes) {
			if (!scene.choice) continue;
			const { questionId } = scene.choice;
			if (usedQuestions.has(questionId)) fail(`story act ${act.id}: 重复使用题目 ${questionId}`);
			usedQuestions.add(questionId);
			const question = byId.get(questionId);
			if (!question) fail(`story act ${act.id}: 找不到题目 ${questionId}`);
			if (!choiceQuestionTypes.has(question.type)) fail(`story act ${act.id}: 题目 ${questionId} 不是选择型题目`);
		}
	}
}
//#endregion
//#region src/pages/story/index.astro
var story_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => $$url
});
var $$Index = createComponent(($$result, $$props, $$slots) => {
	const acts = parseStoryActs(acts_default);
	const referencedIds = new Set(acts.flatMap((act) => act.scenes.flatMap((scene) => scene.choice ? [scene.choice.questionId] : [])));
	const questions = getAllQuestions().filter((question) => referencedIds.has(question.id));
	validateStoryQuestions(acts, questions);
	return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "学习版剧本 · 儿童少年卫生学" }, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<section class="story-page"><header class="story-page-heading"><p class="kicker">学习版剧本</p><h1>十二月的十四个日期</h1><p>14 幕对应 14 章，40 个判断点，每题绑定题库原题，答案不改。上一世他签了字，十二月十八日校门口撞死一个孩子；这一世他提前一百零八天，按手记上的十四个日期，一个一个拦。</p>${renderComponent($$result, "ModeSwitch", $$ModeSwitch, {})}</header>${renderComponent($$result, "StoryGame", StoryGame, {
		"client:load": true,
		"acts": acts,
		"questions": questions,
		"client:component-hydration": "load",
		"client:component-path": "C:/Users/15417/Documents/ChatGPT/课程网站/src/components/story/StoryGame.tsx",
		"client:component-export": "default"
	})}</section>` })}`;
}, "C:/Users/15417/Documents/ChatGPT/课程网站/src/pages/story/index.astro", void 0);
var $$file = "C:/Users/15417/Documents/ChatGPT/课程网站/src/pages/story/index.astro";
var $$url = "/story";
//#endregion
//#region \0virtual:astro:page:src/pages/story/index@_@astro
var page = () => story_exports;
//#endregion
export { page };
