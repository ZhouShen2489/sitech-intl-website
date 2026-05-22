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
      zh: "Si-Tech Intl 帮助海外客户推进运营商支撑、产业平台、AI 服务和企业系统。",
      en: "Si-Tech Intl helps international clients build telecom, platform, AI, and business systems.",
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
      title: { zh: "运营商", en: "Telecom" },
      text: {
        zh: "面向运营商、MVNO 与复杂服务环境的核心能力。",
        en: "Core capabilities for operators, MVNOs, and complex service environments.",
      },
    },
    {
      key: "enterprise",
      title: { zh: "企业与平台", en: "Enterprise & Platforms" },
      text: {
        zh: "面向产业平台、协同体系与定制业务系统。",
        en: "Practical tracks for platforms, coordination, and custom systems.",
      },
    },
    {
      key: "ai",
      title: { zh: "AI 与服务", en: "AI & Service" },
      text: {
        zh: "把 AI 放进客服、服务和运营流程。",
        en: "Putting AI into service and operations workflows.",
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
        zh: "让运营商业务真正跑顺",
        en: "Make telecom operations run smoothly",
      },
      text: {
        zh: "围绕 BSS/OSS、客户生命周期、计费结算和 MVNO 运营，帮助通信业务更快上线、更稳运营。",
        en: "BSS/OSS, lifecycle, billing, resource access, and MVNO operations for faster, steadier launches.",
      },
      bullets: {
        zh: [
          "BSS/OSS 端到端业务支撑",
          "MVNO 国际化与多级分销",
          "订单、开通、计费、结算闭环",
        ],
        en: [
          "End-to-end BSS/OSS support",
          "International MVNO and multi-level distribution",
          "Closed-loop ordering, activation, billing, and settlement",
        ],
      },
      linkLabel: { zh: "了解方案", en: "View solution" },
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
        zh: "当交易、支付、物流和运营割裂，平台容易只剩展示。我们把关键动作接起来，形成真实效率。",
        en: "When trade, payment, logistics, and operations split apart, platforms become displays. We connect the key actions.",
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
      linkLabel: { zh: "了解方案", en: "View solution" },
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
        zh: "AI 不能只停在演示。我们把 AI 放进真实流程，改善回复、知识和质检。",
        en: "AI belongs in real workflows, where it can improve replies, knowledge, and QA.",
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
      linkLabel: { zh: "了解方案", en: "View solution" },
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
        zh: "群聊和文件夹很难承接复杂项目。Teamshub 统一客户、资料、待办和风险。",
        en: "Chats and folders cannot carry complex projects. Teamshub keeps context, files, tasks, and risks together.",
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
      linkLabel: { zh: "了解方案", en: "View solution" },
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
        zh: "系统多但互不相通，会拖慢响应。我们从关键流程切入，把系统接成可运行的业务层。",
        en: "Disconnected systems slow work. We start from key workflows and connect them into a usable business layer.",
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
      linkLabel: { zh: "了解方案", en: "View solution" },
      image: "/images/curated/software-developers-office.jpg",
    },
  ],
  home: {
    sections: {
      marquee: { visible: true },
      companyIntro: { visible: true },
      productSpotlight: { visible: false },
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
        en: "For operators, platforms, service teams, and partners",
      },
      title: {
        zh: "让复杂业务支撑真正跑起来",
        en: "Make complex business support actually work",
      },
      subtitle: {
        zh: "我们帮助客户解决系统分散、流程割裂、AI 难落地和项目推进慢的问题，从清晰试点开始。",
        en: "We help fix scattered systems, broken workflows, hard-to-adopt AI, and slow project execution.",
      },
      primaryCta: { zh: "联系我们", en: "Talk to Us" },
      secondaryCta: { zh: "查看产品", en: "Explore Products" },
    },
    companyIntro: {
      eyebrow: {
        zh: "思特奇业务与能力背书",
        en: "Capability backing from the broader Si-Tech organization",
      },
      title: {
        zh: "复杂项目，关键在落地",
        en: "Complex projects need delivery discipline",
      },
      text: {
        zh: "当业务跨角色、跨系统、跨地区，单个工具很难解决问题。我们把复杂系统经验带进具体项目。",
        en: "When work spans roles, systems, and regions, one tool rarely solves the problem. We bring delivery experience.",
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
            zh: "订单、客户、工单和结算分散，会拉低体验和效率。我们擅长多角色协同。",
            en: "Scattered orders, customers, tickets, and settlement hurt experience and efficiency.",
          },
        },
        {
          title: {
            zh: "AI 要进入真实流程",
            en: "AI must enter real workflows",
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
            zh: "一次性重建风险高。我们从一个范围、一个试点或一个关键流程开始。",
            en: "Large rebuilds are risky. Start with one scope, pilot, or workflow.",
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
        zh: "看场景、问题、切入和结果，判断我们是否理解你的复杂度。",
        en: "Review context, problem, entry point, and outcome.",
      },
    },
    aboutPreview: {
      title: {
        zh: "为什么可以放心进一步沟通",
        en: "Why the conversation is worth continuing",
      },
      text: {
        zh: "复杂项目需要能组织范围、技术、交付和持续优化的能力。Si-Tech Intl 背后连接完整研发与交付基础。",
        en: "Complex projects need scope, technology, delivery, and iteration discipline. Si-Tech Intl is backed by broader R&D and delivery depth.",
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
        zh: "如果问题已经影响体验、效率、数据或增长，可以从五个方向找到切入口。",
        en: "If the problem affects experience, efficiency, data, or growth, start with these five tracks.",
      },
    },
    directionsTitle: {
      zh: "五个可落地的方向",
      en: "Five practical starting points",
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
          zh: "先把一个可试用、可交付的小范围跑通。",
          en: "Make one scoped, usable flow work first.",
        },
        {
          zh: "先看类似案例，再决定哪些方案值得进一步细聊。",
          en: "Use comparable stories to decide which solution deserves a deeper conversation.",
        },
        {
          zh: "如果信息还不完整，也可以先从访谈、范围澄清和初步架构讨论开始。",
          en: "If details are incomplete, start with discovery, scope, and initial architecture.",
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
      badge: {
        zh: "重点解决方案 / 运营商 BSS/OSS 与 MVNO 支撑",
        en: "Featured solution / Telecom BSS, OSS, and MVNO enablement",
      },
      title: {
        zh: "让运营商业务真正跑顺",
        en: "Make telecom operations run smoothly",
      },
      subtitle: {
        zh: "面向运营商、MVNO、代理商和数字服务团队，把 BSS/OSS、客户生命周期、计费和资源接入接成可交付体系。",
        en: "For operators, MVNOs, agents, and digital-service teams, this connects BSS/OSS, lifecycle, billing, and resources.",
      },
      intro: {
        zh: "从客户开户、订单开通、计费账务到伙伴结算，运营商业务需要一条稳定、可追踪、可扩展的运营链路。",
        en: "From onboarding and activation to billing and partner settlement, telecom services need a stable, traceable operating loop.",
      },
      proofBar: [
        {
          value: "BSS/OSS",
          label: { zh: "核心支撑", en: "Core support" },
          text: {
            zh: "覆盖 CRM、订单、开通、计费、结算和服务运营",
            en: "Covers CRM, ordering, activation, billing, settlement, and service",
          },
        },
        {
          value: "MVNO",
          label: { zh: "全球化场景", en: "Global scenarios" },
          text: {
            zh: "支持个人业务、批发、转售、多租户和多级分销",
            en: "Supports retail, wholesale, resale, multi-tenant, and distribution models",
          },
        },
        {
          value: "4G/5G",
          label: { zh: "融合业务", en: "Converged services" },
          text: {
            zh: "适配移动、固话、宽带、流量、云和专线业务",
            en: "Fits mobile, fixed-line, broadband, data, cloud, and private-line services",
          },
        },
        {
          value: "分阶段",
          label: { zh: "可落地", en: "Staged delivery" },
          text: {
            zh: "可从 MVNO 上线、订单闭环、计费或门户试点切入",
            en: "Start from MVNO launch, order flow, billing, or portal pilots",
          },
        },
      ],
      problemTitle: {
        zh: "把通信业务从上线到运营跑成闭环",
        en: "Run communication services from launch to operations",
      },
      problemItems: [
        {
          title: { zh: "业务上线慢，机会窗口变短", en: "Slow launch misses the market window" },
          text: {
            zh: "新地区、新套餐和转售模式，可从资源、开户、订购和计费快速落地。",
            en: "Launch regions, offers, and resale models with resource, onboarding, order, and billing support.",
          },
        },
        {
          title: { zh: "订单能受理，但流程跑不闭环", en: "Orders are accepted but not closed" },
          text: {
            zh: "把受理、缴费、开通、计费和异常处理放在同一条可追踪流程里。",
            en: "Track intake, payment, activation, billing, and exceptions in one operating flow.",
          },
        },
        {
          title: { zh: "计费结算不准，合作方信任受损", en: "Inaccurate billing damages partner trust" },
          text: {
            zh: "支持账单、佣金、分成、对账和伙伴结算，让合作关系更清楚。",
            en: "Support bills, commissions, revenue share, reconciliation, and partner settlement.",
          },
        },
        {
          title: { zh: "全球资源接入复杂，运营模型难复制", en: "Global resources are hard to operate consistently" },
          text: {
            zh: "统一管理地区资源、号卡、代理角色和本地规则。",
            en: "Manage resources, SIMs, agent roles, and local rules consistently.",
          },
        },
      ],
      tracksTitle: {
        zh: "两条清晰产品主线",
        en: "Two clear solution tracks",
      },
      tracksText: {
        zh: "面向现有运营商的 BSS/OSS 闭环支撑，也面向 MVNO、代理商和国际通信业务的快速开展。",
        en: "Support full BSS/OSS operations for operators and fast MVNO launch for international communication businesses.",
      },
      tracks: [
        {
          title: { zh: "BSS/OSS：把生产、运营和管理接成闭环", en: "BSS/OSS: connect production, operations, and management" },
          label: { zh: "适合基础运营商、区域运营商和复杂通信服务团队", en: "For operators, regional carriers, and complex communication-service teams" },
          text: {
            zh: "支撑客户、产品、订单、网络服务、伙伴、计费和运营，覆盖移动、宽带、云和专线。",
            en: "Support customers, offers, orders, partners, billing, and operations across mobile, broadband, cloud, and private-line.",
          },
          bullets: {
            zh: [
              "全业务办理：从产品受理到订单流转，减少跨系统断点",
              "客户生命周期：入网、发展、稳定、离网全过程管理",
              "计费结算：客户账单、代理商佣金、分成规则和对账闭环",
              "运营管控：从办理、缴费、开通到计费的一站式视图",
            ],
            en: [
              "Full-service handling from offer intake to order flow",
              "Customer lifecycle management across acquisition, growth, retention, and churn",
              "Billing and settlement across customer bills, agent commissions, revenue-share rules, and reconciliation",
              "Operational visibility from intake, payment, activation, to billing",
            ],
          },
        },
        {
          title: { zh: "MVNO：让个人、批发和转售业务轻装上阵", en: "MVNO: launch retail, wholesale, and resale businesses faster" },
          label: { zh: "适合虚拟运营商、代理商、国际通信业务和本地市场合作", en: "For MVNOs, agents, international communication services, and local-market partners" },
          text: {
            zh: "支持自有与第三方资源接入，帮助 MVNO 和代理商开展零售、批发、转售和分销。",
            en: "Connect owned and third-party resources for retail, wholesale, resale, and distribution.",
          },
          bullets: {
            zh: [
              "资源接入：对接不同国家和地区运营商号卡资源",
              "多业务模式：支持 ToC、B2B2C、B2B2b2c 和批发转售",
              "多租户运营：支持虚商、代理商和公众客户的角色分层",
              "灵活结算：适配不同地区、合作方和分销规则",
            ],
            en: [
              "Resource access across operators and SIM resources in different regions",
              "Business models across retail, B2B2C, B2B2b2c, wholesale, and resale",
              "Multi-tenant operations across MVNOs, agents, and public customers",
              "Flexible settlement for regions, partners, and distribution rules",
            ],
          },
        },
      ],
      capabilityBlocks: [
        {
          title: { zh: "客户与产品运营", en: "Customer and product operations" },
          bullets: {
            zh: [
              "客户入网、发展、稳定与离网管理",
              "产品套餐、营销活动和推荐策略配置",
              "个客、家客、政企和新业务支撑",
            ],
            en: [
              "Customer acquisition, growth, retention, and churn management",
              "Offer packages, campaign configuration, and recommendation strategy",
              "Support for consumer, home, enterprise, and new-service segments",
            ],
          },
        },
        {
          title: {
            zh: "订单、网络与服务交互",
            en: "Order, network, and service interaction",
          },
          bullets: {
            zh: [
              "业务受理、订单流转和开通协同",
              "网络资源、服务资源和工单联动",
              "办理、缴费、开通、计费端到端可视",
            ],
            en: [
              "Service intake, order flow, and activation coordination",
              "Network resources, service resources, and ticket workflows",
              "End-to-end visibility across intake, payment, activation, and billing",
            ],
          },
        },
        {
          title: {
            zh: "合作伙伴与计费结算",
            en: "Partner, billing, and settlement",
          },
          bullets: {
            zh: [
              "代理商、虚商、批发与转售角色管理",
              "账单、佣金、分成与结算规则支撑",
              "多租户、多级分销和跨地区合作模式",
            ],
            en: [
              "Agent, MVNO, wholesale, and resale role management",
              "Bills, commissions, revenue share, and settlement rules",
              "Multi-tenant, multi-level distribution, and cross-region partner models",
            ],
          },
        },
      ],
      proofTitle: {
        zh: "客户可以先验证这些结果",
        en: "Outcomes buyers can validate first",
      },
      proofItems: [
        {
          zh: "新业务上线：验证资源接入、客户开户、套餐销售和开通流程。",
          en: "Service launch: validate resources, onboarding, offer sales, and activation.",
        },
        {
          zh: "订单闭环：验证受理、缴费、开通、计费和异常处理。",
          en: "Order closure: validate intake, payment, activation, billing, and exceptions.",
        },
        {
          zh: "伙伴运营：验证代理商、转售、佣金、分成和对账规则。",
          en: "Partner operations: validate agents, resale, commissions, revenue share, and reconciliation.",
        },
      ],
      visualTitle: { zh: "方案交付视图", en: "Solution delivery views" },
      visualText: {
          zh: "用工作台、流程和运营看板三个视角，帮助客户理解方案如何进入真实业务。",
        en: "Use workspace, workflow, and ops views to show how the solution works.",
      },
      visualSlots: [
        {
          title: { zh: "BSS/OSS 工作台视图", en: "BSS/OSS workspace view" },
          label: { zh: "工作台视图", en: "Workspace view" },
          image: "/images/curated/telecom-network-switch.jpg",
          text: {
            zh: "展示客户、订单、开通、计费和工单的统一视图。",
            en: "Show customers, orders, activation, billing, and tickets in one view.",
          },
        },
        {
          title: { zh: "订单到结算流程图", en: "Order-to-settlement flow" },
          label: { zh: "流程闭环", en: "Workflow loop" },
          image: "/images/curated/broadband-network-cables.jpg",
          text: {
            zh: "展示从受理、缴费、开通、计费到账务结算的闭环。",
            en: "Show intake, payment, activation, billing, and settlement.",
          },
        },
        {
          title: { zh: "MVNO 运营看板", en: "MVNO operations dashboard" },
          label: { zh: "运营数据", en: "Ops data" },
          image: "/images/curated/business-dashboard-laptop.jpg",
          text: {
            zh: "展示用户增长、套餐销售、渠道分销和结算状态。",
            en: "Show growth, package sales, channel performance, and settlement status.",
          },
        },
      ],
      startTitle: { zh: "建议从这些试点切入", en: "Recommended starting points" },
      startItems: {
        zh: [
          "MVNO 快速上线：验证资源接入、开户、套餐销售和计费",
          "订单闭环优化：把受理、缴费、开通、计费和异常处理串起来",
          "合作伙伴分销：验证代理商、批发、转售和佣金结算规则",
          "统一门户试点：从一个服务或营销门户开始",
        ],
        en: [
          "MVNO launch: validate resources, onboarding, offers, and billing",
          "Order-flow closure: connect intake, payment, activation, billing, and exception handling",
          "Partner distribution: validate agents, wholesale, resale, and commission rules",
          "Unified portal pilot: start with one service or marketing portal",
        ],
      },
      principleTitle: {
        zh: "适合先讨论的客户场景",
        en: "Best-fit starting scenarios",
      },
      principleItems: {
        zh: [
          "新 MVNO 或代理商业务需要快速上线",
          "现有订单、开通、计费和结算流程断点多",
          "多级渠道、佣金和对账规则需要统一管理",
          "需要统一门户承接客户、伙伴和企业运营",
        ],
        en: [
          "New MVNO or agent business needs a faster launch",
          "Orders, activation, billing, and settlement have too many handoffs",
          "Channel commissions and reconciliation need unified control",
          "A unified portal is needed for customers, partners, and operations",
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
        zh: "围绕产业中台、数据流通、交易协同和产业运营，搭建更贴业务的平台能力。",
        en: "Platform capability for industry middle-platforms, data flows, transactions, and operations.",
      },
      intro: {
        zh: "数字产业的重点不是平台概念，而是打通数据、交易、支付、物流和产业运营。",
        en: "The value is not the platform concept. It is connecting data, transactions, payment, logistics, and operations.",
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
              "Industrial digital architecture",
              "Industry operations frameworks",
              "Platform foundation for public and enterprise stakeholders",
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
              "Information, trade, payment, invoice, and logistics flows",
              "Transaction, payment, rules, and operations tools",
              "Middle-platform capability for industrial infrastructure",
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
          en: "Teams that need data to support transactions and operations, not just reports.",
        },
        {
          zh: "适合先从业务范围、角色边界和最小可运行流程开始推进的项目。",
          en: "Fits projects that can start with scope, roles, and one working flow.",
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
          "A first transaction, payment, and logistics flow",
          "A data and operations layer for one sector or region",
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
        zh: "重点不是单次演示，而是 AI 如何持续提升处理、交接、分析和优化。",
        en: "The focus is lasting improvement in handling, handoff, analytics, and operations.",
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
              "Capability from requirements to testing",
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
              "Metrics and ongoing improvement",
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
          en: "Buyers who want a pilot before a full AI platform.",
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
        zh: "Teamshub 项目级知识沉淀",
        en: "Teamshub project knowledge workspace",
      },
      subtitle: {
        zh: "把聊天、会议、文件、帖子和任务沉淀到项目空间，让沟通可追溯、可复用、可执行。",
        en: "Turn chats, meetings, files, posts, and tasks into traceable project context.",
      },
      intro: {
        zh: "Teamshub 面向长周期客户项目、专业服务交付、跨团队协作和出海业务推进。",
        en: "Teamshub fits long-cycle client work, services delivery, cross-team coordination, and international growth.",
      },
      proofBar: [
        {
          value: "Project",
          label: { zh: "项目空间", en: "Workspace" },
          text: {
            zh: "围绕客户、机会、交付或团队事项沉淀上下文",
            en: "Keep context around a client, opportunity, delivery, or team initiative",
          },
        },
        {
          value: "Circle",
          label: { zh: "协作边界", en: "Boundary" },
          text: {
            zh: "按客户、项目团队、交付资料或外部伙伴划分权限",
            en: "Separate access by client, team, materials, or partners",
          },
        },
        {
          value: "Post",
          label: { zh: "知识单元", en: "Knowledge unit" },
          text: {
            zh: "把会议纪要、客户需求、决策和复盘沉淀成目录",
            en: "Capture notes, requirements, decisions, and reviews as a catalog",
          },
        },
        {
          value: "AI",
          label: { zh: "项目助手", en: "Assistant" },
          text: {
            zh: "基于权限总结进展、查历史、提任务、生成跟进",
            en: "Summarize, search history, extract tasks, and draft follow-up with permissions",
          },
        },
      ],
      problemTitle: {
        zh: "让项目上下文不再散落",
        en: "Keep project context from scattering",
      },
      problemItems: [
        {
          title: { zh: "聊天里有信息，但没有目录", en: "Chats have information, not structure" },
          text: {
            zh: "关键需求、决策和风险很容易被新的消息冲走。Teamshub 把重要内容沉淀成帖子目录。",
            en: "Important needs, decisions, and risks get buried. Teamshub turns them into a post catalog.",
          },
        },
        {
          title: { zh: "任务有状态，但缺少来龙去脉", en: "Tasks need context" },
          text: {
            zh: "任务可以绑定来源帖子、客户原话、相关文件和责任人，减少重复解释。",
            en: "Tasks stay linked to source posts, customer context, files, and owners.",
          },
        },
        {
          title: { zh: "新人加入项目太慢", en: "New members ramp slowly" },
          text: {
            zh: "Project View 汇总阶段、圈子、帖子、任务和 AI 摘要，让新人快速读懂历史。",
            en: "Project View shows stages, circles, posts, tasks, and AI summaries.",
          },
        },
        {
          title: { zh: "外部协作需要边界", en: "External work needs boundaries" },
          text: {
            zh: "圈子级权限让客户、伙伴和项目团队在同一项目下协作，但信息边界清楚。",
            en: "Circle-level access lets clients, partners, and teams collaborate with clear boundaries.",
          },
        },
      ],
      mechanismTitle: {
        zh: "从项目空间到 AI 可用的知识资产",
        en: "From project workspace to AI-ready knowledge",
      },
      mechanismText: {
        zh: "Teamshub 用 Project → Circle → Post → Task → AI，把协作转成可追溯的项目知识。",
        en: "Project -> Circle -> Post -> Task -> AI turns collaboration into reusable project knowledge.",
      },
      mechanismItems: [
        {
          title: { zh: "Project", en: "Project" },
          text: {
            zh: "承载客户、机会、交付、合作或团队事项。",
            en: "A workspace for a client, opportunity, delivery, partnership, or team initiative.",
          },
        },
        {
          title: { zh: "Circle", en: "Circle" },
          text: {
            zh: "划分主题、成员、客户协作和权限范围。",
            en: "A collaboration boundary for topics, members, clients, and permissions.",
          },
        },
        {
          title: { zh: "Post", en: "Post" },
          text: {
            zh: "沉淀会议纪要、需求、决策、风险和阶段复盘。",
            en: "A structured knowledge unit for notes, needs, decisions, risks, and reviews.",
          },
        },
        {
          title: { zh: "Task", en: "Task" },
          text: {
            zh: "把帖子里的行动项变成负责人、截止时间和状态。",
            en: "Turns action items into owners, due dates, and status.",
          },
        },
        {
          title: { zh: "AI", en: "AI" },
          text: {
            zh: "基于项目上下文和权限总结、检索和生成。",
            en: "Summarizes, searches, and drafts from permitted project context.",
          },
        },
      ],
      loopTitle: {
        zh: "项目级知识沉淀闭环",
        en: "Project knowledge loop",
      },
      loopText: {
        zh: "对话不止停留在消息流里。它会变成帖子、任务、阶段总结和可复用的项目经验。",
        en: "Conversation becomes posts, tasks, reviews, and reusable project experience.",
      },
      loopSteps: {
        zh: ["对话发生", "生成帖子", "形成目录", "提取任务", "推进执行", "复盘复用"],
        en: ["Discuss", "Create post", "Catalog", "Extract tasks", "Execute", "Reuse"],
      },
      productScreensTitle: {
        zh: "Teamshub 产品视图",
        en: "Teamshub product views",
      },
      productScreensText: {
        zh: "用项目总览、协作空间和 AI 任务闭环说明 Teamshub 如何支撑长链路项目。",
        en: "Project overview, workspace, and AI task loop show how Teamshub supports long-cycle work.",
      },
      productScreens: [
        {
          title: { zh: "Project View 项目总览", en: "Project View" },
          label: { zh: "项目总览", en: "Project overview" },
          image: "/images/curated/project-team-laptop.jpg",
          text: {
            zh: "展示阶段、成员、圈子、帖子目录、任务和 AI 摘要。",
            en: "Show stages, members, circles, post catalog, tasks, and AI summary.",
          },
        },
        {
          title: { zh: "Circle 协作空间", en: "Circle workspace" },
          label: { zh: "协作空间", en: "Workspace" },
          image: "/images/curated/team-laptop-strategy-session.jpg",
          text: {
            zh: "展示聊天、置顶帖子、文件、任务和成员权限。",
            en: "Show chat, pinned posts, files, tasks, and member access.",
          },
        },
        {
          title: { zh: "Post / AI / Task 闭环", en: "Post / AI / Task loop" },
          label: { zh: "AI 任务闭环", en: "AI task loop" },
          image: "/images/curated/business-dashboard-laptop.jpg",
          text: {
            zh: "展示从聊天生成帖子、从帖子提任务、AI 总结复盘。",
            en: "Show chat-to-post, post-to-task, and AI review workflows.",
          },
        },
      ],
      useCasesTitle: {
        zh: "适合售卖的客户场景",
        en: "Best-fit customer scenarios",
      },
      useCases: [
        {
          title: { zh: "美国 SMB 专业服务", en: "SMB professional services" },
          text: {
            zh: "合规顾问、税务会计、法律、咨询、设计等团队，用项目空间沉淀客户背景、材料、会议和任务。",
            en: "For compliance, tax, legal, consulting, and design teams managing client context, evidence, meetings, and tasks.",
          },
        },
        {
          title: { zh: "出海客户与渠道推进", en: "International sales and partner work" },
          text: {
            zh: "跨时区、跨语言、跨团队推进客户机会，把客户沟通、资料和下一步统一管理。",
            en: "Coordinate cross-time-zone client and partner work with shared context and next actions.",
          },
        },
        {
          title: { zh: "长周期交付项目", en: "Long-cycle delivery projects" },
          text: {
            zh: "把阶段总结、问题风险、交付结果和复盘内容留在项目里，减少交接损耗。",
            en: "Keep stage reviews, risks, deliverables, and learnings inside the project.",
          },
        },
      ],
      mvpTitle: {
        zh: "从一条完整项目链路开始",
        en: "Start with one project loop",
      },
      mvpText: {
        zh: "先跑通项目协作、帖子沉淀、AI 检索和任务推进，再扩展成员、模板、集成和权限。",
        en: "Run one loop first: collaboration, posts, AI search, and tasks. Then add members, templates, integrations, and permissions.",
      },
      mvpStages: [
        {
          title: { zh: "起步版", en: "Starter" },
          text: {
            zh: "Project、Circle、Post、任务表和 AI 总结。",
            en: "Project, Circle, Post, task table, and AI summary.",
          },
        },
        {
          title: { zh: "项目闭环", en: "Project loop" },
          text: {
            zh: "项目总览、消息流、从消息生成帖子、从帖子生成任务。",
            en: "Project overview, message flow, message-to-post, and post-to-task.",
          },
        },
        {
          title: { zh: "客户协作", en: "Client collaboration" },
          text: {
            zh: "外部客户圈、圈子权限、客户内容沉淀、AI 权限回答。",
            en: "Client circles, permissions, customer content capture, and permission-aware AI.",
          },
        },
        {
          title: { zh: "规模化版本", en: "Scale version" },
          text: {
            zh: "多项目、跨项目搜索、模板、审计、CRM / 邮件 / 日历集成。",
            en: "Multi-project search, templates, audit logs, and CRM/email/calendar integrations.",
          },
        },
      ],
      exampleTitle: {
        zh: "客户项目示例",
        en: "Client project example",
      },
      exampleText: {
        zh: "一家合规顾问公司按团队讨论、客户沟通和证据材料划分圈子。AI 整理需求帖子，项目经理生成任务并复用复盘模板。",
        en: "A compliance firm separates team, client, and evidence circles. AI creates requirement posts; managers create tasks and reuse review templates.",
      },
      cta: {
        title: {
          zh: "把一个真实客户项目放进 Teamshub，看它如何沉淀知识和推进任务。",
          en: "Put one real client project into Teamshub and see how knowledge and tasks move together.",
        },
        primary: { zh: "讨论 Teamshub 试点", en: "Discuss a Teamshub pilot" },
        secondary: { zh: "查看项目闭环", en: "See project loop" },
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
        zh: "当系统太分散、流程太依赖人工时，需要更贴业务的平台层。",
        en: "When systems are fragmented and manual, the business needs a more custom-fit platform layer.",
      },
      intro: {
        zh: "适合需要优化门户、流程、后台、集成或运营可视化，并希望分阶段推进的团队。",
        en: "For teams improving portals, workflows, back-office, integrations, or operations visibility in stages.",
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
              "Start with one working flow, then add modules",
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
              "Shape from module boundaries, integrations, and visibility",
            ],
          },
        },
      ],
      proofTitle: { zh: "这条方向的适用场景", en: "Where this track fits" },
      proofItems: [
        {
          zh: "现有系统很多，但没有一个真正贴合业务流程的统一层。",
          en: "Many systems, but no unified layer for the business flow.",
        },
        {
          zh: "需要更好的门户、流程、后台或集成，但还不准备做大规模重建。",
          en: "Needs portals, workflow, back-office, or integrations without a large rebuild.",
        },
        {
          zh: "适合先明确模块边界、交付范围和关键流程，再逐步扩展。",
          en: "Start with module boundaries, scope, and key workflows, then expand.",
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
        zh: "我们与客户、渠道伙伴和本地执行团队一起定义范围、推进试点，并进入可交付阶段。",
        en: "We work with clients, channels, and local teams to define scope, run pilots, and move into delivery.",
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
          en: "If you have local client relationships but need platform, engineering, or delivery support, we can help.",
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
          en: "If service, support, settlement, or operations are hurting efficiency, we can define scope and path together.",
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
          zh: "如果平台只做展示，不能真正承接交易、数据、协同和运营，就很难形成持续价值。我们可以一起把平台做成可运行的业务基础设施。",
          en: "If a platform only displays information, it is hard to create value. We help turn it into business infrastructure.",
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
          en: "If you open opportunities but need stronger product and delivery support, we can move from qualification to execution together.",
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
          en: "We first judge whether the problem is clear, valuable, and pilot-ready.",
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
          en: "Local teams keep the client interface; we add platform, engineering, delivery, and optimization.",
        },
      },
    ],
    opportunityTitle: {
      zh: "适合一起推进的合作机会",
      en: "Partnership opportunities we can move together",
    },
      opportunityText: {
      zh: "产品落地、渠道协同或本地执行支持，都可以从这里开始。",
      en: "Product entry, channel coordination, or local execution can all start here.",
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
          en: "If the product is clear but local channels or pilots are missing, we can shape the entry path.",
        },
      },
      {
        visible: true,
        order: 2,
        title: { zh: "联合方案推进", en: "Joint solution pursuit" },
        text: {
          zh: "如果客户问题跨越产品、流程和系统，单一供应商很难讲清完整价值。我们可以把本地关系、行业理解、平台能力和交付能力组合成联合方案。",
          en: "When a problem spans product, workflow, and systems, we combine local relationships, platform capability, and delivery.",
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
          en: "When projects need visits, channel reach, pilot execution, and service, we welcome local execution partners.",
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
        zh: "这里展示能改善服务效率、项目协同、AI 落地和复杂业务支撑的产品。重点是减少损耗、抓住机会。",
        en: "Products for service efficiency, project coordination, AI adoption, and complex operations. Focus on waste reduced and opportunities unlocked.",
      },
    },
    introTitle: {
      zh: "从具体问题进入产品，而不是从功能表开始",
      en: "Start from the business problem, not the feature list",
    },
      introText: {
      zh: "这里展示我们的产品、产品化能力和伙伴产品，帮助你快速判断项目匹配度。",
      en: "Our products, productized capabilities, and partner products in one place for faster fit assessment.",
    },
    filtersTitle: {
      zh: "浏览方式",
      en: "Browse by",
    },
    filters: [
      {
        title: { zh: "我们的产品", en: "Our products" },
        text: {
          zh: "看 Teamshub、AI 服务等自有产品方向。",
          en: "See Teamshub, AI service, and owned product directions.",
        },
      },
      {
        title: { zh: "伙伴产品", en: "Partner products" },
        text: {
          zh: "适合联合推进的产品会在准备好后展示。",
          en: "Partner products will appear here when they are ready.",
        },
      },
      {
        title: { zh: "项目场景", en: "Project fit" },
        text: {
          zh: "按客服、外呼、协同、数据流转判断匹配度。",
          en: "Assess fit by support, outreach, coordination, and data-flow needs.",
        },
      },
    ],
    featuredTitle: {
      zh: "重点产品",
      en: "Featured solution",
    },
      featuredText: {
      zh: "先从真实业务问题出发，再判断产品是否值得试点。",
      en: "Start from the real business problem, then decide which product is worth piloting.",
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
          en: "A coordination product for lead handling, project execution, and knowledge continuity.",
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
            "Keeps project context, files, notes, tasks, and risks in one workspace",
            "Reduces handoff gaps and repeated explanation",
            "Fits long-cycle sales, complex delivery, and cross-time-zone collaboration",
            "Can start from one key client or project loop",
          ],
        },
        note: {
          zh: "可提供产品结构、角色视图和典型使用场景资料。",
          en: "Product structure, role views, and use cases are available for review.",
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
          en: "A productized offer for smart service, agent assist, workflows, and operations.",
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
            "Improves knowledge lookup, summaries, assistive handling, QA, and analytics",
            "Reduces slow replies, weak handoffs, and uneven service quality",
            "Fits support teams, call centers, and service operations",
            "Can start from knowledge support, summaries, assist, or QA",
          ],
        },
        note: {
          zh: "可提供能力架构、场景拆解和流程资料。",
          en: "Capability architecture, workflow breakdowns, and process materials are available.",
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
      zh: "这些合作产品适合新场景试点、联合方案和本地市场机会。重点看问题是否真实、是否值得验证。",
      en: "Partner products for pilots, joint offers, and local market opportunities. We focus on real, testable problems.",
    },
    partnerItems: [
      {
        visible: false,
        order: 1,
        title: { zh: "Helport", en: "Helport" },
        image: "/images/curated/call-center-diverse-team.jpg",
        category: { zh: "合作伙伴渠道产品", en: "Partner channel product" },
        status: { zh: "主推", en: "Featured" },
        subtitle: {
          zh: "Helport 帮助客服、销售和支持团队把优秀员工经验放进实时通话、线索触达和 24/7 在线咨询里，让响应、转化和质检更可控。",
          en: "Helport puts expert performance into live calls, lead outreach, and 24/7 online engagement.",
        },
        tags: {
          zh: ["AI 客服", "销售辅助", "数字员工"],
          en: ["AI service", "Sales assist", "Digital workers"],
        },
        bullets: {
          zh: [
            "新人培训慢时，用实时指导和知识支持降低质量波动",
            "线索跟进不足时，用标准化执行承接外呼、筛选和转接",
            "专家时间有限时，把专业知识沉淀成 24/7 数字员工",
            "适合客服、销售外呼、远程支持和知识密集型团队",
          ],
          en: [
            "When onboarding is slow, live guidance and knowledge support reduce quality variance",
            "When follow-up capacity is limited, standardized execution can support outreach, qualification, and transfer",
            "When expert time is limited, expert knowledge can become a 24/7 digital worker",
            "Fits service, outbound sales, remote support, and knowledge-heavy teams",
          ],
        },
        note: {
          zh: "建议从一个具体场景开始评估，例如客服重复咨询、销售外呼、官网 AI 助手或专家知识复制。",
          en: "Start from one concrete scenario: repeat support, outbound sales, website AI assistant, or expert knowledge.",
        },
        cta: { zh: "查看 Helport 详情", en: "View Helport details" },
        href: "/products/helport",
      },
      {
        visible: false,
        order: 2,
        title: { zh: "联合推进产品", en: "Joint partner products" },
        image: "/images/curated/business-partner-handshake.jpg",
        category: { zh: "伙伴产品", en: "Partner product" },
        status: { zh: "储备方向", en: "Reserve direction" },
        subtitle: {
          zh: "适合进入联合方案、渠道合作或生态协同的伙伴产品。",
          en: "Partner products suited for joint offers, channel programs, or ecosystem collaboration.",
        },
        tags: {
          zh: ["Ecosystem", "Joint offer", "Partner channel"],
          en: ["Ecosystem", "Joint offer", "Partner channel"],
        },
        bullets: {
          zh: [
            "面向本地市场合作与联合推进的产品方向",
            "优先选择具备明确场景与合作路径的产品",
            "适合需要渠道协同、联合方案或本地支持的合作机会",
            "可通过 Si-Tech Intl 进入初步判断与合作沟通",
          ],
          en: [
            "Product directions for local-market collaboration and joint pursuit",
            "Prioritize offers with clear use cases and commercial paths",
            "These products fit opportunities that need channel coordination, joint packaging, or local support",
            "Si-Tech Intl can support early evaluation and partnership conversations",
          ],
        },
        note: {
          zh: "可联系了解合作方向。",
          en: "Contact us to discuss partner directions.",
        },
        cta: {
          zh: "先联系讨论合作方向",
          en: "Discuss partner fit",
        },
        href: "/contact",
      },
    ],
    cta: {
      title: {
        zh: "如果你想判断产品是否适合项目，或把伙伴产品带进联合方案，可以直接沟通。",
        en: "To assess product fit or bring a partner product into a joint solution, talk to us.",
      },
      button: { zh: "进入产品沟通", en: "Talk Products" },
    },
  },
  storiesPage: {
    hero: {
      image: "/images/curated/business-partners-discussion.jpg",
      title: { zh: "合作故事", en: "Stories" },
      subtitle: {
        zh: "通过真实项目名称和公开信息，快速了解问题、切入方式和可见成果。",
        en: "Use public project names to understand the problem, entry point, and outcome.",
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
          zh: "公开材料显示该平台已在中国联通 5 个省落地，连接宽带资源、开通、工单和运营分析。",
          en: "Public materials show deployment across five China Unicom provinces, connecting resources, activation, tickets, and analytics.",
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
              zh: "宽带业务支撑不是单点系统，而是资源、开通、服务和运维的协同。",
              en: "Broadband support is not one system. Resources, activation, service, and maintenance must work together.",
            },
          },
          {
            label: { zh: "问题", en: "Problem" },
            text: {
              zh: "资源不准、开通慢、工单断裂，会同时影响用户体验和运营效率。",
              en: "Inaccurate resources, slow activation, and broken tickets hurt both experience and efficiency.",
            },
          },
          {
            label: { zh: "方案切入", en: "Solution entry point" },
            text: {
              zh: "平台把资源管理、开通激活、工单联动和运营分析放进同一套支撑体系。",
              en: "The platform combines resource management, activation, ticket coordination, and analytics.",
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
          zh: "这是公开平台名称，围绕贵州肉牛产业链连接采购、交易、支付和物流。",
          en: "A public platform for the Guizhou beef supply chain, connecting procurement, trade, payment, and logistics.",
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
              zh: "肉牛产业链涉及采购、交易、支付和物流，平台必须把这些环节串起来。",
              en: "The beef supply chain spans procurement, trade, payment, and logistics. The platform must connect them.",
            },
          },
          {
            label: { zh: "问题", en: "Problem" },
            text: {
              zh: "产业平台容易停在展示层，真正难的是让经营动作端到端协同。",
              en: "Industry platforms often stop at dashboards. The harder task is end-to-end business coordination.",
            },
          },
          {
            label: { zh: "方案切入", en: "Solution entry point" },
            text: {
              zh: "黔牛帮覆盖采购、交易、支付、物流等关键环节，并加入数字化支持。",
              en: "QianNiuBang covers procurement, trade, payment, logistics, and digital support.",
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
          zh: "公开材料显示该智能客服平台已在中国移动多个项目落地，核心能力包括智能坐席、派单和质检分析。",
          en: "Public materials show deployment across China Mobile projects, with agent assist, routing, and QA analytics.",
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
              zh: "大型服务组织已有人工团队，但规模扩大后，接入、辅助、质检和分析都会承压。",
              en: "Large service teams already have people, but intake, assist, QA, and analytics strain as volume grows.",
            },
          },
          {
            label: { zh: "问题", en: "Problem" },
            text: {
              zh: "如果 AI 没有进入真实服务流程，就难以改善坐席效率、服务闭环和运营精细度。",
              en: "AI improves service only when it enters real agent workflows, QA, and operations.",
            },
          },
          {
            label: { zh: "方案切入", en: "Solution entry point" },
            text: {
              zh: "平台把多模态交互、坐席辅助、智能派单、质检分析和服务闭环放进同一体系。",
              en: "The platform combines multimodal interaction, agent assist, routing, QA, and service closure.",
            },
          },
          {
            label: { zh: "结果", en: "Outcome" },
            text: {
              zh: "公开材料显示客服效率提升 20%，并实现 100% 全量质检。",
              en: "Public materials cite 20% higher service efficiency and 100% QA coverage.",
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
        zh: "Si-Tech Intl 是面向海外市场的合作接口，连接思特奇技术、平台、研发与交付能力。",
        en: "Si-Tech Intl is the international interface for Si-Tech technology, platform, R&D, and delivery capability.",
      },
    },
    introTitle: {
      zh: "如何理解 Si-Tech Intl",
      en: "How to read Si-Tech Intl",
    },
      introText: {
        zh: "Si-Tech Intl 帮助海外客户快速了解解决方案方向、能力基础和合适切入口。",
        en: "Si-Tech Intl helps international clients understand our solution tracks, capability base, and starting points.",
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
          en: "Complex projects need scope clarity, rollout discipline, and ongoing operations experience.",
        },
      },
      {
        title: {
          zh: "质量与稳定性意识",
          en: "Quality and stability mindset",
        },
        text: {
          zh: "面向企业和运营商的系统不能只追求上线速度，还要考虑权限、数据、流程、异常处理和长期维护。我们更重视可持续运行的质量基础。",
          en: "Enterprise and operator systems need permissions, data, workflows, exceptions, and maintainability, not just speed.",
        },
      },
      {
        title: {
          zh: "交付协同能力",
          en: "Delivery coordination capability",
        },
        text: {
          zh: "真正的项目通常涉及业务、技术、管理和本地执行多方协同。Si-Tech Intl 的价值在于把问题、范围、沟通和交付节奏组织起来。",
          en: "Real projects involve business, engineering, management, and local execution. We organize scope and delivery rhythm.",
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
        zh: "告诉我们你想推进的业务支撑、服务流程或平台需求，我们会尽快沟通下一步。",
        en: "Tell us the workflow, service process, or platform need. We will follow up shortly.",
      },
    },
    panelTitle: { zh: "直接联系", en: "Direct Contact" },
    note: {
      zh: "提交后你会收到确认邮件，我们也会尽快通过邮件与你联系。",
      en: "After you submit the form, you will receive a confirmation email and our team will follow up by email as soon as possible.",
    },
    pagesNote: {
      zh: "点击提交后会打开你的邮箱客户端，并自动带入已填写的咨询内容，方便你直接发送给我们。",
      en: "Submitting the form opens your email client with the inquiry details already drafted so you can send them directly to us.",
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
        zh: "我们已收到你的需求，即将打开确认页。",
        en: "We received your inquiry and will open the confirmation page.",
      },
      error: {
        zh: "提交失败，请稍后重试。",
        en: "Unable to submit right now. Please try again later.",
      },
      options: {
        zh: [
          "解决方案 / 业务系统",
          "产品 / AI 服务",
          "Partnership / 渠道合作",
          "项目试点 / 需求评估",
          "技术与交付能力了解",
          "需要先判断方向",
        ],
        en: [
          "Solutions / business systems",
          "Products / AI service",
          "Partnership / channel collaboration",
          "Pilot / needs assessment",
          "Technical and delivery capability",
          "Need help choosing",
        ],
      },
      roleOptions: {
        zh: ["创始人 / 高管", "业务负责人", "产品 / 项目负责人", "技术负责人", "销售 / 渠道负责人", "顾问 / 合作伙伴", "其他"],
        en: ["Founder / Executive", "Business Lead", "Product / Project Lead", "Technical Lead", "Sales / Channel Lead", "Advisor / Partner", "Other"],
      },
      companySizeOptions: {
        zh: ["1-10 人", "11-50 人", "51-200 人", "201-1000 人", "1000 人以上", "暂不透露"],
        en: ["1-10 employees", "11-50 employees", "51-200 employees", "201-1000 employees", "1000+ employees", "Prefer not to say"],
      },
    },
  },
  thankYouPage: {
    title: { zh: "我们已收到你的信息", en: "We received your inquiry" },
    text: {
      zh: "我们已经收到你的请求，团队会尽快通过邮件与你联系。若你有更多补充，也可以直接发邮件至 info@sitech-intl.com。",
      en: "We received your inquiry and will follow up by email. You can also send more context to info@sitech-intl.com.",
    },
    button: { zh: "返回首页", en: "Back to Home" },
  },
  privacyPage: {
    title: { zh: "隐私说明", en: "Privacy" },
    intro: {
      zh: "我们只收集你主动提交的联系信息与咨询内容，用于响应需求、安排沟通并持续跟进项目机会。",
      en: "We collect only the contact and inquiry details you submit, so we can respond and manage follow-up.",
    },
    sections: [
      {
        title: { zh: "我们收集什么", en: "What we collect" },
        text: {
          zh: "姓名、工作邮箱、公司、职位、电话、行业、咨询内容，以及提交时的页面链接等基础信息。",
          en: "Name, work email, company, role, phone, industry, inquiry details, and submitted page URL.",
        },
      },
      {
        title: { zh: "我们如何使用", en: "How we use it" },
        text: {
          zh: "用于与你联系、评估项目匹配度、安排项目沟通，并在我们的业务系统中保留必要记录。",
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
        "运营商 IT 支撑与服务域",
        "数据要素与数字产业平台",
      ],
      en: [
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
