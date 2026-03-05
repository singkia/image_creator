/**
 * [INPUT]: 依赖同模块与运行时基础能力
 * [OUTPUT]: 对外导出 default 等接口
 * [POS]: app/util/download.ts 在 app/util 中承担职责：工具模块中的纯函数单元，被上层组件与路由复用
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */
const download = (dataURL: string, filename: string) => {
  const link = document.createElement("a");
  link.download = filename;
  link.href = dataURL;
  link.click();
};

export default download;
