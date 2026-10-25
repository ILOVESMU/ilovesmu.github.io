import { m as Fragment, n as createVNode, r as __astro_tag_component__ } from "./jsx-runtime_NDG3pEuD.mjs";
//#region src/content/chapters/ch12.mdx
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
		createVNode(_components.p, { children: "这章数字多，死背很容易串。先按采光、照明、黑板、噪声、课桌椅、校址分组，再记每组数字。做题时先看题目在问哪一组。" }),
		"\n",
		createVNode(_components.h2, {
			id: "一校址与教学用房",
			children: "一、校址与教学用房"
		}),
		"\n",
		createVNode(_components.p, { children: "校址应选在无污染、居民区适中、交通方便且安全的地段，远离化学、生物、物理污染源，不毗邻市场、公共娱乐场所。小学以就近入学、中学相对集中为原则。" }),
		"\n",
		createVNode(_components.p, { children: "教学用房布局要考虑朝向、采光、通风和噪声。普通教室、实验室通常以南向为宜；生物标本室等对阳光要求不同，不能一概写成“都需要南向”。" }),
		"\n",
		createVNode(_components.h2, {
			id: "二教室采光与照明",
			children: "二、教室采光与照明"
		}),
		"\n",
		createVNode(_components.ul, { children: [
			"\n",
			createVNode(_components.li, { children: "课桌面照度均匀度不低于 0.7" }),
			"\n",
			createVNode(_components.li, { children: "投射角不小于 20°～22°" }),
			"\n",
			createVNode(_components.li, { children: "开角不小于 4°～5°" }),
			"\n",
			createVNode(_components.li, { children: "学生看黑板上缘视线与黑板面的垂直夹角不低于 45°" }),
			"\n",
			createVNode(_components.li, { children: "教室噪声应小于 50 dB" }),
			"\n"
		] }),
		"\n",
		createVNode(_components.p, { children: "控制眩光的方法包括使用漫射材料、遮光材料、避免裸灯、合理布置灯具等。适当降低灯具悬挂高度通常不是控制眩光的正确方法。" }),
		"\n",
		createVNode(_components.h2, {
			id: "三课桌椅",
			children: "三、课桌椅"
		}),
		"\n",
		createVNode(_components.ul, { children: [
			"\n",
			createVNode(_components.li, { children: "椅座距离最合适为 4 cm 以内的负距离" }),
			"\n",
			createVNode(_components.li, { children: "桌椅高差常以 1/3 坐高为依据" }),
			"\n",
			createVNode(_components.li, { children: "课桌椅要符合学生身高，保持正确坐姿" }),
			"\n"
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "四黑板电脑与生活设施",
			children: "四、黑板、电脑与生活设施"
		}),
		"\n",
		createVNode(_components.p, { children: "黑板应无明显眩光、易擦拭。电脑使用要注意视线距离、手腕与前臂成直线、肩部放松、肘膝屈角约 90°。学校食堂、校车、厕所、饮水设施等都要符合卫生要求。" }),
		"\n",
		createVNode(_components.h2, {
			id: "往年题反复考的地方",
			children: "往年题反复考的地方"
		}),
		"\n",
		createVNode(_components.p, { children: "公众号资料按“校址—采光照明—课桌椅—黑板和电脑—生活设施”整理。反复出现的数字是照度均匀度 0.7、投射角 20°～22°、开角 4°～5°、黑板夹角 45°、噪声 50 dB、椅座距离 4 cm 以内负距离、桌椅高差 1/3 坐高。小测里这些数字几乎逐项出现过。" }),
		"\n",
		createVNode(_components.p, { children: [
			"对应本章题库：",
			createVNode(_components.a, {
				href: "#chapter-quiz",
				children: "做本章题"
			}),
			"。"
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "容易做错的地方",
			children: "容易做错的地方"
		}),
		"\n",
		createVNode(_components.ul, { children: [
			"\n",
			createVNode(_components.li, { children: "照度均匀度 0.7，不是 0.5。" }),
			"\n",
			createVNode(_components.li, { children: "投射角是 20°～22°，开角是 4°～5°，不要反。" }),
			"\n",
			createVNode(_components.li, { children: "课桌椅高差常按 1/3 坐高，不是 1/2 坐高。" }),
			"\n"
		] })
	] });
}
function MDXContent(props = {}) {
	const { wrapper: MDXLayout } = props.components || {};
	return MDXLayout ? createVNode(MDXLayout, Object.assign({}, props, { children: createVNode(_createMdxContent, props) })) : _createMdxContent(props);
}
var frontmatter = {
	"title": "第十二章 学校教学设施与设备卫生",
	"order": 12,
	"summary": "校址、采光照明、黑板、噪声和课桌椅。",
	"quiz": "ch12"
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
			"slug": "一校址与教学用房",
			"text": "一、校址与教学用房"
		},
		{
			"depth": 2,
			"slug": "二教室采光与照明",
			"text": "二、教室采光与照明"
		},
		{
			"depth": 2,
			"slug": "三课桌椅",
			"text": "三、课桌椅"
		},
		{
			"depth": 2,
			"slug": "四黑板电脑与生活设施",
			"text": "四、黑板、电脑与生活设施"
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
var url = "src/content/chapters/ch12.mdx";
var file = "C:/Users/15417/Documents/ChatGPT/课程网站/src/content/chapters/ch12.mdx";
var Content = (props = {}) => MDXContent({
	...props,
	components: {
		Fragment,
		...props.components
	}
});
Content[Symbol.for("mdx-component")] = true;
Content[Symbol.for("astro.needsHeadRendering")] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/15417/Documents/ChatGPT/课程网站/src/content/chapters/ch12.mdx";
__astro_tag_component__(Content, "astro:jsx");
//#endregion
export { Content, Content as default, file, frontmatter, getHeadings, url };
