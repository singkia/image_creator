/**
 * [INPUT]: 依赖 jotai、jotai-location、shiki 提供的能力
 * [OUTPUT]: 对外导出 windowWidthAtom、showBackgroundAtom、showLineNumbersAtom、fileNameAtom、highlighterAtom 等接口
 * [POS]: app/store/index.ts 在 app/store 中承担职责：状态管理模块中的原子/状态容器，负责单一状态域
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */
import { atom } from "jotai";
import { atomWithHash } from "jotai-location";
import type { Highlighter } from "shiki";

export const windowWidthAtom = atomWithHash<number | null>("width", null);

export const showBackgroundAtom = atomWithHash<boolean>("background", true);

export const showLineNumbersAtom = atomWithHash<boolean | undefined>("lineNumbers", undefined);

export const fileNameAtom = atomWithHash<string>("title", "", {
  serialize(val) {
    return val;
  },
  deserialize(str) {
    return str || "";
  },
});

export const highlighterAtom = atom<Highlighter | null>(null);

export const loadingLanguageAtom = atom<boolean>(false);

export const highlightedLinesAtom = atomWithHash<number[]>("highlightedLines", [], {
  serialize(val) {
    return val.join(",");
  },
  deserialize(str) {
    return str ? str.split(",").map(Number) : [];
  },
});
