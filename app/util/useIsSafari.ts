import { useSyncExternalStore } from "react";

export default function useIsSafari() {
  return useSyncExternalStore(
    () => () => {},
    () => navigator.userAgent.indexOf("Safari") > -1 && navigator.userAgent.indexOf("Chrome") <= -1,
    () => false,
  );
}
