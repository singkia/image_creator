/**
 * [INPUT]: 依赖 clsx、tailwind-merge 提供的能力
 * [OUTPUT]: 对外导出 cn 等接口
 * [POS]: utils/cn.ts 在 utils 中承担职责：工具模块中的纯函数单元，被上层组件与路由复用
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
