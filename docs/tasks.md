# TASKS

这份文件按“公司获客负责人”的视角维护。目标不是把网站做漂亮而已，而是让 SMB 企业客户看完后愿意留下线索、约沟通、试产品或讨论合作。

## Current Status

- 双语 Next.js 官网已搭建，核心内容集中在 `content/site-content.ts`、`content/products-content.ts`。
- Home、Products、Helport、Solutions、Stories / Partnership、About、Contact、Privacy、Thank You 已有完整页面。
- 联系表单、HubSpot、邮件通知和自动回复链路已接入。
- PDF OCR 内容已落到 `docs/reference/pdf-ocr/`，可继续作为内容素材库。
- 图片已集中放在 `public/images/curated/`，当前主要页面已直接接入真人商务风格照片。
- UI 已向 SI-TECH logo 蓝色体系靠拢，并加入轻量动效、卡片 hover、真人 hero 图和更明显的 CTA。
- 已完成一轮呈现优化：Hero SMB 浮层已移除，主要头图已去重，Helport 详情头图已换成更友好的客服场景图。
- 已完成一轮图片性能优化：非首屏图片增加 `sizes` 和较低 `quality`，Vercel 图片缓存配置已加入，页面下方 section 启用延迟渲染。

## Growth Priorities

### P0: 上线前必须完成

- 检查所有中文页面是否还有“内部说明口吻”，尤其是按钮、提示语、案例说明。
- 联系表单必须在 Vercel Hobby 环境跑通一次真实提交，确认邮件、HubSpot 和 Thank You 跳转都正常。
- 给 `www.sitech-intl.com` 准备 Vercel 域名接入步骤，正式切换前保留回滚方案。
- 所有外部链接必须确认：Helport 官网、LinkedIn、邮箱、电话。
- 移动端首屏必须人工查看：首页、Products、Helport、Contact。

### P1: 获客转化增强

- 首页首屏增加更明确的 SMB 业务切入口，例如“客服效率”“项目协同”“AI 试点”“本地合作”。
- Products 页增加“我应该先看哪个产品”的快速判断模块，减少客户选择成本。
- Helport 页增加“适合 / 不适合”的判断区，让客户更快产生共鸣和行动。
- Contact 页增加“提交后会发生什么”的 3 步说明，降低 SMB 客户填写表单顾虑。
- Stories / Partnership 增加“我们正在寻找什么合作伙伴”的清晰卡片，方便渠道伙伴自我识别。

### P2: 信任背书增强

- About 页补充更可公开的公司资质、客户类型、交付覆盖和研发实力，但避免堆宣传册语言。
- Stories 页每个案例补“公开来源 / 可披露范围 / 不可披露说明”，避免客户怀疑真实性。
- Solutions 详情页补 1 张结构图或流程图，但不要让页面变成技术文档。
- 首页增加更自然的 credibility strip：成立时间、研发占比、运营商经验、交付能力。

### P3: 后续内容扩展

- Partnership 支持未来新增太阳能摄像头、本地代理、渠道合作、行业实施伙伴等条目。
- Products 支持新增更多合作产品，并通过 `visible` 控制是否展示。
- 图片后续替换成真实公司/项目图片时，继续走 `docs/image-guide.md` 和 `npm run check:images`。

## Page Audit

### `/` 和 `/zh`

当前判断：首页已经具备对外获客框架，视觉也更统一，但第一屏还可以更直接说“SMB 客户从哪里开始”。

下一步：

- 增加一个轻量“适合从这里开始”的 3-4 个入口。
- 首页 CTA 文案继续压缩，突出“先聊一个具体问题”。
- Hero 右侧图片下方的小标签可以继续替换成更业务化表达。

### `/zh/products`

当前判断：产品页已经统一 Helport 表达，并加入产品卡片图；下一步要让客户更快判断“哪个产品适合我”。

下一步：

- 增加产品选择向导：客服效率选 Helport / AI 服务，项目协同选 Teamshub，复杂系统选 Solutions。
- 重点产品 Helport 卡片增加“痛点 -> 产品 -> 下一步”的短链路。
- 给每个产品补一个“最小试点范围”。

### `/zh/products/helport`

当前判断：页面已经避免重复首页重点卡片，并换成客服中心真人 hero。内容还可以更有危机感。

下一步：

- 增加“没有这类系统会遇到什么问题”的短区块。
- 增加“适合 / 暂不适合”判断，避免客户误判。
- 等 Helport 官方提供渠道推荐链接后，把 `partnerReferralHref` 从 `/contact` 替换成可追踪链接。

### `/zh/solutions`

当前判断：解决方案页方向清楚，运营商优先，但页面仍偏“能力列表”。

下一步：

