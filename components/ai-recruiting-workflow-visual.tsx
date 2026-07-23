"use client";

import { useEffect, useState } from "react";

import type { Locale } from "@/lib/site";

type Scenario = {
  id: "cash-loan" | "insurance" | "recruiting";
  tab: { en: string; zh: string };
  expert: { en: string; zh: string };
  journey: { en: string; zh: string };
  summary: { en: string; zh: string };
  steps: Array<{
    label: { en: string; zh: string };
    title: { en: string; zh: string };
    text: { en: string; zh: string };
    icon: string;
  }>;
};

const scenarios: Scenario[] = [
  {
    id: "cash-loan",
    tab: { en: "Cash loan", zh: "现金贷" },
    expert: { en: "AI Cash Loan Specialist", zh: "AI 现金贷专员" },
    journey: { en: "Loan application & servicing", zh: "申请与贷后服务" },
    summary: { en: "The AI handles borrower communication and process follow-up. Credit approval and exceptions stay with the lending team.", zh: "AI 负责借款人沟通和流程跟进；授信审批与例外判断仍由信贷团队处理。" },
    steps: [
      { label: { en: "01 · Product inquiry", zh: "01 · 贷款咨询" }, title: { en: "Answer loan-product questions", zh: "解答额度、期限与申请条件" }, text: { en: "Explain approved loan products, required documents, repayment dates, and the next action.", zh: "根据已批准的话术，说明产品、所需资料、还款日期和下一步操作。" }, icon: "↳" },
      { label: { en: "02 · Application intake", zh: "02 · 申请受理" }, title: { en: "Collect complete application details", zh: "收集完整申请资料" }, text: { en: "Call or chat with the borrower, identify missing fields, and remind them what to submit.", zh: "通过电话或文本核对信息，发现缺项后提醒客户补齐资料。" }, icon: "◎" },
      { label: { en: "03 · Status follow-up", zh: "03 · 进度跟进" }, title: { en: "Send status and document reminders", zh: "发送进度与补件提醒" }, text: { en: "Proactively notify applicants about submission, review, disbursement, or repayment milestones.", zh: "主动告知提交、审核、放款和还款等节点，并持续跟进。" }, icon: "↗" },
      { label: { en: "04 · Repayment service", zh: "04 · 还款服务" }, title: { en: "Handle repayment questions", zh: "处理还款相关问题" }, text: { en: "Answer approved FAQs on due dates, payment channels, and account status.", zh: "解答还款日、支付渠道、账户状态等经批准的常见问题。" }, icon: "◌" },
      { label: { en: "05 · Human review", zh: "05 · 人工处理" }, title: { en: "Escalate exceptions with context", zh: "例外个案连同上下文升级" }, text: { en: "Route disputes, sensitive complaints, and approval decisions to the right lending specialist.", zh: "将争议、敏感投诉和审批决策连同沟通记录交给对应信贷人员。" }, icon: "□" },
    ],
  },
  {
    id: "insurance",
    tab: { en: "Insurance", zh: "保险" },
    expert: { en: "AI Insurance Agent", zh: "AI 保险代理人" },
    journey: { en: "Policy, service & renewal", zh: "投保、服务与续保" },
    summary: { en: "The AI explains products, collects information, and follows up on policies. Underwriting, claims, and exceptions stay with licensed staff.", zh: "AI 负责产品说明、资料收集与保单跟进；核保、理赔与例外判断仍由专业人员负责。" },
    steps: [
      { label: { en: "01 · Product matching", zh: "01 · 产品匹配" }, title: { en: "Understand what the customer needs", zh: "了解客户要保什么、担心什么" }, text: { en: "Ask a consistent set of questions about people, assets, coverage needs, and policy status.", zh: "围绕人、资产、保障需求和现有保单，完成标准化需求沟通。" }, icon: "✦" },
      { label: { en: "02 · Information collection", zh: "02 · 资料收集" }, title: { en: "Collect documents and missing details", zh: "收集资料并补齐缺失信息" }, text: { en: "Tell customers exactly what to provide and follow up until the file is complete.", zh: "明确告诉客户需要提供什么资料，并持续跟进至资料完整。" }, icon: "◎" },
      { label: { en: "03 · Policy service", zh: "03 · 保单服务" }, title: { en: "Explain coverage and next steps", zh: "说明保障内容和后续动作" }, text: { en: "Answer approved questions on coverage, renewal dates, premium notices, and policy changes.", zh: "解答保障范围、续保日期、保费通知和保单变更等经批准问题。" }, icon: "↗" },
      { label: { en: "04 · Renewal follow-up", zh: "04 · 续保跟进" }, title: { en: "Reach out before coverage lapses", zh: "在保障到期前主动联系" }, text: { en: "Call or message customers with renewal reminders and required next actions.", zh: "通过电话或短信发送续保提醒，并说明客户需要完成的动作。" }, icon: "◌" },
      { label: { en: "05 · Licensed escalation", zh: "05 · 专业人员接手" }, title: { en: "Route underwriting, claims, and disputes", zh: "核保、理赔与争议及时转人工" }, text: { en: "Pass high-risk, claims, and exception cases to licensed specialists with the full record.", zh: "将高风险、理赔和例外个案连同完整记录交给有资质的专业人员。" }, icon: "□" },
    ],
  },
  {
    id: "recruiting",
    tab: { en: "HR recruiting", zh: "HR 招聘" },
    expert: { en: "AI Recruiter", zh: "AI 招聘专员" },
    journey: { en: "Sourcing to interview booking", zh: "初筛到面试预约" },
    summary: { en: "The AI sources, screens, follows up, and books interviews. Final hiring decisions stay with the hiring team.", zh: "AI 负责触达、初筛、跟进和预约；最终录用决定仍由招聘团队做出。" },
    steps: [
      { label: { en: "01 · Role setup", zh: "01 · 岗位设定" }, title: { en: "Learn the role and screening rules", zh: "学习岗位要求与初筛规则" }, text: { en: "Use the approved job brief, must-have requirements, interview questions, and disqualifiers.", zh: "读取岗位说明、硬性条件、面试问题和淘汰规则。" }, icon: "✦" },
      { label: { en: "02 · Candidate outreach", zh: "02 · 候选人触达" }, title: { en: "Call, introduce, and qualify", zh: "电话介绍岗位并完成初筛" }, text: { en: "Call candidates, explain the role, ask screening questions, and capture availability and interest.", zh: "主动电话介绍岗位、提问初筛问题，并记录候选人的意向与可面试时间。" }, icon: "◌" },
      { label: { en: "03 · Follow-up", zh: "03 · 自动跟进" }, title: { en: "Send role details and reminders", zh: "发送岗位资料和提醒" }, text: { en: "Email or message qualified candidates with the job details and the next required action.", zh: "向符合条件的候选人发送岗位详情，并提醒其完成下一步。" }, icon: "↗" },
      { label: { en: "04 · Interview booking", zh: "04 · 面试预约" }, title: { en: "Book the interview on the calendar", zh: "直接安排面试日历" }, text: { en: "Offer available interview slots and send the calendar invitation after confirmation.", zh: "提供可选面试时间，并在确认后直接发送日历邀请。" }, icon: "□" },
    ],
  },
];

