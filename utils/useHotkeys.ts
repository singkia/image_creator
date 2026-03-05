/**
 * [INPUT]: 依赖 hotkeys-js、react 提供的能力
 * [OUTPUT]: 对外导出 default 等接口
 * [POS]: utils/useHotkeys.ts 在 utils 中承担职责：工具模块中的 Hook，封装可复用交互逻辑
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */
import hotkeys, { KeyHandler } from "hotkeys-js";
import { useEffect } from "react";

hotkeys.filter = (event: KeyboardEvent) => {
  const target = (event.target || event.srcElement) as HTMLElement;

  const { tagName } = target;
  let flag = true;

  // allow formatting shortcut even if the focus is on the textarea
  if (event.keyCode === 70 && event.shiftKey && event.altKey) {
    return true;
  }

  // ignore: isContentEditable === 'true', <input> and <textarea> when readOnly state is false, <select>
  if (
    target.isContentEditable ||
    target.getAttribute("role") === "option" ||
    ((tagName === "INPUT" || tagName === "TEXTAREA" || tagName === "SELECT") &&
      "readOnly" in target &&
      !target.readOnly)
  ) {
    flag = false;
  }
  return flag;
};

const useHotkeys = (key: string, handler: KeyHandler) => {
  useEffect(() => {
    hotkeys(key, handler);

    return () => {
      hotkeys.unbind(key, handler);
    };
  }, [key, handler]);
};

export default useHotkeys;
