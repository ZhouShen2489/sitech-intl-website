# CODE EXPLANATION

## 这份文档是给谁看的

这份文档是给“不熟悉代码、但需要管理或继续使用这个网站”的人看的。

目标不是教你写代码，而是帮你快速理解：

1. 这个网站由哪些部分组成
2. 每个文件大概在做什么
3. 如果以后想改文案、改图片、改 logo、改表单，应该去哪里改
4. HubSpot 和 Gmail 是怎么接进去的
5. 哪些地方是页面，哪些地方是配置，哪些地方是后端逻辑

你可以把这个项目理解成：

- 前台：网站页面长什么样、写什么内容
- 后台：表单提交后怎么进入 CRM、怎么发邮件
- 配置层：文案、图片、品牌信息、开关项放在哪里

---

## 一、整个项目的结构

这个项目是一个 `Next.js` 网站项目。

你不需要记住这个技术名词，只要知道：

- 它可以同时处理网页页面
- 也可以处理表单提交这类后端动作
- 所以前台和后端都在同一个项目里

项目里最重要的顶层文件和文件夹有这些：

- `app/`
- `components/`
- `content/`
- `lib/`
- `public/`
- `README.md`
- `PRD.md`
- `TASKS.md`
- `STYLEGUIDE.md`
- `CODE_EXPLANATION.md`

可以先这样理解：

- `app/`：每一个网页页面、接口入口
- `components/`：页面里反复使用的模块
- `content/`：文案内容
- `lib/`：功能逻辑、校验、CRM、发邮件
- `public/`：图片、logo 这类静态资源

---

## 二、页面是怎么组成的

### 1. `app/` 是网站页面主目录

这里面的文件决定“网站有哪些页面”。

当前已经有这些主要页面：

- 首页
- Solutions
- Partnership
- Stories
- About
- Contact
- Privacy
- Thank You
- 两个解决方案详情页

对应的重要文件有：

- [app/page.tsx](/Users/zhoushen/Documents/SI-TECH-Marketing/sitech-intl-website-v2/app/page.tsx)
- [app/[locale]/page.tsx](/Users/zhoushen/Documents/SI-TECH-Marketing/sitech-intl-website-v2/app/[locale]/page.tsx)
- [app/[locale]/solutions/page.tsx](/Users/zhoushen/Documents/SI-TECH-Marketing/sitech-intl-website-v2/app/[locale]/solutions/page.tsx)
- [app/[locale]/solutions/telecom-operations/page.tsx](/Users/zhoushen/Documents/SI-TECH-Marketing/sitech-intl-website-v2/app/[locale]/solutions/telecom-operations/page.tsx)
- [app/[locale]/solutions/teamshub-business-os/page.tsx](/Users/zhoushen/Documents/SI-TECH-Marketing/sitech-intl-website-v2/app/[locale]/solutions/teamshub-business-os/page.tsx)
- [app/[locale]/partnership/page.tsx](/Users/zhoushen/Documents/SI-TECH-Marketing/sitech-intl-website-v2/app/[locale]/partnership/page.tsx)
- [app/[locale]/stories/page.tsx](/Users/zhoushen/Documents/SI-TECH-Marketing/sitech-intl-website-v2/app/[locale]/stories/page.tsx)
- [app/[locale]/about/page.tsx](/Users/zhoushen/Documents/SI-TECH-Marketing/sitech-intl-website-v2/app/[locale]/about/page.tsx)
- [app/[locale]/contact/page.tsx](/Users/zhoushen/Documents/SI-TECH-Marketing/sitech-intl-website-v2/app/[locale]/contact/page.tsx)
- [app/[locale]/privacy/page.tsx](/Users/zhoushen/Documents/SI-TECH-Marketing/sitech-intl-website-v2/app/[locale]/privacy/page.tsx)
- [app/[locale]/thank-you/page.tsx](/Users/zhoushen/Documents/SI-TECH-Marketing/sitech-intl-website-v2/app/[locale]/thank-you/page.tsx)

