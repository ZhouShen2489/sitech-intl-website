import type { Locale } from "@/lib/site";

type Copy = {
  zh: string;
  en: string;
};

type StageObjectKey =
  | "order"
  | "inventory"
  | "supplier"
  | "shipment"
  | "customer"
  | "owner"
  | "cash";

export type DemoStage = {
  key: "detect" | "understand" | "act" | "resolve";
  label: Copy;
  title: Copy;
  summary: Copy;
  trigger: Copy;
  metricLabel: Copy;
  metricValue: string;
  probability: number;
  delta: string;
  objects: StageObjectKey[];
  evidence: Copy[];
  actions: Copy[];
};

export const operaContent = {
  productName: "Enterprise Opera OS",
  eyebrow: {
    zh: "Enterprise Opera OS · 独立产品页",
    en: "Enterprise Opera OS · Product Site",
  },
  headline: {
    zh: "让分散的业务信号，变成协同行动。",
    en: "Turn scattered business signals into coordinated action.",
  },
  subheadline: {
    zh: "把订单、库存、物流与责任人连接成可行动的企业本体。",
    en: "Connect orders, inventory, logistics, and owners in an actionable enterprise ontology.",
  },
  heroNote: {
    zh: "AI 建议，人审批。面向真实业务落地。",
    en: "AI recommends. People approve. Built for practical rollout.",
  },
  ctas: {
    primary: { zh: "开始演示", en: "Start the demo" },
    secondary: { zh: "联系我们", en: "Contact us" },
  },
  nav: [
    { href: "#demo", label: { zh: "Demo", en: "Demo" } },
    { href: "#how-it-works", label: { zh: "Method", en: "Method" } },
    { href: "#contact", label: { zh: "Contact", en: "Contact" } },
  ],
  heroLabel: {
    zh: "Living Enterprise",
    en: "Living Enterprise",
  },
  heroManifesto: {
    zh: "不是解释系统，而是让订单、库存、物流、负责人一起动起来。",
    en: "Not a system explainer. A living scene where orders, inventory, shipment, and owners move together.",
  },
  routeCallout: {
    zh: "南美订单走廊",
    en: "South America order corridor",
  },
  routeSubtext: {
    zh: "订单、库存、供应、物流与负责人处于同一运行画面中。",
    en: "Orders, inventory, supply, shipment, and owners live in one operating picture.",
  },
  stages: [
    {
      key: "detect",
      label: { zh: "01 Detect", en: "01 Detect" },
      title: { zh: "发现风险", en: "Detect the risk" },
      summary: {
        zh: "事实数据表明：SO-1847 延期 4 天，$128k 处于风险中。",
        en: "Facts show SO-1847 is 4 days late, putting $128k at risk.",
      },
      trigger: { zh: "查看影响", en: "Review impact" },
      metricLabel: { zh: "预计延期", en: "Projected delay" },
      metricValue: "4 days",
      probability: 62,
      delta: "-12%",
      objects: ["order", "inventory", "supplier"],
      evidence: [
        {
          zh: "ERP 库存缺口 320 units",
          en: "ERP shows a 320-unit inventory gap",
        },
        {
          zh: "采购单 PO-778 延迟 3 天确认",
          en: "Purchase order PO-778 is 3 days behind confirmation",
        },
      ],
      actions: [
        {
          zh: "高亮受影响对象与责任人",
          en: "Highlight impacted objects and owner",
        },
        {
          zh: "将订单从蓝色切换为橙色风险态",
          en: "Switch the order from blue to amber risk state",
        },
      ],
    },
    {
      key: "understand",
      label: { zh: "02 Understand", en: "02 Understand" },
      title: { zh: "理解影响链路", en: "Understand the chain of impact" },
      summary: {
        zh: "企业本体把分散事实转成意义：哪些对象相连、为何受影响、谁应负责。",
        en: "The ontology turns facts into meaning: what is connected, why it matters, and who owns the response.",
      },
      trigger: { zh: "生成应对", en: "Generate response" },
      metricLabel: { zh: "关联对象", en: "Connected objects" },
      metricValue: "7 linked",
      probability: 62,
      delta: "0%",
      objects: ["order", "inventory", "supplier", "shipment", "customer", "owner"],
      evidence: [
        {
          zh: "CRM 承诺交期：6 月 28 日",
          en: "CRM promise date: June 28",
        },
        {
          zh: "物流状态：青岛港装柜待锁定",
          en: "Shipment status: Qingdao container booking pending lock",
        },
      ],
      actions: [
        {
          zh: "展开证据链",
          en: "Expand the evidence trail",
        },
        {
          zh: "暴露上下游依赖关系",
          en: "Expose upstream and downstream dependencies",
        },
      ],
    },
    {
      key: "act",
      label: { zh: "03 Act", en: "03 Act" },
      title: { zh: "提出协同行动", en: "Coordinate action" },
      summary: {
        zh: "AI 基于意义数据提出协同行动：切换供应、拆单先发、同步负责人。",
        en: "AI acts on meaning: switch supply, split the shipment, and coordinate the owner.",
      },
      trigger: { zh: "审批动作", en: "Approve actions" },
      metricLabel: { zh: "建议动作", en: "Recommended actions" },
      metricValue: "3 actions",
      probability: 78,
      delta: "+16%",
      objects: ["order", "supplier", "shipment", "owner"],
      evidence: [
        {
          zh: "备用供应路线可补足 320 units",
          en: "Backup supply route can cover the missing 320 units",
        },
        {
          zh: "可先发 68% 库存，减少客户侧停工风险",
          en: "68% of the order can ship immediately to reduce customer downtime risk",
        },
      ],
      actions: [
        {
          zh: "切换供应商",
          en: "Switch supplier",
        },
        {
          zh: "拆单先发",
          en: "Split and ship now",
        },
        {
          zh: "通知客户经理",
          en: "Notify account owner",
        },
      ],
    },
    {
      key: "resolve",
      label: { zh: "04 Resolve", en: "04 Resolve" },
      title: { zh: "改变企业运行状态", en: "Change the enterprise state" },
      summary: {
        zh: "审批后，数字孪生同步更新，交付概率从 62% 提升至 91%。",
        en: "After approval, the digital twin updates and delivery confidence rises from 62% to 91%.",
      },
      trigger: { zh: "重新播放", en: "Replay demo" },
      metricLabel: { zh: "交付概率", en: "Delivery confidence" },
      metricValue: "91%",
      probability: 91,
      delta: "+29%",
      objects: ["order", "shipment", "customer", "owner", "cash"],
      evidence: [
        {
          zh: "备用路线已锁定，港口装运顺序已更新",
          en: "Backup route is locked and port sequencing is updated",
        },
        {
          zh: "客户英文通知草稿已生成待发送",
          en: "Customer email draft is generated and ready to send",
        },
      ],
      actions: [
        {
          zh: "记录审批轨迹",
          en: "Record the approval trail",
        },
        {
          zh: "同步任务与结果",
          en: "Sync tasks and outcome",
        },
      ],
    },
  ] satisfies DemoStage[],
  closing: {
    zh: "你刚刚不是查看了一个 Dashboard。你改变了企业的运行状态。",
    en: "You didn't just view a dashboard. You changed how the enterprise operates.",
  },
  closingLabel: {
    zh: "Living Enterprise Demo",
    en: "Living Enterprise Demo",
  },
  storyLabel: {
    zh: "Narrative",
    en: "Narrative",
  },
  storyTitle: {
    zh: "从事实到意义，再从意义到行动。",
    en: "From facts to meaning. From meaning to action.",
  },
  storyIntro: {
    zh: "企业本体把复杂数据组织成数字孪生，让人和 AI 共享同一种业务理解。",
    en: "An enterprise ontology organizes complex data into a digital twin that people and AI can understand together.",
  },
  howItWorks: {
    eyebrow: { zh: "How it works", en: "How it works" },
    title: {
      zh: "企业本体驱动的实时数字孪生。",
      en: "A living digital twin, powered by enterprise ontology.",
    },
    items: [
      {
        title: { zh: "Connect", en: "Connect" },
        text: {
          zh: "把业务事实连接成对象、关系与事件。",
          en: "Connect business facts as objects, relationships, and events.",
        },
      },
      {
        title: { zh: "Understand", en: "Understand" },
        text: {
          zh: "把事实数据转成影响、责任与因果等意义数据。",
          en: "Turn factual data into meaning: impact, ownership, and causality.",
        },
      },
      {
        title: { zh: "Act", en: "Act" },
        text: {
          zh: "让 AI 决策建议与人工审批共同驱动执行。",
          en: "Use shared meaning to drive AI decisions, human approval, and execution.",
        },
      },
    ],
  },
  outcomes: {
    eyebrow: { zh: "What changes", en: "What changes" },
    title: {
      zh: "对外贸与订单型企业，最有价值的不是多一个看板，而是更早、更准、更能推动动作。",
      en: "For export and order-driven businesses, the real value is not another dashboard, but earlier, clearer, more actionable coordination.",
    },
    items: [
      {
        title: { zh: "更早发现风险", en: "Detect risk earlier" },
        text: {
          zh: "从库存、供应、物流和客户承诺里提前看到交付风险。",
          en: "See delivery risk earlier across inventory, supply, shipment, and customer commitments.",
        },
      },
      {
        title: { zh: "看清影响证据", en: "See the evidence" },
        text: {
          zh: "把 ERP、CRM、物流状态和负责人动作放到同一证据链中。",
          en: "Bring ERP, CRM, shipment status, and owner activity into one evidence trail.",
        },
      },
      {
        title: { zh: "推动协同行动", en: "Move work forward" },
        text: {
          zh: "把建议、审批、通知和任务留在同一个运行界面里。",
          en: "Keep recommendation, approval, notification, and tasking in one operating surface.",
        },
      },
    ],
  },
  contact: {
    eyebrow: { zh: "Contact Us", en: "Contact Us" },
    title: {
      zh: "一起构建你的企业本体。",
      en: "Build your enterprise ontology with us.",
    },
    note: {
      zh: "如果你也在把事实数据转成可执行的业务语义和协同行动，我们可以一起推进下一步。",
      en: "If you are turning factual signals into shared business meaning and coordinated action, we should talk.",
    },
    submit: { zh: "提交咨询", en: "Send inquiry" },
    success: {
      zh: "已收到你的信息，我们会尽快联系你。",
      en: "We received your message and will get back to you soon.",
    },
    error: {
      zh: "提交失败，请稍后重试。",
      en: "Submission failed. Please try again later.",
    },
    fields: {
      fullName: { zh: "姓名", en: "Full name" },
      companyName: { zh: "公司", en: "Company" },
      workEmail: { zh: "工作邮箱", en: "Work email" },
      message: { zh: "你希望解决的问题", en: "What problem do you want to solve?" },
      consent: {
        zh: "我同意 Si-Tech 就本次咨询与我联系。",
        en: "I agree to be contacted by Si-Tech regarding this inquiry.",
      },
    },
  },
  footer: {
    title: "Enterprise Opera OS by Si-Tech",
    summary: {
      zh: "寻找愿意一起定义企业本体、验证数字孪生场景并推进下一步方案的合作伙伴。",
      en: "We are looking for partners to define enterprise ontology, validate digital-twin scenarios, and shape the next step together.",
    },
    links: [
      {
        href: "/company",
        label: { zh: "Company Official Website", en: "Company Official Website" },
      },
      {
        href: "/about",
        label: { zh: "About Si-Tech", en: "About Si-Tech" },
      },
      {
        href: "/contact",
        label: { zh: "Contact", en: "Contact" },
      },
    ],
  },
};

export function operaCopy(locale: Locale, value: Copy) {
  return value[locale];
}
