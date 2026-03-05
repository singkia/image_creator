# app/store/

> L2 | 父级: /app/CLAUDE.md

成员清单
code.ts: 代码内容与编辑状态原子
font.ts: 字体配置原子
image.ts: 图片导出相关状态原子
padding.ts: 间距配置原子
flash.ts: 闪现消息状态原子
themes.ts: 主题定义与主题相关原子
index.ts: store 聚合导出入口
FrameContextStore.tsx: Frame 上下文 Provider 与共享状态桥接

架构说明

- 状态原子按领域拆分，避免巨型全局 store。
- `index.ts` 只做导出聚合，不承载业务逻辑。

[PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
