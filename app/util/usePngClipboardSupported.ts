/**
 * [INPUT]: 依赖 react 提供的能力
 * [OUTPUT]: 对外导出 default、usePngClipboardSupported 等接口
 * [POS]: app/util/usePngClipboardSupported.ts 在 app/util 中承担职责：工具模块中的 Hook，封装可复用交互逻辑
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */
import { useSyncExternalStore } from "react";

export default function usePngClipboardSupported() {
  return useSyncExternalStore(
    () => () => {},
    () => Boolean(window.navigator && window.navigator.clipboard && typeof ClipboardItem === "function"),
    () => false,
  );
}
