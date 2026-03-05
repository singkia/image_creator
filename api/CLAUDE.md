# api/

> L2 | 父级: /CLAUDE.md

成员清单
ai.ts: AI 模型列表与可用能力拉取接口，封装外部模型元数据请求
store.ts: 远端存储读写接口，处理代码片段保存与读取

架构说明

- 职责边界: 仅处理 API 层输入输出与上游服务对接，不承载 UI/状态逻辑。
- 依赖规则: 可依赖 `utils/`，禁止依赖 `app/components`。

[PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
