# Vercel Free Plan 联系表单配置

## 推荐方案

使用 Google Sheets 保存网站提交记录，使用 Gmail 发送内部通知和访客确认邮件。

Vercel Free Plan 的函数文件系统不是长期数据库，不适合保存 CSV。Google Sheets 作为轻量 CRM 表格，可以直接查看每一条提交记录，也不需要额外购买数据库服务。

## 1. 创建提交表格

1. 创建一个 Google Sheet。
2. 新建工作表，名称设为 `Website Leads`。
3. 复制 Google Sheet URL 中的表格 ID。

例如：

`https://docs.google.com/spreadsheets/d/表格ID/edit`

只需要保存“表格ID”这一段。

## 2. 创建 Google Service Account

在 Google Cloud Console 中：

1. 创建或选择一个项目。
2. 启用 Google Sheets API。
3. 创建 Service Account。
4. 创建 JSON Key 并下载。
5. 将 Service Account 的邮箱添加到目标 Google Sheet，并赋予 Editor 权限。

JSON Key 中的 `client_email` 对应 `GOOGLE_SERVICE_ACCOUNT_EMAIL`，`private_key` 对应 `GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY`。

## 3. 配置 Vercel Environment Variables

在 Vercel 项目 Settings → Environment Variables 中，为 Production 添加以下变量：

```text
LEAD_STORAGE_PROVIDER=google_sheets
GOOGLE_SHEETS_LEAD_SHEET_ID=你的GoogleSheet表格ID
GOOGLE_SHEETS_LEAD_TAB=Website Leads
GOOGLE_SERVICE_ACCOUNT_EMAIL=service-account@your-project.iam.gserviceaccount.com
GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY=-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n
```

`GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY` 必须保留 `\n` 换行字符。不要把 JSON Key 文件提交到 Git，也不要放入 `NEXT_PUBLIC_` 变量。

## 4. 配置邮件通知

如果希望每次提交同时发到邮箱，再配置：

```text
CONTACT_RECIPIENT=info@sitech-intl.com,zhous@sitech-intl.com
GMAIL_SENDER=info@sitech-intl.com
GOOGLE_CLIENT_ID=你的Google OAuth Client ID
GOOGLE_CLIENT_SECRET=你的Google OAuth Client Secret
GOOGLE_REFRESH_TOKEN=Gmail OAuth Refresh Token
```

邮件发送账户需要拥有 Gmail API 发送权限。表格保存和邮件通知是两个独立通道；即使邮件失败，表格仍可以保存提交记录。

## 5. 部署后检查

提交一次测试表单，确认：

- Google Sheet 中新增一行；
- `Website Leads` 中包含姓名、邮箱、公司、电话、行业、来源和留言；
- 内部邮箱收到通知；
- 提交人收到确认邮件。

网站还保留了受保护的 CSV 导出接口：

```text
LEAD_EXPORT_TOKEN=一段随机长密码
```

如果需要使用 `/api/contact/export` 下载 CSV，再在 Vercel 添加这个变量。不要把 token 放在公开页面或前端代码中。
