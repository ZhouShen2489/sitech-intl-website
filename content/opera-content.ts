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
    zh: "连接订单、客户、库存、供应商与负责人，在风险发生时理解影响、推进审批、改变结果。",
    en: "Connect orders, customers, inventory, suppliers, and owners so teams can understand impact, approve action, and change the outcome.",
  },
  heroNote: {
    zh: "AI 提出建议，由人审批执行。面向复杂业务系统的真实落地场景。",
    en: "AI recommends, people approve. Built for practical rollout in complex operating environments.",
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
        zh: "南美客户订单 SO-1847 由稳定转为风险，交付预计延期 4 天，影响金额 $128k。",
        en: "Order SO-1847 for a South America customer shifts from stable to at-risk, with a 4-day projected delay and $128k exposed.",
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
        {
          zh: "原定船期窗口剩余 18 小时",
          en: "The planned vessel window closes in 18 hours",
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
        zh: "展开订单、采购、库存、物流、客户承诺和负责人之间的关系，看到风险不是一个点，而是一条链。",
        en: "Expand the relationship between order, procurement, inventory, shipment, customer promise, and owner to show the risk as a chain, not a single point.",
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
        {
          zh: "客户经理：Lucia，需英文沟通草稿",
          en: "Account owner: Lucia, needs an English customer update draft",
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
        zh: "AI 给出三步动作：切换备用供应商、拆单先发可用库存、同步客户经理准备英文说明。",
        en: "AI proposes three coordinated moves: switch to a backup supplier, split the shipment using available inventory, and equip the account owner with an English update.",
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
        {
          zh: "保留人工审批与英文邮件确认记录",
          en: "Human approval and outbound email confirmation remain in the record",
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
        zh: "审批后，物流路线重新编排，责任人收到任务，订单恢复稳定，交付概率从 62% 提升到 91%。",
        en: "After approval, the shipment route is re-sequenced, the owner gets the task, the order stabilizes, and delivery confidence rises from 62% to 91%.",
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
        {
          zh: "审批记录、任务指派与 KPI 变化被保留",
          en: "Approval records, task assignment, and KPI changes are preserved",
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
    zh: "四个阶段，不是在讲功能，而是在让企业世界发生变化。",
    en: "Four stages, not to explain features, but to make the enterprise world visibly change.",
  },
  storyIntro: {
    zh: "这不是传统产品介绍页。滚动下去，你看到的是一次风险被发现、理解、决策、改写的过程。",
    en: "This is not a traditional product page. Scroll down to watch one operational risk get detected, understood, decided on, and rewritten.",
  },
  howItWorks: {
    eyebrow: { zh: "How it works", en: "How it works" },
    title: {
      zh: "它不是 another dashboard，而是位于 ERP、CRM 与表格之上的行动语义层。",
      en: "It is not another dashboard, but an operating layer above ERP, CRM, and spreadsheets.",
    },
    items: [
      {
        title: { zh: "Connect", en: "Connect" },
        text: {
          zh: "把订单、客户、库存、供应商、物流和责任人放进同一个对象模型中。",
          en: "Put orders, customers, inventory, suppliers, shipment, and owners into one object model.",
        },
      },
      {
        title: { zh: "Understand", en: "Understand" },
        text: {
          zh: "在风险发生时，不只是看到异常，而是看到影响链路与证据来源。",
          en: "When risk appears, see not only the exception but the chain of impact and its evidence.",
        },
      },
      {
        title: { zh: "Act", en: "Act" },
        text: {
          zh: "让 AI 提建议、人做审批，推动跨角色动作真正发生并留下记录。",
          en: "Let AI propose and people approve so cross-functional action actually happens and stays recorded.",
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
      zh: "从企业本体出发，让订单、库存、物流与责任人形成可理解、可行动的业务世界。",
      en: "Start with an enterprise ontology that turns orders, inventory, logistics, and ownership into an understandable, actionable business world.",
    },
    note: {
      zh: "联系表单继续走现有官网流程，我们会把 Opera 咨询转给合适团队处理。",
      en: "This form still routes through the existing company contact workflow, and Opera inquiries are routed to the right team.",
    },
    submit: { zh: "提交咨询", en: "Send inquiry" },
    success: {
      zh: "已收到你的信息，我们会尽快联系你。",
      en: "We received your message and will get back to you soon.",
    },
    error: {
      zh: "提交失败，请稍后重试，或直接发送邮件到 info@sitech-intl.com。",
      en: "Submission failed. Please try again later or email info@sitech-intl.com directly.",
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
      zh: "Si-Tech 面向复杂业务系统与跨团队运营场景提供产品构思、平台建设与交付支持，让企业对象、流程、责任人与 AI 建议在同一张运行图中协同。",
      en: "Si-Tech supports complex business systems and cross-functional operating environments through product strategy, platform building, and delivery support, connecting business objects, workflows, owners, and AI recommendations in one operating picture.",
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
