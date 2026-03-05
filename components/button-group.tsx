/**
 * [INPUT]: 依赖同模块与运行时基础能力
 * [OUTPUT]: 对外导出 ButtonGroup 等接口
 * [POS]: components/button-group.tsx 在 components 中承担职责：UI 渲染层组件，组合状态与视图输出
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */
export function ButtonGroup({ children }: { children: React.ReactNode }) {
  return <span className="buttonGroup">{children}</span>;
}
