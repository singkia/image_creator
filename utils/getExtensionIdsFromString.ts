/**
 * [INPUT]: 依赖同模块与运行时基础能力
 * [OUTPUT]: 对外导出 getExtensionIdsFromString 等接口
 * [POS]: utils/getExtensionIdsFromString.ts 在 utils 中承担职责：工具模块中的纯函数单元，被上层组件与路由复用
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */
export const getExtensionIdsFromString = (text: string): string[] => {
  return text.match(/\{id=([^}]+)\}/g)?.map((match) => match.replace(/\{id=/, "").replace(/\}/, "")) ?? [];
};
