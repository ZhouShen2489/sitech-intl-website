# DNS 切换到 Vercel（简版）

## 结论

Netlify 不需要删除，可以保留项目和历史部署；只需要关闭 Netlify 自动部署或暂停构建。正式域名切换到 Vercel 后，同一个主机名不要同时指向 Netlify 和 Vercel。

## DNS 面板请设置

### 公司主站

| 类型 | 主机记录 | 记录值 |
| --- | --- | --- |
| A | `@` | `216.198.79.1` |
| CNAME | `www` | `bb4d7be285143ad0.vercel-dns-017.com.` |

### Telecom 子站

| 类型 | 主机记录 | 记录值 |
| --- | --- | --- |
| CNAME | `telecom` | `14ffbe1c92ad8015.vercel-dns-017.com.` |

以上记录以 Vercel 当前 Domains 页面为准。截图中 Vercel 已提示旧的 `76.76.21.21` 和旧 CNAME 仍可工作，但推荐使用上面的新记录。

## 操作顺序

1. 在 Vercel 主站项目添加 `sitech-intl.com` 和 `www.sitech-intl.com`。
2. 在 Vercel Telecom 项目添加 `telecom.sitech-intl.com`。
3. 在 DNS 面板填写上面的 A / CNAME 记录。
4. 删除同一主机记录下指向 Netlify 的旧记录。
5. 保留 MX、TXT、SPF、DKIM、DMARC 等邮箱和验证记录，不要删除。
6. 回到 Vercel Domains 页面点击 `Refresh` / `Verify`。

## Netlify

- 不删除 Netlify 项目。
- 关闭自动部署、暂停构建或取消 GitHub 自动连接即可。
- DNS 切换完成后，Netlify 保留作为历史记录或备用，不再承接正式域名访问。

## 验证地址

- https://sitech-intl.com
- https://www.sitech-intl.com
- https://telecom.sitech-intl.com

DNS 修改后通常几分钟开始生效，完全更新可能需要数小时。
