import { useSyncExternalStore } from "react";

export default function usePngClipboardSupported() {
  return useSyncExternalStore(
    () => () => {},
    () => Boolean(window.navigator && window.navigator.clipboard && typeof ClipboardItem === "function"),
    () => false,
  );
}
