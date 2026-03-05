import hotkeys, { KeyHandler } from "hotkeys-js";
import { useEffect } from "react";

/**
 * [INPUT]: Depends on hotkeys-js
 * [OUTPUT]: Exports useHotkeys hook
 * [POS]: util/useHotkeys.ts
 * [PROTOCOL]: Update header on change
 */
export default function useHotkeys(key: string, callback: KeyHandler) {
  useEffect(() => {
    hotkeys(key, callback);

    return () => {
      hotkeys.unbind(key, callback);
    };
  }, [key, callback]);
}
