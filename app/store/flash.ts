/**
 * [INPUT]: 依赖 jotai 提供的能力
 * [OUTPUT]: 对外导出 FlashMessage、flashShownAtom、derivedFlashMessageAtom 等接口
 * [POS]: app/store/flash.ts 在 app/store 中承担职责：状态管理模块中的原子/状态容器，负责单一状态域
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */
import { atom } from "jotai";

export type FlashMessage = {
  icon?: any;
  message: string;
  variant?: "info" | "unlock";
  timeout?: number;
};

const timeoutAtom = atom<number>(0);
const iconAtom = atom<any>(null);
const messageAtom = atom<string>("");
const variantAtom = atom<"info" | "unlock">("info");
export const flashShownAtom = atom(false);

export const derivedFlashMessageAtom = atom(
  (get) => ({
    icon: get(iconAtom),
    message: get(messageAtom),
    variant: get(variantAtom),
  }),
  (get, set, flashMessage: FlashMessage) => {
    window.clearTimeout(get(timeoutAtom));

    set(messageAtom, flashMessage.message);
    set(iconAtom, flashMessage.icon);
    set(variantAtom, flashMessage.variant || "info");
    set(flashShownAtom, true);

    if (flashMessage?.timeout) {
      set(
        timeoutAtom,
        window.setTimeout(() => {
          set(flashShownAtom, false);
          set(messageAtom, "");
        }, flashMessage.timeout),
      );
    }
  },
);
