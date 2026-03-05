/**
 * [INPUT]: 依赖 jotai-location 提供的能力
 * [OUTPUT]: 对外导出 PADDING_OPTIONS、Padding、isPadding 等接口
 * [POS]: app/store/padding.ts 在 app/store 中承担职责：状态管理模块中的原子/状态容器，负责单一状态域
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */
import { atomWithHash } from "jotai-location";

export const PADDING_OPTIONS = [16, 32, 64, 128] as const;

export type Padding = (typeof PADDING_OPTIONS)[number];

export function isPadding(value: Padding | unknown): value is Padding {
  return PADDING_OPTIONS.indexOf(value as Padding) !== -1;
}

const paddingAtom = atomWithHash<Padding>("padding", PADDING_OPTIONS[2]);

export { paddingAtom };