export function AiRecruitingWorkflowVisual({
  locale,
  initialScenario = "cash-loan",
  className = "",
}: {
  locale: Locale;
  initialScenario?: Scenario["id"];
  className?: string;
}) {
  const [activeIndex, setActiveIndex] = useState(() => Math.max(0, scenarios.findIndex((scenario) => scenario.id === initialScenario)));
  const active = scenarios[activeIndex];

  useEffect(() => {
    const timer = window.setInterval(() => setActiveIndex((index) => (index + 1) % scenarios.length), 13000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className={`relative overflow-hidden rounded-[2rem] border border-[#83ffd0]/20 bg-[#09281f]/95 p-4 shadow-[0_42px_120px_rgba(0,0,0,0.5)] sm:p-6 ${className}`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_5%,rgba(105,245,183,0.2),transparent_28rem)]" />
      <div className="relative">
        <div className="flex items-center justify-between border-b border-white/10 pb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#a7cfc0] sm:text-[11px]">
          <span className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-[#65f2b3] shadow-[0_0_16px_#65f2b3]" /> {locale === "en" ? "AI Expert / scenario flow" : "AI 专家 / 场景流程"}</span>
          <span>{String(activeIndex + 1).padStart(2, "0")} / 03</span>
        </div>

        <div className="mt-4 flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none]">
          {scenarios.map((scenario, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={scenario.id}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-pressed={isActive}
                className={`shrink-0 rounded-full border px-3 py-2 text-[10px] font-bold transition sm:px-4 sm:text-xs ${isActive ? "border-[#ff9a4f] bg-[#ff9a4f] text-[#2e1607]" : "border-white/15 bg-white/5 text-[#b4d2c5] hover:border-[#ffb36f]/65 hover:text-white"}`}
              >
                {scenario.tab[locale]}
              </button>
            );
          })}
        </div>

        <div key={active.id} className="product-visual-enter mt-4 rounded-2xl border border-white/10 bg-[#dff5eb] p-4 text-[#09251d] shadow-[inset_0_1px_rgba(255,255,255,0.85)] sm:p-5">
          <div className="flex items-center justify-between gap-4 border-b border-[#0b553c]/10 pb-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#063a2b] text-sm text-[#76f6bd]">AI</div>
              <div>
                <p className="text-sm font-bold">{active.expert[locale]}</p>
                <div className="mt-1 flex flex-wrap items-center gap-2">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.13em] text-[#328165]">{locale === "en" ? "Scenario demo" : "场景演示"}</p>
                  <span className="rounded-full bg-[#fff0dc] px-2 py-1 text-[10px] font-bold text-[#914108]">{locale === "en" ? "Human takeover ready" : "随时人工接管"}</span>
                </div>
              </div>
            </div>
            <span className="rounded-full bg-[#c4f6dd] px-3 py-1.5 text-[10px] font-bold text-[#087049]">{active.journey[locale]}</span>
          </div>

          <div className="relative mt-4 grid gap-3">
            {active.steps.map((step, index) => (
              <div key={step.title.en} className="relative grid grid-cols-[2.6rem_1fr] gap-3 rounded-xl border border-[#0d6849]/10 bg-white/80 p-3.5 shadow-[0_8px_20px_rgba(12,78,53,0.06)] sm:grid-cols-[3.2rem_1fr_auto] sm:items-center sm:p-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#e0faec] text-base font-bold text-[#08704b]">{step.icon}</div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.16em] text-[#2a9670]">{step.label[locale]}</p>
                  <p className="mt-1 text-base font-bold leading-6">{step.title[locale]}</p>
                  <p className="mt-1 text-[13px] leading-5 text-[#5d786c] sm:text-sm">{step.text[locale]}</p>
                </div>
                {index < active.steps.length - 1 ? <span className="absolute -bottom-3 left-7 z-10 hidden h-5 border-l border-dashed border-[#34c98c] sm:block" /> : null}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-[#5defb0]/15 bg-[#0b3428] px-4 py-3 text-xs text-[#b8d7ca]">
          <span className="text-sm leading-6">{active.summary[locale]}</span>
          <span className="font-bold text-[#78f6bb]">{locale === "en" ? "Choose a scenario" : "选择一个场景"}</span>
        </div>
      </div>
    </div>
  );
}
