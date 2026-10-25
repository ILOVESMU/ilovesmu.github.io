import { i as __exportAll, n as createAstro, r as createComponent, t as $$BaseLayout } from "./BaseLayout_CgphDgKw.mjs";
import { C as addAttribute, b as renderTemplate, f as renderComponent, m as Fragment, x as maybeRenderHead } from "./jsx-runtime_NDG3pEuD.mjs";
import { n as render, t as getCollection } from "./_astro_content_Xb-_pjdD.mjs";
import { n as getQuestionsForChapter } from "./questions_BwonQCMK.mjs";
import { t as $$ModeSwitch } from "./ModeSwitch_mLnc5uQI.mjs";
import { t as QuizRunner } from "./QuizRunner_BWVfUfqz.mjs";
var chapters_default = {
	ch00: {
		"oneLine": "绪论别急着背定义。研究对象、重点人群、三级预防和几个健康观，后面每章都会再碰到。",
		"hooks": [
			{
				"title": "0～24 岁是范围，中小学生是重点",
				"body": "这两个答案我一开始也老串。研究对象写 0～24 岁，是因为这门课从婴幼儿一直看到大学生；学校卫生平时盯得最紧的却是中小学生。题目问范围答前者，问重点人群答后者。",
				"links": ["ch01"]
			},
			{
				"title": "筛查、早发现归二级预防",
				"body": "一级预防是拦病因和危险因素，二级才是早发现、早诊断、早干预。看到“体检筛查”“视力普查”就往二级放，别因为事情发生在生病之前就全算成一级。",
				"links": ["ch08"]
			},
			{
				"title": "生物-心理-社会，拿一个具体孩子去套",
				"body": "比如一个孩子近视加深，不只是眼球的事。遗传、用眼习惯、作业量、家里采光、户外活动时间都在里面。只盯一个因素，解释通常不完整。",
				"links": ["ch07", "ch09"]
			},
			{
				"title": "生态观是提醒你别只怪孩子",
				"body": "同一个孩子，在家里、班里、学校里表现可能完全不同。分析健康问题时，家庭、学校、社区和政策都要看。把所有问题都算到个人头上，往往是最省事也最没用的解释。",
				"links": ["ch05"]
			},
			{
				"title": "生命周期看的是累积",
				"body": "孕前、孕期、婴幼儿、学龄期、青春期不是五个互不相干的阶段。前面发生的事，后面可能还在算账。DOHaD 和生命初始 1000 天，都是从这里长出来的。",
				"links": ["ch07"]
			}
		],
		"connections": "绪论像课程的门牌和楼层图。后面讲生长发育、健康问题、常见病，都能回到这里找位置。",
		"examCue": "最常见的错是把 0～24 岁和中小学生互换，或者把筛查、早发现塞进一级预防。"
	},
	ch01: {
		"oneLine": "这章先分清生长、发育、成熟，再记住几条规律。概念混了，后面的题很容易一连错。",
		"hooks": [
			{
				"title": "长高长重是生长，功能变复杂是发育",
				"body": "身高体重增加，偏量变，叫生长；器官功能分化、心理和行为逐渐成熟，偏质变，叫发育。成熟则是已经到了相对完备的状态。三个词经常一起出现，但题目问的往往只是其中一个。",
				"links": ["ch02", "ch04"]
			},
			{
				"title": "追赶生长不是无条件的好事",
				"body": "生病、营养不良或长期应激让生长慢下来，原因去掉后会加速往原来的轨迹追。年龄越小，追赶通常越明显。但追得太快也可能带来代谢负担，所以不能简单理解成“补回来就行”。",
				"links": ["ch07"]
			},
			{
				"title": "动作发育的顺序可以想一个婴儿",
				"body": "先能抬头，再翻身、坐、爬、站、走；靠近躯干的动作先发育，大动作通常早于捏小东西这类精细动作。背“头尾发展律”时，脑子里过一次这个顺序就不容易反。",
				"links": ["ch03"]
			},
			{
				"title": "Scammon 四条线各有各的节奏",
				"body": "一般型跟着身高体重走，婴儿期快、青春期再冲；神经型在 6 岁前基本冲完；淋巴型先长到成人的约两倍，再退下来；生殖型前十年几乎不动，青春期才明显启动。题目问胸腺、淋巴结，基本就是淋巴型。",
				"links": ["ch02"]
			},
			{
				"title": "可塑性有窗口，但不是一次定终身",
				"body": "早期风险可能把发展轨迹压低，保护因素和及时干预又能把它往回调。神经系统尤其明显。不过可塑性不等于怎么都能补回来，窗口越往后，代价通常越大。",
				"links": ["ch05", "ch09"]
			}
		],
		"connections": "第一章是后面的共同底座。第二章把身体展开，第三章转到心理，第四章讲青春期的第二次突增。",
		"examCue": "英文题常考 catch-up growth 和 Scammon 四型；“精细动作早于大动作”是常见错项。"
	},
	ch02: {
		"oneLine": "身体发育不止长高长重。体格、体能、体成分、脑发育四条线，时间表各不相同。",
		"hooks": [
			{
				"title": "第一突增期从娘胎里就开始了",
				"body": "身长增长从孕中期加速，体重增长从孕晚期更明显，到 1 岁末都很猛。中间有一段相对平稳，青春期才第二次突增。把第一突增期记成“出生以后才开始”，这题就丢了。",
				"links": ["ch04"]
			},
			{
				"title": "Sheldon 三型看外形，不是看性格",
				"body": "内胚层偏圆胖，消化器官发达；中胚层偏健壮，骨骼肌肉发达；外胚层偏瘦长，神经系统和感觉器官发达。外胚层跟“外向”没有关系，这个坑很常见。",
				"links": ["ch03"]
			},
			{
				"title": "青春期体脂，男女方向不一样",
				"body": "男孩青春期体脂率通常下降，女孩上升。睾酮让脂肪更容易往中心堆，雌二醇让脂肪更容易往臀腿走。记的时候别只背激素名，直接想脂肪往哪儿去。",
				"links": ["ch04"]
			},
			{
				"title": "脑发育的高峰来得早",
				"body": "胎儿最后三个月和出生后头两年是加速期，6 岁前神经型基本走完。所以早期营养、疾病和刺激对脑的影响特别大。青春期再突增的主要是身体和生殖系统，不是大脑重新来一遍。",
				"links": ["ch03", "ch05"]
			},
			{
				"title": "Scammon 和 Sheldon 别混",
				"body": "Scammon 是组织器官随年龄变化的四条生长曲线，Sheldon 才是三种体型。看到胸腺、淋巴结、生殖器官，是 Scammon；看到圆胖、健壮、瘦长，是 Sheldon。",
				"links": ["ch01"]
			}
		],
		"connections": "第一章讲规律，这一章把规律落到身体四条线；第三章转到心理，第四章专门讲青春期。",
		"examCue": "第一突增期、外胚层体型、Scammon 四型最容易记反，尤其别把外胚层当成“外向”。"
	},
	ch03: {
		"oneLine": "心理发育按认知、语言、情绪、个性与社会化四条线走，年龄和典型表现要能对上。",
		"hooks": [
			{
				"title": "皮亚杰四阶段，想孩子在干什么",
				"body": "0～2 岁主要靠感觉和动作；2～7 岁会用表象，但看问题常从自己出发；7～11 岁能借具体事物推理；11 岁以后才逐渐能做假设和演绎。背阶段名时顺手想一个场景，比只记年龄牢。",
				"links": ["ch09"]
			},
			{
				"title": "自我中心不是自私",
				"body": "前运算阶段的孩子不是不肯替别人想，而是暂时做不到从别人的角度看问题。题目把它解释成“自私”，基本就是在设坑。",
				"links": ["ch09"]
			},
			{
				"title": "视觉先能看清，再能辨色",
				"body": "出生时大约只能看清 19 厘米，6 个月以前是视力敏感期，4 个月左右开始辨色，2～3 岁能正确分辨红黄绿蓝。时间点不多，但很容易混。",
				"links": ["ch08"]
			},
			{
				"title": "18 个月后词汇突然多起来",
				"body": "前面是一个词一个词地蹦，18 个月后出现词汇激增，20～30 个月是掌握词法和句法的关键期。记成“先攒词，再连句”就行。",
				"links": ["ch01"]
			},
			{
				"title": "气质比例：平易最多，困难最少",
				"body": "平易型约 40%，中间型约 35%，缓慢型约 15%，困难型约 10%。不用给每个数字编故事，知道困难型只占一成，已经能排掉很多错项。",
				"links": ["ch09"]
			},
			{
				"title": "青春期情绪的两极性",
				"body": "来得快、强度高，外表看起来不一定明显，内心波动可能很大。这跟后面的自伤、情绪障碍和危机识别是连着的。",
				"links": ["ch09"]
			}
		],
		"connections": "第一章讲生长规律，这一章讲心理发育的路标；第九章会把这里的“偏离”具体成心理卫生问题。",
		"examCue": "常考皮亚杰阶段、气质比例和视觉敏感期。“前运算等于自私”“困难型占 40%”都是坑。"
	},
	ch04: {
		"oneLine": "先把 adolescence、puberty、puberty timing 分清：一个讲阶段，一个讲过程，一个讲时间。",
		"hooks": [
			{
				"title": "三个词各问各的",
				"body": "adolescence 是从童年向成年过渡的年龄段；puberty 是青春期早期生殖系统发育成熟的生物学过程；puberty timing 是这些事件什么时候开始、按什么顺序发生。英文题基本就在这三者之间绕。",
				"links": ["ch02"]
			},
			{
				"title": "生长突增从脚和腿先开始",
				"body": "顺序大致是足长、下肢长、手长、上肢长，所以先出现“腿变长”的体态，坐高指数先降；青春中后期躯干追上来，坐高指数再回升。",
				"links": ["ch02"]
			},
			{
				"title": "男女第二性征顺序分开背",
				"body": "女孩通常乳房先发育，再到阴毛、腋毛；男孩通常阴毛、腋毛、胡须。两组顺序不要混成一条线。",
				"links": ["ch03"]
			},
			{
				"title": "初潮和遗精是标志，不是终点",
				"body": "月经初潮说明女性性发育进入重要阶段，但排卵和周期还可能不稳定；遗精是男性生殖功能开始成熟的重要标志。题目说“初潮等于性成熟完成”，一般就是错的。",
				"links": ["ch09"]
			},
			{
				"title": "成熟裂隙：身体先到了，角色还没到",
				"body": "生理上已经接近成人，心理社会角色和应对能力却没准备好。很多青春期冲突不是简单一句“叛逆”，而是这两边没同步。",
				"links": ["ch09", "ch10"]
			}
		],
		"connections": "第二章讲身体发育，这一章把镜头推到青春期；第三章的心理变化在这里和生理变化撞在一起。",
		"examCue": "最爱考 puberty 和 puberty timing、PHV 与 PHA、男女第二性征顺序，以及“初潮是否等于性成熟完成”。"
	},
	ch05: {
		"oneLine": "遗传给一个范围，环境决定最后走到哪。别把“遗传度高”理解成“改不了”。",
		"hooks": [
			{
				"title": "遗传决定潜能，环境决定实现程度",
				"body": "遗传影响可能达到的范围，营养、疾病、家庭和学校条件影响最后实现多少。遗传度高只说明群体差异里遗传贡献大，不等于个体完全被基因锁死。",
				"links": ["ch06"]
			},
			{
				"title": "双生子研究为什么能估遗传度",
				"body": "同卵双生子基因相似度接近 100%，异卵约 50%。比较两组性状相似程度，就能估计遗传贡献。GWAS 估出来的遗传度常更低，这个差距叫“遗传度缺失”。",
				"links": ["ch06"]
			},
			{
				"title": "表观遗传改的是表达，不是 DNA 字母",
				"body": "DNA 序列没变，甲基化、组蛋白修饰这些东西会改变基因开不开、开多大。它可以受环境影响，也可能传给下一代，但不是基因突变。",
				"links": ["ch07"]
			},
			{
				"title": "春天长个，秋天长肉",
				"body": "这是课件给的季节规律，方向别记反。春天身高增长较快，秋天体重增长较快。",
				"links": ["ch02"]
			},
			{
				"title": "儿童为什么更容易受空气污染影响",
				"body": "气道比较窄，呼吸频率又高，同样浓度的污染，吸进去的相对更多。铅主要伤神经和造血系统，看到儿童铅暴露，先想到这两块。",
				"links": ["ch08"]
			}
		],
		"connections": "第一章讲规律，这一章讲谁在推着规律走；第六章接着讲怎么把这些影响测出来。",
		"examCue": "“遗传决定现实性”是说反了；表观遗传不是基因突变；春季身高、秋季体重的方向也常被改掉。"
	},
	ch06: {
		"oneLine": "这章像一套工具：先选调查设计，再决定正常值，最后选评价方法。",
		"hooks": [
			{
				"title": "五种设计，先看能不能看速度",
				"body": "横断面是某一时点拍一张照片；监测是同一地区长期连续看；纵向是跟同一批人很多年；序列设计先横断面再追踪；干预设计要比较干预前后或两组差异。问生长速度，横断面通常不够。",
				"links": ["ch05"]
			},
			{
				"title": "正常值会过时",
				"body": "现状正常值是当前人群的实际水平，理想正常值参考生长潜力较好的人群。长期趋势会让旧标准不再合适，所以正常值通常隔几年要修订。",
				"links": ["ch02"]
			},
			{
				"title": "离差、百分位、Z 分",
				"body": "离差法用均值和标准差；百分位法把同年龄同性别的人排队看站位；Z 分法看离参照中心几个标准差。三个都能评价水平，但读法不一样。",
				"links": ["ch07"]
			},
			{
				"title": "四种发育年龄",
				"body": "形态年龄看外形，第二性征年龄用于青春期，齿龄常用于 6 个月到 13 岁，骨龄应用最广、一般拍手腕。骨龄不是“身高年龄”，它看骨骼成熟度。",
				"links": ["ch04"]
			}
		],
		"connections": "第五章讲影响因素，这一章讲怎么测量和评价；第七章开始进入健康问题和干预。",
		"examCue": "横断面不能直接看生长速度；百分位和 Z 分含义不同；骨龄不是身高年龄。"
	},
	ch07: {
		"oneLine": "健康不是一句“没病”。这章先讲四维健康，再看群体主要问题，最后把目光拉到生命早期。",
		"hooks": [
			{
				"title": "健康有四个维度",
				"body": "身体、心理、社会适应、道德健康。身体健康是最基本的，但“没病”只说明其中一部分。题目说健康等于没有疾病，直接判错。",
				"links": ["ch09"]
			},
			{
				"title": "发病率看新发，患病率看现有",
				"body": "发病率的分母是暴露人群，盯一段时间里的新病例；患病率盯某个时点或时期的现患病例。学校、幼儿园短期暴发常用罹患率。",
				"links": ["ch06"]
			},
			{
				"title": "主要健康问题，答题时按类抓",
				"body": "伤害、心理行为问题、近视、超重肥胖、营养不足、慢性病低龄化、传染病，再加上流动和留守等特殊群体。简答题最容易漏的是特殊群体。",
				"links": ["ch08", "ch10"]
			},
			{
				"title": "DOHaD 讲的是早期暴露和成年疾病",
				"body": "胎儿和婴幼儿时期营养不良或营养过剩，可能让组织器官的结构和功能发生程序性改变，成年后慢性病风险跟着变。不是“小时候的事过去就过去了”。",
				"links": ["ch05"]
			},
			{
				"title": "生命初始 1000 天是一个窗口",
				"body": "从怀孕到出生后 2 岁，是预防成年慢性病的重要时期。错过以后不是完全不能补，但难度和代价都会上去。",
				"links": ["ch01"]
			}
		],
		"connections": "第六章讲评价，这一章用评价结果看群体健康；第八章开始逐个讲常见病。",
		"examCue": "DOHaD 和生命初始 1000 天出现得很频繁；“健康等于没病”“发病率等于患病率”都是常见错项。"
	},
	ch08: {
		"oneLine": "常见病按病种拆。近视看屈光，肥胖看能量和界值，龋齿看四联因素，哮喘看遗传和环境。",
		"hooks": [
			{
				"title": "近视不只盯眼轴",
				"body": "眼轴太长，或者角膜、晶状体屈光力太强，平行光线都会提前聚焦。只记“眼轴过长”，遇到问屈光参数的多选题就会漏。",
				"links": ["ch12"]
			},
			{
				"title": "儿童肥胖界值不是成人 24/28",
				"body": "儿童筛查常用同性别年龄别 BMI 的 P85 和 P95。成人超重肥胖才常用 24 和 28。两套界值混在一起，是很容易犯的错。",
				"links": ["ch05"]
			},
			{
				"title": "龋齿四联因素",
				"body": "细菌和菌斑、宿主、食物、时间。四个都要有，答题时最容易把“时间”忘掉。",
				"links": ["ch13"]
			},
			{
				"title": "哮喘：底子和诱因分开看",
				"body": "多基因遗传和较高遗传度是底子；变应原、呼吸道病毒感染、气候变化、空气污染和食物是诱因。呼吸道病毒感染还和气道高反应性有关。",
				"links": ["ch05"]
			},
			{
				"title": "脊柱弯曲多数是姿势性的",
				"body": "不良姿势、课桌椅不合适、体力活动不足和营养体质因素都可能参与。题目问最常见的原因，先考虑姿势性。",
				"links": ["ch12"]
			}
		],
		"connections": "第七章讲群体健康问题，这一章把最常见的几种病拆开；第九章转到心理卫生。",
		"examCue": "近视别只写眼轴；儿童肥胖别套成人界值；龋齿四因素别漏“时间”。"
	},
	ch09: {
		"oneLine": "先分心理卫生问题和精神障碍，再看严重程度、持续时间、功能损害。标签别贴太快。",
		"hooks": [
			{
				"title": "问题和障碍不是一回事",
				"body": "心理卫生问题范围更宽，很多是暂时的偏倚；精神障碍通常已经超过年龄允许的范围，并造成功能损害。不是所有情绪波动都要贴障碍的标签。",
				"links": ["ch03"]
			},
			{
				"title": "ADHD 的核心不是“坐不住”",
				"body": "持续注意缺陷、多动和冲动，并且影响学习、人际或生活功能，才更像 ADHD。单凭调皮、好动不能下结论。男童诊断率通常高于女童，但女童也可能被低估。",
				"links": ["ch03"]
			},
			{
				"title": "ASD 看社交沟通和重复刻板",
				"body": "社交沟通障碍、兴趣狭窄、重复刻板行为，还要排除听力和发声的器质性问题。孩子“听不见”不一定是耳朵坏了，也可能是社交沟通的方式不同。",
				"links": ["ch03"]
			},
			{
				"title": "情绪障碍里没有孤独症",
				"body": "焦虑、抑郁、强迫、恐怖属于情绪障碍；孤独症谱系障碍是神经发育障碍。多选题看到 autism，先把它挑出去。",
				"links": ["ch07"]
			},
			{
				"title": "学习困难不等于智商低",
				"body": "可能卡在特定认知能力、注意、情绪或环境因素上。某一科差，不代表整体智力差。",
				"links": ["ch03"]
			}
		],
		"connections": "第三章讲心理发育的路标，这一章讲路标偏了怎么办；第十章接着讲伤害和暴力。",
		"examCue": "常把孤独症塞进情绪障碍，把学习困难等同低智商，或者把 ADHD 说成“长大就好”。"
	},
	ch10: {
		"oneLine": "伤害先分意外和故意，再用 Haddon 矩阵拆三因素三阶段。别被“意外”两个字骗了。",
		"hooks": [
			{
				"title": "意外不等于不可预防",
				"body": "道路交通伤害、溺水、跌落、中毒、烧伤、窒息都是常见类型。“意外”只是说主观上没想让它发生，不是说没有规律、不能干预。",
				"links": ["ch07"]
			},
			{
				"title": "Haddon 就是一张三乘三的表",
				"body": "横着写发生前、发生中、发生后，竖着写宿主、媒介物、环境。答题时先把表画出来，再往格子里填措施，比在脑子里乱抓稳。",
				"links": ["ch07"]
			},
			{
				"title": "校园暴力是故意伤害",
				"body": "分界线在意图，不在事发地点。校园暴力、自伤都不属于意外伤害。",
				"links": ["ch09"]
			},
			{
				"title": "自杀前的信号不止抑郁",
				"body": "紧张、抑郁、失望、易怒、担忧都可能出现。多选题问“常常存在哪些”，不要只勾一个抑郁。",
				"links": ["ch09"]
			},
			{
				"title": "越脆弱的孩子，受害风险越高",
				"body": "有智力障碍或神经系统疾病的儿童，遭受虐待和忽视的风险更高，不是更低。贫困、家庭不稳定、父母酗酒也会增加风险。",
				"links": ["ch09"]
			}
		],
		"connections": "第九章讲心理问题，这一章讲外显的伤害和暴力；第十一章转到学校生活安排。",
		"examCue": "Haddon 三因素是宿主、媒介物、环境；校园暴力不是意外；近视会影响伤害风险，不能说没影响。"
	},
	ch11: {
		"oneLine": "这章讲怎么安排一天的学习和活动。大脑有它自己的工作节奏，硬撑通常不是办法。",
		"hooks": [
			{
				"title": "大脑皮质五个特性，串起来看",
				"body": "刚开始要预热，是始动调节；中间有最兴奋的点，是优势法则；练熟了成习惯，是动力定型；累了要刹车，是保护性抑制；快结束时还能冲一下，是终末激发。五个词别孤立背。",
				"links": ["ch03"]
			},
			{
				"title": "课程轮换是镶嵌式活动",
				"body": "一节数学一节语文，让不同脑区轮流兴奋、轮流休息。看到“轮换课程”“交替用脑”，先想到镶嵌式活动。",
				"links": ["ch12"]
			},
			{
				"title": "疲劳、疲倦、过劳",
				"body": "疲劳是生理状态，工作能力下降；疲倦是主观感受，可能比疲劳早，也可能晚；过劳是长期疲劳积累，休息后也不能完全恢复。题目问临界指标，通常选早期疲劳。",
				"links": ["ch07"]
			},
			{
				"title": "早期疲劳先看坐姿和注意力",
				"body": "坐立不安、注意力不集中，是早期信号；逻辑思维和记忆力明显下降，说明已经累得更深。",
				"links": ["ch03"]
			},
			{
				"title": "体育课的运动密度",
				"body": "群体运动密度不低于 75%，意思是至少四分之三的时间学生真的在动，不是排队看别人练。",
				"links": ["ch12"]
			}
		],
		"connections": "第十章讲伤害，这一章讲怎么安排学习生活；第十二章接着讲教室环境。",
		"examCue": "课程轮换常被误选保护性抑制；疲劳、疲倦、过劳容易混；75% 常被记成 60%。"
	},
	ch12: {
		"oneLine": "这章数字多。先按采光、照明、黑板、噪声、课桌椅、校址分组，再看每组数字。",
		"hooks": [
			{
				"title": "照度均匀度 0.7",
				"body": "最暗的地方不能低于最亮处的七成。低于 0.7，桌面明暗差会很明显。考试常拿 0.5 来混淆。",
				"links": ["ch08"]
			},
			{
				"title": "投射角看窗顶，开角看遮挡",
				"body": "投射角不小于 20°～22°，看的是窗上缘；开角不小于 4°～5°，看的是窗上缘和对面遮挡物之间的角度。两个数字很容易反。",
				"links": ["ch08"]
			},
			{
				"title": "看黑板上缘至少 45°",
				"body": "学生视线和黑板面的垂直夹角不低于 45°。角度太小，前排学生要仰着头看，眼睛和颈肩都累。",
				"links": ["ch11"]
			},
			{
				"title": "教室噪声小于 50 分贝",
				"body": "超过这个数，老师要提高嗓门，学生也更容易走神。50 这个数字直接记，不用绕。",
				"links": ["ch11"]
			},
			{
				"title": "椅座距离 4 厘米，桌椅高差 1/3 坐高",
				"body": "最合适的椅座距离是 4 厘米以内的负距离，椅座前缘稍微探到桌沿下面。桌椅高差常按坐高的三分之一。记成“三份坐高，一份高差”。",
				"links": ["ch02"]
			},
			{
				"title": "校址远离污染，不挨着市场和娱乐场所",
				"body": "学校要远离化学、生物、物理污染源，不毗邻市场和公共娱乐场所。靠近科技文化、体育设施通常是加分项。题目把“近”说成“不宜”，就是反着设坑。",
				"links": ["ch13"]
			}
		],
		"connections": "第十一章讲时间安排，这一章讲空间环境；第十三章讲健康教育，把环境和个人行为接起来。",
		"examCue": "投射角和开角最容易反；照度均匀度 0.7 常被改成 0.5；桌椅高差常被写成二分之一。"
	},
	ch13: {
		"oneLine": "健康教育主要教人怎么做，健康促进还要让环境、政策和制度支持这么做。",
		"hooks": [
			{
				"title": "一个劝你走，一个把路铺好",
				"body": "健康教育主要通过信息传播和行为干预；健康促进还要动政策、环境、社区和卫生服务，让健康选择更容易实现。范围一个窄，一个宽。",
				"links": ["ch12"]
			},
			{
				"title": "课堂讲授最普遍，但不算参与式",
				"body": "课堂讲授适合大班系统传授知识，是国内学校最常用的方法。参与式要学生开口、动手，比如同伴教育、角色扮演、小组讨论、案例分析和头脑风暴。讲座偏单向，也不在参与式名单里。",
				"links": ["ch11"]
			},
			{
				"title": "大众媒体是间接方法",
				"body": "隔着屏幕传播，不需要面对面，所以属于间接健康教育方法。同伴教育、课堂、讲座、头脑风暴都要人到场。",
				"links": ["ch12"]
			},
			{
				"title": "组织改变：解冻、改变、再冻结",
				"body": "先让学校觉得非改不可，再上课、做同伴支持、建戒烟小组和无烟环境，最后把制度、巡查、奖励和评价固定下来。只劝个人，不算组织改变。",
				"links": ["ch07"]
			},
			{
				"title": "评价分过程、影响、结局",
				"body": "过程评价看活动有没有按计划做，影响评价看知识、态度和行为有没有变，结局评价看健康结果。RE-AIM 再补覆盖、有效、采纳、实施和维持。",
				"links": ["ch06"]
			}
		],
		"connections": "第十二章讲学校环境，这一章讲怎么让人和行为一起改变；到这里，课程从“看见问题”走到“设计干预”。",
		"examCue": "戒烟题连续几年出现，答题要写组织和制度，不是只劝个人；讲座不是参与式；大众媒体不是面对面方法。"
	}
};
//#endregion
//#region src/components/content/ChapterMemoryAid.astro
createAstro("https://astro.build");
var $$ChapterMemoryAid = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$ChapterMemoryAid;
	const { chapterKey, chapterTitles = {} } = Astro.props;
	const aid = chapters_default[chapterKey];
	return renderTemplate`${aid && renderTemplate`${maybeRenderHead($$result)}<details class="memory-aid chapter-memory-aid"><summary><span>这一章怎么记</span><small>记不住时点开</small></summary><div class="memory-aid-content"><p class="memory-one-line">${aid.oneLine}</p><ul>${aid.hooks.map((hook) => renderTemplate`<li><strong>${hook.title}</strong><span>${hook.body}</span>${hook.links && hook.links.length > 0 && renderTemplate`<span class="memory-aid-links">相关章节：${hook.links.map((link, index) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`${index > 0 && "、"}<a${addAttribute(`/learn/${link}/`, "href")}>${chapterTitles[link] ?? link}</a>` })}`)}</span>`}</li>`)}</ul><p><strong>前后章联系：</strong>${aid.connections}</p><p><strong>考试怎么问：</strong>${aid.examCue}</p><p class="memory-aid-note">这只是复习时用的抓手。真碰到争议题，还是回章节原文和课件。</p></div></details>`}`;
}, "C:/Users/15417/Documents/ChatGPT/课程网站/src/components/content/ChapterMemoryAid.astro", void 0);
//#endregion
//#region src/pages/learn/[slug].astro
var _slug__exports = /* @__PURE__ */ __exportAll({
	default: () => $$Slug,
	file: () => $$file,
	getStaticPaths: () => getStaticPaths,
	url: () => $$url
});
createAstro("https://astro.build");
async function getStaticPaths() {
	const chapters = (await getCollection("chapters")).sort((left, right) => left.data.order - right.data.order);
	return chapters.map((chapter, index) => ({
		params: { slug: chapter.id },
		props: {
			chapter,
			next: chapters[index + 1] ?? null
		}
	}));
}
var $$Slug = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Slug;
	const { chapter, next } = Astro.props;
	const { Content } = await render(chapter);
	const questions = getQuestionsForChapter(chapter.data.quiz);
	const chapters = (await getCollection("chapters")).sort((left, right) => left.data.order - right.data.order);
	const chapterTitles = Object.fromEntries(chapters.map((item) => [item.data.quiz, item.data.title.replace(/^第.+?章\s*/, "")]));
	return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": `${chapter.data.title} · 儿童少年卫生学` }, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="learn-layout"><article class="chapter-article"><header class="chapter-header"><div><p class="kicker">${chapter.data.order === 0 ? "课程绪论" : `第 ${String(chapter.data.order).padStart(2, "0")} 章`}</p><h1>${chapter.data.title}</h1><p class="chapter-summary">${chapter.data.summary}</p></div>${renderComponent($$result, "ModeSwitch", $$ModeSwitch, {})}</header>${renderComponent($$result, "ChapterMemoryAid", $$ChapterMemoryAid, {
		"chapterKey": chapter.data.quiz,
		"chapterTitles": chapterTitles
	})}<div class="chapter-body">${renderComponent($$result, "Content", Content, {})}</div><section class="chapter-quiz" id="chapter-quiz" aria-labelledby="chapter-quiz-title"><div class="chapter-quiz-heading"><p class="kicker">练习</p><h2 id="chapter-quiz-title">本章题</h2><p>本章共 ${questions.length} 题，包含直接归属和跨章相关题。下一题可直接跳过，稍后再回来作答。</p></div>${renderComponent($$result, "QuizRunner", QuizRunner, {
		"client:load": true,
		"questions": questions,
		"mode": "chapter",
		"nextHref": next ? `/learn/${next.id}/` : "/",
		"client:component-hydration": "load",
		"client:component-path": "C:/Users/15417/Documents/ChatGPT/课程网站/src/components/quiz/QuizRunner.tsx",
		"client:component-export": "default"
	})}</section>${next && renderTemplate`<a class="chapter-next"${addAttribute(`/learn/${next.id}/`, "href")}><span>下一章</span><strong>${next.data.title}</strong></a>`}</article></div>` })}`;
}, "C:/Users/15417/Documents/ChatGPT/课程网站/src/pages/learn/[slug].astro", void 0);
var $$file = "C:/Users/15417/Documents/ChatGPT/课程网站/src/pages/learn/[slug].astro";
var $$url = "/learn/[slug]";
//#endregion
//#region \0virtual:astro:page:src/pages/learn/[slug]@_@astro
var page = () => _slug__exports;
//#endregion
export { page };