### 2. `[locale]` 是中英文切换

你会看到很多路径里有一个 `[locale]`。

这个意思是：

- `en` 代表英文页面
- `zh` 代表中文页面

所以同一个页面会自动有两套地址，例如：

- `/en/solutions`
- `/zh/solutions`

语言切换相关的基础逻辑在：

- [app/[locale]/layout.tsx](/Users/zhoushen/Documents/SI-TECH-Marketing/sitech-intl-website-v2/app/[locale]/layout.tsx)
- [lib/site.ts](/Users/zhoushen/Documents/SI-TECH-Marketing/sitech-intl-website-v2/lib/site.ts)

你可以把它理解成：

- `layout.tsx` 负责把页头和页脚包在所有页面外面
- `lib/site.ts` 负责判断语言、拼接对应链接

---

## 三、页面里的公共模块在哪

### 1. `components/` 是页面模块仓库

这里放的是“页面积木”。

意思是：

- 页头是一个模块
- 页脚是一个模块
- 联系表单是一个模块
- 故事展开区也是一个模块

重要文件：

- [components/site-header.tsx](/Users/zhoushen/Documents/SI-TECH-Marketing/sitech-intl-website-v2/components/site-header.tsx)
- [components/site-footer.tsx](/Users/zhoushen/Documents/SI-TECH-Marketing/sitech-intl-website-v2/components/site-footer.tsx)
- [components/page-sections.tsx](/Users/zhoushen/Documents/SI-TECH-Marketing/sitech-intl-website-v2/components/page-sections.tsx)
- [components/contact-form.tsx](/Users/zhoushen/Documents/SI-TECH-Marketing/sitech-intl-website-v2/components/contact-form.tsx)
- [components/story-accordion.tsx](/Users/zhoushen/Documents/SI-TECH-Marketing/sitech-intl-website-v2/components/story-accordion.tsx)

### 2. 各模块作用

#### `site-header.tsx`

负责：

- 顶部导航
- logo 显示
- 中英文切换
- Contact / Talk to Us 按钮
- 手机端菜单展开

如果以后你想改：

- 导航样式
- 顶部按钮文字
- logo 在顶部的显示方式

一般会在这个文件里改。

#### `site-footer.tsx`

负责：

- 页脚品牌信息
- 联系方式
- 底部导航
- Privacy / Contact 链接

如果以后你想改页脚的联系方式展示方式，主要看这个文件。

#### `page-sections.tsx`

这是首页最核心的结构文件之一。

它里面负责：

- 首页 hero 大图区域
- 滚动信息带
- 首页大段式图文区
- 首页 CTA

如果以后觉得首页结构要大改，这个文件最重要。

#### `contact-form.tsx`

这个文件只负责“用户在页面上看到的表单和提交流程”。

它控制：

- 表单字段显示
- 用户输入
- 点击提交
- 成功后跳转 Thank You 页面

它不直接负责发邮件，也不直接负责进 HubSpot。

真正发到后台，是通过调用 `/api/contact` 完成的。

#### `story-accordion.tsx`

这个文件负责 Stories 页的“点击展开故事”效果。

也就是：

- 默认展开一个故事
- 点击别的故事时切换展开
- 展开后显示图片、问题、做法、结果

---

## 四、文案都放在哪里

### `content/siteContent.ts`

这是整个网站最重要的“内容总表”。

文件位置：

- [content/siteContent.ts](/Users/zhoushen/Documents/SI-TECH-Marketing/sitech-intl-website-v2/content/siteContent.ts)

你可以把它理解成：

- 网站的“总文案仓库”
- 中英文都放在这里
- 页面标题、段落、按钮文字、联系方式、故事内容，很多都在这里集中管理

这是目前最适合非技术人员改内容的地方。

如果你以后想改：

- 首页标题
- Solutions 的文字
- About 的介绍
- Contact 页的字段文案
- Thank You 页文字
- Privacy 页文字

