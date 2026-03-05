/**
 * [INPUT]: 依赖 react 提供的能力
 * [OUTPUT]: 对外导出 default 等接口
 * [POS]: app/util/useAudio.ts 在 app/util 中承担职责：工具模块中的 Hook，封装可复用交互逻辑
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */
import { useEffect, useMemo, useState } from "react";

const isDev = process.env.NODE_ENV === "development";

const useAudio = (path: string): [boolean, () => void] => {
  let url: string;
  if (isDev) {
    url = `http://localhost:3000/${path}`;
  } else {
    url = `https://ray.so/${path}`;
  }

  const audio = useMemo(() => new Audio(url), [url]);
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing, audio]);

  useEffect(() => {
    const handleEnd = () => setPlaying(false);
    audio.addEventListener("ended", handleEnd);
    return () => {
      audio.removeEventListener("ended", handleEnd);
    };
  }, [audio]);

  return [playing, toggle];
};

export default useAudio;
