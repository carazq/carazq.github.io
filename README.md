# carazhang Portfolio · 个人作品集网站

黑白极简编辑风单页作品集，纯 HTML/CSS/JS（GSAP + Lenis 走 CDN），打开 `index.html` 即可预览。

## 2026-08 更新

- 新增「小红书工具实验室」，展示 3 个已发布工具、对应小红书笔记与后台数据，累计下载 39K+
- DivaTI 网站项目补充 350K+ 访问与 180,337 结果 UV，避免和小红书工具区重复
- 网易游戏经历扩展为 4 个重点项目：AI 精灵、率土 AI 配将、AI 美术生图管线、暴雪 AI 客服
- 底部联系 CTA 改为个人特质：AI Builder、数据驱动、行动力、内容 Sense 与趋势/用户敏感度
- 新增社交分享卡片与 Sites 发布构建脚本

## 待补信息（TODO）

在 `index.html` 中搜索 `data-todo` 可定位占位：

| 占位 | 位置 | 要填的内容 |
|---|---|---|
| `data-todo="glam-link"` | 作品 01 Glam 行 | Glam demo 部署后的链接（填好后把 div 换成 a 并加 href） |
| `data-todo="xhs-link"` | 联系区小红书 | 小红书主页链接 |

其他可确认项：
- 联系邮箱目前是 chinnchang123@gmail.com；简历上是 caraisbg@163.com，如需替换全局搜索邮箱即可
- 经历栏时间段按 cara_resume_v6 推断（字节 2025.03–2025.09），如有出入直接改 `#experience` 区
- 樱花地图（03）尚未开发，状态 Coming Soon；Inner Cabinet（04）本地已有代码未部署，状态 In Development

## 项目本体位置（2026-07 盘点）

| 作品 | 本地路径 | 状态 |
|---|---|---|
| Glam AI 美妆 | `~/Desktop/glam-ai-makeup-studio-chinese-version`（Vite React） | 本地可跑（launch.json `glam-ai`，端口 3033），未部署 |
| DivaTI | `~/Desktop/divati/DivaTI`（静态 HTML） | 已上线 https://dvti.top |
| 樱花巡礼地图 | 需求文档 `~/Desktop/sakura-claudecode-prompt.md` | 尚未开发 |
| Inner Cabinet | `~/Desktop/inner-cabinet`（Vite React） | 本地可跑（launch.json `inner-cabinet`，端口 5174），未部署 |

## 设计与动效说明

- 视觉：米白 `#FAFAF8` 底 + 黑字 + 灰 `#8C8C8C`，Outfit（英文）+ 思源黑体（中文），列表式编辑排版
- 栏目：作品（4 件）/ 经历（公司 + 方向简写）/ 关于 / 联系
- 过渡动效（GSAP + ScrollTrigger + Lenis）：
  - 开场：黑色幕布 loader，"carazhang" 逐字升起后整幕上移揭开页面，页头与首屏标题逐字入场
  - 滚动：标题遮罩行揭示、分隔线从左向右生长、次要信息淡入上移
  - 微交互：导航/链接 hover 文字上下滚动替换（中→英）、邮箱双层下划线扫过、行 hover 位移+箭头、跑马灯、页头实时时钟+状态灯
- 移动端 ≤900px 降级为单列；支持 `prefers-reduced-motion`（跳过 loader 与动画）

## 构建与部署

- 本地预览：`npm run dev`
- 构建：`npm run build`
