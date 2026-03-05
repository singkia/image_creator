# app/api/

> L2 | 父级: /app/CLAUDE.md

成员清单
config/route.ts: 配置读取接口，向客户端暴露运行时配置
shorten-url/route.ts: 短链生成接口，封装 URL 缩短请求流程

架构说明

- 只处理 App Router 路由协议与 I/O 校验，禁止下沉 UI 逻辑。

[PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
