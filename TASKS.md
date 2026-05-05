# TASKS

## Current foundation

以下基础已经存在，可作为 v2 改版起点：

- 双语 Next.js 官网已搭建
- 内容已集中在 `content/siteContent.ts`、`content/productsContent.ts`
- Home、Solutions、Partnership、Stories、About、Contact 已有基础结构
- 联系表单、HubSpot、Gmail 自动回信主链路已建立
- `Privacy` 与 `Thank You` 页面已存在
- 基础图片资源与部分 detail pages 已存在
- PDF OCR 流程已接入，可生成中间稿与结构化内容稿

## v2 content direction

本轮改版不再做“泛化解决方案网站”，而是改成：

- 以运营商域为核心
- 用公司介绍与 PDF OCR 结果强化可信度
- 用数字产业域与 AI 域扩展第二层解决方案
- 用 Marketplace 替代 Partners，并把它重构成应用中心风格的产品优先页
- 用真实案例名称重写 Stories，不能公开的部分用明确占位符
- 让 Partnership 成为未来更多合作方向的扩展入口
- 保持海外获客导向，而不是总部宣传册导向

## Priority 1: 内容与 OCR 资产

- 生成 `content/pdf-ocr/sitech-manual-ocr.md`
- 生成 `content/pdf-ocr/sitech-manual-structured.md`
- 把 OCR 结果按官网可用方式整理为：
  - 公司背书
  - 核心能力
  - 产品与平台点
  - 案例与客户点
  - Partnership 可用内容
- 对低置信度或明显乱码内容做待复核标记

## Priority 2: 首页重构

- 重写 Home 信息架构，删除“客户最常感受到的问题”
- 重做 Hero，让首屏更适合获客与继续浏览
- 重做持续滚动横幅，改成连续能力标签带
- 在横幅下加入“国内思特奇主营业务与能力背书”
- 固定首页展示 5 个解决方案方向
- 调整 Solutions Preview 的排序，使运营商域永远第一
- 增加 About Preview，让首页可信度更完整
- 增加 section 可见性控制

## Priority 3: 解决方案体系重构

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

## Priority 4: Partnership 扩展能力

- 不新增 `Industries` 页面
- 让 `Partnership` 承接未来更多合作方向
- 增加可扩展的合作机会卡片 / 合作伙伴条目结构
- 允许后续增加：
  - 本地渠道伙伴
  - 行业实施伙伴
  - 联合方案伙伴
  - 某类产品在当地寻找合作伙伴的条目
- 增加 Partnership 条目显隐控制

## Priority 5: Marketplace 与 Stories 重构

- 用 `Marketplace` 替换现有 `Partners`
- 在 Marketplace 里先展示我们的产品，再展示伙伴产品
- 将 Teamshub 和智能客服 / 服务运营产品纳入 Marketplace 自有产品区
- 将 Helport 放入 Marketplace 伙伴产品区
- 重写 Stories 页，把它从“另一版方案介绍”改成真实案例结构
- 建立 solution-to-story 双向链接

## Priority 6: 文档整理

- 更新 `PRD.md`
- 更新 `TASKS.md`
- 更新 `README.md`
- 新增且仅新增一个新手文档：`BEGINNER_GUIDE.md`
- 新手文档要覆盖：
  - 如何看当前网站结构
  - 如何隐藏某个板块
  - 如何新增 partnership 条目
  - 如何发布
  - 域名和托管是什么关系

## Done when

满足以下条件后，本轮准备完成：

- OCR 原始稿与结构化稿都已落文件
- 首页结构与 `问题单.md` 一致
- 官网主叙事清楚反映“运营商域优先”
- 数字产业域与 AI 域被纳入主解决方案体系
- Teamshub 被放回正确定位
- Stories 成为真实结构案例页
- Marketplace 成功替代 Partners
- Partnership 能承接后续更多合作方向
- 板块与条目显隐机制明确
- 文档结构保持简洁，只有一个新手指导文件
