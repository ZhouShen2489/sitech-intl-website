# 新手指导

这份文件是给你看的入口文档。  
如果你后面只看一个文件，优先看这个。

## 1. 这个网站现在是什么结构

网站现在主要分成这些页面：

- `Home`：首页，先讲我们是谁、最强能力是什么
- `Products / Marketplace`：产品和合作产品
- `Solutions`：5 个重点解决方案
- `Partnership`：合作方式和未来更多合作机会入口
- `Stories`：案例
- `About`：公司背书
- `Contact`：联系入口

当前阶段，后续更多扩展先放到 `Partnership`，暂时不单独做 `Industries` 页面。

## 2. 以后如果想隐藏某个板块怎么办

目标是做到：

- 可以隐藏首页某个区块
- 可以隐藏某个 partnership 条目
- 可以隐藏某个故事、产品卡片
- 不需要删代码

后续操作原则：

- 优先改内容配置
- 不要直接删除页面组件
- 如果只是暂时不想展示，就改“可见性”

你可以把它理解为：

- `visible = true`：显示
- `visible = false`：隐藏

## 3. 以后如果想加新的合作内容怎么办

如果后面有新的合作方向，比如某个产品想在当地找合作伙伴，优先加到 `Partnership` 里。

推荐加的内容类型：

- 合作机会卡片
- 合作伙伴类型说明
- 产品合作入口
- 本地伙伴需要做什么
- 下一步如何联系

以后新增内容时，尽量按“条目”的方式加，不要每来一个合作方向就单独新做一整页。

## 4. PDF OCR 内容现在放在哪里

这次已经把扫描版 PDF 的 OCR 流程接进来了。

相关文件：

- 原始 OCR 中间稿：
  `content/pdf-ocr/sitech-manual-ocr.md`
- 结构化内容稿：
  `content/pdf-ocr/sitech-manual-structured.md`

你后面如果要补首页、About、Solutions、Partnership，可以优先从这两个文件里找内容。

## 5. 网站怎么发布

你不用先记很多技术词，只要先理解这 3 层：

1. 本地开发  
   先在电脑上改和看

2. Preview  
   改完后先看预览版，确认没问题

3. Production  
   最后才更新正式站

当前代码分支：

- `codex/preBuild`

后面更推荐的工作方式是：

- 新开一个短分支改内容
- 看 preview
- 确认后再合并

## 6. 域名和托管是什么关系

这个很重要，先用最简单的话说：

- `www.sitech-intl.com` 是域名
- `Vercel`、`Hostinger`、`AWS` 是托管平台

域名像门牌号，托管平台像房子。

很多时候你换“房子”，不需要换“门牌号”。  
实际操作里，通常只是改 DNS 指向。

也就是说：

- 域名可以继续保留原来的
- 网站可以搬到别的平台
- 改完 DNS 后，域名就会指向新网站

## 7. 现在托管怎么理解

当前决定是：

- 先用 `Vercel Hobby` 跑起来
- 这是试跑方案，不是长期最终方案
- 如果后面访问量更大、协作更多，或者要更稳妥正式，就升级到 `Vercel Pro`
- `Hostinger VPS` 仍然是一个可行的低成本备选，因为它可以放这种带表单的 Next.js 网站
- 旧 AWS 站先不要急着删，等新站验证通过再决定

### 为什么先这样做

因为你现在更希望先低成本上线、先跑起来。

但要记住一件事：

- `Vercel Hobby` 官方定位更偏个人 / 非商业试跑

所以我们现在把它当成：

- 先上线试运行
- 先改内容
- 先看效果

等后面访问量、正式合作、对外曝光更多时，再决定是否升级。

## 7.1 先用 Vercel Hobby 跑起来怎么做

你可以先把它理解成 4 步：

1. 把 GitHub 仓库连到 Vercel  
   在 Vercel 里导入这个仓库，创建一个新项目。

2. 让它先能正常 build  
   默认框架选 `Next.js`，Build Command 一般不用改。

3. 把环境变量补进去  
   重点是表单相关变量，比如：
   - `GMAIL_SENDER`
   - `GOOGLE_CLIENT_ID`
   - `GOOGLE_CLIENT_SECRET`
   - `GOOGLE_REFRESH_TOKEN`
   - `CONTACT_RECIPIENT`
   - `HUBSPOT_ACCESS_TOKEN`
   - `HUBSPOT_FORM_PORTAL_ID`
   - `HUBSPOT_FORM_ID`

4. 先用 Vercel 给的测试域名验证  
   先不要急着切 `www.sitech-intl.com`，先看：
   - 页面能不能打开
   - 中英文是否正常
   - 表单能不能提交
   - 是否能收到确认邮件

如果这 4 步都正常，再去接正式域名会更稳。

## 7.2 什么时候再接正式域名

建议等这几件事都确认后再切：

- 首页和关键页面内容已经改到你满意
- 表单可以正常提交
- 预览站没有明显 bug
- 你确认新站已经可以替代 AWS 旧站

到那时再把 `www.sitech-intl.com` 的 DNS 指向 Vercel。

简单理解就是：

- 先把“新房子”装修好
- 再把“门牌号”指过去

## 8. 你后面最常做的事

你后面最可能做的是这几件事：

- 看首页某个区块要不要显示
- 看某个合作方向要不要加进 Partnership
- 看某个产品卡片要不要上
- 看中英文内容是否都补齐
- 看正式站什么时候切换

如果你不确定，就先按这个顺序判断：

1. 是改内容，还是改结构
2. 是临时隐藏，还是永久删除
3. 是加到 Partnership，还是加到 Products / Stories
4. 是否要同步补英文

## 9. 你后面只需要记住的几个文件

- `BEGINNER_GUIDE.md`
- `PRD.md`
- `TASKS.md`
- `content/pdf-ocr/sitech-manual-structured.md`

如果你想看全局方向，看 `PRD.md`。  
如果你想看当前在做什么，看 `TASKS.md`。  
如果你想找 PDF 提炼出来的内容，看 `content/pdf-ocr/sitech-manual-structured.md`。
