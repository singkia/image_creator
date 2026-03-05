# app/components/

> L2 | 父级: /app/CLAUDE.md

成员清单
BackgroundControl.tsx: 背景设置控制面板
ControlContainer.tsx: 控件容器组件，组织分区布局
Controls.tsx: 控制区主组件，编排全部编辑控件
DarkModeControl.tsx: 明暗模式切换控件
Editor.tsx: 代码输入编辑器组件
ExportButton.tsx: 图片导出操作按钮
FlashMessage.tsx: 闪现提示组件
FormatCodeButton.tsx: 代码格式化按钮
Frame.tsx: 预览卡片框架组件
Header.tsx: 编辑器页头组件
HighlightedCode.tsx: 代码高亮渲染组件
InfoDialog.tsx: 信息说明弹窗组件
LanguageControl.tsx: 语言选择控件
LineNumberControl.tsx: 行号开关控件
NoSSR.tsx: 客户端渲染守卫组件
PaddingControl.tsx: 内边距调节控件
ResizableFrame.tsx: 可缩放预览容器
ThemeControl.tsx: 主题选择控件
frames/: 各品牌主题 Frame 实现集合
layout.tsx: 组件子路由布局
page.tsx: 组件演示入口
ControlContainer.module.css: 控件容器样式
Controls.module.css: 控制面板样式
Editor.module.css: 编辑器样式
FlashMessage.module.css: 闪现提示样式
Frame.module.css: 预览框架样式
LanguageControl.module.css: 语言选择样式
PaddingControl.module.css: 间距控件样式
ResizableFrame.module.css: 缩放容器样式
ThemeControl.module.css: 主题控件样式
gemini-styles.css: Gemini 主题专用样式
og-image.png: 组件分享图资源

架构说明

- 组件分层: 控制面板组件负责输入，Frame 组件负责输出预览。
- 样式文件仅服务同名组件，避免跨文件隐式耦合。

[PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
