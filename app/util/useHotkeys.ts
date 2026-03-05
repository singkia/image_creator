/**
 * [INPUT]: 依赖 hotkeys-js 的键盘监听能力与 react 的 useEffect
 * [OUTPUT]: 对外导出 useHotkeys Hook，用于声明式绑定/解绑快捷键
 * [POS]: app/util 中的交互工具 Hook，被编辑器与控制面板复用
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */
import hotkeys, { KeyHandler } from "hotkeys-js";
import { useEffect } from "react";
export default function useHotkeys(key: string, callback: KeyHandler) {
  useEffect(() => {
    hotkeys(key, callback);

    return () => {
      hotkeys.unbind(key, callback);
    };
  }, [key, callback]);
}
