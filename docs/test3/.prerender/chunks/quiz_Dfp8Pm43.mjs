//#region src/lib/quiz-engine.ts
function normalizeKeys(keys) {
	return [...new Set(keys)].sort();
}
function gradeAnswer(question, selected) {
	const normalizedSelected = normalizeKeys(selected);
	if (question.type === "short_answer" || question.type === "english") return {
		correct: true,
		selected: normalizedSelected,
		missing: [],
		extra: []
	};
	const expected = normalizeKeys(question.answer);
	const missing = expected.filter((key) => !normalizedSelected.includes(key));
	const extra = normalizedSelected.filter((key) => !expected.includes(key));
	return {
		correct: missing.length === 0 && extra.length === 0,
		selected: normalizedSelected,
		missing,
		extra
	};
}
function buildPracticeQueue(questions, filters, wrongIds) {
	const wantedChapters = new Set(filters.chapters ?? []);
	const wantedTypes = new Set(filters.types ?? []);
	const wrongSet = new Set(wrongIds);
	return questions.filter((question) => {
		if (wantedChapters.size > 0 && !wantedChapters.has(question.chapterKey)) return false;
		if (wantedTypes.size > 0 && !wantedTypes.has(question.type)) return false;
		if (filters.wrongOnly && !wrongSet.has(question.id)) return false;
		if (filters.quizOnly && !question.tags.includes("爱课测验")) return false;
		if (filters.pastExamOnly && !question.pastExam) return false;
		return true;
	});
}
function summarizeSession(answers) {
	const correct = answers.filter((answer) => answer.result.correct).length;
	return {
		total: answers.length,
		correct,
		accuracy: answers.length === 0 ? 0 : correct / answers.length,
		wrongIds: answers.filter((answer) => !answer.result.correct).map((answer) => answer.questionId)
	};
}
//#endregion
export { gradeAnswer as n, summarizeSession as r, buildPracticeQueue as t };
