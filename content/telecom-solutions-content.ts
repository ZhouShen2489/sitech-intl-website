import type { Locale } from "@/lib/site";

type Copy = {
  zh: string;
  en: string;
};

type CopyList = {
  zh: readonly string[];
  en: readonly string[];
};

export type TelecomDirection = {
  slug: string;
  title: Copy;
  shortTitle: Copy;
  eyebrow: Copy;
  summary: Copy;
  buyer: Copy;
  image: string;
  metrics: readonly {
    value: string;
    label: Copy;
  }[];
  pains: readonly {
    title: Copy;
    text: Copy;
  }[];
  whyNow: Copy;
  capability: Copy;
  modules: readonly {
    title: Copy;
    bullets: CopyList;
  }[];
  proof: CopyList;
  startPoints: CopyList;
  researchDoc: string;
};

export const telecomBoard = {
  href: "/solutions/telecom",
  image: "/images/curated/telecom-network-switch.jpg",
  title: {
    zh: "运营商解决方案",
    en: "Telecom Solutions",
  },
  subtitle: {
    zh: "把生产支撑、全球通信业务、宽带、智能服务和营销触点，拆成 5 条清晰可进入的通信业务线。",
    en: "Five clear telecom lines across production support, global services, broadband, intelligent care, and marketing touchpoints.",
  },
  primaryCta: {
    zh: "讨论运营商和MVNO业务",
    en: "Discuss telecom business",
  },
  secondaryCta: {
    zh: "浏览 5 条业务线",
    en: "Explore five lines",
  },
  proof: [
    {
      value: "30+",
      label: { zh: "年通信支撑经验", en: "Years in telecom support" },
      text: {
        zh: "从计费、BOSS 到 AI 原生运营支撑，长期服务复杂通信业务。",
        en: "Long-running experience from billing and BOSS to AI-native operation support.",
      },
    },
    {
      value: "80+",
      label: { zh: "运营商客户经验基础", en: "Operator reference base" },
      text: {
        zh: "覆盖移动、联通、电信、广电等运营商业务支撑场景。",
        en: "Reference base across major operator support scenarios.",
      },
    },
    {
      value: "5",
      label: { zh: "重点方案线", en: "Solution paths" },
      text: {
        zh: "BOSS、MVNO、宽带、智能客服、营销门户。",
        en: "BSS/OSS, MVNO, broadband, AI care, and marketing portal.",
      },
    },
    {
      value: "AI+",
      label: { zh: "进入真实运营", en: "Inside operations" },
      text: {
        zh: "把 AI 放进客服、计费、营销和运营决策，而不是停在演示层。",
        en: "AI embedded in care, marketing, and operations, beyond demos.",
      },
    },
  ],
  lifecycle: {
    title: {
      zh: "五条方案线，对应通信业务的五个关键动作",
      en: "Five solution paths for five telecom operating moves",
    },
    steps: [
      { zh: "生产支撑", en: "Run production" },
      { zh: "全球上线", en: "Launch globally" },
      { zh: "宽带开通", en: "Activate broadband" },
      { zh: "服务用户", en: "Serve users" },
      { zh: "触达转化", en: "Convert demand" },
    ],
  },
  boardSections: [
    {
      title: {
        zh: "把核心业务跑顺",
        en: "Make core operations flow",
      },
      text: {
        zh: "BOSS 把客户、产品、订单、开通、计费和结算接起来，让复杂业务可以被看见、被追踪、被运营。",
        en: "BSS/OSS connects customers, offers, orders, activation, billing, and settlement into a visible operating loop.",
      },
    },
    {
      title: {
        zh: "把增长入口打开",
        en: "Open growth channels",
      },
      text: {
        zh: "MVNO 和营销门户帮助通信业务进入新市场、新渠道和新交易场景。",
        en: "MVNO and marketing portals help telecom services enter new markets, channels, and transaction scenarios.",
      },
    },
    {
      title: {
        zh: "把服务和成本管住",
        en: "Improve service and cost control",
      },
      text: {
        zh: "智能客服和宽带支撑，把服务效率、开通时效、质检覆盖和资源压力变成可运营指标。",
        en: "AI care and broadband support turn service speed, activation time, QA, and load into operating metrics.",
      },
    },
  ],
} as const;

