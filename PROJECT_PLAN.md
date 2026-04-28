# Etsy Profit AI Toolkit 项目计划书

## 1. 项目定位

项目名称：Etsy Profit AI Toolkit

项目目标：做一个面向 Etsy 卖家的轻量 AI 工具站，帮助用户快速计算产品利润、优化 Listing 文案、规划 SEO 关键词，并通过免费工具吸引流量，后续转化为付费用户。

第一阶段不做复杂系统，先用静态页面上线测试市场。重点不是一次性做完整产品，而是验证用户是否愿意访问、使用、留邮箱、点击付费。

核心用户：

- Etsy 手工品卖家
- Etsy 数字产品卖家
- Print on Demand 卖家
- 刚开始做 Etsy 的新手
- 需要优化标题、标签、描述和利润的跨境电商用户

核心痛点：

- 不清楚 Etsy 费用、成本和利润
- 不知道产品应该如何定价
- Listing 标题、描述、标签写得慢
- 不知道如何选关键词
- 不确定产品是否值得上架

核心卖点：

- 免费计算 Etsy 产品利润
- 快速生成 Listing 标题、描述、标签
- 给出 SEO 优化建议
- 帮用户判断产品是否有利润空间
- 后续可升级为会员或积分制工具

## 2. 第一阶段 MVP 范围

第一阶段目标：上线一个可访问、可测试、可收集反馈的静态网站。

已完成基础内容：

- 首页
- Etsy 利润计算器
- AI Listing Generator 原型界面
- SEO 页面规划展示
- 联盟推荐位
- 收费方案区块
- 基础交互脚本

第一阶段暂不做：

- 用户登录
- 数据库
- 真实 AI 接口
- 在线付款
- 会员系统
- 积分扣费
- 生成记录保存
- 后台管理系统

第一阶段要测试的结果：

- 用户是否愿意打开网站
- 用户是否愿意使用利润计算器
- 用户是否对 AI Listing Generator 感兴趣
- 用户是否愿意留下邮箱
- 用户是否点击付费按钮
- 哪个功能最吸引用户

## 3. 网站页面设计方案

### 3.1 首页结构

首页应该直接展示工具，不做复杂品牌故事。

建议结构：

1. 顶部导航
   - Logo / 项目名
   - Profit Calculator
   - Listing Generator
   - SEO Tools
   - Pricing

2. 首屏区域
   - 主标题：Etsy Profit Calculator & AI Listing Toolkit
   - 副标题：帮助 Etsy 卖家计算利润、优化 Listing、提升产品上架效率
   - 主按钮：Start Calculating
   - 次按钮：Generate Listing

3. 利润计算器
   - 售价
   - 制作成本
   - 运费
   - 包装成本
   - Etsy 手续费
   - 广告成本
   - 输出：净利润、利润率、盈亏平衡价、建议售价

4. AI Listing Generator 原型
   - 产品名称
   - 产品类型
   - 风格
   - 目标客户
   - 输出：标题、描述、标签、关键词建议

5. SEO 工具区
   - Keyword Ideas
   - Tag Suggestions
   - Title Optimizer
   - Description Builder

6. 收费方案区
   - Free
   - Pro
   - Seller Pack

7. 邮箱收集区
   - 输入邮箱
   - 按钮：Get Early Access
   - 文案：Join the early seller list and get launch discount.

8. 页脚
   - About
   - Contact
   - Privacy Policy
   - Terms

### 3.2 视觉方向

设计风格：

- 简洁、专业、偏 SaaS 工具
- 不做太花的营销页
- 重点突出工具输入框和计算结果
- 颜色可以用白色、深灰、绿色、蓝色作为主视觉
- 页面要适合 Etsy 卖家，不要看起来像纯技术产品

交互原则：

- 首页打开后马上能用工具
- 计算结果要醒目
- 付费按钮可以先跳到等待名单
- 移动端也要能正常输入和查看结果

## 4. 技术路线

### 4.1 当前阶段

当前项目是静态网站，文件包括：

- `index.html`
- `styles.css`
- `script.js`
- `README.md`
- `PROJECT_PLAN.md`

本地预览方式：

```bash
cd /Users/sanji/Desktop/etsy-profit-ai-toolkit
npm run dev
```

