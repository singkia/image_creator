/**
 * [INPUT]: 依赖 jotai-location 提供的能力
 * [OUTPUT]: 对外导出 FONTS、Font 等接口
 * [POS]: app/store/font.ts 在 app/store 中承担职责：状态管理模块中的原子/状态容器，负责单一状态域
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */
import { atomWithHash } from "jotai-location";

export const FONTS = [
  "jetbrains-mono",
  "geist-mono",
  "ibm-plex-mono",
  "fira-code",
  "soehne-mono",
  "roboto-mono",
  "commit-mono",
  "space-mono",
  "source-code-pro",
  "google-sans-code",
] as const;

export type Font = (typeof FONTS)[number];

const fontAtom = atomWithHash<Font>("font", FONTS[0]);

export { fontAtom };
