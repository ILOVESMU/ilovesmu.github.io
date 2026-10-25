import { r as createComponent } from "./BaseLayout_CgphDgKw.mjs";
import { b as renderTemplate, m as Fragment, n as createVNode, r as __astro_tag_component__, x as maybeRenderHead } from "./jsx-runtime_NDG3pEuD.mjs";
//#region src/components/content/PiagetTimeline.astro
var $$PiagetTimeline = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<div class="piaget-timeline" role="list" aria-label="皮亚杰认知发展阶段"><article role="listitem"><span>0～2 岁</span><h3>感知运动阶段</h3><p>通过感觉和动作探索世界，逐渐获得客体永久性。</p></article><article role="listitem"><span>2～7 岁</span><h3>前运算阶段</h3><p>表象思维，自我中心，思维刻板、不可逆。</p></article><article role="listitem"><span>7～11 岁</span><h3>具体运算阶段</h3><p>能借助具体事物逻辑思考，获得守恒和可逆性。</p></article><article role="listitem"><span>11 岁以后</span><h3>形式运算阶段</h3><p>抽象、假设-演绎推理，能提出并验证假设。</p></article></div>`;
}, "C:/Users/15417/Documents/ChatGPT/课程网站/src/components/content/PiagetTimeline.astro", void 0);
//#endregion
//#region src/content/chapters/ch03.mdx
function _createMdxContent(props) {
	const _components = Object.assign({
		a: "a",
		h2: "h2",
		h3: "h3",
		li: "li",
		p: "p",
		table: "table",
		tbody: "tbody",
		td: "td",
		th: "th",
		thead: "thead",
		tr: "tr",
		ul: "ul"
	}, props.components);
	return createVNode(Fragment, { children: [
		createVNode(_components.h2, {
			id: "这章怎么看",
			children: "这章怎么看"
		}),
		"\n",
		createVNode(_components.p, { children: "心理发育的年龄点很碎，硬背很容易串。比较省力的办法是抓四条线：认知、语言、情绪、个性与社会化，再把每个年龄段的典型表现挂上去。" }),
		"\n",
		createVNode(_components.h2, {
			id: "一认知能力",
			children: "一、认知能力"
		}),
		"\n",
		createVNode(_components.p, { children: "认知是大脑反映客观事物的特征、状态及其联系的高级心理活动，主要包括感知觉、记忆、注意和思维。" }),
		"\n",
		createVNode(_components.h3, {
			id: "皮亚杰认知发展阶段",
			children: "皮亚杰认知发展阶段"
		}),
		"\n",
		createVNode(_components.table, { children: [
			"\n",
			createVNode(_components.thead, { children: [
				"\n",
				createVNode(_components.tr, { children: [
					"\n",
					createVNode(_components.th, { children: "阶段" }),
					"\n",
					createVNode(_components.th, { children: "大致年龄" }),
					"\n",
					createVNode(_components.th, { children: "核心特征" }),
					"\n"
				] }),
				"\n"
			] }),
			"\n",
			createVNode(_components.tbody, { children: [
				"\n",
				createVNode(_components.tr, { children: [
					"\n",
					createVNode(_components.td, { children: "感知运动阶段" }),
					"\n",
					createVNode(_components.td, { children: "0～2 岁" }),
					"\n",
					createVNode(_components.td, { children: "通过感觉和动作探索世界，逐渐获得客体永久性" }),
					"\n"
				] }),
				"\n",
				createVNode(_components.tr, { children: [
					"\n",
					createVNode(_components.td, { children: "前运算阶段" }),
					"\n",
					createVNode(_components.td, { children: "2～7 岁" }),
					"\n",
					createVNode(_components.td, { children: "表象思维，自我中心，思维刻板、不可逆" }),
					"\n"
				] }),
				"\n",
				createVNode(_components.tr, { children: [
					"\n",
					createVNode(_components.td, { children: "具体运算阶段" }),
					"\n",
					createVNode(_components.td, { children: "7～11 岁" }),
					"\n",
					createVNode(_components.td, { children: "能借助具体事物进行逻辑思考，获得守恒和可逆性" }),
					"\n"
				] }),
				"\n",
				createVNode(_components.tr, { children: [
					"\n",
					createVNode(_components.td, { children: "形式运算阶段" }),
					"\n",
					createVNode(_components.td, { children: "11 岁至成人" }),
					"\n",
					createVNode(_components.td, { children: "抽象、假设-演绎推理，能验证假设" }),
					"\n"
				] }),
				"\n"
			] }),
			"\n"
		] }),
		"\n",
		createVNode($$PiagetTimeline, {}),
		"\n",
		createVNode(_components.h3, {
			id: "感知觉",
			children: "感知觉"
		}),
		"\n",
		createVNode(_components.ul, { children: [
			"\n",
			createVNode(_components.li, { children: "6 个月以前是视力发展的敏感期" }),
			"\n",
			createVNode(_components.li, { children: "出生时只能看清约 19 cm 处的物体" }),
			"\n",
			createVNode(_components.li, { children: "4 个月左右出现辨色视觉" }),
			"\n",
			createVNode(_components.li, { children: "2～3 岁能正确辨别红、黄、绿、蓝" }),
			"\n",
			createVNode(_components.li, { children: "出生时听觉器官基本成熟" }),
			"\n",
			createVNode(_components.li, { children: "触觉是发展最早、最基本的感觉之一" }),
			"\n"
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "二注意记忆和思维",
			children: "二、注意、记忆和思维"
		}),
		"\n",
		createVNode(_components.p, { children: "注意分为无意注意和有意注意。婴幼儿以无意注意为主，随年龄增长有意注意逐渐发展。" }),
		"\n",
		createVNode(_components.p, { children: "记忆包括识记、保持和再现。动作记忆出现较早，6 个月左右出现情绪记忆；有意识记的出现是记忆发展的重要标志。" }),
		"\n",
		createVNode(_components.p, { children: "婴幼儿以直觉行动思维为主，2.5～3 岁是由直觉行动思维向具体形象思维转变的关键期。学龄期逐步从具体形象思维过渡到抽象逻辑思维。" }),
		"\n",
		createVNode(_components.h2, {
			id: "三语言发育",
			children: "三、语言发育"
		}),
		"\n",
		createVNode(_components.ul, { children: [
			"\n",
			createVNode(_components.li, { children: "前言语阶段：出生至第一个有意义的词，多数婴儿 10～14 个月说出第一个词" }),
			"\n",
			createVNode(_components.li, { children: "0～4 个月：单音节阶段" }),
			"\n",
			createVNode(_components.li, { children: "4～10 个月：多音节阶段" }),
			"\n",
			createVNode(_components.li, { children: "11～13 个月：学话萌语阶段" }),
			"\n",
			createVNode(_components.li, { children: "18 个月后出现“词汇激增”" }),
			"\n",
			createVNode(_components.li, { children: "20～30 个月是基本掌握词法和句法的关键期" }),
			"\n"
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "四情绪情感",
			children: "四、情绪情感"
		}),
		"\n",
		createVNode(_components.p, { children: "新生儿已有愉快和不愉快的情感分化，哭是最初的原始情绪反应之一。0～5 周出现自发性微笑，第 5 周后出现社会性微笑。" }),
		"\n",
		createVNode(_components.p, { children: "不同年龄特点：" }),
		"\n",
		createVNode(_components.ul, { children: [
			"\n",
			createVNode(_components.li, { children: "婴幼儿：与生理需要是否满足直接相关，具有先天性" }),
			"\n",
			createVNode(_components.li, { children: "学龄前：冲动性减少，外显性为主、内隐性增强，易变性为主、稳定性发展" }),
			"\n",
			createVNode(_components.li, { children: "学龄期：情感内容丰富，深刻性和稳定性增加，高级情感发展" }),
			"\n",
			createVNode(_components.li, { children: "青春期：迅速而强烈，有两极性，内隐性和表现性并存" }),
			"\n"
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "五个性与社会化",
			children: "五、个性与社会化"
		}),
		"\n",
		createVNode(_components.p, { children: "气质是婴幼儿最早表现出来、较稳定的个性特征。Thomas 和 Chess 把气质分为：" }),
		"\n",
		createVNode(_components.ul, { children: [
			"\n",
			createVNode(_components.li, { children: "平易型约 40%" }),
			"\n",
			createVNode(_components.li, { children: "困难型约 10%" }),
			"\n",
			createVNode(_components.li, { children: "缓慢型约 15%" }),
			"\n",
			createVNode(_components.li, { children: "中间型约 35%" }),
			"\n"
		] }),
		"\n",
		createVNode(_components.p, { children: "自我意识由自我概念、自我评价、自我体验等组成。自我评价是自我意识发展的主要成分和标志。学龄前儿童社会化常表现为利他性和攻击性两种相反倾向。" }),
		"\n",
		createVNode(_components.h2, {
			id: "往年题反复考的地方",
			children: "往年题反复考的地方"
		}),
		"\n",
		createVNode(_components.p, { children: "公众号笔记按认知、语言、情绪、个性与社会化整理。考得最多的是皮亚杰四阶段、气质四型及比例、视觉敏感期、词汇激增、情绪两极性和自我意识。复习时别只背阶段名，题目经常给一个孩子的表现，让你判断处在哪个阶段。" }),
		"\n",
		createVNode(_components.p, { children: [
			"对应本章题库：",
			createVNode(_components.a, {
				href: "#chapter-quiz",
				children: "做本章题"
			}),
			"。气质比例、视觉敏感期和注意特点都在爱课测验中出现过。"
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "容易做错的地方",
			children: "容易做错的地方"
		}),
		"\n",
		createVNode(_components.ul, { children: [
			"\n",
			createVNode(_components.li, { children: "前运算阶段的“自我中心”不是自私，而是难以从他人视角看问题。" }),
			"\n",
			createVNode(_components.li, { children: "困难型气质约占 10%，不是 40%。" }),
			"\n",
			createVNode(_components.li, { children: "视觉敏感期主要在 6 个月以前，不是说 6 个月后视觉停止发育。" }),
			"\n"
		] })
	] });
}
function MDXContent(props = {}) {
	const { wrapper: MDXLayout } = props.components || {};
	return MDXLayout ? createVNode(MDXLayout, Object.assign({}, props, { children: createVNode(_createMdxContent, props) })) : _createMdxContent(props);
}
var frontmatter = {
	"title": "第三章 儿童少年心理行为发育",
	"order": 3,
	"summary": "认知、语言、情绪、个性与社会化的年龄特点。",
	"quiz": "ch03"
};
function getHeadings() {
	return [
		{
			"depth": 2,
			"slug": "这章怎么看",
			"text": "这章怎么看"
		},
		{
			"depth": 2,
			"slug": "一认知能力",
			"text": "一、认知能力"
		},
		{
			"depth": 3,
			"slug": "皮亚杰认知发展阶段",
			"text": "皮亚杰认知发展阶段"
		},
		{
			"depth": 3,
			"slug": "感知觉",
			"text": "感知觉"
		},
		{
			"depth": 2,
			"slug": "二注意记忆和思维",
			"text": "二、注意、记忆和思维"
		},
		{
			"depth": 2,
			"slug": "三语言发育",
			"text": "三、语言发育"
		},
		{
			"depth": 2,
			"slug": "四情绪情感",
			"text": "四、情绪情感"
		},
		{
			"depth": 2,
			"slug": "五个性与社会化",
			"text": "五、个性与社会化"
		},
		{
			"depth": 2,
			"slug": "往年题反复考的地方",
			"text": "往年题反复考的地方"
		},
		{
			"depth": 2,
			"slug": "容易做错的地方",
			"text": "容易做错的地方"
		}
	];
}
var url = "src/content/chapters/ch03.mdx";
var file = "C:/Users/15417/Documents/ChatGPT/课程网站/src/content/chapters/ch03.mdx";
var Content = (props = {}) => MDXContent({
	...props,
	components: {
		Fragment,
		...props.components
	}
});
Content[Symbol.for("mdx-component")] = true;
Content[Symbol.for("astro.needsHeadRendering")] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/15417/Documents/ChatGPT/课程网站/src/content/chapters/ch03.mdx";
__astro_tag_component__(Content, "astro:jsx");
//#endregion
export { Content, Content as default, file, frontmatter, getHeadings, url };
