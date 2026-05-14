# 图片替换与尺寸指南

这份文件专门说明：网站哪里可以换图片、建议放多大、路径改哪里。

## 1. 通用规则

- 图片优先放在 `public/images/` 下面。
- 我已经先筛了一组可用于官网的真实人物风格图片，放在 `public/images/curated/`。
- 这组图片的来源和 license 记录在 `public/images/curated/IMAGE_SOURCES.md`。
- 如果暂时没有真实图片，可以先用 `public/images/placeholders/content-placeholder.svg`。
- 替换图片后，先跑 `npm run check:images`。
- 本地开发 `npm run dev` 会自动检查图片尺寸，正式发布 `npm run build` 不会跑这个检查。

## 2. 推荐尺寸

| 使用位置 | 推荐尺寸 | 文件夹 |
| --- | --- | --- |
| Hero 大图 | `1600 x 900` 或更高，16:9 | `public/images/hero/` |
| 首页解决方案卡片图 | `1200 x 800` 或 3:2 | `public/images/solutions/` 或 `public/images/stories/` |
| Products 产品卡片图 | `1200 x 675` 或 16:9 | `public/images/products/`，没有时可先用 `public/images/hero/` |
| Stories 案例图 | `1200 x 800` 或 3:2 | `public/images/stories/` |
| About 公司图 | `1600 x 900` | `public/images/about/` |
| Solution 结构图 / 流程图 | `1600 x 900` 到 `2200 x 1400` | `public/images/solutions/` |
| Logo | `300 x 300` 或 SVG | `public/brand/` |
| 浏览器 icon | `300 x 300` | `app/icon.png` |

## 3. 当前可选图片包

当前可先从这里选：

| 图片 | 适合位置 |
| --- | --- |
| `public/images/curated/diverse-business-meeting-room.jpg` | 首页 Hero、About、Partnership |
| `public/images/curated/telecom-network-switch.jpg` | 运营商 IT 支撑、网络基础设施 |
| `public/images/curated/broadband-network-cables.jpg` | 中国联通宽带支撑故事 |
| `public/images/curated/warehouse-logistics-team.jpg` | 数字产业平台、供应链协同 |
| `public/images/curated/cattle-farm-platform.jpg` | 黔牛帮肉牛产业故事 |
| `public/images/curated/software-developers-office.jpg` | 定制系统、企业门户、开发交付 |
| `public/images/curated/business-dashboard-laptop.jpg` | 数据看板、运营视图、知识节点 |
| `public/images/curated/project-team-laptop.jpg` | Teamshub、项目协同 |
| `public/images/curated/friendly-call-center-agent.jpg` | Helport 详情、友好的客服沟通 |
| `public/images/curated/modern-office-tablet-discussion.jpg` | Solutions、Contact、业务沟通 |
| `public/images/curated/diverse-executive-meeting.jpg` | Products、About、企业客户沟通 |
| `public/images/curated/diverse-laptop-collaboration.jpg` | Home、团队协同 |
| `public/images/curated/business-partners-discussion.jpg` | Stories、Partnership、合作讨论 |
| `public/images/curated/engineers-collaborating-office.jpg` | 通用交付能力 |
| `public/images/curated/customer-support-agents-office.jpg` | Helport、AI 客服、重点产品 |
| `public/images/curated/call-center-team-meeting.jpg` | AI 客服、智能客服方案 |
| `public/images/curated/call-center-diverse-team.jpg` | Helport、呼叫中心团队 |
| `public/images/curated/call-center-team-workstations.jpg` | Helport 详情、客服中心场景 |
| `public/images/curated/smiling-partnership-handshake.jpg` | Partnership Hero、合作入口 |
| `public/images/curated/partnership-handshake-reports.jpg` | Partnership CTA、合作洽谈 |
| `public/images/curated/team-laptop-strategy-session.jpg` | Teamshub、团队协同、移动端裁切 |
| `public/images/curated/business-partner-handshake.jpg` | Contact、合作伙伴入口 |

代码里引用示例：

```ts
image: "/images/curated/customer-support-agents-office.jpg"
```

## 4. 当前已经接入图片的位置

### Hero 大图

改这里：

- `content/site-content.ts`
- `content/products-content.ts`

字段通常叫：

```ts
image: "/images/hero/ai-operations.webp"
```

适合页面：

- Home
- Products
- Solutions
- Stories / Partnership
- About
- Contact
- Privacy
- Thank You

### 首页解决方案卡片

改这里：

- `content/site-content.ts`
- `solutionsCatalog[].image`

建议图片：

- 运营商方向：公司、运营支撑、网络服务、平台架构相关图
- 产业平台方向：交易、供应链、产业协同、数据平台相关图
- AI 服务方向：客服、坐席、AI 工作流相关图
- Teamshub：项目协同、工作流、团队协作相关图
- 定制系统：门户、后台、流程图、系统界面相关图

### Products 产品卡片

改这里：

- `content/site-content.ts`
- `marketplacePage.ownItems[].image`
- `marketplacePage.partnerItems[].image`

当前已支持：

- Teamshub 产品卡片图
- AI 服务产品卡片图
- Helport 产品卡片图
- 更多合作产品占位图

### Stories 案例图片

改这里：

- `content/site-content.ts`
- `storiesPage.items[].image`

建议每个案例都放一张真实相关图。没有真实图时，先用业务场景图，不要用过于抽象的纯背景。

### Teamshub 详情页图片

改这里：

- `content/site-content.ts`
- `solutionDetails.teamshub.sections[].image`
- `solutionDetails.teamshub.roadmapImage`

适合放：

- 产品界面截图
- 工作流图
- 项目推进图
- 角色协同图

## 5. 缺图片时怎么处理

先用统一占位图：

```ts
image: "/images/placeholders/content-placeholder.svg"
```

等你有真实图片后，再替换成：

```ts
image: "/images/hero/your-new-image.webp"
```

## 6. 检查命令

单独检查图片：

```bash
npm run check:images
```

本地开发：

```bash
npm run dev
```

正式构建：

```bash
npm run build
```

正式构建不会自动跑图片检查，这是为了避免发布流程被本地图片检查影响。
