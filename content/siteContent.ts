import type { Locale } from "@/lib/site";

type Copy = {
  zh: string;
  en: string;
};

type CopyList = {
  zh: readonly string[];
  en: readonly string[];
};

export const siteContent = {
  brand: {
    name: "Si-Tech Intl",
    eyebrow: {
      zh: "海外市场的解决方案与合作入口",
      en: "Solution and partnership entry point for international markets",
    },
    headerTagline: {
      zh: "Telecom · Platforms · AI",
      en: "Telecom · Platforms · AI",
    },
    summary: {
      zh: "Si-Tech Intl 面向海外客户与合作伙伴，重点展示思特奇在运营商 IT 支撑、数字产业平台、AI 产品服务、企业协同与定制化业务系统方面的能力。",
      en: "Si-Tech Intl works with international clients and partners across telecom IT support, industrial digital platforms, AI product and service delivery, cross-team coordination, and custom business systems.",
    },
  },
  contact: {
    email: "info@sitech-intl.com",
    phone: "+1 (408) 352-5288",
    address: "Suite 210, 20410 Town Center Lane, Cupertino, CA 95014",
    linkedin: "LinkedIn coming soon",
  },
  navigation: [
    { href: "/", label: { zh: "首页", en: "Home" } },
    { href: "/solutions", label: { zh: "解决方案", en: "Solutions" } },
    { href: "/partnership", label: { zh: "合作方式", en: "Partnership" } },
    { href: "/stories", label: { zh: "合作故事", en: "Stories" } },
    { href: "/marketplace", label: { zh: "Marketplace", en: "Marketplace" } },
    { href: "/about", label: { zh: "关于我们", en: "About" } },
    { href: "/contact", label: { zh: "联系", en: "Contact" } },
  ],
  proofRibbon: [
    { zh: "30 年复杂系统交付积累", en: "30 years of complex delivery experience" },
    { zh: "80+ 运营商客户经验基础", en: "Reference base across 80+ operator clients" },
    { zh: "运营商 IT 支撑与服务域", en: "Telecom IT support and service operations" },
    { zh: "MVNO 全球化业务支撑", en: "Global MVNO enablement" },
    { zh: "宽带业务支撑平台", en: "Broadband support platform" },
    { zh: "智能客服云平台", en: "Smart customer service cloud" },
    { zh: "统一营销服务门户", en: "Unified marketing and service portals" },
    { zh: "产业中台与数据要素平台", en: "Industrial middle-platform and data element platforms" },
    { zh: "AI 应用 + 开发 + 运营", en: "AI application, development, and operations" },
    { zh: "从试点到联合交付", en: "From pilot to joint delivery" },
  ],
  solutionCategories: [
    {
      key: "telecom",
      title: { zh: "Telecom", en: "Telecom" },
      text: {
        zh: "面向运营商、MVNO 与复杂服务环境的核心能力。",
        en: "Core capabilities for operators, MVNOs, and complex service environments.",
      },
    },
    {
      key: "enterprise",
      title: { zh: "Enterprise & Platforms", en: "Enterprise & Platforms" },
      text: {
        zh: "面向产业平台、协同体系与定制化业务系统的可落地方向。",
        en: "Practical tracks across industrial platforms, coordination systems, and custom business tools.",
      },
    },
    {
      key: "ai",
      title: { zh: "AI & Service", en: "AI & Service" },
      text: {
        zh: "把 AI 真正放进客服、服务和运营流程的方向。",
        en: "Putting AI into customer service, support, and operational workflows in a usable way.",
      },
    },
  ],
  solutionsCatalog: [
    {
      key: "telecom",
      category: "telecom",
      href: "/solutions/telecom-operations",
      storyHref: "/stories",
      eyebrow: {
        zh: "01 运营商 IT 支撑与服务域",
        en: "01 Telecom IT support and service domain",
      },
      title: {
        zh: "运营商、MVNO 与复杂服务环境所需的业务支撑、服务协同与平台能力",
        en: "Business support, service coordination, and platform capability for operators, MVNOs, and complex service environments",
      },
      text: {
        zh: "这是官网最重要的解决方案方向，重点展示运营商 BOSS、客户生命周期管理、MVNO 支撑、宽带支撑、智能客服与统一门户等能力。",
        en: "This is the most important solution track on the site, covering operator BOSS, customer lifecycle support, MVNO enablement, broadband support, smart customer service, and unified portals.",
      },
      bullets: {
        zh: [
          "BOSS / 业务支撑与客户生命周期管理",
          "MVNO 国际化业务支撑与多角色运营",
          "宽带、客服、门户、结算与服务协同",
        ],
        en: [
          "BOSS support and customer lifecycle operations",
          "International MVNO support and multi-role operating models",
          "Broadband, service, portal, settlement, and coordination workflows",
        ],
      },
      linkLabel: { zh: "查看详情", en: "View detail" },
      image: "/images/about/sitech-building.png",
    },
    {
      key: "industry",
      category: "enterprise",
      href: "/solutions/digital-industry-platforms",
      storyHref: "/stories",
      eyebrow: {
        zh: "02 数据要素与数字产业平台",
        en: "02 Data and industrial digital platforms",
      },
      title: {
        zh: "把产业中台、数据要素流通、交易协同和产业运营真正接起来",
        en: "Connect industrial platforms, data flows, transaction coordination, and operational execution into one working system",
      },
      text: {
        zh: "重点体现产业数智化架构、产业互联生态、产业中台和多个真实产业场景的平台能力。",
        en: "This track focuses on industrial digital architecture, ecosystem coordination, industry middle-platform design, and real sector platform scenarios.",
      },
      bullets: {
        zh: [
          "产业中台与“五流”打通",
          "交易、支付、物流、运营协同平台",
          "农产品、肉牛、输配电等场景参考",
        ],
        en: [
          "Industry middle-platforms and five-flow integration",
          "Transaction, payment, logistics, and operating platforms",
          "Reference scenarios in agriculture, livestock, and power delivery",
        ],
      },
      linkLabel: { zh: "查看详情", en: "View detail" },
      image: "/images/hero/digital-workplace.webp",
    },
    {
      key: "ai",
      category: "ai",
      href: "/solutions/ai-customer-service",
      storyHref: "/stories",
      eyebrow: {
        zh: "03 AI 产品与智能客服",
        en: "03 AI products and smart customer service",
      },
      title: {
        zh: "把 AI 应用、智能客服、数字员工和持续运营优化落进真实业务流程",
        en: "Bring AI applications, smart customer service, digital workers, and operational optimization into real business workflows",
      },
      text: {
        zh: "不是做一个概念聊天窗口，而是把 AI 放进客服、知识支持、辅助处理、运营分析和持续优化中。",
        en: "The goal is not a concept chatbot. It is AI in support workflows, knowledge handling, agent assistance, analytics, and ongoing optimization.",
      },
      bullets: {
        zh: [
          "AI 应用 + 开发 + 运营三位一体",
          "智能客服、数字员工与知识支持",
          "从试用到持续运营优化",
        ],
        en: [
          "AI applications, development, and operations as one system",
          "Smart service, digital workers, and knowledge support",
          "From pilot usage to ongoing optimization",
        ],
      },
      linkLabel: { zh: "查看详情", en: "View detail" },
      image: "/images/hero/ai-operations.webp",
    },
    {
      key: "teamshub",
      category: "enterprise",
      href: "/solutions/teamshub-business-os",
      storyHref: "/stories",
      eyebrow: {
        zh: "04 Teamshub 协同与项目推进",
        en: "04 Teamshub coordination and project execution",
      },
      title: {
        zh: "把获客、项目推进、跨团队协作和知识连续性放进一个可运行的工作系统",
        en: "Put lead handling, project execution, cross-team coordination, and knowledge continuity into one usable working system",
      },
      text: {
        zh: "Teamshub 是具体产品与协同方式，适合链路长、角色多、资料重、跨时区协作密集的团队。",
        en: "Teamshub is a concrete product and operating model for teams with long cycles, many roles, heavy documentation, and intense cross-time-zone coordination.",
      },
      bullets: {
        zh: [
          "项目圈子、帖子与知识节点",
          "Agent 摘要、待办与交接支持",
          "从获客到交付的协同体系",
        ],
        en: [
          "Project circles, posts, and knowledge nodes",
          "Agent summaries, next actions, and handoff support",
          "Coordination from lead intake to delivery",
        ],
      },
      linkLabel: { zh: "查看详情", en: "View detail" },
      image: "/images/solutions/teamshub-plan.png",
    },
    {
      key: "custom",
      category: "enterprise",
      href: "/solutions/custom-business-systems",
      storyHref: "/stories",
      eyebrow: {
        zh: "05 定制化业务系统与企业门户",
        en: "05 Custom business systems and enterprise portals",
      },
      title: {
        zh: "围绕客户门户、CRM、工作流、运营后台与集成平台做更贴业务的系统建设",
        en: "Build more business-fit systems across portals, CRM, workflow, operations backends, and integration platforms",
      },
      text: {
        zh: "适合那些现有系统很多、协作断点明显、需要一个更贴合业务流程的平台层的团队。",
        en: "This track fits teams with too many fragmented systems and a need for a platform layer that better matches the way the business actually runs.",
      },
      bullets: {
        zh: [
          "企业门户、伙伴门户与统一入口",
          "CRM、流程、集成与运营后台",
          "可先从占位架构和最小流程切入",
        ],
        en: [
          "Enterprise portals, partner portals, and unified entry points",
          "CRM, workflows, integrations, and operations backends",
          "Can start from a minimum operating flow and placeholder architecture",
        ],
      },
      linkLabel: { zh: "查看详情", en: "View detail" },
      image: "/images/stories/mvp-product-shape.png",
    },
  ],
  home: {
    hero: {
      image: "/images/hero/ai-operations.webp",
      badge: {
        zh: "面向运营商、产业平台、企业服务团队与合作伙伴项目",
        en: "For operators, industry platforms, service teams, and partner-led projects",
      },
      title: {
        zh: "把复杂业务支撑、运营协同与平台建设，推进到真正可落地的下一步",
        en: "Move complex operational support, service coordination, and platform delivery into a practical next phase",
      },
      subtitle: {
        zh: "Si-Tech Intl 面向海外市场，重点展示思特奇在运营商 IT 支撑、数字产业平台、AI 服务与企业协同方面最值得先谈的方向。",
        en: "Si-Tech Intl brings the strongest parts of the broader Si-Tech capability base into an international-facing site, starting with telecom IT support, industrial platforms, AI-enabled service, and cross-team execution.",
      },
      primaryCta: { zh: "开始沟通", en: "Talk to Us" },
      secondaryCta: { zh: "查看解决方案", en: "Explore Solutions" },
    },
    companyIntro: {
      eyebrow: {
        zh: "思特奇主营业务与能力背书",
        en: "Core business and capability backing from the broader Si-Tech organization",
      },
      title: {
        zh: "官网先讲海外客户最该知道的重点：思特奇在运营商与复杂业务支撑上的长期积累",
        en: "The first thing international buyers should understand is Si-Tech’s long-term depth in operator and complex support environments",
      },
      text: {
        zh: "这不是单一产品团队的网站，而是一个对外合作入口。背后能力基础来自 1995 年以来持续积累的复杂系统、运营商支撑、产业平台、AI 与大规模交付经验。",
        en: "This site is not built around a single product team. It is a market-facing entry point backed by decades of work in complex systems, operator support, industrial platforms, AI, and large-scale delivery.",
      },
      stats: [
        { value: "1995", label: { zh: "公司成立时间", en: "Company founded" } },
        { value: "30+", label: { zh: "年复杂系统与交付积累", en: "Years of complex delivery experience" } },
        { value: "3000+", label: { zh: "员工规模", en: "Employees across the broader organization" } },
        { value: "85%+", label: { zh: "研发人员占比", en: "R&D staff ratio" } },
      ],
      pillars: [
        {
          title: { zh: "运营商长期服务经验", en: "Long-term operator service experience" },
          text: {
            zh: "运营商 IT 支撑与服务域是最重要的主战场，也是官网第一优先展示的能力方向。",
            en: "Operator IT support and service delivery is the strongest domain and the first one the site should highlight.",
          },
        },
        {
          title: { zh: "多方向平台能力", en: "Platform capability across multiple domains" },
          text: {
            zh: "除运营商域外，思特奇也在产业平台、AI 应用与企业级平台建设方面形成了清晰能力基础。",
            en: "Beyond telecom, Si-Tech also brings clear capabilities in industrial platforms, AI applications, and enterprise system delivery.",
          },
        },
        {
          title: { zh: "以合作和试点进入项目", en: "Projects can start through scoped collaboration" },
          text: {
            zh: "官网的目标不是一次讲全，而是帮助客户快速判断哪些方向值得继续聊、继续试点、继续推进。",
            en: "The goal of the site is not to explain everything at once. It is to help buyers see which direction is worth discussing, piloting, and moving forward.",
          },
        },
      ],
    },
    problemAreas: {
      title: {
        zh: "我们擅长解决的问题",
        en: "Problems we help solve",
      },
      text: {
        zh: "这里不是泛化能力罗列，而是当前最适合直接讨论的五个方向。",
        en: "These are not generic capability buckets. They are the five directions most ready for real commercial discussion.",
      },
    },
    solutionSelector: {
      title: {
        zh: "解决方案选择区",
        en: "Solution tracks to explore",
      },
      text: {
        zh: "先看哪一类问题最像你当前面对的场景，再进入详情、故事或沟通。",
        en: "Start with the track that feels closest to your current business problem, then move into detail, stories, or a direct conversation.",
      },
    },
    storiesPreview: {
      title: {
        zh: "更能建立信任的，是项目推进逻辑，而不是空泛案例标题",
        en: "What builds trust is the logic of real project delivery, not generic case-study headlines",
      },
      text: {
        zh: "故事页优先使用可公开的真实客户或平台名称；如果具体名称暂时不能公开，就使用明确占位符，后续替换。",
        en: "The story section should use real public customer or platform names whenever possible. If a specific name is not ready for public use, use a clear placeholder and replace it later.",
      },
    },
    aboutPreview: {
      title: {
        zh: "为什么这个网站值得继续看",
        en: "Why this site is worth taking seriously",
      },
      text: {
        zh: "Si-Tech Intl 不是一个孤立的小团队，它是一个面向海外市场的接口，背后连接的是更完整的研发、平台和交付能力。",
        en: "Si-Tech Intl is not a stand-alone small team. It is an international-facing interface backed by a broader organization with real R&D, platform, and delivery depth.",
      },
      bullets: {
        zh: [
          "80+ 运营商客户经验基础",
          "30+ 政府单位与 2w+ 中小企业参考基础",
          "覆盖运营商、产业、AI 与平台建设",
        ],
        en: [
          "Reference base across 80+ operator clients",
          "Experience references across 30+ government units and 20k+ SMBs",
          "Coverage across telecom, industry, AI, and platform delivery",
        ],
      },
    },
    cta: {
      title: {
        zh: "如果你已经知道哪一段业务支撑、服务流程或平台建设需要往前推进，我们可以从一个明确范围开始",
        en: "If you already know which support workflow, service operation, or platform scope needs to move next, we can start from a clearly defined scope",
      },
      text: {
        zh: "可以从运营商支撑、产业平台、AI 客服、Teamshub 协同或定制化业务系统中的一个切口开始。",
        en: "We can start from telecom support, industrial platforms, AI-enabled service, Teamshub coordination, or a custom business system entry point.",
      },
      highlights: {
        zh: [
          "运营商域优先，先从最强主线开始",
          "可以从访谈、占位架构或小范围试点切入",
          "适合需要长期配合而不是一次性交付的项目",
        ],
        en: [
          "Telecom-first, starting from the strongest track",
          "Can begin with interviews, placeholder architecture, or a focused pilot",
          "Built for projects that need ongoing collaboration, not one-off delivery",
        ],
      },
      button: { zh: "提交需求", en: "Submit an Inquiry" },
    },
  },
  solutionsPage: {
    hero: {
      image: "/images/hero/digital-workplace.webp",
      title: { zh: "解决方案", en: "Solutions" },
      subtitle: {
        zh: "Solutions 页不再只展示三个泛化方向，而是固定为五个更适合获客和深入沟通的解决方案轨道。",
        en: "The solutions page is no longer built around three generic tracks. It now shows five clearer directions that are better for commercial conversations and deeper exploration.",
      },
    },
    directionsTitle: {
      zh: "当前最值得先谈的五个方向",
      en: "Five directions most ready for discussion",
    },
    categoryTitle: {
      zh: "按类别理解这五个方向",
      en: "Read the five tracks by category",
    },
    startPoints: {
      title: { zh: "常见切入口", en: "Common starting scopes" },
      items: [
        {
          zh: "先定义一个流程问题，而不是直接上全套系统。",
          en: "Start with one workflow problem instead of trying to replace everything at once.",
        },
        {
          zh: "先把一个可演示、可试用、可交付的小范围跑通。",
          en: "Make one scoped, demonstrable, usable flow work first.",
        },
        {
          zh: "用 Stories 看案例结构，再决定哪些方案值得细聊。",
          en: "Use the story structure to decide which solution deserves a deeper conversation.",
        },
        {
          zh: "如果资料还不完整，也可以先从占位架构和访谈开始。",
          en: "If details are still incomplete, the work can still start from interviews and a placeholder architecture.",
        },
      ],
    },
    cta: {
      title: {
        zh: "如果你已经知道大概属于哪条方向，我们可以直接从这一条开始讨论范围。",
        en: "If you already know which track is closest to your need, we can start the conversation there.",
      },
      button: { zh: "联系沟通", en: "Start the Conversation" },
    },
  },
  solutionDetails: {
    telecom: {
      image: "/images/about/sitech-building.png",
      title: { zh: "运营商 IT 支撑与服务域", en: "Telecom IT support and service domain" },
      subtitle: {
        zh: "以运营商 BOSS、MVNO、宽带支撑、智能客服和统一门户为代表的业务支撑与服务能力。",
        en: "A solution domain centered on operator BOSS, MVNO enablement, broadband support, smart customer service, and unified portals.",
      },
      intro: {
        zh: "这是官网的第一优先方向。重点不是把所有系统名都列出来，而是帮助客户快速理解：你们是否有能力把运营商业务支撑、服务流程、客户管理和多角色协同真正跑顺。",
        en: "This is the first-priority solution on the site. The goal is not to list every system name, but to help buyers see whether we can make telecom support, service workflows, customer handling, and multi-role coordination actually work.",
      },
      capabilityBlocks: [
        {
          title: { zh: "BOSS 与业务支撑", en: "BOSS and business support" },
          bullets: {
            zh: [
              "全业务办理与订单流转",
              "客户全生命周期管理",
              "精细化计费结算与分成支撑",
            ],
            en: [
              "Full-service handling and order flow support",
              "Customer lifecycle management",
              "Settlement, billing, and commission support",
            ],
          },
        },
        {
          title: { zh: "服务与运营协同", en: "Service and operating coordination" },
          bullets: {
            zh: [
              "宽带资源统一纳管与开通激活",
              "工单、装维、售后与履约闭环",
              "客服、运营与服务团队联动",
            ],
            en: [
              "Broadband resource management and activation support",
              "Tickets, field service, after-sales, and fulfillment workflows",
              "Coordination across support, operations, and service teams",
            ],
          },
        },
        {
          title: { zh: "国际化与 MVNO", en: "International and MVNO scenarios" },
          bullets: {
            zh: [
              "多业务模式与多角色运营支撑",
              "统一营销服务门户与全球资源接入",
              "面向国际市场的轻量化敏捷支撑",
            ],
            en: [
              "Multi-model support across retail and distribution scenarios",
              "Unified marketing portals and global resource access",
              "Agile support for international market expansion",
            ],
          },
        },
      ],
      proofTitle: { zh: "为什么这条方向可信", en: "Why this track is credible" },
      proofItems: [
        {
          zh: "来源于长期运营商 IT 支撑与服务域实践，而不是只做界面层产品。",
          en: "The capability base comes from long-term telecom support work, not just surface-level interface products.",
        },
        {
          zh: "公开材料里已经覆盖 BOSS、MVNO、宽带支撑、客服与统一门户等多个运营商关键场景。",
          en: "Public materials already show coverage across BOSS, MVNO, broadband support, customer service, and unified portal scenarios.",
        },
        {
          zh: "适合需要明确交付边界、可分阶段推进的客户。",
          en: "This track works well for buyers who need clear scope and staged delivery.",
        },
      ],
      startTitle: { zh: "常见切入口", en: "Common starting scopes" },
      startItems: {
        zh: [
          "一个 MVNO 业务快速搭建或能力验证项目",
          "宽带受理、开通与服务协同的流程整合",
          "一个客服、工单、运营协同闭环的升级范围",
          "一个统一营销服务门户或渠道运营平台的起步版本",
        ],
        en: [
          "A focused MVNO launch or capability validation scope",
          "Integration of broadband intake, activation, and support workflows",
          "An upgrade scope across service, ticketing, and operational coordination",
          "An initial version of a unified marketing and service portal",
        ],
      },
      storyTitle: { zh: "相关合作故事", en: "Related stories" },
      storyItems: {
        zh: ["中国联通宽带业务支撑平台", "[国际运营商名称占位] 统一营销服务门户"],
        en: ["China Unicom broadband support platform", "[International operator name placeholder] unified marketing service portal"],
      },
    },
    industry: {
      image: "/images/hero/digital-workplace.webp",
      title: { zh: "数据要素与数字产业平台", en: "Data and industrial digital platforms" },
      subtitle: {
        zh: "围绕产业中台、数据要素流通、交易协同和产业智慧运营搭建更贴业务的平台能力。",
        en: "Platform capability built around industrial middle-platforms, data flows, transaction coordination, and industry operations.",
      },
      intro: {
        zh: "数字产业域的重点不是抽象平台概念，而是把数据、交易、支付、物流、企业协同和产业运营真正打通，并服务于具体产业场景。",
        en: "The value here is not an abstract platform concept. It is the ability to connect data, transactions, payment, logistics, enterprise coordination, and industrial operations in real sector scenarios.",
      },
      capabilityBlocks: [
        {
          title: { zh: "产业数智化架构", en: "Industrial digital architecture" },
          bullets: {
            zh: [
              "产业数智化架构与产业互联生态",
              "产业智慧运营框架",
              "政府、协会、企业协同的产业平台基础",
            ],
            en: [
              "Industrial digital architecture and ecosystem design",
              "Industry operations frameworks",
              "Platform foundations across public and enterprise stakeholders",
            ],
          },
        },
        {
          title: { zh: "产业中台与要素流通", en: "Industry middle-platforms and data flows" },
          bullets: {
            zh: [
              "信息流、交易流、资金流、票据流、物流打通",
              "交易、支付、规则、运营工具协同",
              "可作为区域产业基础设施的中台能力",
            ],
            en: [
              "Integration of information, trade, payment, invoice, and logistics flows",
              "Coordination across transactions, payment, rules, and operations tools",
              "Middle-platform capability that acts like industrial infrastructure",
            ],
          },
        },
        {
          title: { zh: "产业场景参考", en: "Reference sector scenarios" },
          bullets: {
            zh: [
              "农产品数字化交易枢纽",
              "肉牛产业数智化平台",
              "输配电产业数智化平台",
            ],
            en: [
              "Agricultural digital trade hubs",
              "Livestock industry digital platforms",
              "Power distribution industry digital platforms",
            ],
          },
        },
      ],
      proofTitle: { zh: "这一方向适合什么客户", en: "Who this direction fits well" },
      proofItems: [
        {
          zh: "需要产业平台、区域平台或多参与方协同基础设施的客户。",
          en: "Buyers who need an industry platform, regional platform, or multi-party operating infrastructure.",
        },
        {
          zh: "希望把数据真正服务于交易、运营和业务协同，而不是停在展示层的客户。",
          en: "Teams that need data to serve transactions, operations, and execution rather than stop at reporting.",
        },
        {
          zh: "可以接受先从占位图、结构图和最小业务闭环开始推进的项目。",
          en: "Projects that can begin with placeholder architecture and a minimum working operating loop.",
        },
      ],
      startTitle: { zh: "常见切入口", en: "Common starting scopes" },
      startItems: {
        zh: [
          "一个产业中台的最小架构与角色边界梳理",
          "一个交易、支付、物流协同链路的先行版本",
          "一个区域或行业平台的数据要素与运营视图起步范围",
          "一个具体产业场景的结构图占位与流程验证",
        ],
        en: [
          "A minimum architecture scope for an industry middle-platform",
          "A first version of a transaction, payment, and logistics coordination flow",
          "An initial data and operations layer for a sector or regional platform",
          "A placeholder architecture and workflow validation for one sector case",
        ],
      },
      storyTitle: { zh: "相关合作故事", en: "Related stories" },
      storyItems: {
        zh: ["黔牛帮肉牛产业数智化平台", "[区域产业平台名称占位] 出海中台项目"],
        en: ["QianNiuBang beef industry digital platform", "[Regional platform name placeholder] going-global middle-platform project"],
      },
    },
    ai: {
      image: "/images/hero/ai-operations.webp",
      title: { zh: "AI 产品与智能客服", en: "AI products and smart customer service" },
      subtitle: {
        zh: "围绕 AI 应用、开发、运营三位一体，把智能客服和数字员工真正放进服务流程。",
        en: "AI applications, development, and operations brought together to put smart service and digital workers into real workflows.",
      },
      intro: {
        zh: "这里的重点不是单次演示，而是 AI 如何持续帮助服务团队更快处理、更好交接、更清楚分析，并随着运营逐步优化。",
        en: "The focus here is not a one-time demo. It is how AI helps support teams work faster, hand work off better, analyze operations more clearly, and improve over time.",
      },
      capabilityBlocks: [
        {
          title: { zh: "应用", en: "Applications" },
          bullets: {
            zh: [
              "智能客服与数字员工",
              "知识支持与内部问答",
              "面向角色和场景的开箱即用能力",
            ],
            en: [
              "Smart customer service and digital workers",
              "Knowledge support and internal Q&A",
              "Ready-to-use capability by role and scenario",
            ],
          },
        },
        {
          title: { zh: "开发", en: "Development" },
          bullets: {
            zh: [
              "AI 工具链、数据处理与开发支持",
              "从需求到测试的全链路能力",
              "降低启动门槛与重复基础设施投入",
            ],
            en: [
              "AI toolchains, data processing, and development support",
              "End-to-end capability from requirements to testing",
              "Lower startup friction and repeated infrastructure cost",
            ],
          },
        },
        {
          title: { zh: "运营", en: "Operations" },
          bullets: {
            zh: [
              "价值运营、模型效果与知识召回优化",
              "多维指标分析与持续改进",
              "让 AI 真正见实效、持续进化",
            ],
            en: [
              "Value operations, model quality, and knowledge recall optimization",
              "Multi-dimensional metrics and ongoing improvement",
              "Making AI useful over time, not just impressive at launch",
            ],
          },
        },
      ],
      proofTitle: { zh: "适合从哪些问题开始", en: "Good starting problem types" },
      proofItems: [
        {
          zh: "客服回复慢、知识定位难、交接损耗大的团队。",
          en: "Support teams with slow replies, weak knowledge retrieval, and poor handoff continuity.",
        },
        {
          zh: "需要智能客服、辅助处理、摘要和运营分析协同提升的团队。",
          en: "Teams that need service AI, assistive handling, summaries, and operating analytics together.",
        },
        {
          zh: "希望先试用、再扩展，而不是一次性建设完整 AI 平台的客户。",
          en: "Buyers who want to start with a pilot rather than commit to a full AI platform at once.",
        },
      ],
      startTitle: { zh: "常见切入口", en: "Common starting scopes" },
      startItems: {
        zh: [
          "一个客服团队的知识支持与回复辅助试点",
          "一个服务场景的摘要、分流与质检升级",
          "一个数字员工或角色型 AI 助手的验证范围",
          "一个 AI 运营指标与持续优化框架的起步版本",
        ],
        en: [
          "A support-team pilot for knowledge support and response assistance",
          "A service workflow upgrade across summarization, routing, and QA",
          "A validation scope for one digital worker or role-based AI assistant",
          "An initial AI operations and optimization framework",
        ],
      },
      storyTitle: { zh: "相关合作故事", en: "Related stories" },
      storyItems: {
        zh: ["中国移动智能客服平台"],
        en: ["China Mobile intelligent customer service platform"],
      },
    },
    teamshub: {
      image: "/images/solutions/teamshub-plan.png",
      title: { zh: "Teamshub 协同与项目推进", en: "Teamshub coordination and project execution" },
      subtitle: {
        zh: "Teamshub 不是公司总定位，而是一套适合长链路项目推进、跨团队协作和知识连续性的具体产品与工作方式。",
        en: "Teamshub is not the company’s top-line positioning. It is a concrete product and operating model for long-cycle project work, cross-team execution, and knowledge continuity.",
      },
      intro: {
        zh: "Teamshub 的价值在于把项目、帖子、知识节点、待办和交接放到同一套工作系统里，让团队不再只靠聊天记录和文件夹推进复杂工作。",
        en: "The value of Teamshub is the ability to keep projects, posts, knowledge nodes, next actions, and handoffs inside one working system so teams are not relying on chat history and shared folders alone.",
      },
      sections: [
        {
          title: { zh: "项目作为核心对象", en: "Use the project as the core object" },
          text: {
            zh: "重要机会和项目进入统一主档后，参与者、资料、纪要、问题清单和待办都能围绕同一上下文积累。",
            en: "Once a project becomes the core record, participants, documents, notes, issue lists, and actions all accumulate around the same context.",
          },
          image: "/images/solutions/teamshub-plan.png",
        },
        {
          title: { zh: "帖子、圈子与知识节点", en: "Posts, circles, and knowledge nodes" },
          text: {
            zh: "适合承接会议结论、FAQ、项目阶段总结和跨团队协作边界，让复杂工作有更清楚的结构。",
            en: "These structures work well for meeting outcomes, FAQs, project-stage summaries, and cross-team collaboration boundaries.",
          },
          image: "/images/stories/mvp-product-shape.png",
        },
        {
          title: { zh: "Agent 参与摘要与交接", en: "Use agents for summaries and handoffs" },
          text: {
            zh: "Agent 更适合在长链路协作里持续生成状态、风险和下一步，而不是只做一次性问答。",
            en: "Agents are most useful when they keep generating current state, risks, and next actions inside a long-running workflow.",
          },
          image: "/images/stories/communication-capability.png",
        },
      ],
      useCasesTitle: { zh: "适合的业务场景", en: "Where this fits especially well" },
      useCases: {
        zh: [
          "出海获客与重点客户推进",
          "跨团队项目执行与资料沉淀",
          "FAQ、案例与知识底座建设",
          "售后支持与问题复用",
        ],
        en: [
          "International lead handling and key-account progression",
          "Cross-team execution and documentation continuity",
          "FAQ, case, and knowledge-base organization",
          "After-sales support and issue reuse",
        ],
      },
      roadmapTitle: {
        zh: "第一步通常不是做全，而是先做一个最小可运行闭环",
        en: "The practical first step is not full rollout but one minimum working loop",
      },
      roadmapText: {
        zh: "可以先围绕获客、项目圈子、知识沉淀或交接闭环做一个可演示版本，再逐步补本地化、生态集成和更完整产品能力。",
        en: "A good start is one usable loop around lead handling, project circles, knowledge continuity, or handoffs, then broader localization and integration later.",
      },
      roadmapImage: "/images/solutions/teamshub-roadmap.png",
    },
    custom: {
      image: "/images/stories/mvp-product-shape.png",
      title: { zh: "定制化业务系统与企业门户", en: "Custom business systems and enterprise portals" },
      subtitle: {
        zh: "当现有系统太分散、流程太依赖人工时，需要的是更贴业务的定制化平台层。",
        en: "When existing systems are too fragmented and too dependent on manual coordination, the business often needs a more custom-fit platform layer.",
      },
      intro: {
        zh: "这条方向适合那些已经知道问题出在门户、CRM、流程、后台、集成或运营可视化层，但还不需要一次性大而全系统替换的团队。",
        en: "This track fits teams that already know the issue lives in portals, CRM, workflows, back-office systems, integrations, or operations visibility but do not want a heavy all-at-once replacement.",
      },
      capabilityBlocks: [
        {
          title: { zh: "门户与统一入口", en: "Portals and unified entry points" },
          bullets: {
            zh: [
              "客户门户、伙伴门户与服务入口",
              "统一角色与权限组织",
              "适合作为旧系统整合前台层",
            ],
            en: [
              "Customer portals, partner portals, and service entry points",
              "Unified roles and permission handling",
              "Useful as a front layer over fragmented legacy systems",
            ],
          },
        },
        {
          title: { zh: "业务流程与后台", en: "Business workflows and back-office systems" },
          bullets: {
            zh: [
              "CRM、工作流、工单与运营后台",
              "流程、数据和角色协同设计",
              "适合从最小流程开始逐步扩展",
            ],
            en: [
              "CRM, workflow, ticketing, and operations back-office systems",
              "Coordination across processes, data, and roles",
              "Can start from one minimum working flow and expand later",
            ],
          },
        },
        {
          title: { zh: "集成与可视化", en: "Integrations and visibility" },
          bullets: {
            zh: [
              "系统集成、中台连接与数据视图",
              "运营看板与状态跟踪",
              "结构图和模块图可先占位再补细节",
            ],
            en: [
              "System integrations, middle-layer connections, and data views",
              "Operational dashboards and state tracking",
              "Architecture diagrams can start as placeholders and evolve later",
            ],
          },
        },
      ],
      proofTitle: { zh: "这条方向的适用场景", en: "Where this track fits" },
      proofItems: [
        {
          zh: "现有系统很多，但没有一个真正贴合业务流程的统一层。",
          en: "The organization has many systems but no unified layer that matches the business flow.",
        },
        {
          zh: "需要更好的门户、流程、后台或集成，但还不准备做彻底替换。",
          en: "The team needs better portals, workflow, back-office systems, or integrations without a full replacement project yet.",
        },
        {
          zh: "适合先用占位图、模块图和最小交付范围开始定义。",
          en: "A good fit for starting with placeholder diagrams, module boundaries, and a minimum delivery scope.",
        },
      ],
      startTitle: { zh: "常见切入口", en: "Common starting scopes" },
      startItems: {
        zh: [
          "一个客户或伙伴门户的先行版本",
          "一个 CRM / workflow / 后台模块的升级范围",
          "一个统一服务入口与运营视图的起步架构",
          "一个集成层与仪表盘的最小验证项目",
        ],
        en: [
          "An initial customer or partner portal scope",
          "An upgrade scope for one CRM, workflow, or back-office module",
          "A first architecture for a unified service entry and operations view",
          "A minimum validation project for an integration and dashboard layer",
        ],
      },
      storyTitle: { zh: "相关合作故事", en: "Related stories" },
      storyItems: {
        zh: ["[企业门户项目名称占位] 统一入口与协同平台"],
        en: ["[Enterprise portal project name placeholder] unified portal and coordination platform"],
      },
    },
  },
  partnershipPage: {
    hero: {
      image: "/images/hero/ai-operations.webp",
      title: { zh: "合作方式", en: "Partnership" },
      subtitle: {
        zh: "这里回答的是我们怎么合作、怎么联合推进，而不是展示合作伙伴目录。",
        en: "This page explains how collaboration works. It is not the same thing as the Marketplace directory.",
      },
    },
    groupsTitle: {
      zh: "我们通常和这些类型的团队合作",
      en: "We typically work with teams like these",
    },
    groups: [
      {
        title: { zh: "本地解决方案伙伴", en: "Local solution partners" },
        text: {
          zh: "需要更强平台与交付后盾，一起服务客户并推进复杂项目。",
          en: "Partners who want stronger platform and delivery backing in client work.",
        },
      },
      {
        title: { zh: "运营商与服务相关业务方", en: "Operator and service-side teams" },
        text: {
          zh: "已有明确业务问题，需要联合定义范围和交付路径。",
          en: "Organizations with a clear operating problem and a need to define scope together.",
        },
      },
      {
        title: { zh: "产业与平台项目方", en: "Industry and platform project owners" },
        text: {
          zh: "需要平台建设、数据协同、流程整合与后续运营支持。",
          en: "Teams that need platform delivery, data coordination, workflow integration, and ongoing support.",
        },
      },
      {
        title: { zh: "顾问、渠道与业务连接方", en: "Advisors, channels, and business connectors" },
        text: {
          zh: "希望把本地关系与更完整的产品和交付能力结合起来。",
          en: "Teams that want to combine local relationships with stronger technical depth and delivery support.",
        },
      },
    ],
    modelsTitle: { zh: "合作模型", en: "How collaboration can work" },
    models: [
      {
        title: { zh: "联合评估机会", en: "Joint opportunity shaping" },
        text: {
          zh: "一起判断哪个问题最值得先做、谁负责前台沟通、谁负责技术和交付准备。",
          en: "We align on what problem matters most, who owns client-facing motion, and who prepares technical delivery.",
        },
      },
      {
        title: { zh: "从试点开始", en: "Start with a pilot" },
        text: {
          zh: "先让一个关键流程跑通，再决定是否扩大范围。",
          en: "We make one key workflow work first, then decide what deserves wider rollout.",
        },
      },
      {
        title: { zh: "联合交付与长期优化", en: "Joint delivery and ongoing refinement" },
        text: {
          zh: "本地团队保持客户接口，我们提供更强的平台、工程和交付支撑。",
          en: "Local teams hold the market interface while we add stronger platform, engineering, and delivery capacity.",
        },
      },
    ],
    cta: {
      title: {
        zh: "如果你手上正有一个机会，需要更强的技术或交付配合，可以直接聊。",
        en: "If you already have an opportunity that needs stronger technical or delivery support, we can talk directly.",
      },
      button: { zh: "讨论合作", en: "Talk Partnership" },
    },
  },
  marketplacePage: {
    hero: {
      image: "/images/hero/digital-workplace.webp",
      title: { zh: "Marketplace", en: "Marketplace" },
      subtitle: {
        zh: "像应用中心一样浏览我们的产品与合作伙伴产品，先看我们自己能直接推进的能力，再看可一起带进项目的伙伴产品。",
        en: "Browse our products and partner products the way you would browse an app center: start with what we can lead directly, then explore partner offers we can bring into projects.",
      },
    },
    introTitle: {
      zh: "一个更像应用中心的产品入口",
      en: "A product library built more like an app center",
    },
    introText: {
      zh: "Marketplace 不是传统合作伙伴页，也不是 logo 墙。它应该像 Slack 或 Salesforce 的应用中心一样，支持快速浏览、理解定位、判断适用场景，并自然进入沟通。",
      en: "Marketplace is not a traditional partners page and not a logo wall. It should feel closer to a Slack or Salesforce app center: easy to scan, easy to position, easy to match with a real project, and easy to turn into a conversation.",
    },
    filtersTitle: {
      zh: "浏览方式",
      en: "Browse by",
    },
    filters: [
      {
        title: { zh: "我们的产品", en: "Our products" },
        text: {
          zh: "适合我们直接带进客户沟通、演示和项目推进的产品与产品化能力。",
          en: "Products and productized offers we can lead directly in client conversations, demos, and delivery motions.",
        },
      },
      {
        title: { zh: "伙伴产品", en: "Partner products" },
        text: {
          zh: "适合我们联合推进、渠道协同或纳入解决方案组合的合作产品。",
          en: "Partner products we can support through joint pursuit, channel collaboration, or solution packaging.",
        },
      },
      {
        title: { zh: "项目场景", en: "Project fit" },
        text: {
          zh: "优先面向运营商支撑、AI 服务运营、企业协同和复杂交付环境。",
          en: "Prioritized around telecom support, AI-enabled service operations, enterprise coordination, and complex delivery settings.",
        },
      },
    ],
    featuredTitle: {
      zh: "重点产品",
      en: "Featured product",
    },
    featuredText: {
      zh: "首页先看到最值得对外沟通、最适合获客和项目切入的产品。",
      en: "Lead with the product that is most useful for market-facing conversations, early qualification, and project entry.",
    },
    ownTitle: {
      zh: "我们的产品库",
      en: "Our product library",
    },
    ownText: {
      zh: "先展示我们自己能定义、演示、交付和持续优化的产品与产品化能力。",
      en: "Show the products and productized capabilities we can define, demo, deliver, and keep improving ourselves.",
    },
    ownItems: [
      {
        title: { zh: "Teamshub", en: "Teamshub" },
        category: { zh: "自有产品", en: "Owned product" },
        status: { zh: "主推", en: "Featured" },
        subtitle: {
          zh: "面向获客、项目推进、跨团队协作和知识连续性的业务协同产品。",
          en: "A business coordination product for lead handling, project execution, cross-team collaboration, and knowledge continuity.",
        },
        tags: {
          zh: ["Collaboration", "Project execution", "Knowledge continuity"],
          en: ["Collaboration", "Project execution", "Knowledge continuity"],
        },
        bullets: {
          zh: [
            "是什么：我们的协同与项目推进产品",
            "解决什么：项目推进断点、知识分散、跨团队协作失真",
            "适合谁：长链路销售、复杂项目、跨团队与跨时区协作团队",
            "怎么进入：可从最小闭环试用、演示或项目级落地开始",
          ],
          en: [
            "What it is: our coordination and project execution product",
            "What it solves: handoff gaps, fragmented knowledge, and weak cross-team execution",
            "Who it fits: teams with long cycles, complex projects, and cross-time-zone collaboration",
            "How it starts: through a minimum working loop, demo, or project-based rollout",
          ],
        },
        note: {
          zh: "后续可继续补产品结构图、角色视图和使用场景图。",
          en: "A product structure diagram, role view, and use-case visual can be added later.",
        },
        cta: { zh: "查看 Teamshub 方案", en: "View Teamshub solution" },
        href: "/solutions/teamshub-business-os",
      },
      {
        title: { zh: "智能客服与服务运营产品", en: "Smart customer service and service operations product" },
        category: { zh: "自有产品", en: "Owned product" },
        status: { zh: "重点方向", en: "Priority" },
        subtitle: {
          zh: "围绕智能客服、辅助坐席、服务流程和运营优化的产品化能力。",
          en: "A productized offering around smart customer service, agent assistance, support workflows, and operational optimization.",
        },
        tags: {
          zh: ["AI service", "Agent assist", "Service operations"],
          en: ["AI service", "Agent assist", "Service operations"],
        },
        bullets: {
          zh: [
            "是什么：我们的 AI 客服与服务运营产品方向",
            "解决什么：回复慢、知识定位难、交接损耗高、服务质量不稳定",
            "适合谁：客服团队、支持团队、呼叫中心、服务运营团队",
            "怎么进入：可从知识支持、摘要、辅助处理或质检场景先切入",
          ],
          en: [
            "What it is: our AI-enabled customer service and service-operations offering",
            "What it solves: slow replies, weak knowledge retrieval, poor handoffs, and uneven service quality",
            "Who it fits: support teams, service teams, call centers, and operations groups",
            "How it starts: through knowledge support, summarization, assistive handling, or QA use cases",
          ],
        },
        note: {
          zh: "后续可补智能客服产品页、能力架构图和场景拆解图。",
          en: "A dedicated product page, capability architecture, and workflow visuals can be added later.",
        },
        cta: { zh: "查看 AI 服务方案", en: "View AI service solution" },
        href: "/solutions/ai-customer-service",
      },
    ],
    partnerTitle: {
      zh: "伙伴产品库",
      en: "Partner product library",
    },
    partnerText: {
      zh: "这里放我们可以介绍、联合推进、渠道协同、转售支持或纳入联合方案的伙伴产品。",
      en: "This is where we place partner products we can introduce, support commercially, bring into delivery, or include in a joint offer.",
    },
    partnerItems: [
      {
        title: { zh: "Helpport", en: "Helpport" },
        category: { zh: "伙伴产品", en: "Partner product" },
        status: { zh: "可合作推进", en: "Available for joint pursuit" },
        subtitle: {
          zh: "当前优先展示的伙伴产品，面向 AI 客服、服务运营与支持团队场景。",
          en: "The first partner product featured in Marketplace, focused on AI-enabled service, support operations, and customer-facing teams.",
        },
        tags: {
          zh: ["Partner app", "AI support", "Service teams"],
          en: ["Partner app", "AI support", "Service teams"],
        },
        bullets: {
          zh: [
            "是什么：可合作推进的伙伴产品",
            "解决什么：客服、呼叫中心、远程支持与 AI Copilot 相关问题",
            "适合谁：服务团队、支持团队、需要 AI 辅助能力的企业",
            "与 Si-Tech Intl 的关系：我们可以承接介绍、沟通、渠道和转售支持",
          ],
          en: [
            "What it is: a partner product we can help bring into market conversations",
            "What it solves: customer support, call-center, remote-service, and AI copilot needs",
            "Who it fits: service teams, support teams, and businesses exploring AI assistance",
            "How Si-Tech Intl fits: we can support introduction, deal motion, channel collaboration, and resale support",
          ],
        },
        note: {
          zh: "后续可继续补充产品介绍图、适用场景图和合作模式图。",
          en: "A product visual, use-case diagram, and collaboration model diagram can be added later as placeholders or final assets.",
        },
        cta: { zh: "联系讨论合作产品", en: "Talk about this partner product" },
        href: "/contact",
      },
      {
        title: { zh: "更多合作产品占位", en: "Additional partner product placeholder" },
        category: { zh: "伙伴产品", en: "Partner product" },
        status: { zh: "待补资料", en: "More details coming" },
        subtitle: {
          zh: "这里预留给后续加入 Marketplace 的合作产品、联合方案或生态合作项。",
          en: "This slot is reserved for future partner products, joint offers, or ecosystem collaboration items added to Marketplace.",
        },
        tags: {
          zh: ["Placeholder", "Ecosystem", "Joint offer"],
          en: ["Placeholder", "Ecosystem", "Joint offer"],
        },
        bullets: {
          zh: [
            "是什么：占位内容，后续补充",
            "解决什么：占位内容，后续补充",
            "适合谁：占位内容，后续补充",
            "与 Si-Tech Intl 的关系：占位内容，后续补充",
          ],
          en: [
            "What it is: placeholder content to be refined later",
            "What it solves: placeholder content to be refined later",
            "Who it fits: placeholder content to be refined later",
            "How Si-Tech Intl fits: placeholder content to be refined later",
          ],
        },
        note: {
          zh: "这一项保留为专业占位，不因为资料未齐而让 Marketplace 结构缺失。",
          en: "This stays as a professional placeholder so the Marketplace structure is complete even before all materials are ready.",
        },
        cta: { zh: "先联系讨论合作方向", en: "Discuss a potential partner fit" },
        href: "/contact",
      },
    ],
    cta: {
      title: {
        zh: "如果你想了解某个产品是否适合你的项目，或者想把伙伴产品带进联合方案，我们可以直接沟通。",
        en: "If you want to assess whether one of these products fits your project, or you want to bring a partner product into a joint solution, we can talk directly.",
      },
      button: { zh: "进入产品沟通", en: "Talk Marketplace" },
    },
  },
  storiesPage: {
    hero: {
      image: "/images/hero/digital-workplace.webp",
      title: { zh: "合作故事", en: "Stories" },
      subtitle: {
        zh: "Stories 页只做一件事：用真实客户、真实平台名或明确占位符，把问题、方案切入、推进方式和结果讲清楚。",
        en: "The only job of the Stories page is to use real public names, real platform names, or clear placeholders to show the problem, the solution entry point, the delivery motion, and the outcome.",
      },
    },
    introTitle: {
      zh: "展开每个故事，查看问题、做法和结果",
      en: "Open each story to see the problem, the approach, and the outcome",
    },
    items: [
      {
        title: {
          zh: "中国联通宽带业务支撑平台",
          en: "China Unicom broadband support platform",
        },
        summary: {
          zh: "公开材料显示该平台已在中国联通 5 个省落地，重点在于把宽带资源管理、开通激活、工单协同和运营分析接成一条完整链路。",
          en: "Public materials show this platform deployed across five China Unicom provinces, connecting broadband resource management, activation, ticket coordination, and operational analysis into one working chain.",
        },
        image: "/images/about/sitech-building.png",
        labels: {
          zh: ["运营商域", "中国联通", "宽带支撑"],
          en: ["Telecom", "China Unicom", "Broadband support"],
        },
        solution: { zh: "对应方案：运营商 IT 支撑与服务域", en: "Related solution: Telecom IT support and service domain" },
        sections: [
          {
            label: { zh: "客户场景", en: "Client context" },
            text: {
              zh: "宽带业务支撑不是单点系统问题，而是资源、开通、服务、履约和运维需要一起协同的持续运营场景。",
              en: "Broadband support is not a single-system problem. It is an ongoing operating environment where resources, activation, service, fulfillment, and maintenance all need to work together.",
            },
          },
          {
            label: { zh: "问题", en: "Problem" },
            text: {
              zh: "如果宽带资源不准、开通激活不顺、工单与售后联动断裂，用户体验和运营效率都会一起下降。",
              en: "When broadband resources are inaccurate, activation is slow, and ticketing or after-sales coordination breaks down, both user experience and operating efficiency decline together.",
            },
          },
          {
            label: { zh: "方案切入", en: "Solution entry point" },
            text: {
              zh: "平台围绕宽带全生命周期展开，把资源管理、业务开通激活、工单联动和运营分析放进同一套数字化支撑体系。",
              en: "The platform addresses the full broadband lifecycle by combining resource management, activation, ticket coordination, and operations analysis in one digital support system.",
            },
          },
          {
            label: { zh: "结果", en: "Outcome" },
            text: {
              zh: "公开材料给出的效果包括宽带资源准确性达到 95% 以上，并带来更高的业务处理效率；如果后续要补更多结果数据，可以继续细化。",
              en: "Public materials cite results including broadband resource accuracy above 95% and stronger operating efficiency; more quantified results can be added later if approved.",
            },
          },
        ],
      },
      {
        title: {
          zh: "黔牛帮肉牛产业数智化平台",
          en: "QianNiuBang beef industry digital platform",
        },
        summary: {
          zh: "这是真实公开的平台名称，重点在于围绕贵州肉牛产业链，把采购、交易、支付与物流协同做成可运行的平台能力。",
          en: "This is a public platform name focused on the Guizhou beef supply chain, connecting procurement, trade, payment, and logistics into a usable digital platform.",
        },
        image: "/images/hero/digital-workplace.webp",
        labels: {
          zh: ["数字产业域", "黔牛帮", "产业平台"],
          en: ["Industry", "QianNiuBang", "Platform"],
        },
        solution: { zh: "对应方案：数据要素与数字产业平台", en: "Related solution: Data and industrial digital platforms" },
        sections: [
          {
            label: { zh: "客户场景", en: "Client context" },
            text: {
              zh: "肉牛产业链涉及采购、交易、支付、物流等多个环节，平台如果不能把这些环节真正串起来，就很难形成持续效率。",
              en: "A beef industry supply chain spans procurement, trade, payment, logistics, and more. Without a platform that connects these stages, efficiency remains fragmented.",
            },
          },
          {
            label: { zh: "问题", en: "Problem" },
            text: {
              zh: "产业平台容易停留在展示和数据汇总层，真正难的是把产业链经营动作做成端到端可协同的流程。",
              en: "Industry platforms often stop at dashboards and data aggregation. The harder task is making the business actions across the chain work end to end.",
            },
          },
          {
            label: { zh: "方案切入", en: "Solution entry point" },
            text: {
              zh: "黔牛帮平台围绕端到端数字化供应链展开，直接覆盖采购、交易、支付、物流等关键环节，并把数字化与智能化支持放进去。",
              en: "QianNiuBang is positioned as an end-to-end digital supply-chain platform, directly covering procurement, trade, payment, logistics, and the digital support wrapped around them.",
            },
          },
          {
            label: { zh: "结果", en: "Outcome" },
            text: {
              zh: "公开材料里的价值表达是提高产业链运转效率并降低企业经营成本；如果后续你有更多公开指标，可以把这一段补得更强。",
              en: "Public materials frame the value as stronger supply-chain efficiency and lower operating cost for participating businesses; this section can be strengthened later with approved metrics.",
            },
          },
        ],
      },
      {
        title: {
          zh: "中国移动智能客服平台",
          en: "China Mobile intelligent customer service platform",
        },
        summary: {
          zh: "公开材料显示该智能客服平台已在中国移动多个项目中落地，并以智能坐席、多模态交互、智能派单和质检分析为主要能力。",
          en: "Public materials show the intelligent customer service platform deployed across multiple China Mobile projects with smart agent assistance, multimodal interaction, routing, and QA analytics.",
        },
        image: "/images/hero/ai-operations.webp",
        labels: {
          zh: ["AI", "中国移动", "智能客服"],
          en: ["AI", "China Mobile", "Smart service"],
        },
        solution: { zh: "对应方案：AI 产品与智能客服", en: "Related solution: AI products and smart customer service" },
        sections: [
          {
            label: { zh: "客户场景", en: "Client context" },
            text: {
              zh: "大型客服与服务运营体系通常已经有人工团队，但随着业务量扩大，接入、辅助、质检和运营分析会同时成为压力点。",
              en: "Large service organizations already have human teams in place, but as scale increases, intake, assistance, QA, and operating analysis all become pressure points at once.",
            },
          },
          {
            label: { zh: "问题", en: "Problem" },
            text: {
              zh: "如果 AI 只停留在机器人演示层，就无法真正改善坐席效率、服务闭环和运营精细化程度。",
              en: "If AI stays at the level of a bot demo, it does not materially improve agent efficiency, service closure, or operational precision.",
            },
          },
          {
            label: { zh: "方案切入", en: "Solution entry point" },
            text: {
              zh: "平台把智能多模态交互、人机共生坐席、智能派单、质检分析和运营闭环放进同一套智能客服体系中。",
              en: "The platform brings multimodal interaction, human-in-the-loop agent assistance, intelligent routing, QA analysis, and service closure into one smart customer-service system.",
            },
          },
          {
            label: { zh: "结果", en: "Outcome" },
            text: {
              zh: "公开材料给出的结果包括客服服务效率提升 20%，实现 100% 全量质检。这比单纯讲“AI 很先进”更有说服力。",
              en: "Public materials cite a 20% service-efficiency improvement and 100% full-volume QA coverage, which is much stronger than simply saying the AI is advanced.",
            },
          },
        ],
      },
    ],
  },
  aboutPage: {
    hero: {
      image: "/images/about/sitech-building.png",
      title: { zh: "关于我们", en: "About" },
      subtitle: {
        zh: "Si-Tech Intl 是面向海外市场的合作接口，背后连接的是更完整的思特奇技术、平台、研发与交付能力。",
        en: "Si-Tech Intl is the international-facing collaboration interface backed by the broader Si-Tech technical, platform, R&D, and delivery organization.",
      },
    },
    introTitle: {
      zh: "如何理解 Si-Tech Intl",
      en: "How to read Si-Tech Intl",
    },
    introText: {
      zh: "官网不是总部介绍册，也不是纯产品站。它是一个对外合作入口，帮助客户先看懂我们最强的解决方案方向、最可信的能力基础，以及最适合从哪里开始。",
      en: "This website is not a headquarters brochure and not a single-product site. It is a commercial entry point designed to show our strongest solution tracks, most credible capability base, and the most practical place to start.",
    },
    stats: [
      { value: "1995", label: { zh: "思特奇成立时间", en: "Founded" } },
      { value: "30+", label: { zh: "年持续积累", en: "Years of sustained experience" } },
      { value: "3000+", label: { zh: "员工规模", en: "Employees" } },
      { value: "80+", label: { zh: "运营商客户经验基础", en: "Operator client references" } },
    ],
    pillars: [
      {
        title: { zh: "运营商域长期积累", en: "Long-term telecom depth" },
        text: {
          zh: "思特奇在运营商 IT 支撑、服务流程、业务平台与复杂交付方面形成了长期积累，这是官网最优先展示的可信度基础。",
          en: "Long-term depth in telecom IT support, service workflows, platform capability, and complex delivery forms the most important credibility base on the site.",
        },
      },
      {
        title: { zh: "多方向能力可组合", en: "Capabilities that can combine across domains" },
        text: {
          zh: "除运营商域外，还具备产业平台、AI 服务、协同体系与定制平台方向的实际能力基础。",
          en: "Beyond telecom, the organization also has real capability across industrial platforms, AI-enabled service, coordination systems, and custom platform work.",
        },
      },
      {
        title: { zh: "适合从明确问题开始", en: "Best approached through a concrete problem" },
        text: {
          zh: "最合适的进入方式通常不是空泛介绍，而是围绕一个业务问题、一个试点范围或一个联合交付机会开始。",
          en: "The best way to begin is usually not a broad presentation but one concrete problem, pilot scope, or joint delivery opportunity.",
        },
      },
    ],
    coverageTitle: {
      zh: "能力覆盖面",
      en: "Coverage areas",
    },
    coverageItems: [
      {
        zh: "运营商、MVNO、服务与业务支撑",
        en: "Operators, MVNOs, support, and service operations",
      },
      {
        zh: "产业平台、数据要素、交易与运营协同",
        en: "Industrial platforms, data flows, transactions, and operating coordination",
      },
      {
        zh: "AI 应用、智能客服、数字员工与运营优化",
        en: "AI applications, smart service, digital workers, and optimization",
      },
      {
        zh: "企业门户、CRM、流程、集成与协同体系",
        en: "Enterprise portals, CRM, workflows, integrations, and coordination systems",
      },
    ],
  },
  contactPage: {
    hero: {
      image: "/images/hero/ai-operations.webp",
      title: { zh: "联系", en: "Contact" },
      subtitle: {
        zh: "告诉我们你现在最想推进哪一段业务支撑、服务流程或平台建设，我们会据此安排后续沟通。",
        en: "Tell us which support workflow, service process, or platform scope you want to move next, and we will use that to guide the next conversation.",
      },
    },
    panelTitle: { zh: "直接联系", en: "Direct Contact" },
    note: {
      zh: "表单提交后，信息会同步进入 HubSpot，并发送到 info@sitech-intl.com。你也会收到一封确认邮件，我们会尽快和你取得联系。",
      en: "Form submissions are routed into HubSpot and sent to info@sitech-intl.com. The submitter also receives a confirmation email, and our team will follow up as soon as possible.",
    },
    pagesNote: {
      zh: "当前 GitHub Pages 版本不启用站内提交。点击提交后会调用你的邮箱客户端，并把已填写内容带入邮件草稿。",
      en: "This GitHub Pages deployment does not run the built-in backend. Submitting the form will open your email client with the filled details drafted for sending.",
    },
    form: {
      fullName: { zh: "姓名", en: "Full Name" },
      workEmail: { zh: "工作邮箱", en: "Work Email" },
      companyName: { zh: "公司名称", en: "Company Name" },
      jobTitle: { zh: "职位", en: "Job Title" },
      phone: { zh: "电话", en: "Phone" },
      industry: { zh: "行业", en: "Industry" },
      interestedIn: { zh: "感兴趣的方向", en: "Interested In" },
      message: { zh: "项目需求 / 具体问题", en: "Project / Inquiry Details" },
      consent: {
        zh: "我同意 Si-Tech Intl 就此次咨询与我联系。",
        en: "I agree to be contacted by Si-Tech Intl regarding this inquiry.",
      },
      submit: { zh: "提交需求", en: "Submit Inquiry" },
      loading: { zh: "提交中...", en: "Submitting..." },
      success: {
        zh: "我们已收到你的需求，正在跳转确认页。",
        en: "We received your inquiry and are taking you to the confirmation page.",
      },
      error: {
        zh: "提交失败，请稍后重试。",
        en: "Unable to submit right now. Please try again later.",
      },
      options: {
        zh: [
          "运营商 IT 支撑与服务域",
          "数据要素与数字产业平台",
          "AI 产品与智能客服",
          "Teamshub 协同与项目推进",
          "定制化业务系统与企业门户",
          "Marketplace / 产品与伙伴产品",
          "暂时还不确定",
        ],
        en: [
          "Telecom IT support and service domain",
          "Data and industrial digital platforms",
          "AI products and smart customer service",
          "Teamshub coordination and project execution",
          "Custom business systems and enterprise portals",
          "Marketplace / products and partner products",
          "Not sure yet",
        ],
      },
    },
  },
  thankYouPage: {
    title: { zh: "我们已收到你的信息", en: "We received your inquiry" },
    text: {
      zh: "我们已经收到你的请求，团队会尽快通过邮件与你联系。若你有更多补充，也可以直接发邮件至 info@sitech-intl.com。",
      en: "We have received your inquiry, and our team will contact you by email as soon as possible. If you want to add more context, you can also write directly to info@sitech-intl.com.",
    },
    button: { zh: "返回首页", en: "Back to Home" },
  },
  privacyPage: {
    title: { zh: "隐私说明", en: "Privacy" },
    intro: {
      zh: "我们只收集处理你主动提交的联系信息与咨询内容，用于响应你的需求、安排后续沟通和内部线索管理。",
      en: "We collect only the contact information and inquiry details you submit voluntarily so we can respond to your request, follow up appropriately, and manage internal lead handling.",
    },
    sections: [
      {
        title: { zh: "我们收集什么", en: "What we collect" },
        text: {
          zh: "姓名、工作邮箱、公司、职位、电话、行业、咨询内容，以及提交时的页面链接等基础信息。",
          en: "Basic information such as name, work email, company, job title, phone, industry, inquiry details, and the page URL from which the form was submitted.",
        },
      },
      {
        title: { zh: "我们如何使用", en: "How we use it" },
        text: {
          zh: "用于与你联系、评估项目匹配度、安排后续沟通，并在内部 CRM 中保留必要记录。",
          en: "We use it to contact you, assess fit, arrange follow-up, and keep the necessary record inside our CRM.",
        },
      },
      {
        title: { zh: "信息处理方式", en: "How data is handled" },
        text: {
          zh: "提交内容会通过受保护的后端接口发送，并同步到我们使用的邮件与 CRM 工具中。",
          en: "Form submissions are sent through a protected backend endpoint and may be routed into our email and CRM systems for follow-up.",
        },
      },
    ],
  },
  footer: {
    navTitle: { zh: "页面", en: "Pages" },
    focusTitle: { zh: "重点方向", en: "Focus Areas" },
    focusItems: {
      zh: [
        "运营商 IT 支撑与服务域",
        "数据要素与数字产业平台",
        "AI 产品与智能客服",
      ],
      en: [
        "Telecom IT support and service domain",
        "Data and industrial digital platforms",
        "AI products and smart customer service",
      ],
    },
    contactTitle: { zh: "联系方式", en: "Contact" },
    copyright: {
      zh: "保留所有权利。",
      en: "All rights reserved.",
    },
  },
} as const;

export function copy(locale: Locale, value: Copy) {
  return value[locale];
}

export function copyList(locale: Locale, value: CopyList) {
  return value[locale];
}
