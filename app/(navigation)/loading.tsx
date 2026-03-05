/**
 * [INPUT]: 依赖同模块与运行时基础能力
 * [OUTPUT]: 对外导出 default、Loading 等接口
 * [POS]: app/(navigation)/loading.tsx 在 app/(navigation) 中承担职责：UI 渲染层组件，组合状态与视图输出
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */
export default function Loading() {
  return (
    <div
      className="fixed top-[49px] w-[600px] h-[1px] z-50 -left-[200px]"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255,255,255,0.3), rgba(255, 255, 255, 0))`,
        animation: "flash 2s ease-in-out infinite",
      }}
    />
  );
}
