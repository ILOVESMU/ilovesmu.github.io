import { r as createComponent } from "./BaseLayout_CgphDgKw.mjs";
import { b as renderTemplate, m as Fragment, n as createVNode, r as __astro_tag_component__, x as maybeRenderHead } from "./jsx-runtime_NDG3pEuD.mjs";
//#region src/components/content/HaddonMatrix.astro
var $$HaddonMatrix = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<figure class="concept-figure"><div class="table-scroll"><table class="concept-matrix"><caption>Haddon 矩阵：三因素 × 三阶段</caption><thead><tr><th scope="col">阶段</th><th scope="col">宿主</th><th scope="col">媒介物 / 载体</th><th scope="col">环境</th></tr></thead><tbody><tr><th scope="row">发生前</th><td>年龄、行为、视听觉和运动能力</td><td>车辆、道路、水域、设施</td><td>看护、规则、道路设计、警示</td></tr><tr><th scope="row">发生中</th><td>头盔、安全带、儿童座椅</td><td>碰撞能量吸收、围栏和救援</td><td>现场急救、交通管制</td></tr><tr><th scope="row">发生后</th><td>康复、心理支持</td><td>设备检修、事故调查</td><td>转诊、赔偿、制度改进</td></tr></tbody></table></div><figcaption>答题时先写三因素和三阶段，再在每个格子里放 1～2 个具体措施。交通事故和溺水都可以套这个矩阵。</figcaption></figure>`;
}, "C:/Users/15417/Documents/ChatGPT/课程网站/src/components/content/HaddonMatrix.astro", void 0);
//#endregion
//#region src/content/chapters/ch10.mdx
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
		createVNode(_components.p, { children: "伤害这章有个很容易被忽略的前提：伤害不是纯粹的意外，它有规律，也能预防。先分意外和故意，再用 Haddon 矩阵拆。" }),
		"\n",
		createVNode(_components.h2, {
			id: "一伤害的定义",
			children: "一、伤害的定义"
		}),
		"\n",
		createVNode(_components.p, { children: "伤害是机械能、热能、电能、化学能或电离辐射等以超过机体耐受的量或速率急性作用于机体所造成的损伤总称。" }),
		"\n",
		createVNode(_components.p, { children: "按意图分为：" }),
		"\n",
		createVNode(_components.ul, { children: [
			"\n",
			createVNode(_components.li, { children: "意外伤害" }),
			"\n",
			createVNode(_components.li, { children: "故意伤害" }),
			"\n",
			createVNode(_components.li, { children: "意图不明伤害" }),
			"\n"
		] }),
		"\n",
		createVNode(_components.p, { children: "约 90% 的伤害为意外伤害。" }),
		"\n",
		createVNode(_components.h2, {
			id: "二意外伤害",
			children: "二、意外伤害"
		}),
		"\n",
		createVNode(_components.p, { children: "常见类型：道路交通伤害、溺水、跌落、中毒、烧伤、窒息。" }),
		"\n",
		createVNode(_components.p, { children: "流行特点：" }),
		"\n",
		createVNode(_components.ul, { children: [
			"\n",
			createVNode(_components.li, { children: "男孩意外伤害死亡率通常高于女孩" }),
			"\n",
			createVNode(_components.li, { children: "低社会地位家庭儿童风险更高" }),
			"\n",
			createVNode(_components.li, { children: "不同年龄伤害谱不同" }),
			"\n",
			createVNode(_components.li, { children: "伤害总体仍呈上升趋势" }),
			"\n"
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "三haddon-模型",
			children: "三、Haddon 模型"
		}),
		"\n",
		createVNode(_components.p, { children: "Haddon 模型是“三因素三阶段”矩阵：" }),
		"\n",
		createVNode(_components.ul, { children: [
			"\n",
			createVNode(_components.li, { children: "三因素：宿主、媒介物/载体、环境" }),
			"\n",
			createVNode(_components.li, { children: "三阶段：发生前、发生中、发生后" }),
			"\n"
		] }),
		"\n",
		createVNode(_components.p, { children: "以道路交通伤害为例：发生前可通过限速、道路设计、安全教育；发生中可通过安全带、头盔、儿童座椅；发生后可通过急救、康复和交通管理。" }),
		"\n",
		createVNode($$HaddonMatrix, {}),
		"\n",
		createVNode(_components.h2, {
			id: "四故意伤害与自杀",
			children: "四、故意伤害与自杀"
		}),
		"\n",
		createVNode(_components.p, { children: "自杀前常见紧张、抑郁、失望、易激怒、担忧等状态。自杀预防需要学校、家庭、社区和医疗机构共同参与：一级预防面向全体学生开展心理健康教育，二级预防早期识别高危者，三级预防进行危机处理和随访。" }),
		"\n",
		createVNode(_components.h2, {
			id: "五虐待忽视与暴力",
			children: "五、虐待、忽视与暴力"
		}),
		"\n",
		createVNode(_components.p, { children: "虐待与忽视分为躯体虐待、性虐待、情感/精神虐待和忽视。贫困、家庭不稳定、父母酗酒等会增加风险；有智力障碍或神经系统疾病的儿童反而更容易遭受虐待，而不是“不容易”。" }),
		"\n",
		createVNode(_components.p, { children: "校园暴力和网络暴力会侵犯人身权利、扰乱社会秩序、挑战道德和法律底线。网络暴力还具有群体性、盲目性、从众性、情绪性和跨地域扩散等特点。" }),
		"\n",
		createVNode(_components.h2, {
			id: "往年题反复考的地方",
			children: "往年题反复考的地方"
		}),
		"\n",
		createVNode(_components.p, { children: "公众号和小测里，伤害与暴力出现得很密。常考伤害定义、约 90% 为意外伤害、意外和故意伤害的类型、Haddon 三因素三阶段、自杀前信号、虐待与忽视、校园暴力和网络暴力。2022 年考过用交通事故或溺水建 Haddon 模型，小测还考过工程策略、意外伤害类型和网络暴力危害。" }),
		"\n",
		createVNode(_components.p, { children: [
			"对应本章题库：",
			createVNode(_components.a, {
				href: "#chapter-quiz",
				children: "做本章题"
			}),
			"。其中已收录 2022 年 Haddon 模型往年题。"
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "容易做错的地方",
			children: "容易做错的地方"
		}),
		"\n",
		createVNode(_components.ul, { children: [
			"\n",
			createVNode(_components.li, { children: "校园暴力属于故意伤害，不是意外伤害。" }),
			"\n",
			createVNode(_components.li, { children: "Haddon 模型的三因素是宿主、媒介物、环境，不是“宿主、社会、预防措施”。" }),
			"\n",
			createVNode(_components.li, { children: "近视会影响意外伤害风险，不能说“没有影响”。" }),
			"\n"
		] })
	] });
}
function MDXContent(props = {}) {
	const { wrapper: MDXLayout } = props.components || {};
	return MDXLayout ? createVNode(MDXLayout, Object.assign({}, props, { children: createVNode(_createMdxContent, props) })) : _createMdxContent(props);
}
var frontmatter = {
	"title": "第十章 儿童少年伤害与暴力",
	"order": 10,
	"summary": "意外和故意伤害、Haddon 模型、自杀、虐待和网络暴力。",
	"quiz": "ch10"
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
			"slug": "一伤害的定义",
			"text": "一、伤害的定义"
		},
		{
			"depth": 2,
			"slug": "二意外伤害",
			"text": "二、意外伤害"
		},
		{
			"depth": 2,
			"slug": "三haddon-模型",
			"text": "三、Haddon 模型"
		},
		{
			"depth": 2,
			"slug": "四故意伤害与自杀",
			"text": "四、故意伤害与自杀"
		},
		{
			"depth": 2,
			"slug": "五虐待忽视与暴力",
			"text": "五、虐待、忽视与暴力"
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
var url = "src/content/chapters/ch10.mdx";
var file = "C:/Users/15417/Documents/ChatGPT/课程网站/src/content/chapters/ch10.mdx";
var Content = (props = {}) => MDXContent({
	...props,
	components: {
		Fragment,
		...props.components
	}
});
Content[Symbol.for("mdx-component")] = true;
Content[Symbol.for("astro.needsHeadRendering")] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/15417/Documents/ChatGPT/课程网站/src/content/chapters/ch10.mdx";
__astro_tag_component__(Content, "astro:jsx");
//#endregion
export { Content, Content as default, file, frontmatter, getHeadings, url };
