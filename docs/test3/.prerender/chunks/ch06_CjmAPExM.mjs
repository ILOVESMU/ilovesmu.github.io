import { m as Fragment, n as createVNode, r as __astro_tag_component__ } from "./jsx-runtime_NDG3pEuD.mjs";
//#region src/content/chapters/ch06.mdx
function _createMdxContent(props) {
	const _components = Object.assign({
		a: "a",
		h2: "h2",
		h3: "h3",
		li: "li",
		ol: "ol",
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
		createVNode(_components.p, { children: "这章是方法学。判断题目时先问自己：它是在问调查设计、正常值，还是评价方法？这三类混在一起，选项看起来就都像对的。" }),
		"\n",
		createVNode(_components.h2, {
			id: "一调查设计",
			children: "一、调查设计"
		}),
		"\n",
		createVNode(_components.table, { children: [
			"\n",
			createVNode(_components.thead, { children: [
				"\n",
				createVNode(_components.tr, { children: [
					"\n",
					createVNode(_components.th, { children: "设计" }),
					"\n",
					createVNode(_components.th, { children: "核心" }),
					"\n",
					createVNode(_components.th, { children: "优点" }),
					"\n",
					createVNode(_components.th, { children: "局限" }),
					"\n"
				] }),
				"\n"
			] }),
			"\n",
			createVNode(_components.tbody, { children: [
				"\n",
				createVNode(_components.tr, { children: [
					"\n",
					createVNode(_components.td, { children: "横断面" }),
					"\n",
					createVNode(_components.td, { children: "某一时点对代表性人群一次性调查" }),
					"\n",
					createVNode(_components.td, { children: "快速、省费、可获大量资料" }),
					"\n",
					createVNode(_components.td, { children: "不能直接反映个体生长速度" }),
					"\n"
				] }),
				"\n",
				createVNode(_components.tr, { children: [
					"\n",
					createVNode(_components.td, { children: "监测" }),
					"\n",
					createVNode(_components.td, { children: "对同一地区/群体连续收集、整理、分析" }),
					"\n",
					createVNode(_components.td, { children: "能看长期趋势" }),
					"\n",
					createVNode(_components.td, { children: "需要稳定系统和长期投入" }),
					"\n"
				] }),
				"\n",
				createVNode(_components.tr, { children: [
					"\n",
					createVNode(_components.td, { children: "纵向" }),
					"\n",
					createVNode(_components.td, { children: "对同一批个体反复观察" }),
					"\n",
					createVNode(_components.td, { children: "能反映生长速度和轨迹" }),
					"\n",
					createVNode(_components.td, { children: "耗时长、花费大、易失访" }),
					"\n"
				] }),
				"\n",
				createVNode(_components.tr, { children: [
					"\n",
					createVNode(_components.td, { children: "序列" }),
					"\n",
					createVNode(_components.td, { children: "横断面加后续追踪" }),
					"\n",
					createVNode(_components.td, { children: "兼顾群体和动态" }),
					"\n",
					createVNode(_components.td, { children: "设计较复杂" }),
					"\n"
				] }),
				"\n",
				createVNode(_components.tr, { children: [
					"\n",
					createVNode(_components.td, { children: "干预" }),
					"\n",
					createVNode(_components.td, { children: "比较干预前后或干预组/对照组" }),
					"\n",
					createVNode(_components.td, { children: "可评价效果" }),
					"\n",
					createVNode(_components.td, { children: "伦理和实施要求高" }),
					"\n"
				] }),
				"\n"
			] }),
			"\n"
		] }),
		"\n",
		createVNode(_components.p, { children: "我国全国学生体质与健康调研通常采用分层随机整群抽样的横断面设计。" }),
		"\n",
		createVNode(_components.h2, {
			id: "二正常值与标准",
			children: "二、正常值与标准"
		}),
		"\n",
		createVNode(_components.ul, { children: [
			"\n",
			createVNode(_components.li, { children: "现状正常值：反映当前人群实际水平" }),
			"\n",
			createVNode(_components.li, { children: "理想正常值：以生长潜力较好的人群为基础" }),
			"\n",
			createVNode(_components.li, { children: "正常值有时段性，受长期趋势影响，通常每 5～10 年修订" }),
			"\n"
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "三评价内容",
			children: "三、评价内容"
		}),
		"\n",
		createVNode(_components.ol, { children: [
			"\n",
			createVNode(_components.li, { children: "生长水平：个体在同性别、同年龄群体中的位置" }),
			"\n",
			createVNode(_components.li, { children: "生长速度：一段时间内的增长趋势" }),
			"\n",
			createVNode(_components.li, { children: "匀称度：身体各部分比例是否协调" }),
			"\n"
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "四评价方法",
			children: "四、评价方法"
		}),
		"\n",
		createVNode(_components.h3, {
			id: "离差法",
			children: "离差法"
		}),
		"\n",
		createVNode(_components.p, { children: "用均值和标准差表示范围，常用均值±1SD、±2SD 分级。" }),
		"\n",
		createVNode(_components.h3, {
			id: "百分位数法",
			children: "百分位数法"
		}),
		"\n",
		createVNode(_components.p, { children: "把测量值从小到大排列，常用 P3、P10、P25、P50、P75、P90、P97 等等级。它直观、不受正态分布限制，但不能直接给出“多少个标准差”。" }),
		"\n",
		createVNode(_components.h3, {
			id: "z-标准差法",
			children: "Z 标准差法"
		}),
		"\n",
		createVNode(_components.p, { children: "以中位数为中心，把偏态资料转换为近似正态，用 Z 分数表示个体离参照人群中心的位置。适合跨年龄、跨人群比较。" }),
		"\n",
		createVNode(_components.h2, {
			id: "五发育年龄",
			children: "五、发育年龄"
		}),
		"\n",
		createVNode(_components.ul, { children: [
			"\n",
			createVNode(_components.li, { children: "形态年龄" }),
			"\n",
			createVNode(_components.li, { children: "第二性征年龄：适用于青春期" }),
			"\n",
			createVNode(_components.li, { children: "齿龄：常用于 6 个月至 13 岁" }),
			"\n",
			createVNode(_components.li, { children: "骨龄：应用最广泛，通常拍摄手腕部 X 线片" }),
			"\n"
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "往年题反复考的地方",
			children: "往年题反复考的地方"
		}),
		"\n",
		createVNode(_components.p, { children: "公众号资料按“设计—测量—应用—评价”整理。常考横断面、监测、纵向、序列和干预设计，分层随机整群抽样，现状正常值和理想正常值，离差法、百分位法和 Z 分法，以及骨龄和发育年龄。2022 年考过百分位法，2023 年论述题考过比较两校身高发育水平。" }),
		"\n",
		createVNode(_components.p, { children: [
			"对应本章题库：",
			createVNode(_components.a, {
				href: "#chapter-quiz",
				children: "做本章题"
			}),
			"。其中已收录 2022 年百分位法和 2023 年两校比较的往年题。"
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "容易做错的地方",
			children: "容易做错的地方"
		}),
		"\n",
		createVNode(_components.ul, { children: [
			"\n",
			createVNode(_components.li, { children: "横断面能描述“现在处于什么水平”，不能直接得到个体生长速度。" }),
			"\n",
			createVNode(_components.li, { children: "百分位数法和 Z 分法都能评价水平，但统计含义不同。" }),
			"\n",
			createVNode(_components.li, { children: "骨龄不是“身高年龄”，它反映骨骼成熟程度。" }),
			"\n"
		] })
	] });
}
function MDXContent(props = {}) {
	const { wrapper: MDXLayout } = props.components || {};
	return MDXLayout ? createVNode(MDXLayout, Object.assign({}, props, { children: createVNode(_createMdxContent, props) })) : _createMdxContent(props);
}
var frontmatter = {
	"title": "第六章 生长发育调查与评价",
	"order": 6,
	"summary": "调查设计、正常值、评价方法和发育年龄。",
	"quiz": "ch06"
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
			"slug": "一调查设计",
			"text": "一、调查设计"
		},
		{
			"depth": 2,
			"slug": "二正常值与标准",
			"text": "二、正常值与标准"
		},
		{
			"depth": 2,
			"slug": "三评价内容",
			"text": "三、评价内容"
		},
		{
			"depth": 2,
			"slug": "四评价方法",
			"text": "四、评价方法"
		},
		{
			"depth": 3,
			"slug": "离差法",
			"text": "离差法"
		},
		{
			"depth": 3,
			"slug": "百分位数法",
			"text": "百分位数法"
		},
		{
			"depth": 3,
			"slug": "z-标准差法",
			"text": "Z 标准差法"
		},
		{
			"depth": 2,
			"slug": "五发育年龄",
			"text": "五、发育年龄"
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
var url = "src/content/chapters/ch06.mdx";
var file = "C:/Users/15417/Documents/ChatGPT/课程网站/src/content/chapters/ch06.mdx";
var Content = (props = {}) => MDXContent({
	...props,
	components: {
		Fragment,
		...props.components
	}
});
Content[Symbol.for("mdx-component")] = true;
Content[Symbol.for("astro.needsHeadRendering")] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/15417/Documents/ChatGPT/课程网站/src/content/chapters/ch06.mdx";
__astro_tag_component__(Content, "astro:jsx");
//#endregion
export { Content, Content as default, file, frontmatter, getHeadings, url };
