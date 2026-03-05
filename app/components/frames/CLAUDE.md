# app/components/frames/

> L2 | 父级: /app/components/CLAUDE.md

成员清单
BrowserbaseFrame.tsx: Browserbase 主题 Frame 组件
ClerkFrame.tsx: Clerk 主题 Frame 组件
CloudflareFrame.tsx: Cloudflare 主题 Frame 组件
DefaultFrame.tsx: 默认主题 Frame 组件
ElevenLabsFrame.tsx: ElevenLabs 主题 Frame 组件
FirecrawlFrame.tsx: Firecrawl 主题 Frame 组件
GeminiFrame.tsx: Gemini 主题 Frame 组件
MintlifyFrame.tsx: Mintlify 主题 Frame 组件
NuxtFrame.tsx: Nuxt 主题 Frame 组件
OpenAIFrame.tsx: OpenAI 主题 Frame 组件
PrismaFrame.tsx: Prisma 主题 Frame 组件
ResendFrame.tsx: Resend 主题 Frame 组件
StripeFrame.tsx: Stripe 主题 Frame 组件
SupabaseFrame.tsx: Supabase 主题 Frame 组件
TailwindFrame.tsx: Tailwind 主题 Frame 组件
TriggerdevFrame.tsx: Trigger.dev 主题 Frame 组件
VercelFrame.tsx: Vercel 主题 Frame 组件
WrappedFrame.tsx: Wrapped 主题 Frame 组件
BrowserbaseFrame.module.css: Browserbase Frame 样式
ClerkFrame.module.css: Clerk Frame 样式
CloudflareFrame.module.css: Cloudflare Frame 样式
DefaultFrame.module.css: 默认 Frame 样式
ElevenLabsFrame.module.css: ElevenLabs Frame 样式
FirecrawlFrame.module.css: Firecrawl Frame 样式
GeminiFrame.module.css: Gemini Frame 样式
MintlifyFrame.module.css: Mintlify Frame 样式
NuxtFrame.module.css: Nuxt Frame 样式
OpenAIFrame.module.css: OpenAI Frame 样式
PrismaFrame.module.css: Prisma Frame 样式
ResendFrame.module.css: Resend Frame 样式
StripeFrame.module.css: Stripe Frame 样式
SupabaseFrame.module.css: Supabase Frame 样式
TailwindFrame.module.css: Tailwind Frame 样式
TriggerdevFrame.module.css: Trigger.dev Frame 样式
VercelFrame.module.css: Vercel Frame 样式
WrappedFrame.module.css: Wrapped Frame 样式

架构说明

- 每个 Frame 对应一个品牌皮肤：结构保持一致，视觉差异由 CSS module 实现。
- 新增品牌主题时必须成对增加 `XFrame.tsx + XFrame.module.css`。

[PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
