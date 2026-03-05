/**
 * [INPUT]: 依赖 react 提供的能力
 * [OUTPUT]: 对外导出 default、useIsSafari 等接口
 * [POS]: app/util/useIsSafari.ts 在 app/util 中承担职责：工具模块中的 Hook，封装可复用交互逻辑
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */
import { useSyncExternalStore } from "react";

export default function useIsSafari() {
  return useSyncExternalStore(
    () => () => {},
    () => navigator.userAgent.indexOf("Safari") > -1 && navigator.userAgent.indexOf("Chrome") <= -1,
    () => false,
  );
}
