# image_creator - 代码截图卡片生成器

Next.js(App Router) + React + TypeScript + Jotai + Tailwind CSS + Radix UI + Shiki

<directory>
api/ - 根级服务端接口与外部 API 聚合（2 文件: ai.ts, store.ts）
app/ - 应用主模块，承载页面、业务组件、状态与 App Router 路由（9 子目录: api, assets, components, lib, store, util...）
components/ - 跨 app 复用的 UI 基础组件层（16 文件: button/input/select/tooltip 等）
utils/ - 根级通用工具与 Hook（6 文件: cn/common/hotkeys 等）
public/ - 静态资源与图标素材
</directory>

<config>
package.json - 依赖、脚本、构建与开发命令入口
next.config.js - Next.js 构建、路由与运行时行为配置
tailwind.config.ts - Tailwind 主题、设计 token 与插件配置
tsconfig.json - TypeScript 编译边界与路径别名配置
eslint.config.mjs - 代码质量规则与静态检查配置
postcss.config.mjs - CSS 处理流水线配置
</config>

## 架构决策

- 单一职责: `app/store` 仅管状态，`app/components` 仅管展示与交互拼装。
- 依赖方向: 页面/组件 -> store/util -> 基础组件，禁止反向耦合。
- 文档同构: 任何结构变化必须同步更新 L1/L2/L3，拒绝孤立改动。

## 开发规范

- 新增业务文件必须包含 L3 头部契约: `[INPUT]/[OUTPUT]/[POS]/[PROTOCOL]`。
- 目录级文件增删、职责变化、接口变化必须同步更新对应目录 `CLAUDE.md`。
- 复杂逻辑优先消除分支，再增加抽象；超过三层缩进必须重构。

## 变更日志

- 2026-03-05: 引入 GEB 分形文档体系，补齐 L1/L2/L3 基础设施。

法则: 极简·稳定·导航·版本精确
