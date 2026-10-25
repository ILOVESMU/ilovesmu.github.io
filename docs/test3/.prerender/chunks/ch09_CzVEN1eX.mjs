import { m as Fragment, n as createVNode, r as __astro_tag_component__ } from "./jsx-runtime_NDG3pEuD.mjs";
//#region src/content/chapters/ch09.mdx
function _createMdxContent(props) {
	const _components = Object.assign({
		a: "a",
		h2: "h2",
		li: "li",
		p: "p",
		ul: "ul"
	}, props.components);
	return createVNode(Fragment, { children: [
		createVNode(_components.h2, {
			id: "这章怎么看",
			children: "这章怎么看"
		}),
		"\n",
		createVNode(_components.p, { children: "心理卫生这章最怕上来就贴标签。先分心理卫生问题和精神障碍，再看严重程度、持续时间和功能损害，很多题的答案就出来了。" }),
		"\n",
		createVNode(_components.h2, {
			id: "一心理健康标准",
			children: "一、心理健康标准"
		}),
		"\n",
		createVNode(_components.p, { children: "儿童心理健康通常包括：" }),
		"\n",
		createVNode(_components.ul, { children: [
			"\n",
			createVNode(_components.li, { children: "智力发展正常" }),
			"\n",
			createVNode(_components.li, { children: "情绪稳定、反应适度" }),
			"\n",
			createVNode(_components.li, { children: "心理行为特点符合年龄" }),
			"\n",
			createVNode(_components.li, { children: "行为协调、反应能力适度" }),
			"\n",
			createVNode(_components.li, { children: "人际关系适应" }),
			"\n",
			createVNode(_components.li, { children: "个性稳定和健全" }),
			"\n",
			createVNode(_components.li, { children: "能适度耐受压力、悦纳自己和认同他人" }),
			"\n"
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "二心理卫生问题与精神障碍",
			children: "二、心理卫生问题与精神障碍"
		}),
		"\n",
		createVNode(_components.p, { children: "心理卫生问题是心理健康方面的偏倚；当严重程度和持续时间超过年龄允许范围，并造成功能损害时，可能构成精神障碍。" }),
		"\n",
		createVNode(_components.p, { children: "精神障碍常涉及：" }),
		"\n",
		createVNode(_components.ul, { children: [
			"\n",
			createVNode(_components.li, { children: "个体痛苦体验，如恐惧、焦虑、悲伤" }),
			"\n",
			createVNode(_components.li, { children: "行为、情感、认知或躯体功能损害" }),
			"\n",
			createVNode(_components.li, { children: "进一步加重的风险，如伤残、疼痛、失去自由甚至死亡" }),
			"\n"
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "三常见问题",
			children: "三、常见问题"
		}),
		"\n",
		createVNode(_components.ul, { children: [
			"\n",
			createVNode(_components.li, { children: "注意缺陷多动障碍 ADHD：注意力不集中、多动、冲动，男童发病率通常高于女童" }),
			"\n",
			createVNode(_components.li, { children: "孤独症谱系障碍 ASD：社交沟通障碍、兴趣狭窄、重复刻板行为" }),
			"\n",
			createVNode(_components.li, { children: "焦虑障碍、抑郁障碍、强迫障碍、恐怖症" }),
			"\n",
			createVNode(_components.li, { children: "学习困难：不等于智商低，需结合具体认知能力判断" }),
			"\n",
			createVNode(_components.li, { children: "网络成瘾、自伤、自杀风险" }),
			"\n"
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "四学校心理服务",
			children: "四、学校心理服务"
		}),
		"\n",
		createVNode(_components.p, { children: "学校心理卫生服务包括心理健康教育、心理筛查、心理咨询、分级干预和危机转介。轻度问题以课堂教育和行为指导为主，严重问题需要专业机构介入。" }),
		"\n",
		createVNode(_components.h2, {
			id: "往年题反复考的地方",
			children: "往年题反复考的地方"
		}),
		"\n",
		createVNode(_components.p, { children: "公众号资料把这一章分成一般心理卫生问题、精神障碍和学校服务。常考心理健康标准、心理卫生问题与精神障碍的区别、ADHD、孤独症谱系障碍、情绪障碍和自伤风险。2024 年用 14 岁女孩的案例考自伤，答题要从生物-心理-社会因素、风险和保护因素、危机评估和转介展开。" }),
		"\n",
		createVNode(_components.p, { children: [
			"对应本章题库：",
			createVNode(_components.a, {
				href: "#chapter-quiz",
				children: "做本章题"
			}),
			"。其中已收录 2024 年自伤案例往年题。"
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "容易做错的地方",
			children: "容易做错的地方"
		}),
		"\n",
		createVNode(_components.ul, { children: [
			"\n",
			createVNode(_components.li, { children: "学习困难儿童不一定智商低。" }),
			"\n",
			createVNode(_components.li, { children: "2 岁幼儿仍以无意注意为主，不能说“有意注意为主”。" }),
			"\n",
			createVNode(_components.li, { children: "ADHD 不是“调皮”，核心是持续的注意缺陷、多动和冲动并造成功能损害。" }),
			"\n"
		] })
	] });
}
function MDXContent(props = {}) {
	const { wrapper: MDXLayout } = props.components || {};
	return MDXLayout ? createVNode(MDXLayout, Object.assign({}, props, { children: createVNode(_createMdxContent, props) })) : _createMdxContent(props);
}
var frontmatter = {
	"title": "第九章 儿童少年心理卫生问题",
	"order": 9,
	"summary": "心理健康标准、常见问题、精神障碍和学校服务。",
	"quiz": "ch09"
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
			"slug": "一心理健康标准",
			"text": "一、心理健康标准"
		},
		{
			"depth": 2,
			"slug": "二心理卫生问题与精神障碍",
			"text": "二、心理卫生问题与精神障碍"
		},
		{
			"depth": 2,
			"slug": "三常见问题",
			"text": "三、常见问题"
		},
		{
			"depth": 2,
			"slug": "四学校心理服务",
			"text": "四、学校心理服务"
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
var url = "src/content/chapters/ch09.mdx";
var file = "C:/Users/15417/Documents/ChatGPT/课程网站/src/content/chapters/ch09.mdx";
var Content = (props = {}) => MDXContent({
	...props,
	components: {
		Fragment,
		...props.components
	}
});
Content[Symbol.for("mdx-component")] = true;
Content[Symbol.for("astro.needsHeadRendering")] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/15417/Documents/ChatGPT/课程网站/src/content/chapters/ch09.mdx";
__astro_tag_component__(Content, "astro:jsx");
//#endregion
export { Content, Content as default, file, frontmatter, getHeadings, url };
