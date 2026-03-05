# app/util/

> L2 | 父级: /app/CLAUDE.md

成员清单
download.ts: 导出图片下载工具
formatCode.ts: 代码格式化工具
languages.ts: 语言元数据与高亮语言清单
theme-css-variables.ts: 主题 CSS 变量映射生成
useAudio.ts: 音频播放 Hook
useHotkeys.ts: 快捷键 Hook
useIsSafari.ts: Safari 环境检测 Hook
usePngClipboardSupported.ts: PNG 剪贴板能力检测 Hook

架构说明

- 工具与 Hook 分离: 纯函数放工具，副作用放 Hook。
- 保持可测性与可替换性，禁止与视图组件形成循环依赖。

[PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
