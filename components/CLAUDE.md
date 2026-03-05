# components/

> L2 | 父级: /CLAUDE.md

成员清单
ai-extension.tsx: AI 扩展入口组件，承载扩展能力展示
button.tsx: 通用按钮组件，封装尺寸/语义变体
button-group.tsx: 按钮组容器组件，统一组内布局与间距
combobox.tsx: 可搜索选择框组件，组合弹层与列表交互
dialog.tsx: 模态对话框组件，封装打开/关闭与焦点控制
dropdown-menu.tsx: 下拉菜单组件，提供分组与选择项交互
input.tsx: 文本输入组件，封装输入基态样式
kbd.tsx: 键位提示组件，用于快捷键展示
logo.tsx: 品牌 Logo 展示组件
scroll-area.tsx: 滚动容器组件，封装滚动条样式
select.tsx: 选择器组件，提供单选下拉能力
social-footer.tsx: 社交链接页脚组件
switch.tsx: 开关组件，封装布尔状态切换
toast.tsx: 全局消息组件，封装提示通知分发
tooltip.tsx: 提示浮层组件，提供 hover/focus 提示
unique-svg.tsx: SVG 去重与标识组件

架构说明

- 这是设计系统基础层，关注可复用与可组合，不耦合业务状态。
- 所有组件优先暴露稳定 props 接口，不泄漏内部实现。

[PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
