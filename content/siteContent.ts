import type { Locale } from "@/lib/site";

type Copy = {
  zh: string;
  en: string;
};

type CopyList = {
  zh: readonly string[];
  en: readonly string[];
};

type VisibilityItem = {
  visible?: boolean;
  order?: number;
};

export const siteContent = {
  brand: {
    name: "Si-Tech Intl",
    eyebrow: {
      zh: "海外市场的解决方案与合作入口",
      en: "Solution and partnership entry point for international markets",
    },
    headerTagline: {
      zh: "Telecom · SaaS · Platforms · AI",
      en: "Telecom · Platforms · AI",
    },
    summary: {
      zh: "Si-Tech Intl 帮助海外客户推进运营商支撑、产业平台、AI 服务和企业系统建设。",
      en: "Si-Tech Intl helps international clients move telecom support, industrial platforms, AI service, and business systems forward.",
    },
  },
  contact: {
    email: "info@sitech-intl.com",
    phone: "+1 (408) 352-5288",
    address: "Suite 210, 20410 Town Center Lane, Cupertino, CA 95014",
    linkedin: "LinkedIn",
    linkedinUrl: "https://www.linkedin.com/company/sitech-intl",
  },
  navigation: [
    { href: "/", label: { zh: "首页", en: "Home" } },
    { href: "/products", label: { zh: "产品", en: "Products" } },
    { href: "/solutions", label: { zh: "解决方案", en: "Solutions" } },
    { href: "/stories", label: { zh: "合作", en: "Partnership" } },
    { href: "/about", label: { zh: "关于我们", en: "About" } },
    { href: "/contact", label: { zh: "联系", en: "Contact" } },
  ],
  proofRibbon: [
    {
      zh: "30 年复杂系统交付积累",
      en: "30 years of complex delivery experience",
    },
    {
      zh: "80+ 运营商客户经验基础",
      en: "Reference base across 80+ operator clients",
    },
    {
      zh: "运营商 IT 支撑与服务域",
      en: "Telecom IT support and service operations",
    },
    { zh: "MVNO 业务支撑", en: "Global MVNO enablement" },
    { zh: "宽带业务支撑平台", en: "Broadband support platform" },
    { zh: "智能客服云平台", en: "Smart customer service cloud" },
    { zh: "统一营销服务门户", en: "Unified marketing and service portals" },
    {
      zh: "产业中台与数据要素平台",
      en: "Industrial middle-platform and data element platforms",
    },
    {
      zh: "AI 应用 + 开发 + 运营",
      en: "AI application, development, and operations",
    },
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
        zh: "运营商、MVNO 与复杂服务环境所需的业务支撑",
        en: "Business support, service coordination, and platform capability for operators, MVNOs, and complex service environments",
      },
      text: {
        zh: "围绕运营商 BOSS、客户生命周期管理、MVNO 支撑、宽带支撑、智能客服与统一门户等能力，帮助复杂服务环境真正跑顺。",
        en: "Built around operator BOSS, customer lifecycle support, MVNO enablement, broadband support, smart customer service, and unified portals for complex service environments.",
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
      image: "/images/curated/telecom-network-switch.jpg",
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
        zh: "让产业平台真正服务交易、协同和运营",
        en: "Make industrial platforms support trade, coordination, and operations",
      },
      text: {
        zh: "当交易、支付、物流和运营数据割裂，平台容易变成展示屏。我们把关键业务动作接起来，让平台真正产生效率。",
        en: "When trade, payment, logistics, and operations data are split apart, platforms become displays. We connect the key actions so the platform creates real efficiency.",
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
      image: "/images/curated/warehouse-logistics-team.jpg",
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
        zh: "让 AI 真正进入客服、支持和运营流程",
        en: "Put AI into service, support, and operations",
      },
      text: {
        zh: "AI 如果只停在演示，仍然解决不了回复慢、知识散、质检弱的问题。我们把 AI 放进真实流程，让服务更快、更稳。",
        en: "AI that stays in demos does not fix slow replies, scattered knowledge, or weak QA. We put AI into real workflows so service becomes faster and steadier.",
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
      image: "/images/curated/call-center-team-meeting.jpg",
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
        zh: "让长链路项目不再只靠群聊和表格推进",
        en: "Move long-cycle projects beyond chats and spreadsheets",
      },
      text: {
        zh: "群聊和文件夹很难承接复杂项目。Teamshub 沉淀客户、资料、待办和风险，减少交接损耗。",
        en: "Chats and folders cannot carry complex projects well. Teamshub keeps client context, files, actions, and risks together.",
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
      image: "/images/curated/project-team-laptop.jpg",
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
        zh: "把分散系统接成更贴业务的工作层",
        en: "Turn scattered systems into a business-fit work layer",
      },
      text: {
        zh: "系统多但互不相通，会拖慢响应、增加人工搬运。我们从关键流程切入，把系统接成可运行的业务层。",
        en: "Many disconnected systems slow response and add manual work. We start from key workflows and connect tools into a usable business layer.",
      },
      bullets: {
        zh: [
          "企业门户、伙伴门户与统一入口",
          "CRM、流程、集成与运营后台",
          "可先从一个清晰流程和最小可运行范围切入",
        ],
        en: [
          "Enterprise portals, partner portals, and unified entry points",
          "CRM, workflows, integrations, and operations backends",
          "Can start from one clear workflow and a minimum usable scope",
        ],
      },
      linkLabel: { zh: "查看详情", en: "View detail" },
      image: "/images/curated/software-developers-office.jpg",
    },
  ],
  home: {
    sections: {
      marquee: { visible: true },
      companyIntro: { visible: true },
      productSpotlight: { visible: true },
      featuredSolutions: { visible: true },
      solutionSelector: { visible: false },
      storiesPreview: { visible: true },
      aboutPreview: { visible: false },
      cta: { visible: true },
    },
    hero: {
      image: "/images/curated/diverse-laptop-collaboration.jpg",
      badge: {
        zh: "面向运营商、企业与合作伙伴",
        en: "For operators, industry platforms, service teams, and partner-led projects",
      },
      title: {
        zh: "让复杂业务支撑真正跑起来",
        en: "Make complex business support actually work",
      },
      subtitle: {
        zh: "我们帮助客户解决系统分散、流程割裂、AI 难落地和项目推进慢的问题，从一个清晰试点开始。",
        en: "We help solve scattered systems, broken workflows, hard-to-adopt AI, and slow project execution, starting from a clear pilot.",
      },
      primaryCta: { zh: "联系我们", en: "Talk to Us" },
      secondaryCta: { zh: "查看产品", en: "Explore Products" },
    },
    companyIntro: {
      eyebrow: {
        zh: "思特奇业务与能力背书",
        en: "Core business and capability backing from the broader Si-Tech organization",
      },
      title: {
        zh: "复杂项目，不能只看演示",
        en: "Complex projects need more than demos",
      },
      text: {
        zh: "当业务跨角色、跨系统、跨地区，单个工具很难解决问题。我们把多年复杂系统和交付经验带进具体项目。",
        en: "When work spans roles, systems, and regions, one tool rarely solves the problem. We bring complex-system and delivery experience into real projects.",
      },
      stats: [
        { value: "1995", label: { zh: "公司成立时间", en: "Company founded" } },
        {
          value: "30+",
          label: {
            zh: "年复杂系统与交付积累",
            en: "Years of complex delivery experience",
          },
        },
        {
          value: "3000+",
          label: {
            zh: "员工规模",
            en: "Employees across the broader organization",
          },
        },
        { value: "86%+", label: { zh: "研发人员占比", en: "R&D staff ratio" } },
      ],
      pillars: [
        {
          title: {
            zh: "复杂业务不能只靠单点系统",
            en: "Complex operations need more than point tools",
          },
          text: {
            zh: "订单、客户、工单和结算分散，体验和效率都会下降。我们擅长处理高复杂度、多角色协同。",
            en: "Scattered orders, customers, tickets, and settlement hurt both experience and efficiency. We handle high-complexity, multi-role operations.",
          },
        },
        {
          title: {
            zh: "AI 不能停留在演示效果",
            en: "AI must move beyond demos",
          },
          text: {
            zh: "真正难的是知识接入、流程嵌入和持续运营。我们关注 AI 如何进入业务闭环。",
            en: "The hard part is knowledge access, workflow adoption, and ongoing operation. We focus on AI inside business loops.",
          },
        },
        {
          title: {
            zh: "大项目可以从小范围开始验证",
            en: "Large programs can start with focused proof",
          },
          text: {
            zh: "全量替换风险高。我们从一个范围、一个试点、一个关键流程开始，先验证价值。",
            en: "Full replacement is risky. We start with one scope, pilot, or workflow, prove value first, then expand.",
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
        zh: "这些问题不解决，会持续消耗效率、服务质量和增长机会。",
        en: "If these problems remain, they keep draining efficiency, service quality, and growth.",
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
        zh: "客户真正关心的是：类似问题是否被解决过",
        en: "What buyers need to know is whether similar problems have been solved",
      },
      text: {
        zh: "看客户场景、问题后果、方案切入和结果，判断我们是否理解你的复杂度。",
        en: "See the context, cost, entry point, and outcome to judge whether we understand your complexity.",
      },
    },
    aboutPreview: {
      title: {
        zh: "为什么可以放心进一步沟通",
        en: "Why the conversation is worth continuing",
      },
      text: {
        zh: "复杂项目需要的不只是想法，而是能把范围、技术、交付和持续优化组织起来的能力。Si-Tech Intl 背后连接的是更完整的研发、平台和交付基础。",
        en: "Complex projects need more than ideas. They need the ability to organize scope, technology, delivery, and ongoing improvement. Si-Tech Intl is backed by broader R&D, platform, and delivery depth.",
      },
      bullets: {
        zh: [
          "80+ 运营商客户经验基础",
          "83 个全国分支机构与 4 大创新研发中心",
          "33 个大数据中心，覆盖运营商、产业、AI 与平台建设",
        ],
        en: [
          "Reference base across 80+ operator clients",
          "83 nationwide branches and 4 major R&D centers",
          "33 big-data centers across telecom, industry, AI, and platform delivery",
        ],
      },
    },
    cta: {
      title: {
        zh: "有具体问题，欢迎直接聊",
        en: "Have a concrete problem? Let's talk.",
      },
      text: {
        zh: "不需要完整方案。一个痛点、一个机会、一个想验证的场景，就可以开始。",
        en: "No full brief needed. One pain point, opportunity, or scenario is enough to start.",
      },
      highlights: {
        zh: [
          "先判断问题是否值得做，而不是先推一套系统",
          "可以从访谈、范围梳理或小范围试点切入",
          "适合需要长期配合和持续优化的复杂项目",
        ],
        en: [
          "Start by judging whether the problem is worth solving, not by pushing a full system",
          "Can begin with discovery, scope definition, or a focused pilot",
          "Built for projects that need ongoing collaboration, not one-off delivery",
        ],
      },
      button: { zh: "提交需求", en: "Submit an Inquiry" },
    },
  },
  solutionsPage: {
    hero: {
      image: "/images/curated/modern-office-tablet-discussion.jpg",
      title: { zh: "解决方案", en: "Solutions" },
      subtitle: {
        zh: "如果你的问题已经影响客户体验、团队效率、数据质量或业务增长，可以从下面五个方向里找到最接近的切入口。",
        en: "If your problem is already affecting customer experience, team efficiency, data quality, or growth, these five tracks help identify the closest starting point.",
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
          zh: "先看类似案例，再决定哪些方案值得进一步细聊。",
          en: "Use comparable stories to decide which solution deserves a deeper conversation.",
        },
        {
          zh: "如果信息还不完整，也可以先从访谈、范围澄清和初步架构讨论开始。",
          en: "If details are still incomplete, the work can still begin with discovery, scope clarification, and an initial architecture discussion.",
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
      image: "/images/curated/telecom-network-switch.jpg",
      title: {
        zh: "运营商 IT 支撑与服务域",
        en: "Telecom IT support and service domain",
      },
      subtitle: {
        zh: "以运营商 BOSS、MVNO、宽带支撑、智能客服和统一门户为代表的业务支撑与服务能力。",
        en: "A solution domain centered on operator BOSS, MVNO enablement, broadband support, smart customer service, and unified portals.",
      },
      intro: {
        zh: "这条方向聚焦运营商业务支撑、服务流程、客户管理和多角色协同，适合需要稳定运营、清晰交付边界和分阶段推进能力的团队。",
        en: "This track focuses on telecom support, service workflows, customer management, and multi-role coordination for buyers who need stable operations, clear delivery scope, and staged execution.",
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
          title: {
            zh: "服务与运营协同",
            en: "Service and operating coordination",
          },
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
          title: {
            zh: "国际化与 MVNO",
            en: "International and MVNO scenarios",
          },
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
      proofTitle: {
        zh: "为什么这条方向可信",
        en: "Why this track is credible",
      },
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
        zh: ["中国联通宽带业务支撑平台", "国际运营商统一营销服务门户"],
        en: [
          "China Unicom broadband support platform",
          "International operator unified marketing service portal",
        ],
      },
    },
    industry: {
      image: "/images/curated/warehouse-logistics-team.jpg",
      title: {
        zh: "数据要素与数字产业平台",
        en: "Data and industrial digital platforms",
      },
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
          title: {
            zh: "产业数智化架构",
            en: "Industrial digital architecture",
          },
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
          title: {
            zh: "产业中台与要素流通",
            en: "Industry middle-platforms and data flows",
          },
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
      proofTitle: {
        zh: "这一方向适合什么客户",
        en: "Who this direction fits well",
      },
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
          zh: "适合先从业务范围、角色边界和最小可运行流程开始推进的项目。",
          en: "Fits projects that can begin with business scope, role boundaries, and one minimum working flow.",
        },
      ],
      startTitle: { zh: "常见切入口", en: "Common starting scopes" },
      startItems: {
        zh: [
          "一个产业中台的最小架构与角色边界梳理",
          "一个交易、支付、物流协同链路的先行版本",
          "一个区域或行业平台的数据要素与运营视图起步范围",
          "一个具体产业场景的流程梳理与方案验证",
        ],
        en: [
          "A minimum architecture scope for an industry middle-platform",
          "A first version of a transaction, payment, and logistics coordination flow",
          "An initial data and operations layer for a sector or regional platform",
          "A workflow and solution-validation scope for one sector case",
        ],
      },
      storyTitle: { zh: "相关合作故事", en: "Related stories" },
      storyItems: {
        zh: ["黔牛帮肉牛产业数智化平台", "区域产业平台出海中台项目"],
        en: [
          "QianNiuBang beef industry digital platform",
          "Regional platform going-global middle-platform project",
        ],
      },
    },
    ai: {
      image: "/images/curated/call-center-team-meeting.jpg",
      title: {
        zh: "AI 产品与智能客服",
        en: "AI products and smart customer service",
      },
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
              "知识支持与业务问答",
              "面向角色和场景的开箱即用能力",
            ],
            en: [
              "Smart customer service and digital workers",
              "Knowledge support and business Q&A",
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
      proofTitle: {
        zh: "适合从哪些问题开始",
        en: "Good starting problem types",
      },
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
      image: "/images/curated/project-team-laptop.jpg",
      title: {
        zh: "Teamshub 协同与项目推进",
        en: "Teamshub coordination and project execution",
      },
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
          title: {
            zh: "项目作为核心对象",
            en: "Use the project as the core object",
          },
          text: {
            zh: "重要机会和项目进入统一主档后，参与者、资料、纪要、问题清单和待办都能围绕同一上下文积累。",
            en: "Once a project becomes the core record, participants, documents, notes, issue lists, and actions all accumulate around the same context.",
          },
          image: "/images/curated/project-team-laptop.jpg",
        },
        {
          title: {
            zh: "帖子、圈子与知识节点",
            en: "Posts, circles, and knowledge nodes",
          },
          text: {
            zh: "适合承接会议结论、FAQ、项目阶段总结和跨团队协作边界，让复杂工作有更清楚的结构。",
            en: "These structures work well for meeting outcomes, FAQs, project-stage summaries, and cross-team collaboration boundaries.",
          },
          image: "/images/curated/business-dashboard-laptop.jpg",
        },
        {
          title: {
            zh: "Agent 参与摘要与交接",
            en: "Use agents for summaries and handoffs",
          },
          text: {
            zh: "Agent 更适合在长链路协作里持续生成状态、风险和下一步，而不是只做一次性问答。",
            en: "Agents are most useful when they keep generating current state, risks, and next actions inside a long-running workflow.",
          },
          image: "/images/curated/software-developers-office.jpg",
        },
      ],
      useCasesTitle: {
        zh: "适合的业务场景",
        en: "Where this fits especially well",
      },
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
      image: "/images/curated/software-developers-office.jpg",
      title: {
        zh: "定制化业务系统与企业门户",
        en: "Custom business systems and enterprise portals",
      },
      subtitle: {
        zh: "当现有系统太分散、流程太依赖人工时，需要的是更贴业务的定制化平台层。",
        en: "When existing systems are too fragmented and too dependent on manual coordination, the business often needs a more custom-fit platform layer.",
      },
      intro: {
        zh: "这条方向适合需要优化门户、流程、后台、集成或运营可视化，但更希望先从明确范围逐步推进的团队。",
        en: "This track fits teams that need better portals, workflow, back-office systems, integrations, or operations visibility and prefer to move forward in a clear, staged scope.",
      },
      capabilityBlocks: [
        {
          title: {
            zh: "门户与统一入口",
            en: "Portals and unified entry points",
          },
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
          title: {
            zh: "业务流程与后台",
            en: "Business workflows and back-office systems",
          },
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
              "支持从模块边界、集成关系和运营视图开始逐步细化",
            ],
            en: [
              "System integrations, middle-layer connections, and data views",
              "Operational dashboards and state tracking",
              "Can be shaped progressively from module boundaries, integrations, and operating visibility",
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
          zh: "适合先明确模块边界、交付范围和关键流程，再逐步扩展。",
          en: "A good fit for starting with module boundaries, delivery scope, and key workflows, then expanding from there.",
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
        zh: ["企业统一入口与协同平台项目"],
        en: ["Enterprise unified portal and coordination platform project"],
      },
    },
  },
    partnershipPage: {
    hero: {
      image: "/images/curated/smiling-partnership-handshake.jpg",
      title: { zh: "合作方式", en: "Partnership" },
      subtitle: {
        zh: "我们与客户、渠道伙伴和本地执行团队一起定义范围、推进试点，并把项目带到真正可交付的下一步。",
        en: "We work with clients, channel partners, and local execution teams to define scope, move pilots forward, and take projects into a practical delivery phase.",
      },
    },
    groupsTitle: {
      zh: "什么情况下适合找我们合作",
      en: "When it makes sense to work with us",
    },
    groups: [
      {
        visible: true,
        order: 1,
        title: { zh: "本地解决方案伙伴", en: "Local solution partners" },
        text: {
          zh: "如果你已经有本地客户关系，但缺少足够的平台、工程或交付支撑，复杂项目很容易停在方案阶段。我们可以补上技术与交付后盾。",
          en: "If you already have local client relationships but need stronger platform, engineering, or delivery support, complex opportunities can stall at the proposal stage. We add the technical and delivery backing.",
        },
      },
      {
        visible: true,
        order: 2,
        title: {
          zh: "运营商与服务相关业务方",
          en: "Operator and service-side teams",
        },
        text: {
          zh: "如果服务流程、客户支撑、结算或运营协同已经影响效率，需要一起把问题边界、试点范围和落地路径定义清楚。",
          en: "If service workflows, customer support, settlement, or operating coordination are already hurting efficiency, we can define the problem boundary, pilot scope, and delivery path together.",
        },
      },
      {
        visible: true,
        order: 3,
        title: {
          zh: "产业与平台项目方",
          en: "Industry and platform project owners",
        },
        text: {
          zh: "如果平台只做展示，不能真正承接交易、数据、协同和运营，后续很难形成持续价值。我们可以一起把平台做成可运行的业务基础设施。",
          en: "If a platform only displays information but cannot support transactions, data, coordination, and operations, it is hard to create lasting value. We help turn it into usable business infrastructure.",
        },
      },
      {
        visible: true,
        order: 4,
        title: {
          zh: "顾问、渠道与业务连接方",
          en: "Advisors, channels, and business connectors",
        },
        text: {
          zh: "如果你能打开机会，但需要更完整的产品、方案和交付能力来承接客户需求，我们可以一起完成从机会判断到项目推进的链路。",
          en: "If you can open opportunities but need stronger products, solution design, and delivery capacity to serve client demand, we can carry the motion from qualification to execution together.",
        },
      },
    ],
    modelsTitle: { zh: "合作模型", en: "How collaboration can work" },
    models: [
      {
        visible: true,
        order: 1,
      title: { zh: "联合评估机会", en: "Joint opportunity shaping" },
      text: {
          zh: "先判断客户的问题是否足够清晰、价值是否足够大、是否适合从试点进入，避免一开始就投入过重。",
          en: "We first judge whether the client problem is clear, valuable, and suitable for a pilot so the team does not over-invest too early.",
        },
      },
      {
        visible: true,
        order: 2,
      title: { zh: "从试点开始", en: "Start with a pilot" },
      text: {
          zh: "先让一个关键流程跑通，让客户看到实际变化，再决定是否扩大范围。",
          en: "We make one critical workflow work first so the client sees a real change before deciding whether to expand.",
        },
      },
      {
        visible: true,
        order: 3,
        title: {
          zh: "联合交付与长期优化",
          en: "Joint delivery and ongoing refinement",
        },
      text: {
          zh: "本地团队保持客户接口，我们提供平台、工程、交付与持续优化能力，让项目不止完成上线，也能继续迭代。",
          en: "Local teams keep the client interface while we add platform, engineering, delivery, and ongoing optimization so the project can keep improving after launch.",
        },
      },
    ],
    opportunityTitle: {
      zh: "适合一起推进的合作机会",
      en: "Partnership opportunities we can move together",
    },
    opportunityText: {
      zh: "无论是产品落地、渠道协同还是本地执行支持，这里都可以作为合作切入口。",
      en: "Whether the need is product entry, channel coordination, or local execution support, this page can act as the collaboration starting point.",
    },
    opportunities: [
      {
        visible: true,
        order: 1,
        title: {
          zh: "产品进入当地市场",
          en: "Product entry into a local market",
        },
        text: {
          zh: "如果产品已经明确，但缺少当地渠道、试点客户、销售触达或实施伙伴，进入市场会变慢。我们可以一起设计本地切入方式。",
          en: "If the product is clear but local channels, pilot customers, sales reach, or implementation partners are missing, market entry slows down. We can shape the local entry path together.",
        },
      },
      {
        visible: true,
        order: 2,
        title: { zh: "联合方案推进", en: "Joint solution pursuit" },
        text: {
          zh: "如果客户问题跨越产品、流程和系统，单一供应商很难讲清完整价值。我们可以把本地关系、行业理解、平台能力和交付能力组合成联合方案。",
          en: "If the client problem spans product, workflow, and systems, a single vendor story can be too narrow. We combine local relationships, industry knowledge, platform capability, and delivery capacity into a joint offer.",
        },
      },
      {
        visible: true,
        order: 3,
        title: {
          zh: "本地服务与执行支持",
          en: "Local service and execution support",
        },
        text: {
          zh: "如果项目需要线下走访、客户沟通、渠道触达、试点落地与持续服务，只有远程支持往往不够。我们欢迎与本地执行团队共同推进。",
          en: "If a project needs local visits, client communication, channel reach, pilot execution, and ongoing service, remote support alone is often not enough. We welcome local execution partners.",
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
      image: "/images/curated/diverse-business-meeting-room.jpg",
      title: { zh: "产品", en: "Products" },
      subtitle: {
        zh: "这里展示可以帮助客户改善服务效率、项目协同、AI 落地和复杂业务支撑的产品。重点不是功能清单，而是这些产品能帮你减少哪些损耗、抓住哪些机会。",
        en: "This page highlights products that can improve service efficiency, project coordination, AI adoption, and complex operating support. The point is not a feature list, but the waste they reduce and the opportunities they unlock.",
      },
    },
    introTitle: {
      zh: "从具体问题进入产品，而不是从功能表开始",
      en: "Start from the business problem, not the feature list",
    },
    introText: {
      zh: "这里集中展示我们的产品、产品化能力以及适合联合推进的伙伴产品，方便你快速判断哪一项更适合当前项目或合作方向。",
      en: "This page brings together our products, productized capabilities, and partner products suited for joint pursuit so visitors can quickly decide which offer best fits the current project or partnership motion.",
    },
    filtersTitle: {
      zh: "浏览方式",
      en: "Browse by",
    },
    filters: [
      {
        title: { zh: "我们的产品", en: "Our products" },
        text: {
          zh: "适合需要改善项目推进、知识沉淀、服务运营或企业平台能力的客户。",
          en: "For buyers who need better project execution, knowledge continuity, service operations, or enterprise platform capability.",
        },
      },
      {
        title: { zh: "伙伴产品", en: "Partner products" },
        text: {
          zh: "适合希望快速验证新产品、新场景或本地市场机会的团队。",
          en: "For teams that want to validate a new product, use case, or local market opportunity more quickly.",
        },
      },
      {
        title: { zh: "项目场景", en: "Project fit" },
        text: {
          zh: "如果问题涉及客服效率、外呼执行、跨团队协作、数据流转或复杂交付，可以从这里判断产品匹配度。",
          en: "If the problem involves service efficiency, outbound execution, cross-team coordination, data flow, or complex delivery, start here to assess product fit.",
        },
      },
    ],
    featuredTitle: {
      zh: "重点产品",
      en: "Featured product",
    },
    featuredText: {
      zh: "客服、销售和支持团队如果无法稳定复制优秀员工经验，培训成本、通话质量和客户体验都会持续波动。Helport 正是从这个问题切入。",
      en: "When support, sales, and service teams cannot consistently replicate expert performance, training cost, call quality, and customer experience keep fluctuating. Helport starts from this problem.",
    },
    ownTitle: {
      zh: "我们的产品库",
      en: "Our product library",
    },
    ownText: {
      zh: "这些产品适合用来解决长链路协作、服务运营、平台支撑和流程可视化等问题。",
      en: "These products address long-cycle collaboration, service operations, platform support, and workflow visibility.",
    },
    ownItems: [
      {
        visible: true,
        order: 1,
        title: { zh: "Teamshub", en: "Teamshub" },
        image: "/images/curated/project-team-laptop.jpg",
        category: { zh: "自有产品", en: "Owned product" },
        status: { zh: "主推", en: "Featured" },
        subtitle: {
          zh: "当重要客户、项目资料和下一步动作散落在聊天记录和个人文件夹里，团队很难持续推进。Teamshub 帮助把项目上下文、知识和待办放回同一个工作系统。",
          en: "A business coordination product for lead handling, project execution, cross-team collaboration, and knowledge continuity.",
        },
        tags: {
          zh: ["Collaboration", "Project execution", "Knowledge continuity"],
          en: ["Collaboration", "Project execution", "Knowledge continuity"],
        },
        bullets: {
          zh: [
            "如果项目上下文丢失，客户跟进会变慢，交接成本会变高",
            "把项目、资料、纪要、FAQ、待办和风险集中到同一套工作空间",
            "适合长链路销售、复杂项目、跨团队与跨时区协作团队",
            "可从一个关键客户或一个项目闭环开始验证",
          ],
          en: [
            "What it is: our coordination and project execution product",
            "What it solves: handoff gaps, fragmented knowledge, and weak cross-team execution",
            "Who it fits: teams with long cycles, complex projects, and cross-time-zone collaboration",
            "How it starts: through a minimum working loop, demo, or project-based rollout",
          ],
        },
        note: {
          zh: "如需进一步评估，我们可以提供产品结构、角色视图和典型使用场景资料。",
          en: "If you need a deeper review, we can share product-structure, role-view, and use-case materials.",
        },
        cta: { zh: "查看 Teamshub 方案", en: "View Teamshub solution" },
        href: "/solutions/teamshub-business-os",
      },
      {
        visible: true,
        order: 2,
        title: {
          zh: "智能客服与服务运营产品",
          en: "Smart customer service and service operations product",
        },
        image: "/images/curated/call-center-team-meeting.jpg",
        category: { zh: "自有产品", en: "Owned product" },
        status: { zh: "重点方向", en: "Priority" },
        subtitle: {
          zh: "当客服知识分散、回复慢、质检覆盖不足时，客户体验会持续波动。该方向帮助服务团队把知识支持、辅助处理和运营分析接入真实流程。",
          en: "A productized offering around smart customer service, agent assistance, support workflows, and operational optimization.",
        },
        tags: {
          zh: ["AI service", "Agent assist", "Service operations"],
          en: ["AI service", "Agent assist", "Service operations"],
        },
        bullets: {
          zh: [
            "如果知识定位慢，坐席会反复查资料，客户等待时间变长",
            "把知识支持、摘要、辅助处理、质检和运营分析接到服务流程里",
            "适合客服团队、支持团队、呼叫中心和服务运营团队",
            "可从知识支持、摘要、辅助处理或质检场景先切入",
          ],
          en: [
            "What it is: our AI-enabled customer service and service-operations offering",
            "What it solves: slow replies, weak knowledge retrieval, poor handoffs, and uneven service quality",
            "Who it fits: support teams, service teams, call centers, and operations groups",
            "How it starts: through knowledge support, summarization, assistive handling, or QA use cases",
          ],
        },
        note: {
          zh: "如需进一步评估，我们可以提供能力架构、场景拆解和演示资料。",
          en: "If you need a deeper review, we can provide capability architecture, workflow breakdowns, and demo materials.",
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
      zh: "这些合作产品适合用于新场景试点、联合方案和本地市场机会。我们更关注客户问题是否真实、是否值得验证、是否能形成下一步行动。",
      en: "These partner products are suited for new use-case pilots, joint offers, and local market opportunities. We focus on whether the client problem is real, worth validating, and actionable.",
    },
    partnerItems: [
      {
        visible: true,
        order: 1,
        title: { zh: "Helport", en: "Helport" },
        image: "/images/curated/call-center-diverse-team.jpg",
        category: { zh: "伙伴产品", en: "Partner product" },
        status: { zh: "可合作推进", en: "Available for joint pursuit" },
        subtitle: {
          zh: "当团队无法稳定复制优秀客服、销售或专家的经验时，服务质量、转化率和培训效率都会受影响。Helport 用智能软件和解决方案强化客户沟通。",
          en: "When teams cannot consistently replicate the experience of strong agents, sales reps, or experts, service quality, conversion, and training efficiency suffer. Helport strengthens customer communication with intelligent software and solutions.",
        },
        tags: {
          zh: ["AI Assist", "AI Assist + BPO", "HyprX"],
          en: ["AI Assist", "AI Assist + BPO", "HyprX"],
        },
        bullets: {
          zh: [
            "AI Assist：实时转写、通话指导、知识调用、总结和质检",
            "AI Assist + BPO：把 AI 质检、脚本控制和人工外呼执行组合起来",
            "HyprX：把专家知识复制成可 24/7 服务的数字员工",
            "适合客服、销售外呼、远程支持和知识密集型服务团队",
          ],
          en: [
            "What it is: a partner product we can help bring into market conversations",
            "What it solves: customer support, call-center, remote-service, and AI copilot needs",
            "Who it fits: service teams, support teams, and businesses exploring AI assistance",
            "How Si-Tech Intl fits: we can support introduction, deal motion, channel collaboration, and resale support",
          ],
        },
        note: {
          zh: "如需进一步评估，我们可以提供产品介绍、适用场景和合作模式资料。",
          en: "If you need a deeper review, we can provide product, use-case, and collaboration-model materials.",
        },
        cta: { zh: "查看详细介绍", en: "View detailed introduction" },
        href: "/products/helport",
      },
      {
        visible: false,
        order: 2,
        title: { zh: "更多合作产品", en: "Additional partner products" },
        image: "/images/curated/business-partner-handshake.jpg",
        category: { zh: "伙伴产品", en: "Partner product" },
        status: { zh: "洽谈中", en: "In discussion" },
        subtitle: {
          zh: "适合后续纳入联合方案、渠道合作或生态协同的更多伙伴产品。",
          en: "Additional partner products that may be brought into joint offers, channel programs, or ecosystem collaboration later.",
        },
        tags: {
          zh: ["Ecosystem", "Joint offer", "Partner motion"],
          en: ["Ecosystem", "Joint offer", "Partner motion"],
        },
        bullets: {
          zh: [
            "正在筛选适合本地市场合作与联合推进的产品方向",
            "后续会优先补充具备明确场景与合作路径的产品",
            "适合需要渠道协同、联合方案或本地支持的合作机会",
            "可通过 Si-Tech Intl 进入初步判断与合作沟通",
          ],
          en: [
            "We are curating additional partner-product directions for local-market collaboration and joint pursuit",
            "Future additions will prioritize offers with clear use cases and commercial paths",
            "These products fit opportunities that need channel coordination, joint packaging, or local support",
            "Si-Tech Intl can support early evaluation and partnership conversations",
          ],
        },
        note: {
          zh: "如需了解正在洽谈的产品方向，可以直接联系我们讨论。",
          en: "If you want to understand products currently under discussion, contact us directly.",
        },
        cta: {
          zh: "先联系讨论合作方向",
          en: "Discuss a potential partner fit",
        },
        href: "/contact",
      },
    ],
    cta: {
      title: {
        zh: "如果你想了解某个产品是否适合你的项目，或者想把伙伴产品带进联合方案，我们可以直接沟通。",
        en: "If you want to assess whether one of these products fits your project, or you want to bring a partner product into a joint solution, we can talk directly.",
      },
      button: { zh: "进入产品沟通", en: "Talk Products" },
    },
  },
  storiesPage: {
    hero: {
      image: "/images/curated/business-partners-discussion.jpg",
      title: { zh: "合作故事", en: "Stories" },
      subtitle: {
        zh: "通过真实项目名称和公开信息，快速了解不同场景下的问题、切入方式和可见成果。",
        en: "Use real project names and public information to understand the problem, solution entry point, and visible outcome across different scenarios.",
      },
    },
    introTitle: {
      zh: "展开每个故事，查看问题、做法和结果",
      en: "Open each story to see the problem, the approach, and the outcome",
    },
    items: [
      {
        visible: true,
        order: 1,
        title: {
          zh: "中国联通宽带业务支撑平台",
          en: "China Unicom broadband support platform",
        },
        summary: {
          zh: "公开材料显示该平台已在中国联通 5 个省落地，重点在于把宽带资源管理、开通激活、工单协同和运营分析接成一条完整链路。",
          en: "Public materials show this platform deployed across five China Unicom provinces, connecting broadband resource management, activation, ticket coordination, and operational analysis into one working chain.",
        },
        image: "/images/curated/broadband-network-cables.jpg",
        labels: {
          zh: ["运营商域", "中国联通", "宽带支撑"],
          en: ["Telecom", "China Unicom", "Broadband support"],
        },
        solution: {
          zh: "对应方案：运营商 IT 支撑与服务域",
          en: "Related solution: Telecom IT support and service domain",
        },
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
              zh: "公开材料给出的效果包括宽带资源准确性达到 95% 以上，并带来更高的业务处理效率。",
              en: "Public materials cite results including broadband resource accuracy above 95% and stronger operating efficiency.",
            },
          },
        ],
      },
      {
        visible: true,
        order: 2,
        title: {
          zh: "黔牛帮肉牛产业数智化平台",
          en: "QianNiuBang beef industry digital platform",
        },
        summary: {
          zh: "这是真实公开的平台名称，重点在于围绕贵州肉牛产业链，把采购、交易、支付与物流协同做成可运行的平台能力。",
          en: "This is a public platform name focused on the Guizhou beef supply chain, connecting procurement, trade, payment, and logistics into a usable digital platform.",
        },
        image: "/images/curated/cattle-farm-platform.jpg",
        labels: {
          zh: ["数字产业域", "黔牛帮", "产业平台"],
          en: ["Industry", "QianNiuBang", "Platform"],
        },
        solution: {
          zh: "对应方案：数据要素与数字产业平台",
          en: "Related solution: Data and industrial digital platforms",
        },
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
              zh: "公开材料里的价值表达是提高产业链运转效率并降低企业经营成本。",
              en: "Public materials frame the value as stronger supply-chain efficiency and lower operating cost for participating businesses.",
            },
          },
        ],
      },
      {
        visible: true,
        order: 3,
        title: {
          zh: "中国移动智能客服平台",
          en: "China Mobile intelligent customer service platform",
        },
        summary: {
          zh: "公开材料显示该智能客服平台已在中国移动多个项目中落地，并以智能坐席、多模态交互、智能派单和质检分析为主要能力。",
          en: "Public materials show the intelligent customer service platform deployed across multiple China Mobile projects with smart agent assistance, multimodal interaction, routing, and QA analytics.",
        },
        image: "/images/curated/call-center-diverse-team.jpg",
        labels: {
          zh: ["AI", "中国移动", "智能客服"],
          en: ["AI", "China Mobile", "Smart service"],
        },
        solution: {
          zh: "对应方案：AI 产品与智能客服",
          en: "Related solution: AI products and smart customer service",
        },
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
      image: "/images/curated/diverse-executive-meeting.jpg",
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
      zh: "Si-Tech Intl 是一个面向海外合作与项目推进的入口，帮助客户快速了解我们最强的解决方案方向、可信的能力基础，以及适合从哪里开始。",
      en: "Si-Tech Intl is an international entry point for partnership and project execution, designed to show our strongest solution tracks, credible capability base, and the most practical place to start.",
    },
    stats: [
      { value: "1995", label: { zh: "思特奇成立时间", en: "Founded" } },
      {
        value: "30+",
        label: { zh: "年持续积累", en: "Years of sustained experience" },
      },
      { value: "3000+", label: { zh: "员工规模", en: "Employees" } },
      { value: "86%+", label: { zh: "研发人员占比", en: "R&D ratio" } },
    ],
    pillars: [
      {
        title: { zh: "长期项目经验", en: "Long-term project experience" },
        text: {
          zh: "复杂项目最怕只看演示、不看落地。思特奇长期服务运营商与大型客户，积累的是需求澄清、系统建设、上线推进和持续运营的完整经验。",
          en: "Complex projects fail when teams judge only the demo and ignore delivery. Si-Tech's long-term work with operators and large clients has built experience across scoping, system delivery, rollout, and ongoing operations.",
        },
      },
      {
        title: {
          zh: "质量与稳定性意识",
          en: "Quality and stability mindset",
        },
        text: {
          zh: "面向企业和运营商的系统不能只追求上线速度，还要考虑权限、数据、流程、异常处理和长期维护。我们更重视可持续运行的质量基础。",
          en: "Enterprise and operator systems cannot optimize only for launch speed. Permissions, data, workflows, exceptions, and maintainability all matter. We put weight on quality that can keep running.",
        },
      },
      {
        title: {
          zh: "交付协同能力",
          en: "Delivery coordination capability",
        },
        text: {
          zh: "真正的项目通常涉及业务、技术、管理和本地执行多方协同。Si-Tech Intl 的价值在于把问题、范围、沟通和交付节奏组织起来。",
          en: "Real projects usually involve business, engineering, management, and local execution. Si-Tech Intl helps organize the problem, scope, communication, and delivery rhythm.",
        },
      },
    ],
    coverageTitle: {
      zh: "能力覆盖面",
      en: "Coverage areas",
    },
    coverageItems: [
      {
        zh: "4 大运营商核心技术服务与长期业务支撑经验",
        en: "Core technical service and long-term support across the four major operators",
      },
      {
        zh: "83 个全国分支机构与 4 大创新研发中心",
        en: "83 nationwide branches and 4 major innovation and R&D centers",
      },
      {
        zh: "33 个大数据中心与超 10 亿用户支撑经验",
        en: "33 big-data centers and support experience across more than 1 billion users",
      },
      {
        zh: "研发投入占营收约 20%，软件著作权 845 件、专利 328 件",
        en: "R&D spending at roughly 20 percent of revenue, plus 845 software copyrights and 328 patents",
      },
    ],
  },
  contactPage: {
    hero: {
      image: "/images/curated/business-partner-handshake.jpg",
      title: { zh: "联系", en: "Contact" },
      subtitle: {
        zh: "告诉我们你现在最想推进的业务支撑、服务流程或平台需求，我们会尽快与您沟通下一步。",
        en: "Tell us which support workflow, service process, or platform scope you want to move next, and our team will follow up shortly.",
      },
    },
    panelTitle: { zh: "直接联系", en: "Direct Contact" },
    note: {
      zh: "提交后你会收到确认邮件，我们也会尽快通过邮件与你联系。",
      en: "After you submit the form, you will receive a confirmation email and our team will follow up by email as soon as possible.",
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
      companySize: { zh: "公司人数规模", en: "Company Size" },
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
          "解决方案 / 业务系统",
          "产品 / Helport / AI 服务",
          "Partnership / 渠道合作",
          "项目试点 / Demo / 需求评估",
          "技术与交付能力了解",
          "暂时还不确定",
        ],
        en: [
          "Solutions / business systems",
          "Products / Helport / AI service",
          "Partnership / channel collaboration",
          "Pilot / demo / needs assessment",
          "Technical and delivery capability",
          "Not sure yet",
        ],
      },
      roleOptions: {
        zh: ["创始人 / 高管", "业务负责人", "产品 / 项目负责人", "技术负责人", "销售 / 渠道负责人", "顾问 / 合作伙伴", "其他"],
        en: ["Founder / Executive", "Business Lead", "Product / Project Lead", "Technical Lead", "Sales / Channel Lead", "Advisor / Partner", "Other"],
      },
      companySizeOptions: {
        zh: ["1-10 人", "11-50 人", "51-200 人", "201-1000 人", "1000 人以上", "暂时不方便透露"],
        en: ["1-10 employees", "11-50 employees", "51-200 employees", "201-1000 employees", "1000+ employees", "Prefer not to say"],
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
      zh: "我们只收集你主动提交的联系信息与咨询内容，用于响应需求、安排沟通并持续跟进项目机会。",
      en: "We collect only the contact information and inquiry details you submit voluntarily so we can respond to your request, arrange follow-up, and manage the opportunity responsibly.",
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
          zh: "用于与你联系、评估项目匹配度、安排后续沟通，并在我们的业务系统中保留必要记录。",
          en: "We use it to contact you, assess fit, arrange follow-up, and keep the necessary record in our business systems.",
        },
      },
      {
        title: { zh: "信息处理方式", en: "How data is handled" },
        text: {
          zh: "提交内容会通过受保护的后端接口发送，并同步到我们使用的邮件与业务跟进工具中。",
          en: "Form submissions are sent through a protected backend endpoint and may be routed into our email and business follow-up tools.",
        },
      },
    ],
  },
  footer: {
    navTitle: { zh: "页面", en: "Pages" },
    focusTitle: { zh: "重点方向", en: "Focus Areas" },
    focusItems: {
      zh: [
        "Helport 合作产品与试用切入",
        "运营商 IT 支撑与服务域",
        "数据要素与数字产业平台",
      ],
      en: [
        "Helport partner product and trial entry",
        "Telecom IT support and service domain",
        "Data and industrial digital platforms",
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

export function isVisible(item: VisibilityItem | undefined) {
  return item?.visible !== false;
}

export function visibleItems<T extends VisibilityItem>(items: readonly T[]) {
  return [...items]
    .filter((item) => item.visible !== false)
    .sort(
      (a, b) =>
        (a.order ?? Number.MAX_SAFE_INTEGER) -
        (b.order ?? Number.MAX_SAFE_INTEGER),
    );
}
