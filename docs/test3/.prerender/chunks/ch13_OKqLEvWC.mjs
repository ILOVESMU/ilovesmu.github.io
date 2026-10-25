import { m as Fragment, n as createVNode, r as __astro_tag_component__ } from "./jsx-runtime_NDG3pEuD.mjs";
//#region src/content/chapters/ch13.mdx
function _createMdxContent(props) {
	const _components = Object.assign({
		a: "a",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul"
	}, props.components);
	return createVNode(Fragment, { children: [
		createVNode(_components.h2, {
			id: "这章怎么看",
			children: "这章怎么看"
		}),
		"\n",
		createVNode(_components.p, { children: "健康教育和健康促进不是一回事。前者主要教人怎么做，后者还要动政策、环境和制度。把这层区别抓住，后面的方法、理论和评价才不容易乱。" }),
		"\n",
		createVNode(_components.h2, {
			id: "一概念",
			children: "一、概念"
		}),
		"\n",
		createVNode(_components.p, { children: [createVNode(_components.strong, { children: "健康教育" }), "：通过有计划、有组织、有系统的健康信息传播和行为干预，促使个人或群体掌握健康知识、树立健康观念，自觉采纳有益健康的行为和生活方式。"] }),
		"\n",
		createVNode(_components.p, { children: [createVNode(_components.strong, { children: "健康促进" }), "：不仅包括健康教育，还包括政策、环境、社区行动和卫生服务等综合策略，使健康选择更容易实现。"] }),
		"\n",
		createVNode(_components.p, { children: [createVNode(_components.strong, { children: "健康素养" }), "：个体获取、理解、评价和应用健康信息，作出健康决策的能力。"] }),
		"\n",
		createVNode(_components.h2, {
			id: "二基本内容",
			children: "二、基本内容"
		}),
		"\n",
		createVNode(_components.ul, { children: [
			"\n",
			createVNode(_components.li, { children: "健康行为与生活方式" }),
			"\n",
			createVNode(_components.li, { children: "疾病预防" }),
			"\n",
			createVNode(_components.li, { children: "安全应急与避险" }),
			"\n",
			createVNode(_components.li, { children: "生长发育与青春期保健" }),
			"\n",
			createVNode(_components.li, { children: "心理健康" }),
			"\n"
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "三教学方法",
			children: "三、教学方法"
		}),
		"\n",
		createVNode(_components.p, { children: "课堂讲授是国内学校最普遍采用的方法，适合系统传授知识。参与式方法包括同伴教育、角色扮演、小组讨论、案例分析和头脑风暴。大众媒体属于间接健康教育方法。" }),
		"\n",
		createVNode(_components.h2, {
			id: "四主要理论与模式",
			children: "四、主要理论与模式"
		}),
		"\n",
		createVNode(_components.ul, { children: [
			"\n",
			createVNode(_components.li, { children: "健康信念模式" }),
			"\n",
			createVNode(_components.li, { children: "阶段变化理论" }),
			"\n",
			createVNode(_components.li, { children: "组织改变理论：解冻、改变、再冻结" }),
			"\n",
			createVNode(_components.li, { children: "PRECEDE-PROCEED 模式" }),
			"\n",
			createVNode(_components.li, { children: "社会认知理论" }),
			"\n"
		] }),
		"\n",
		createVNode(_components.p, { children: "组织改变理论常用于设计戒烟干预：先让学校/组织认识到问题并产生改变动力，再实施课程、环境和支持措施，最后把新行为制度化。" }),
		"\n",
		createVNode(_components.h2, {
			id: "五评价",
			children: "五、评价"
		}),
		"\n",
		createVNode(_components.p, { children: "评价类型包括过程评价、影响评价和结局评价。常用 RE-AIM 框架关注覆盖范围、有效性、采纳、实施和维持。" }),
		"\n",
		createVNode(_components.h2, {
			id: "往年题反复考的地方",
			children: "往年题反复考的地方"
		}),
		"\n",
		createVNode(_components.p, { children: "公众号考试回忆里，用组织改变理论安排戒烟干预在 2022、2023、2024 年连续出现，是这一章最该拿的分。除此之外还要会健康教育、健康促进、健康素养的区别，五项基本内容，课堂讲授与参与式及间接方法，以及过程—影响—结局评价。答题时按解冻、改变、再冻结写，最后补制度化和评价指标。" }),
		"\n",
		createVNode(_components.p, { children: [
			"对应本章题库：",
			createVNode(_components.a, {
				href: "#chapter-quiz",
				children: "做本章题"
			}),
			"。其中已收录 2022/2023/2024 年戒烟干预往年题。"
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "容易做错的地方",
			children: "容易做错的地方"
		}),
		"\n",
		createVNode(_components.ul, { children: [
			"\n",
			createVNode(_components.li, { children: "讲座属于偏单向传播，不是参与式方法。" }),
			"\n",
			createVNode(_components.li, { children: "大众媒体是间接健康教育方法，不是面对面参与式方法。" }),
			"\n",
			createVNode(_components.li, { children: "健康教育强调信息传播和行为干预，健康促进的范围更广。" }),
			"\n"
		] })
	] });
}
function MDXContent(props = {}) {
	const { wrapper: MDXLayout } = props.components || {};
	return MDXLayout ? createVNode(MDXLayout, Object.assign({}, props, { children: createVNode(_createMdxContent, props) })) : _createMdxContent(props);
}
var frontmatter = {
	"title": "第十三章 学校健康教育与健康促进",
	"order": 13,
	"summary": "健康教育、健康促进、教学方法、理论和评价。",
	"quiz": "ch13"
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
			"slug": "一概念",
			"text": "一、概念"
		},
		{
			"depth": 2,
			"slug": "二基本内容",
			"text": "二、基本内容"
		},
		{
			"depth": 2,
			"slug": "三教学方法",
			"text": "三、教学方法"
		},
		{
			"depth": 2,
			"slug": "四主要理论与模式",
			"text": "四、主要理论与模式"
		},
		{
			"depth": 2,
			"slug": "五评价",
			"text": "五、评价"
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
var url = "src/content/chapters/ch13.mdx";
var file = "C:/Users/15417/Documents/ChatGPT/课程网站/src/content/chapters/ch13.mdx";
var Content = (props = {}) => MDXContent({
	...props,
	components: {
		Fragment,
		...props.components
	}
});
Content[Symbol.for("mdx-component")] = true;
Content[Symbol.for("astro.needsHeadRendering")] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/15417/Documents/ChatGPT/课程网站/src/content/chapters/ch13.mdx";
__astro_tag_component__(Content, "astro:jsx");
//#endregion
export { Content, Content as default, file, frontmatter, getHeadings, url };
