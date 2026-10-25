import { jsx } from "react/jsx-runtime";
//#region src/lib/storage.ts
var STORAGE_KEYS = {
	wrong: "cah.wrong.v1",
	practice: "cah.practice.v1",
	learn: "cah.learn.v1",
	bookmarks: "cah.bookmarks.v1",
	story: "cah.story.v1"
};
function readJson(key, fallback) {
	if (typeof window === "undefined") return fallback;
	try {
		const raw = window.localStorage.getItem(key);
		if (!raw) return fallback;
		return JSON.parse(raw);
	} catch {
		return fallback;
	}
}
function writeJson(key, value) {
	if (typeof window === "undefined") return false;
	try {
		window.localStorage.setItem(key, JSON.stringify(value));
		return true;
	} catch {
		return false;
	}
}
function normalizeWrongRecord(value) {
	if (typeof value === "string") return {
		id: value,
		wrongCount: 1,
		lastWrongAt: (/* @__PURE__ */ new Date(0)).toISOString()
	};
	if (value && typeof value === "object" && "id" in value && typeof value.id === "string") {
		const record = value;
		return {
			id: record.id,
			wrongCount: typeof record.wrongCount === "number" && record.wrongCount > 0 ? record.wrongCount : 1,
			lastWrongAt: typeof record.lastWrongAt === "string" ? record.lastWrongAt : (/* @__PURE__ */ new Date(0)).toISOString()
		};
	}
	return null;
}
function getWrongRecords() {
	const raw = readJson(STORAGE_KEYS.wrong, []);
	const items = Array.isArray(raw) ? raw : raw && typeof raw === "object" && "items" in raw ? raw.items : [];
	return Array.isArray(items) ? items.map(normalizeWrongRecord).filter((record) => Boolean(record)) : [];
}
function readWrongIds() {
	return getWrongRecords().map((record) => record.id);
}
function recordWrongAnswers(ids) {
	if (ids.length === 0) return;
	const now = (/* @__PURE__ */ new Date()).toISOString();
	const records = new Map(getWrongRecords().map((record) => [record.id, record]));
	for (const id of ids) {
		const existing = records.get(id);
		records.set(id, {
			id,
			wrongCount: (existing?.wrongCount ?? 0) + 1,
			lastWrongAt: now
		});
	}
	writeJson(STORAGE_KEYS.wrong, [...records.values()]);
}
function removeWrong(id) {
	writeJson(STORAGE_KEYS.wrong, getWrongRecords().filter((record) => record.id !== id));
}
function savePracticeSettings(filters) {
	writeJson(STORAGE_KEYS.practice, {
		...filters,
		savedAt: (/* @__PURE__ */ new Date()).toISOString()
	});
}
//#endregion
//#region src/components/quiz/SourceBadge.tsx
var labels = {
	courseware: "课件",
	textbook: "教材",
	external: "外部资料",
	past_exam: "往年题"
};
function SourceBadge({ type }) {
	return /* @__PURE__ */ jsx("span", {
		className: `source-badge source-${type}`,
		children: labels[type]
	});
}
//#endregion
export { readWrongIds as a, savePracticeSettings as c, readJson as i, writeJson as l, STORAGE_KEYS as n, recordWrongAnswers as o, getWrongRecords as r, removeWrong as s, SourceBadge as t };