- 每个解决方案卡片增加“客户常见问题”一句话。
- CTA 从“查看详情”进一步业务化，例如“看如何解决开通/结算/协同问题”。
- 增加一个“如果你不确定选哪类，先联系我们判断”的收口区。

### `/zh/solutions/telecom-operations`

当前判断：这是最重要的能力页，内容可信但还可以更具体地服务获客。

下一步：

- 增加运营商 / MVNO / 宽带 / 门户 / 结算的典型项目入口。
- 增加“适合的客户类型”：运营商、MVNO、宽带服务商、复杂服务团队。
- 补一张业务支撑流程图或架构示意图。

### `/zh/solutions/digital-industry-platforms`

当前判断：方向适合展示思特奇平台能力，但对 SMB 客户可能略抽象。

下一步：

- 增加更具体的场景：交易协同、供应链平台、数据流转、运营看板。
- 增加“平台失败的常见原因”：只做展示、不接交易、不接流程。
- 补一个可以从小试点开始的路径。

### `/zh/solutions/ai-customer-service`

当前判断：与 Helport 有交集，但定位应更偏 SI-TECH 的 AI 服务与流程落地能力。

下一步：

- 明确区分：Helport 是伙伴产品，AI customer service 是我们可落地的服务/方案能力。
- 增加“AI 只做 demo 的风险”区块。
- 增加知识库、质检、摘要、辅助处理、运营分析的组合路径。

### `/zh/solutions/teamshub-business-os`

当前判断：页面有产品解释和图片，适合 SMB 长链路项目管理场景。

下一步：

- 增加一张真实产品截图或更清楚的流程图。
- 增加“适合销售项目 / 交付项目 / 合作伙伴管理”的分场景说明。
- 增加 Demo CTA，不只导向普通 Contact。

### `/zh/solutions/custom-business-systems`

当前判断：适合承接 SMB 定制系统需求，但当前还缺少具体项目类型。

下一步：

- 增加门户、CRM、运营看板、工作流、客户系统等常见入口。
- 增加“什么时候不该做定制系统”的提醒，体现专业判断。
- 增加“从 MVP 到正式系统”的交付路径。

### `/zh/stories`

当前判断：Stories 已与 Partnership 合并展示，并加入真人合作图片。案例结构方向正确，但还需要更强可信度。

下一步：

- 每个案例补“公开资料来源 / 可确认范围”。
- 增加案例与对应解决方案的更直接链接。
- 对暂不能公开的内容，用“公开范围有限”说明，不要模糊写“某客户”。

### `/zh/partnership`

当前判断：页面已经可作为合作入口，图片和卡片更像对外页面。下一步要更直接说明我们要找谁。

下一步：

- 增加“我们正在寻找的合作伙伴”：本地渠道、行业实施、联合方案、产品代理。
- 每类伙伴补“你带来什么 / 我们提供什么 / 下一步怎么开始”。
- 太阳能摄像头等新合作产品未来直接做成 opportunity 条目，并用 `visible` 控制。

### `/zh/about`

当前判断：About 可信度强，但容易变成公司介绍。需要继续压缩为“为什么客户可以信任我们”。

下一步：

- 把统计数字旁边加业务解释，而不是只放数字。
- 增加“Si-Tech Intl 在美国市场负责什么”的说明。
- 增加与 Contact 的转化入口。

### `/zh/contact`

当前判断：联系页已经有表单、联系方式和真实照片；这是获客闭环关键页。

下一步：

- 增加提交后流程：收到确认邮件、初步判断、安排沟通。
- 表单默认选项继续优化成 SMB 能理解的业务语言。
- 上线前必须做真实提交测试。

### `/zh/thank-you`

当前判断：感谢页已换真人合作图片，但还可以继续承接下一步行动。

下一步：

- 增加“你可以继续查看 Products / Solutions / Partnership”的三个按钮。
- 增加预计回复时间，例如 1-2 个工作日。

### `/zh/privacy`

当前判断：隐私页已经换成真人商务图，内容够基础。

下一步：

- 上线前确认是否需要加 California / CCPA 相关说明。
- 如果后续接入更多 tracking 或 analytics，需要同步更新。

### Redirect Pages

涉及页面：`/market`、`/marketplace`、`/partners`。

当前判断：这些页面现在跳转到 Products，逻辑正确，避免旧导航造成混乱。

下一步：

- 上线前检查是否还有外部材料链接到旧路径。
- 如果旧路径已有搜索引擎收录，后续用正式 301 redirect 处理。

## Operational Checklist

- 每次改图片后运行 `npm run check:images`。
- 每次改代码后运行 `npm run build`。
- 正式上线前至少人工检查中文首页、英文首页、Products、Helport、Solutions、Stories、Partnership、About、Contact。
- 新增任何合作产品时，先写清楚客户问题，再写产品功能。
- 所有文案优先中文定稿，再做英文对应。