export const telecomDirections: readonly TelecomDirection[] = [
  {
    slug: "boss",
    title: { zh: "BOSS / BSS-OSS 运营支撑", en: "BOSS / BSS-OSS Operations" },
    shortTitle: { zh: "BOSS", en: "BSS/OSS" },
    eyebrow: {
      zh: "生产、运营、管理支撑",
      en: "Production, operation, and management support",
    },
    summary: {
      zh: "把客户、产品、订单、开通、计费、结算和运营管控接成一条链，让运营商业务从受理到出账都更清楚。",
      en: "Connect customers, offers, orders, activation, billing, settlement, and operations so telecom services are clearer from intake to invoice.",
    },
    buyer: {
      zh: "基础运营商、区域运营商、复杂通信服务团队",
      en: "Operators, regional carriers, and complex communication-service teams",
    },
    image: "/images/curated/telecom-network-switch.jpg",
    metrics: [
      {
        value: "4G/5G",
        label: { zh: "融合业务办理", en: "Converged services" },
      },
      {
        value: "CHBN",
        label: { zh: "多客户域支撑", en: "Multi-segment support" },
      },
      { value: "E2E", label: { zh: "端到端流程", en: "End-to-end flow" } },
    ],
    pains: [
      {
        title: { zh: "业务上线慢", en: "Slow service launch" },
        text: {
          zh: "新套餐、新地区、新政企业务需要跨多个系统反复配置。",
          en: "New offers, regions, and enterprise services require repeated configuration across many systems.",
        },
      },
      {
        title: { zh: "订单看不全", en: "Orders are hard to see" },
        text: {
          zh: "受理、缴费、开通、计费和异常处理分散，客户和运营团队都要反复追。",
          en: "Intake, payment, activation, billing, and exceptions sit in separate places.",
        },
      },
      {
        title: { zh: "账务解释压力大", en: "Billing trust is fragile" },
        text: {
          zh: "账单、佣金、分成和对账规模扩大后，准确性和可解释性直接影响合作信任。",
          en: "At scale, bills, commissions, and reconciliation need accuracy and explainability.",
        },
      },
    ],
    whyNow: {
      zh: "运营商 IT 正在从封闭竖井走向模块化和可集成。客户不只是要一套系统，而是要订单、网络、账务、伙伴和运营数据能互相说话。",
      en: "Operator IT is moving from closed silos toward modular, integrable systems. Buyers need orders, network services, billing, partners, and operations data to work together.",
    },
    capability: {
      zh: "思特奇 BOSS 能覆盖 CRM、产品、订单、网络服务交互、合作伙伴、计费账务、通用能力组件和业务运营管理中心。",
      en: "Si-Tech BSS/OSS covers CRM, offers, orders, network-service interaction, partners, billing, shared capabilities, and operations management.",
    },
    modules: [
      {
        title: { zh: "客户与产品运营", en: "Customer and offer operations" },
        bullets: {
          zh: [
            "客户入网、发展、稳定、离网",
            "产品套餐、活动和推荐策略",
            "个客、家客、政企、新业务支撑",
          ],
          en: [
            "Customer onboarding, growth, retention, churn",
            "Offer, campaign, and recommendation strategy",
            "Consumer, home, enterprise, and new-service support",
          ],
        },
      },
      {
        title: { zh: "订单与服务交互", en: "Order and service interaction" },
        bullets: {
          zh: [
            "业务受理和订单流转",
            "资源校验、开通协同和工单联动",
            "办理、缴费、开通、计费一站式视图",
          ],
          en: [
            "Service intake and order orchestration",
            "Resource validation, activation, and ticket linkage",
            "One view across intake, payment, activation, and billing",
          ],
        },
      },
      {
        title: { zh: "计费账务与伙伴", en: "Billing and partners" },
        bullets: {
          zh: [
            "客户账单、代理商佣金和分成",
            "对账、结算和规则配置",
            "多租户、多级分销和跨地区协作",
          ],
          en: [
            "Customer bills, agent commissions, and revenue share",
            "Reconciliation, settlement, and rule configuration",
            "Multi-tenant, multi-level, cross-region cooperation",
          ],
        },
      },
    ],
    proof: {
      zh: [
        "已服务多家大型运营商和区域业务支撑场景。",
        "常见切入点包括客户受理、订单开通、计费出账和伙伴结算。",
      ],
      en: [
        "Experience across large-operator and regional support scenarios.",
        "A practical entry can start from intake, activation, billing, or partner settlement.",
      ],
    },
    startPoints: {
      zh: ["订单到计费闭环", "政企业务支撑", "合作伙伴结算"],
      en: [
        "Order-to-billing loop",
        "Enterprise service support",
        "Partner settlement",
      ],
    },
    researchDoc: "/docs/solution-research/operator/boss.md",
  },
  {
    slug: "mvno",
    title: { zh: "全球化 MVNO 业务支撑", en: "Global MVNO Enablement" },
    shortTitle: { zh: "MVNO", en: "MVNO" },
    eyebrow: {
      zh: "资源接入、转售、分销",
      en: "Resources, resale, and distribution",
    },
    summary: {
      zh: "帮助基础运营商、虚拟运营商和代理商快速开展个人、批发、转售和多级分销通信业务。",
      en: "Help operators, MVNOs, and agents launch retail, wholesale, resale, and multi-level distribution services faster.",
    },
    buyer: {
      zh: "MVNO、代理商、国际通信业务、本地市场合作方",
      en: "MVNOs, agents, international telecom services, and local-market partners",
    },
    image: "/images/curated/business-partners-discussion.jpg",
    metrics: [
      { value: "B2B2C", label: { zh: "多级分销", en: "Distribution" } },
      { value: "SIM", label: { zh: "资源接入", en: "Resource access" } },
      { value: "Tenant", label: { zh: "多租户运营", en: "Multi-tenant ops" } },
    ],
    pains: [
      {
        title: { zh: "资源接入慢", en: "Resource access is slow" },
        text: {
          zh: "不同国家、运营商和号卡资源接入周期长，业务窗口容易错过。",
          en: "Different countries, operators, and SIM resources slow launch windows.",
        },
      },
      {
        title: { zh: "转售规则复杂", en: "Resale rules get complex" },
        text: {
          zh: "零售、批发、代理和多级分销规则经常混在一起。",
          en: "Retail, wholesale, agent, and distribution rules often blur together.",
        },
      },
      {
        title: { zh: "结算变化快", en: "Settlement changes quickly" },
        text: {
          zh: "地区、币种、合作方和渠道规则不同，必须灵活配置。",
          en: "Regions, currencies, partners, and channels need flexible settlement rules.",
        },
      },
    ],
    whyNow: {
      zh: "eSIM、数字分销和细分市场正在让 MVNO 模式更轻、更快。真正的门槛在于资源接入、套餐配置、渠道分销和结算能不能快速组合。",
      en: "eSIM, digital distribution, and niche-market plays make MVNO models lighter and faster. The real question is how quickly resources, offers, channels, and settlement can be combined.",
    },
    capability: {
      zh: "基于云原生、容器化和分布式能力，支持自有与第三方资源接入、CRM、计费、结算、多租户和全球分销中心。",
      en: "Cloud-native, containerized, distributed capability for owned and third-party resources, CRM, billing, settlement, multi-tenant operations, and global distribution.",
    },
    modules: [
      {
        title: { zh: "全球资源对接", en: "Global resource access" },
        bullets: {
          zh: [
            "对接各国家地区 MNO/MVNO 资源",
            "号卡资源接入与比价基础",
            "自有资源与第三方资源并存",
          ],
          en: [
            "Connect MNO/MVNO resources by region",
            "SIM resource access and comparison basis",
            "Support owned and third-party resources",
          ],
        },
      },
      {
        title: { zh: "业务模式配置", en: "Business model configuration" },
        bullets: {
          zh: [
            "ToC 个人业务",
            "批发、转售、B2B2C、B2B2b2c",
            "租户、代理商和公众客户角色分层",
          ],
          en: [
            "Retail consumer services",
            "Wholesale, resale, B2B2C, B2B2b2c",
            "Tenant, agent, and customer role layers",
          ],
        },
      },
      {
        title: { zh: "计费与结算", en: "Billing and settlement" },
        bullets: {
          zh: [
            "套餐销售和客户账务",
            "代理佣金、分成和对账",
            "地区化规则和合作方结算",
          ],
          en: [
            "Offer sales and customer billing",
            "Agent commission, revenue share, reconciliation",
            "Localized rules and partner settlement",
          ],
        },
      },
    ],
    proof: {
      zh: [
        "已支持国际运营商在香港、新加坡等境外地区落地通信业务支撑。",
        "常见于同时覆盖个人、批发、转售和分销的全球通信业务。",
      ],
      en: [
        "Supported international operator deployments in Hong Kong, Singapore, and other overseas regions.",
        "Fits lightweight global telecom businesses spanning retail, wholesale, resale, and distribution.",
      ],
    },
    startPoints: {
      zh: ["一个地区上线", "资源接入与套餐销售", "代理商分销结算"],
      en: [
        "One-region launch",
        "Resource access and offer sales",
        "Agent distribution settlement",
      ],
    },
    researchDoc: "/docs/solution-research/operator/mvno.md",
  },
  {
    slug: "broadband",
    title: { zh: "宽带业务支撑平台", en: "Broadband Support Platform" },
    shortTitle: { zh: "宽带", en: "Broadband" },
    eyebrow: {
      zh: "资源、开通、工单、运营分析",
      en: "Resources, activation, tickets, analytics",
    },
    summary: {
      zh: "把宽带资源、业务开通、售后工单和运营分析接成一条链，帮助装机、受理和运行维护更顺。",
      en: "Connect broadband resources, activation, tickets, and analytics into one operating loop for smoother install, intake, and service operations.",
    },
    buyer: {
      zh: "固定宽带团队、家庭宽带运营团队、装维与售后团队",
      en: "Fixed broadband teams, home-broadband operations, install-and-maintain, and service teams",
    },
    image: "/images/curated/broadband-network-cables.jpg",
    metrics: [
      { value: "95%+", label: { zh: "资源准确性", en: "Resource accuracy" } },
      { value: "5省", label: { zh: "省级落地", en: "Provincial rollout" } },
      { value: "E2E", label: { zh: "端到端支撑", en: "End-to-end support" } },
    ],
    pains: [
      {
        title: { zh: "资源分散", en: "Resources are fragmented" },
        text: {
          zh: "端口、线路、装维和库存信息散在不同系统里，业务响应慢。",
          en: "Ports, lines, install-and-maintain, and inventory data live in different systems.",
        },
      },
      {
        title: { zh: "开通慢", en: "Activation is slow" },
        text: {
          zh: "受理、资源校验、装机、开通和回单之间的手工协同太多。",
          en: "Manual handoffs between intake, validation, install, activation, and callback slow things down.",
        },
      },
      {
        title: { zh: "运维不透明", en: "Operations lack visibility" },
        text: {
          zh: "工单、售后和运营分析没有形成统一视图，问题很难快速闭环。",
          en: "Tickets, after-sales, and analytics do not sit in one view, so closure is slow.",
        },
      },
    ],
    whyNow: {
      zh: "宽带已经不只是装机业务，而是资源、开通、售后和运营一体化的问题。客户更关心能否更快开通、更稳维护、并且把过程看得更清楚。",
      en: "Broadband is no longer just an install business. It is an integrated question of resources, activation, service, and operations.",
    },
    capability: {
      zh: "覆盖宽带资源统一纳管、智能开通激活、工单联动、运营分析和可视化大屏。",
      en: "Covers broadband resource management, intelligent activation, ticket workflows, operations analytics, and dashboards.",
    },
    modules: [
      {
        title: { zh: "资源统一纳管", en: "Resource management" },
        bullets: {
          zh: [
            "端口、线路、装维和库存统一视图",
            "减少人工核对和跨系统操作",
            "支持资源预占和动态调配",
          ],
          en: [
            "Unified view of ports, lines, install-and-maintain, and inventory",
            "Reduce manual checking and cross-system work",
            "Support pre-allocation and dynamic allocation",
          ],
        },
      },
      {
        title: { zh: "智能开通激活", en: "Smart activation" },
        bullets: {
          zh: [
            "受理、资源校验、装机和开通联动",
            "缩短开通时长",
            "提升客户开通体验",
          ],
          en: [
            "Intake, validation, install, and activation workflows",
            "Reduce activation time",
            "Improve customer experience",
          ],
        },
      },
      {
        title: { zh: "工单与运营分析", en: "Tickets and analytics" },
        bullets: {
          zh: [
            "全流程工单联动",
            "装维、售后和回单跟踪",
            "多维指标运营分析和运维支撑",
          ],
          en: [
            "End-to-end ticket workflows",
            "Install-and-maintain, after-sales, and callback tracking",
            "Multi-dimensional operations analytics and support",
          ],
        },
      },
    ],
    proof: {
      zh: [
        "已在多个区域宽带运营场景落地，连接宽带资源、开通、工单和运营分析。",
        "项目效果包括宽带资源准确性达到 95% 以上，并带来更高的业务处理效率。",
      ],
      en: [
        "Deployed across multiple regional broadband operations, connecting resources, activation, tickets, and analytics.",
        "Project results include broadband resource accuracy above 95% and stronger operating efficiency.",
      ],
    },
    startPoints: {
      zh: ["一个省公司上线", "资源与开通闭环", "工单联动与运营看板"],
      en: [
        "One provincial rollout",
        "Resource and activation loop",
        "Tickets and analytics dashboard",
      ],
    },
    researchDoc: "/docs/solution-research/operator/broadband.md",
  },
  {
    slug: "ai-customer-service",
    title: { zh: "智能客服云平台", en: "AI Customer Service Cloud" },
    shortTitle: { zh: "智能客服", en: "AI Service" },
    eyebrow: {
      zh: "多模态交互、人机共生、服务运营",
      en: "Multimodal, agent assist, service operations",
    },
    summary: {
      zh: "把智能多模态交互、人机共生坐席和数智服务运营接起来，让客服从接入、处理、质检到洞察形成闭环。",
      en: "Connect multimodal AI, agent assist, and service operations so care teams can close the loop from intake to insight.",
    },
    buyer: {
      zh: "运营商客服中心、服务运营团队、5G 业务保障团队",
      en: "Operator contact centers, service operations teams, and 5G service assurance teams",
    },
    image: "/images/curated/call-center-team-workstations.jpg",
    metrics: [
      { value: "20%", label: { zh: "服务效率提升", en: "Efficiency lift" } },
      { value: "100%", label: { zh: "全量质检", en: "Full QA" } },
      { value: "95%", label: { zh: "语音识别准确率", en: "ASR accuracy" } },
    ],
    pains: [
      {
        title: { zh: "重复问题太多", en: "Too many repeat issues" },
        text: {
          zh: "重复咨询、材料查询和简单办理占用大量人工坐席。",
          en: "Repeated questions, document lookup, and simple handling consume agent time.",
        },
      },
      {
        title: { zh: "质检跟不上", en: "QA cannot keep up" },
        text: {
          zh: "抽检难以及时发现服务风险、热点投诉和培训问题。",
          en: "Sampling cannot catch service risks, hot complaints, and training gaps quickly.",
        },
      },
      {
        title: { zh: "服务数据沉睡", en: "Service data stays dormant" },
        text: {
          zh: "来话、文本、语音和工单没有持续转成运营洞察。",
          en: "Calls, text, voice, and tickets do not become ongoing operational insight.",
        },
      },
    ],
    whyNow: {
      zh: "客服中心最适合用 AI 提升的地方，不是单纯替代人工，而是让机器人、坐席、质检和运营分析一起工作。",
      en: "The strongest AI opportunity in contact centers is not replacing people. It is making bots, agents, QA, and analytics work together.",
    },
    capability: {
      zh: "提供智能客服机器人、坐席辅助、智能派单、智能外呼、智能陪练、智能质检、客服分析和知识库能力。",
      en: "Provides service bots, agent assist, intelligent dispatch, outbound calling, training, QA, service analytics, and knowledge base capabilities.",
    },
    modules: [
      {
        title: { zh: "智能多模态交互", en: "Multimodal interaction" },
        bullets: {
          zh: ["文字、图像、视频、文件解析", "用户自助服务", "高频业务覆盖"],
          en: [
            "Text, image, video, and file understanding",
            "Self-service support",
            "High-frequency service coverage",
          ],
        },
      },
      {
        title: { zh: "人机共生坐席", en: "Human-AI agent assist" },
        bullets: {
          zh: ["实时坐席辅助", "共享与接续", "智能填单、陪练和知识推荐"],
          en: [
            "Real-time agent assist",
            "Shared handling and continuation",
            "Form filling, coaching, and knowledge recommendation",
          ],
        },
      },
      {
        title: { zh: "数智服务运营", en: "Service operations intelligence" },
        bullets: {
          zh: [
            "热点检测、预警监测、舆情分析",
            "员工画像、客户画像、智能质检",
            "智能外呼和主动服务",
          ],
          en: [
            "Hotspot detection, alerts, sentiment analysis",
            "Employee profile, customer profile, AI QA",
            "Outbound calling and proactive service",
          ],
        },
      },
    ],
    proof: {
      zh: [
        "已在多家大型运营商客服场景落地。",
        "项目效果包括客服服务效率提升 20%，并实现 100% 全量质检。",
      ],
      en: [
        "Deployed in large-operator service scenarios.",
        "Project results include 20% service-efficiency improvement and 100% full QA coverage.",
      ],
    },
    startPoints: {
      zh: ["知识库与坐席辅助", "全量质检", "智能外呼与主动服务"],
      en: [
        "Knowledge base and agent assist",
        "Full QA",
        "Outbound and proactive service",
      ],
    },
    researchDoc: "/docs/solution-research/operator/ai-customer-service.md",
  },
  {
    slug: "marketing-portal",
    title: { zh: "统一营销服务门户", en: "Unified Marketing Service Portal" },
    shortTitle: { zh: "营销门户", en: "Portal" },
    eyebrow: {
      zh: "全触点、全球化、交易转化",
      en: "Omnichannel, global, transaction-ready",
    },
    summary: {
      zh: "把 App、门户、代理商、支付、物流和运营数据统一起来，帮助通信业务从触达到交易形成闭环。",
      en: "Unify apps, portals, agents, payments, logistics, and operations data so telecom touchpoints can convert into transactions.",
    },
    buyer: {
      zh: "国际运营商、海外业务团队、数字商品和通信业务运营方",
      en: "International operators, overseas business teams, and digital commerce operators",
    },
    image: "/images/curated/business-dashboard-laptop.jpg",
    metrics: [
      { value: "PC+App", label: { zh: "双端访问", en: "Dual access" } },
      {
        value: "Multi-role",
        label: { zh: "多角色触达", en: "Multi-role reach" },
      },
      {
        value: "Global",
        label: { zh: "资源聚合", en: "Resource aggregation" },
      },
    ],
    pains: [
      {
        title: { zh: "触点分散", en: "Fragmented touchpoints" },
        text: {
          zh: "App、门户、代理商和社交渠道各自运营，客户体验不连续。",
          en: "Apps, portals, agents, and social channels operate separately.",
        },
      },
      {
        title: { zh: "迭代慢", en: "Iteration is slow" },
        text: {
          zh: "页面、套餐、渠道和数据要跨团队手工协同。",
          en: "Pages, offers, channels, and data need manual cross-team work.",
        },
      },
      {
        title: { zh: "跨境交易难", en: "Cross-border transactions are hard" },
        text: {
          zh: "支付、物流、币种、结算和合规风控需要统一纳管。",
          en: "Payments, logistics, currencies, settlement, and compliance need one management layer.",
        },
      },
    ],
    whyNow: {
      zh: "通信业务正在和电商、数字商品、社交触点和跨境支付融合。门户不再只是展示入口，而是客户触达、交易转化和运营管理的前台。",
      en: "Telecom services increasingly blend with commerce, digital goods, social touchpoints, and payments. The portal becomes the front office for reach, conversion, and operations.",
    },
    capability: {
      zh: "支持全触点多角色访问、页面快速配置、全链路监控、数据可视化、全球资源聚合和多币种支付支撑。",
      en: "Supports omnichannel multi-role access, page configuration, full-chain monitoring, visualization, global resource aggregation, and multi-currency payment support.",
    },
    modules: [
      {
        title: { zh: "全触点统一支撑", en: "Unified touchpoints" },
        bullets: {
          zh: [
            "自营 App、海外门户、代理商触点",
            "个人、家庭、政企、供应商、分销商角色",
            "统一触达和权限管理",
          ],
          en: [
            "Owned app, overseas portal, agent touchpoints",
            "Consumer, home, enterprise, supplier, distributor roles",
            "Unified reach and access control",
          ],
        },
      },
      {
        title: { zh: "敏捷运营配置", en: "Agile operations" },
        bullets: {
          zh: [
            "可视化页面快速配置",
            "业务受理、充值、缴费、账单查询",
            "全链路监控和数据可视化",
          ],
          en: [
            "Visual page configuration",
            "Intake, recharge, payment, bill query",
            "Full-chain monitoring and visualization",
          ],
        },
      },
      {
        title: {
          zh: "跨境交易能力",
          en: "Cross-border transaction capability",
        },
        bullets: {
          zh: [
            "支付能力聚合",
            "物流和数字商品履约对接",
            "多语言结算和合规风控",
          ],
          en: [
            "Payment aggregation",
            "Logistics and digital-goods fulfillment integration",
            "Multi-language settlement and compliance controls",
          ],
        },
      },
    ],
    proof: {
      zh: [
        "已为国际运营商打造电商化运营平台，对接本地支付与物流渠道。",
        "常见于通信业务与数字商品一体化售卖、代理商门户和海外服务入口。",
      ],
      en: [
        "Built an e-commerce operations platform for an international operator.",
        "Fits integrated telecom and digital-goods sales, agent portals, and overseas service entry points.",
      ],
    },
    startPoints: {
      zh: ["海外服务门户", "代理商/分销商门户", "通信业务与数字商品销售"],
      en: [
        "Overseas service portal",
        "Agent/distributor portal",
        "Telecom and digital-goods sales",
      ],
    },
    researchDoc: "/docs/solution-research/operator/marketing-portal.md",
  },
] as const;

export function getTelecomDirection(slug: string) {
  return telecomDirections.find((direction) => direction.slug === slug);
}

export function telecomCopy(locale: Locale, value: Copy) {
  return value[locale];
}

export function telecomCopyList(locale: Locale, value: CopyList) {
  return value[locale];
}
