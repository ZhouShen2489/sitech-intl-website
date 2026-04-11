# TASKS

## Current foundation

以下基础已经存在，可作为 v2 改版起点：

- 双语 Next.js 官网已搭建
- 内容已集中在 `content/siteContent.ts`
- Home、Solutions、Partnership、Stories、About、Contact 已有基础结构
- 联系表单、HubSpot、Gmail 自动回信主链路已建立
- `Privacy` 与 `Thank You` 页面已存在
- 基础图片资源与部分 detail pages 已存在

## v2 content direction

本轮改版不再做“泛化解决方案网站”，而是改成：

- 以运营商域为核心
- 用公司介绍强化可信度
- 用数字产业域与 AI 域扩展第二层解决方案
- 用 Marketplace 替代 Partners，并把它重构成应用中心风格的产品优先页
- 用真实案例名称重写 Stories，不能公开的部分用明确占位符
- 保持海外获客导向，而不是总部宣传册导向

## Priority 1: 首页重构

- 重写 Home 信息架构，删除“客户最常感受到的问题”
- 重做 Hero，让首屏更适合获客与继续浏览
- 重做持续滚动横幅，改成连续能力标签带
- 在横幅下加入“国内思特奇主营业务与能力背书”
- 把“我们擅长修通的问题”改为“我们擅长解决的问题”
- 固定首页展示 5 个解决方案方向
- 调整 Solutions Preview 的排序，使运营商域永远第一
- 增加 About Preview，让首页可信度更完整

## Priority 2: 解决方案体系重构

- 将 Solutions 页重构为 5 个固定方向
- 使用以下分类组织：
  - `Telecom`
  - `Enterprise & Platforms`
  - `AI & Service`
- 补强 `运营商 IT 支撑与服务域` 详情内容
- 新增或重写 `数据要素与数字产业平台`
- 新增或重写 `AI 产品与智能客服`
- 重新定位 `Teamshub 协同与项目推进`
- 重新定位 `定制化业务系统与企业门户 / 运营平台`
- 为重点方案补充：
  - 图片占位
  - 架构图占位
  - 常见切入口
  - 结果表达

## Priority 3: 故事与信任页重构

- 重写 Stories 页，把它从“另一版方案介绍”改成真实案例结构
- 每个故事固定包含：
  - 客户场景
  - 问题
  - 方案切入
  - 推进方式
  - 结果
- 所有故事优先使用真实公开名称，缺失部分使用明确占位符
- 建立 solution-to-story 双向链接
- 扩写 About 页面，加入公司背景、行业经验、团队与能力背书

## Priority 4: 导航与页面角色调整

- 用 `Marketplace` 替换现有 `Partners`
- 在 Marketplace 里先展示我们的产品，再展示伙伴产品
- 将 Teamshub 和智能客服 / 服务运营产品纳入 Marketplace 自有产品区
- 将 Helpport 放入 Marketplace 伙伴产品区
- 重新区分 `Partnership` 与 `Marketplace`
- 检查导航、页脚、首页入口文案是否与新结构一致

## Priority 5: 内容补齐与占位策略

- 从 `公司介绍` PPT 中提炼可公开使用的公司背书表达
- 从 `运营商域` PPT 中提炼最强切入口与业务语言
- 从 `数字产业域` PPT 中提炼平台、要素、产业场景表达
- 从 `AI域` PPT 中提炼 AI 应用、开发、运营相关表达
- 对缺图位置统一补占位图
- 对缺结构图位置统一补结构图占位
- 对缺详细文案位置补专业占位文案

## Content review dependencies

这些事项不是当前阶段阻塞，但必须在后续内容审阅中处理：

- 确认哪些客户名称可以公开
- 确认哪些案例可以直接公开名称，哪些必须先保留占位符
- 确认 Helpport 的最终公开介绍方式
- 确认哪些总部表达适合直接对外，哪些需要改写

## Recommended execution order

1. 重写首页结构与首页文案
2. 重构 Solutions 总页与 5 个方向
3. 优先补强运营商域详情
4. 补数字产业域与 AI 域
5. 重写 Stories 与建立 solution-to-story 链接
6. 扩写 About
7. 用 Marketplace 替换 Partners
8. 统一补占位图、结构图位、缺失文案位
9. 再做整体语气统一与双语润色

## Done when

满足以下条件后，v2 文档驱动改版准备完成：

- 首页结构与 `问题单.md` 一致
- 官网主叙事清楚反映“运营商域优先”
- 数字产业域与 AI 域被纳入主解决方案体系
- Teamshub 被放回正确定位
- Stories 成为真实结构案例页
- Marketplace 成功替代 Partners
- 所有缺失内容都有明确占位方案
- 文风既适合海外获客，也符合思特奇真实能力与公司情况