第一优先去看这个文件。

### 为什么把文案集中在这里

好处是：

1. 不需要在很多页面文件里到处找文字
2. 中英文不会分散丢失
3. 后续改品牌口径会快很多

---

## 五、图片、logo、静态资源在哪

### 1. `public/` 文件夹

这里面放的是网站直接读取的图片资源。

当前主要目录有：

- `public/brand/`
- `public/images/hero/`
- `public/images/solutions/`
- `public/images/stories/`
- `public/images/about/`

### 2. 当前 logo 在哪里

你放进来的 logo 现在已经接入网站，文件在：

- [public/brand/logo-symbol.png](/Users/zhoushen/Documents/SI-TECH-Marketing/sitech-intl-website-v2/public/brand/logo-symbol.png)

浏览器标签图标也同步成了：

- [app/icon.png](/Users/zhoushen/Documents/SI-TECH-Marketing/sitech-intl-website-v2/app/icon.png)

### 3. 如果以后想换图片

最常见做法：

1. 先把新图放进 `public/images/...`
2. 再去 [content/siteContent.ts](/Users/zhoushen/Documents/SI-TECH-Marketing/sitech-intl-website-v2/content/siteContent.ts) 或某个页面文件改图片路径

例如当前很多图片路径长这样：

- `/images/hero/ai-operations.webp`
- `/images/solutions/teamshub-plan.png`

如果你换成别的图，只要改成新的路径即可。

---

## 六、表单提交后发生了什么

这是很多人最关心的部分。

你可以把整个流程理解成：

1. 用户在 Contact 页面填写表单
2. 前端把内容发到网站后台接口
3. 后台先检查字段是否完整
4. 后台尝试把数据送进 HubSpot
5. 后台尝试发邮件到 `info@sitech-intl.com`
6. 后台再自动给客户发确认邮件
7. 用户跳到 Thank You 页面

### 1. 前端表单入口

文件：

- [components/contact-form.tsx](/Users/zhoushen/Documents/SI-TECH-Marketing/sitech-intl-website-v2/components/contact-form.tsx)

这个文件负责：

- 收集用户输入
- 发送到 `/api/contact`
- 成功后跳转 `/thank-you`

### 2. 后端接口入口

文件：

- [app/api/contact/route.ts](/Users/zhoushen/Documents/SI-TECH-Marketing/sitech-intl-website-v2/app/api/contact/route.ts)

这是整条线索逻辑的核心入口。

它做了这些事：

- 限流：防止同一来源短时间狂刷表单
- 校验：看字段是否符合要求
- honeypot：做基础防垃圾提交
- 调用 HubSpot
- 调用 Gmail 发邮件
- 返回成功或失败结果

### 3. HubSpot 在哪里接的

文件：

- [lib/hubspot.ts](/Users/zhoushen/Documents/SI-TECH-Marketing/sitech-intl-website-v2/lib/hubspot.ts)

这个文件负责：

- 读取 HubSpot 的环境变量
- 优先尝试提交到 HubSpot Form
- 如果 Form 没配好，就退回到创建 Contact

你可以这样理解：

- 如果 HubSpot 表单已经创建好，就走更完整的表单提交模式
- 如果还没有，也至少能把联系人推进入库

### 4. Gmail 在哪里接的

文件：

- [lib/mailer.ts](/Users/zhoushen/Documents/SI-TECH-Marketing/sitech-intl-website-v2/lib/mailer.ts)

这个文件负责：

- 用 Gmail OAuth2 创建邮件发送连接
- 发内部通知邮件到 `info@sitech-intl.com`
- 发客户确认邮件给提交者

也就是说：

- 一封发给你们内部
- 一封发给客户

### 5. 表单校验在哪里

文件：

- [lib/validation.ts](/Users/zhoushen/Documents/SI-TECH-Marketing/sitech-intl-website-v2/lib/validation.ts)

这个文件负责：

- 定义哪些字段必填
- 邮箱格式怎么检查
- 文字长度是否合理
- 用户姓名怎么拆成 first name / last name

