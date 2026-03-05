/**
 * [INPUT]: 依赖 jotai/utils 提供的能力
 * [OUTPUT]: 对外导出 EXPORT_SIZE_OPTIONS、SIZE_LABELS、ExportSize、isExportSize 等接口
 * [POS]: app/store/image.ts 在 app/store 中承担职责：状态管理模块中的原子/状态容器，负责单一状态域
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */
import { atomWithStorage } from "jotai/utils";

export const EXPORT_SIZE_OPTIONS = [2, 4, 6] as const;

export const SIZE_LABELS = {
  2: "2x",
  4: "4x",
  6: "6x",
} as const;

export type ExportSize = (typeof EXPORT_SIZE_OPTIONS)[number];

export function isExportSize(value: ExportSize | unknown): value is ExportSize {
  return EXPORT_SIZE_OPTIONS.indexOf(value as ExportSize) !== -1;
}

const exportSizeAtom = atomWithStorage<ExportSize>("size", EXPORT_SIZE_OPTIONS[1]);

export { exportSizeAtom };