如果没有 npm 脚本，也可以用简单静态服务：

```bash
cd /Users/sanji/Desktop/etsy-profit-ai-toolkit
python3 -m http.server 5173
```

访问：

```text
http://localhost:5173
```

### 4.2 上线方式

推荐优先级：

1. Vercel
2. Cloudflare Pages
3. Netlify

第一版建议用 Vercel，因为部署简单，适合静态页面和后续 Next.js 升级。

上线步骤：

1. 在 GitHub 新建仓库
2. 把项目文件上传到 GitHub
3. 登录 Vercel
4. 导入 GitHub 仓库
5. Framework 选择 Other 或 Static
6. Deploy
7. 绑定域名
8. 开启 HTTPS

### 4.3 后续正式产品技术栈

推荐组合：

- 前端：Next.js
- 样式：Tailwind CSS 或普通 CSS
- 数据库：Supabase 或 Neon
- 登录：Supabase Auth / Clerk
- AI 接口：OpenAI / OpenRouter / Claude / Gemini
- 支付：Lemon Squeezy / Paddle / PayPal
- 文件存储：Supabase Storage / Cloudflare R2
- 部署：Vercel / Cloudflare Pages

第一版正式产品建议：

- Next.js + Supabase + OpenAI/OpenRouter + Lemon Squeezy

## 5. 收款方案

### 5.1 第一阶段测试收款

第一阶段不建议马上接复杂支付系统，可以先测试购买意向。

可选方式：

1. 等待名单
   - 用户输入邮箱
   - 记录感兴趣用户
   - 后续邮件通知早鸟价

2. 预售按钮
   - 按钮写 Get Early Access
   - 跳转到 Tally / Google Form / Airtable 表单
   - 收集邮箱、店铺类型、愿意支付的价格

3. 简单付款链接
   - 使用 Lemon Squeezy payment link
   - 或 PayPal payment link
   - 用户付款后人工开通

### 5.2 正式收款方案

推荐优先选择 Lemon Squeezy 或 Paddle。

原因：

- 适合数字产品和 SaaS
- 可以处理订阅
- 可以处理部分税务问题
- 比自己接 Stripe 税务压力小

价格方案建议：

Free：

- 免费利润计算器
- 每天 3 次 Listing 生成
- 基础关键词建议

Pro：

- 9 美元/月
- 每月 100 次 AI 生成
- Listing 标题、描述、标签生成
- 利润报告
- SEO 建议

Seller Pack：

- 19 美元/月
- 每月 500 次 AI 生成
- 批量 Listing 生成
- 产品定价建议
- 关键词组合
- 导出 CSV

一次性积分包：

- 5 美元：50 credits
- 10 美元：120 credits
- 29 美元：400 credits

建议先测试订阅制，再测试积分包。

## 6. 测试计划

### 6.1 流量测试

测试渠道：

- Reddit：Etsy、Print on Demand、Side Hustle 相关社区
- Facebook Group：Etsy seller 群组
- TikTok / YouTube Shorts：展示利润计算过程
- Pinterest：Etsy seller checklist、pricing calculator
- Google SEO：Etsy profit calculator、Etsy fee calculator、Etsy listing generator
- 小额广告：Google Ads 或 Reddit Ads

测试内容：

- 页面标题是否吸引点击
- 用户是否停留超过 30 秒
- 用户是否使用计算器
- 用户是否点击 Generate Listing
- 用户是否留下邮箱
- 用户是否点击 Pricing

### 6.2 数据指标

第一阶段重点看：

- 访问量
- 工具使用次数
- 邮箱提交率
- 付费按钮点击率
- 页面停留时间
- 移动端访问比例

判断标准：

- 邮箱转化率超过 3%，说明方向有测试价值
- 付费按钮点击率超过 1%，说明可以继续开发
- 工具使用率超过 20%，说明工具入口有效
- 如果访问量有但没人使用工具，需要调整首屏和工具位置
- 如果有人使用但没人留邮箱，需要调整付费点和引导文案

### 6.3 A/B 测试方向

可以测试不同标题：