如果以后你想加字段、删字段，这个文件通常要一起改。

---

## 七、环境变量是什么意思

项目里有一部分信息不能直接写死在代码里，比如：

- Gmail 凭证
- HubSpot token

这些都应该放在“环境变量”里。

具体说明已经写在：

- [README.md](/Users/zhoushen/Documents/SI-TECH-Marketing/sitech-intl-website-v2/README.md#L56)

目前主要分两类：

### Gmail 相关

- `GMAIL_SENDER`
- `GOOGLE_CLIENT_ID`
- `GOOGLE_CLIENT_SECRET`
- `GOOGLE_REFRESH_TOKEN`
- `CONTACT_RECIPIENT`

### HubSpot 相关

- `HUBSPOT_ACCESS_TOKEN`
- `HUBSPOT_FORM_PORTAL_ID`
- `HUBSPOT_FORM_ID`
- `HUBSPOT_FIELD_INTERESTED_IN`
- `HUBSPOT_FIELD_MESSAGE`

如果这些没配：

- 网站页面本身仍然可以打开
- 但表单提交进 CRM / 发邮件不会完整工作

---

## 八、品牌和项目文档分别有什么用

### `README.md`

文件：

- [README.md](/Users/zhoushen/Documents/SI-TECH-Marketing/sitech-intl-website-v2/README.md)

它主要讲：

- 这个项目是什么
- 网站定位是什么
- 技术栈是什么
- 表单线索怎么走
- 环境变量需要哪些

### `PRD.md`

文件：

- [PRD.md](/Users/zhoushen/Documents/SI-TECH-Marketing/sitech-intl-website-v2/PRD.md)

它主要讲：

- 这个网站最初的产品需求
- 页面目标
- 结构
- 文案要求

### `TASKS.md`

文件：

- [TASKS.md](/Users/zhoushen/Documents/SI-TECH-Marketing/sitech-intl-website-v2/TASKS.md)

它主要讲：

- 已经做了什么
- 还在进行中什么
- 下一步推荐做什么

### `STYLEGUIDE.md`

文件：

- [STYLEGUIDE.md](/Users/zhoushen/Documents/SI-TECH-Marketing/sitech-intl-website-v2/STYLEGUIDE.md)

它主要讲：

- 网站应该用什么语气
- 避免什么表达
- 视觉应该遵循什么风格

### `CODE_EXPLANATION.md`

也就是你现在看到的这个文件。

它的作用是：

- 让不懂代码的人也能知道“去哪里改什么”

---

## 九、如果以后你想修改，最常见的入口

### 1. 改首页 / 改大部分文案

先看：

- [content/siteContent.ts](/Users/zhoushen/Documents/SI-TECH-Marketing/sitech-intl-website-v2/content/siteContent.ts)

### 2. 改 logo

先看：

- [public/brand/logo-symbol.png](/Users/zhoushen/Documents/SI-TECH-Marketing/sitech-intl-website-v2/public/brand/logo-symbol.png)
- [app/icon.png](/Users/zhoushen/Documents/SI-TECH-Marketing/sitech-intl-website-v2/app/icon.png)

### 3. 改顶部导航

先看：

- [components/site-header.tsx](/Users/zhoushen/Documents/SI-TECH-Marketing/sitech-intl-website-v2/components/site-header.tsx)

### 4. 改页脚联系方式

先看：

- [content/siteContent.ts](/Users/zhoushen/Documents/SI-TECH-Marketing/sitech-intl-website-v2/content/siteContent.ts)
- [components/site-footer.tsx](/Users/zhoushen/Documents/SI-TECH-Marketing/sitech-intl-website-v2/components/site-footer.tsx)

### 5. 改联系表单字段

需要同时看：

- [components/contact-form.tsx](/Users/zhoushen/Documents/SI-TECH-Marketing/sitech-intl-website-v2/components/contact-form.tsx)
- [lib/validation.ts](/Users/zhoushen/Documents/SI-TECH-Marketing/sitech-intl-website-v2/lib/validation.ts)
- [app/api/contact/route.ts](/Users/zhoushen/Documents/SI-TECH-Marketing/sitech-intl-website-v2/app/api/contact/route.ts)

### 6. 改 HubSpot 或 Gmail 接入

先看：

- [lib/hubspot.ts](/Users/zhoushen/Documents/SI-TECH-Marketing/sitech-intl-website-v2/lib/hubspot.ts)
- [lib/mailer.ts](/Users/zhoushen/Documents/SI-TECH-Marketing/sitech-intl-website-v2/lib/mailer.ts)

### 7. 改某个页面布局

看对应的 page 文件：

- `Home` 看 [app/[locale]/page.tsx](/Users/zhoushen/Documents/SI-TECH-Marketing/sitech-intl-website-v2/app/[locale]/page.tsx) 和 [components/page-sections.tsx](/Users/zhoushen/Documents/SI-TECH-Marketing/sitech-intl-website-v2/components/page-sections.tsx)
- `Solutions` 看 [app/[locale]/solutions/page.tsx](/Users/zhoushen/Documents/SI-TECH-Marketing/sitech-intl-website-v2/app/[locale]/solutions/page.tsx)
- `Stories` 看 [app/[locale]/stories/page.tsx](/Users/zhoushen/Documents/SI-TECH-Marketing/sitech-intl-website-v2/app/[locale]/stories/page.tsx) 和 [components/story-accordion.tsx](/Users/zhoushen/Documents/SI-TECH-Marketing/sitech-intl-website-v2/components/story-accordion.tsx)

---

## 十、如果把这个项目比作一家公司的网站团队

你可以这么理解：

- `content/siteContent.ts`
  角色：文案总控和品牌信息表

- `components/`
  角色：设计与前端模块团队

- `app/[locale]/*.tsx`
  角色：每个页面负责人

- `app/api/contact/route.ts`
  角色：销售线索接待前台

- `lib/hubspot.ts`
  角色：CRM 对接负责人

- `lib/mailer.ts`
  角色：邮件通知负责人

- `public/`
  角色：素材库

---

## 十一、当前这套代码已经能做什么

目前这套代码已经支持：

- 中英文双语官网
- 正式 logo 接入
- 首页、Solutions、Partnership、Stories、About、Contact
- 两个解决方案详情页
- Stories 图片展开
- Thank You 页面
- Privacy 页面
- 联系表单
- 基础防垃圾和限流
- HubSpot 接口预留并已接好代码
- Gmail 内部通知和客户确认邮件代码

---

## 十二、你最需要记住的三个文件

如果你不想记太多，只记这三个最重要的：

1. [content/siteContent.ts](/Users/zhoushen/Documents/SI-TECH-Marketing/sitech-intl-website-v2/content/siteContent.ts)
   这里改大多数文案和品牌内容

2. [components/contact-form.tsx](/Users/zhoushen/Documents/SI-TECH-Marketing/sitech-intl-website-v2/components/contact-form.tsx)
   这里看表单长什么样

3. [app/api/contact/route.ts](/Users/zhoushen/Documents/SI-TECH-Marketing/sitech-intl-website-v2/app/api/contact/route.ts)
   这里看线索提交后去了哪里

---

## 十三、最后一句话总结

这套代码不是一堆分散页面，而是一套比较清晰的结构：

- `content` 管内容
- `components` 管页面模块
- `app` 管页面和接口入口
- `lib` 管规则、CRM 和邮件逻辑
- `public` 管图片和 logo

如果你愿意，我下一步还可以继续帮你补一份更实用的文档：

- `NON_TECH_UPDATE_GUIDE.md`

它会专门写成“以后如果你自己要改文案、换图片、换联系方式、换 logo、换 HubSpot 配置，逐步怎么操作”的手册。  
这会比当前这份“代码解释”更偏操作说明。  
