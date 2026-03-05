# utils/

> L2 | 父级: /CLAUDE.md

成员清单
cn.ts: className 合并工具，统一条件样式拼接
common.ts: 全局常量与公共配置（如 BASE_URL）
getExtensionIdsFromString.ts: 扩展 ID 文本解析工具
sanitizePromptContent.tsx: Prompt 内容清洗与安全处理函数
useHotkeys.ts: 快捷键绑定 Hook
useSectionInViewObserver.tsx: 区域可见性观察 Hook

架构说明

- 工具层只做纯逻辑与可复用 Hook，不持有业务状态。
- 任何副作用必须显式封装在 Hook 内，纯函数保持可测试。

[PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