- Etsy Profit Calculator & AI Listing Toolkit
- Calculate Etsy Profit Before You List
- AI Listing Generator for Etsy Sellers
- Stop Guessing Your Etsy Profit

可以测试不同按钮：

- Start Free
- Calculate Profit
- Generate My Listing
- Get Early Access

可以测试不同价格：

- 9 美元/月
- 12 美元/月
- 19 美元/月
- 29 美元一次性积分包

## 7. 后续开发步骤

### 第 1 步：完善静态页面

任务：

- 增加邮箱收集模块
- 增加 Get Early Access 按钮
- 增加 Privacy Policy 和 Terms 简单页面
- 优化移动端样式
- 增加基础 SEO meta

输出：

- 可上线的静态测试版本

### 第 2 步：上线到 Vercel

任务：

- 新建 GitHub 仓库
- 上传代码
- 接入 Vercel
- 设置域名
- 测试 HTTPS

输出：

- 一个公开访问的网址

### 第 3 步：接入数据统计

任务：

- 接入 Google Analytics 或 Plausible
- 记录按钮点击事件
- 记录计算器使用事件
- 记录邮箱提交事件

输出：

- 可以看访问和转化数据

### 第 4 步：接入邮箱收集

任务：

- 使用 Tally / Airtable / Supabase 保存邮箱
- 表单字段包括邮箱、店铺类型、月销售额、最想要的功能

输出：

- 用户线索表

### 第 5 步：接入真实 AI 生成

任务：

- 后端调用 OpenAI 或 OpenRouter
- 用户输入产品信息
- 返回标题、描述、标签、关键词
- 设置每日免费次数

输出：

- 可真实生成 Listing 的工具

### 第 6 步：接入登录和数据库

任务：

- Supabase 建表
- 用户注册登录
- 保存生成记录
- 保存用户 credits

输出：

- 基础 SaaS 产品结构

### 第 7 步：接入收款

任务：

- 创建 Lemon Squeezy / Paddle 产品
- 设置订阅或积分包
- 配置 webhook
- 支付成功后给用户增加会员权限或 credits

输出：

- 可以自动收款和开通权益

### 第 8 步：持续优化

任务：

- 根据数据调整页面
- 增加 SEO 内容页
- 增加更多工具
- 增加导出 CSV
- 增加批量生成

输出：

- 从测试站升级为正式产品

## 8. Codex 后续执行清单

后面可以让 Codex 按下面顺序执行：

1. 检查当前项目代码结构
2. 增加邮箱收集模块
3. 增加等待名单表单
4. 增加 Privacy Policy 页面
5. 增加 Terms 页面
6. 优化移动端样式
7. 增加 SEO meta 信息
8. 增加按钮点击埋点
9. 准备 Vercel 部署配置
10. 创建 GitHub 上传说明
11. 升级为 Next.js 项目
12. 接入 Supabase
13. 接入 OpenAI/OpenRouter API
14. 接入 Lemon Squeezy / Paddle
15. 做正式会员和积分系统

建议下一次让 Codex 先执行：

```text
请检查 /Users/sanji/Desktop/etsy-profit-ai-toolkit 项目，然后按照 PROJECT_PLAN.md 的第 1 步，增加邮箱收集模块、Privacy Policy、Terms、SEO meta，并优化移动端。
```

## 9. 风险和注意事项

主要风险：

- 用户觉得只是普通计算器，不愿意付费
- AI 生成结果质量不稳定
- Etsy 官方费用规则变化
- 支付和税务处理复杂
- 低价用户过多导致 AI 成本高
- SEO 起量慢

控制方法：

- 先测试邮箱和点击，不急着开发完整系统
- 免费额度要有限制
- AI 生成结果要针对 Etsy 场景优化
- 收费方案要覆盖 AI 成本
- 支付优先用 Lemon Squeezy / Paddle
- 尽早收集真实卖家的反馈

## 10. 当前建议

当前最适合的下一步：

1. 先把静态网站完善到可以公开上线
2. 加邮箱收集和等待名单
3. 上线到 Vercel
4. 用小流量测试 7 到 14 天
5. 如果有人留邮箱或点击付费，再接 AI 和收款

不要一开始就买云服务器，也不要一开始就做复杂后台。这个项目最重要的是先验证市场需求。
