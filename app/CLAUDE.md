# app/

> L2 | 父级: /CLAUDE.md

成员清单
(navigation)/: 导航相关分组路由与布局
api/: App Router 服务端路由
assets/: 页面与主题资源素材
components/: 编辑器业务组件与 Frame 体系
lib/: 业务库层（图片处理能力）
store/: 页面状态与原子定义
util/: 页面级工具函数与 Hooks
code.tsx: 编辑器主装配组件，组合 Frame/Controls
layout.tsx: 根布局，注入全局 Provider/元数据/埋点
log.tsx: 运行日志与观测挂载点
not-found.tsx: 404 页面
page.tsx: 首页入口与 SEO 元数据
globals.css: 全局样式入口
RaycastFlavor.tsx: Raycast 主题适配包装组件

架构说明

- `code.tsx` 作为页面组装器，不承载原子实现细节。
- 业务状态集中在 `store/`，视图逻辑集中在 `components/`。
- `api/` 负责边界 I/O，`util/` 负责局部复用逻辑。

[PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
