import { r as createComponent } from "./BaseLayout_CgphDgKw.mjs";
import { b as renderTemplate, m as Fragment, n as createVNode, r as __astro_tag_component__, x as maybeRenderHead } from "./jsx-runtime_NDG3pEuD.mjs";
import { t as $$CoursewareFigure } from "./CoursewareFigure_Cr_spIby.mjs";
//#region src/components/content/ScammonChart.astro
var $$ScammonChart = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<figure class="concept-figure scammon-figure"><svg viewBox="0 0 760 390" role="img" aria-labelledby="scammon-title scammon-desc"><title id="scammon-title">Scammon 四种生长模式</title><desc id="scammon-desc">一般型、神经系统型、淋巴系统型和生殖系统型在不同年龄阶段的相对生长曲线。</desc><defs><pattern id="scammon-grid" width="56" height="42" patternUnits="userSpaceOnUse"><path d="M 56 0 L 0 0 0 42" fill="none" stroke="currentColor" stroke-width="1" opacity="0.12"></path></pattern></defs><rect x="58" y="24" width="650" height="294" fill="url(#scammon-grid)"></rect><line x1="58" y1="318" x2="708" y2="318" class="chart-axis"></line><line x1="58" y1="24" x2="58" y2="318" class="chart-axis"></line><text x="58" y="344" class="chart-label">出生</text><text x="210" y="344" class="chart-label">6 岁</text><text x="380" y="344" class="chart-label">10 岁</text><text x="560" y="344" class="chart-label">青春期</text><text x="688" y="344" class="chart-label">成年</text><text x="24" y="48" class="chart-label">200%</text><text x="24" y="180" class="chart-label">100%</text><text x="24" y="310" class="chart-label">0</text><path d="M70 300 C120 208 170 160 240 148 C330 134 390 126 470 112 C540 100 620 82 690 66" class="curve curve-primary"></path><path d="M70 300 C100 180 130 110 205 82 C270 58 330 54 390 52 C470 50 570 52 690 54" class="curve curve-secondary"></path><path d="M70 300 C130 210 190 128 270 82 C340 44 420 54 510 42 C580 34 640 48 690 80" class="curve curve-accent"></path><path d="M70 306 C170 305 270 304 350 302 C430 298 490 280 540 214 C590 150 640 84 690 46" class="curve curve-alert"></path><g class="scammon-legend" transform="translate(-438,-70)"><line x1="510" y1="110" x2="534" y2="110" class="curve curve-primary"></line><text x="542" y="114">一般型</text><line x1="510" y1="132" x2="534" y2="132" class="curve curve-secondary"></line><text x="542" y="136">神经系统型</text><line x1="510" y1="154" x2="534" y2="154" class="curve curve-accent"></line><text x="542" y="158">淋巴系统型</text><line x1="510" y1="176" x2="534" y2="176" class="curve curve-alert"></line><text x="542" y="180">生殖系统型</text></g></svg><figcaption>四种模式的关键区别在“突增期在哪里”：一般型有两次突增，神经系统型只有早期一次，淋巴系统型先高后降，生殖系统型在青春期才启动。</figcaption></figure>`;
}, "C:/Users/15417/Documents/ChatGPT/课程网站/src/components/content/ScammonChart.astro", void 0);
//#endregion
//#region src/content/chapters/ch02.mdx
function _createMdxContent(props) {
	const _components = Object.assign({
		a: "a",
		h2: "h2",
		h3: "h3",
		li: "li",
		ol: "ol",
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
		createVNode(_components.p, { children: "身体发育看起来是在讲身高体重，实际上分了四条线：体格、体能、体成分、脑。考试喜欢在“哪个阶段最快”“男女哪里不一样”“Scammon 属于哪一型”这些地方设题。" }),
		"\n",
		createVNode(_components.h2, {
			id: "一体格发育",
			children: "一、体格发育"
		}),
		"\n",
		createVNode(_components.p, { children: "体格发育指人体外部形态、身体比例和体型随年龄发生的变化。" }),
		"\n",
		createVNode(_components.h3, {
			id: "阶段性变化",
			children: "阶段性变化"
		}),
		"\n",
		createVNode(_components.ol, { children: [
			"\n",
			createVNode(_components.li, { children: [createVNode(_components.strong, { children: "第一生长突增期" }), "：孕中期开始至 1 岁末，身长增长从孕中期加速，体重增长从孕晚期加速。"] }),
			"\n",
			createVNode(_components.li, { children: [createVNode(_components.strong, { children: "相对稳定期" }), "：约 2 岁至青春期发育前。"] }),
			"\n",
			createVNode(_components.li, { children: [createVNode(_components.strong, { children: "第二生长突增期" }), "：青春期生长突增，是青春期的重要表现。"] }),
			"\n",
			createVNode(_components.li, { children: [createVNode(_components.strong, { children: "生长停滞期" }), "：青春中后期开始，生长速度逐渐减慢直至骨骺融合。"] }),
			"\n"
		] }),
		"\n",
		createVNode($$CoursewareFigure, {
			src: "/images/courseware/bmi-for-age.png",
			alt: "WHO 0-2岁儿童性别年龄别 BMI 生长标准",
			caption: "年龄别 BMI 是把体重和身高同时考虑的常用参考；2 岁前测量站立与卧位还要做 0.7 cm 的身高身长换算。",
			source: "儿童少年身体发育课件"
		}),
		"\n",
		createVNode(_components.h3, {
			id: "身体比例与体型",
			children: "身体比例与体型"
		}),
		"\n",
		createVNode(_components.p, { children: "身体比例可用身高胸围指数、肩盆宽指数、BMI、身高坐高指数、下肢长指数等描述。Sheldon 把体型分为：" }),
		"\n",
		createVNode(_components.ul, { children: [
			"\n",
			createVNode(_components.li, { children: "内胚层体型：身体圆胖，消化器官发达" }),
			"\n",
			createVNode(_components.li, { children: "中胚层体型：身体健壮，骨骼肌肉发达" }),
			"\n",
			createVNode(_components.li, { children: "外胚层体型：身体瘦长，神经系统和感觉器官发达" }),
			"\n"
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "二体能发育",
			children: "二、体能发育"
		}),
		"\n",
		createVNode(_components.p, { children: "体能是人体胜任日常学习和工作而不感到疲劳，同时有余力享受休闲、应付突发状况的能力。" }),
		"\n",
		createVNode(_components.ul, { children: [
			"\n",
			createVNode(_components.li, { children: "健康相关体能：体成分、心肺功能、柔韧性、肌力和肌耐力" }),
			"\n",
			createVNode(_components.li, { children: "运动技能相关体能：速度、灵敏性、平衡、协调等" }),
			"\n"
		] }),
		"\n",
		createVNode(_components.p, { children: "儿童少年体能发育具有不均衡性、阶段性、不平衡性和性别差异。" }),
		"\n",
		createVNode(_components.h2, {
			id: "三体成分发育",
			children: "三、体成分发育"
		}),
		"\n",
		createVNode(_components.p, { children: "常用二成分模型把体重分为体脂重和去脂体重。体脂率是脂肪组织占体重的百分比。" }),
		"\n",
		createVNode(_components.ul, { children: [
			"\n",
			createVNode(_components.li, { children: "男童在青春期前体脂率可上升，青春期开始后明显下降" }),
			"\n",
			createVNode(_components.li, { children: "女童青春期前缓慢上升，进入青春期后增长更快" }),
			"\n",
			createVNode(_components.li, { children: "瘦体重随年龄增长，女童约 13 岁、男童约 15 岁出现增长高峰" }),
			"\n",
			createVNode(_components.li, { children: "男童受睾酮影响更易出现中心性脂肪，女童受雌二醇影响更易出现周围性脂肪" }),
			"\n"
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "四脑发育",
			children: "四、脑发育"
		}),
		"\n",
		createVNode(_components.p, { children: "胎儿期最后 3 个月和出生后头 2 年是大脑发育加速期。大脑最先成熟的区域包括初级运动区和初级感觉区。0～18 个月是中枢神经系统髓鞘化的重要阶段，胎儿中后期至出生后 6 个月是脑组织生长的关键期。" }),
		"\n",
		createVNode(_components.p, { children: "青春期大脑成熟存在性别差异，女童部分灰质厚度达峰年龄通常早于男童。" }),
		"\n",
		createVNode($$ScammonChart, {}),
		"\n",
		createVNode(_components.h2, {
			id: "五scammon-四种生长模式",
			children: "五、Scammon 四种生长模式"
		}),
		"\n",
		createVNode(_components.p, { children: "一般型、神经系统型、淋巴系统型和生殖系统型不是“四种体型”，而是四类组织器官随年龄变化的生长曲线。图表记忆时抓住“突增期在哪里”和“是否先高后降”。" }),
		"\n",
		createVNode(_components.h2, {
			id: "往年题反复考的地方",
			children: "往年题反复考的地方"
		}),
		"\n",
		createVNode(_components.p, { children: "公众号资料把这一章拆成体格、体能、体成分和脑发育。反复出现的是两次生长突增、生长长期趋势、Sheldon 三型、健康相关体能、二成分模型、男女体脂分布和脑发育加速期。Scammon 四种模式在 2022、2023 年都考过，2023 年还要求用英文写。" }),
		"\n",
		createVNode(_components.p, { children: [
			"对应本章题库：",
			createVNode(_components.a, {
				href: "#chapter-quiz",
				children: "做本章题"
			}),
			"。其中已收录 Scammon 模式的 2022/2023 年往年题。"
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "容易做错的地方",
			children: "容易做错的地方"
		}),
		"\n",
		createVNode(_components.ul, { children: [
			"\n",
			createVNode(_components.li, { children: "第一生长突增期不是“出生后”才开始，身长突增从孕中期已开始。" }),
			"\n",
			createVNode(_components.li, { children: "体型三分法里，外胚层体型是瘦长型，不是“外向型”。" }),
			"\n",
			createVNode(_components.li, { children: "体脂率下降不等于体重不增长，青春期瘦体重增加更明显。" }),
			"\n"
		] })
	] });
}
function MDXContent(props = {}) {
	const { wrapper: MDXLayout } = props.components || {};
	return MDXLayout ? createVNode(MDXLayout, Object.assign({}, props, { children: createVNode(_createMdxContent, props) })) : _createMdxContent(props);
}
var frontmatter = {
	"title": "第二章 儿童少年身体发育",
	"order": 2,
	"summary": "体格、体能、体成分和脑发育的年龄变化。",
	"quiz": "ch02"
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
			"slug": "一体格发育",
			"text": "一、体格发育"
		},
		{
			"depth": 3,
			"slug": "阶段性变化",
			"text": "阶段性变化"
		},
		{
			"depth": 3,
			"slug": "身体比例与体型",
			"text": "身体比例与体型"
		},
		{
			"depth": 2,
			"slug": "二体能发育",
			"text": "二、体能发育"
		},
		{
			"depth": 2,
			"slug": "三体成分发育",
			"text": "三、体成分发育"
		},
		{
			"depth": 2,
			"slug": "四脑发育",
			"text": "四、脑发育"
		},
		{
			"depth": 2,
			"slug": "五scammon-四种生长模式",
			"text": "五、Scammon 四种生长模式"
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
var url = "src/content/chapters/ch02.mdx";
var file = "C:/Users/15417/Documents/ChatGPT/课程网站/src/content/chapters/ch02.mdx";
var Content = (props = {}) => MDXContent({
	...props,
	components: {
		Fragment,
		...props.components
	}
});
Content[Symbol.for("mdx-component")] = true;
Content[Symbol.for("astro.needsHeadRendering")] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/15417/Documents/ChatGPT/课程网站/src/content/chapters/ch02.mdx";
__astro_tag_component__(Content, "astro:jsx");
//#endregion
export { Content, Content as default, file, frontmatter, getHeadings, url };
