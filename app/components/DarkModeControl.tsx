/**
 * [INPUT]: 依赖 jotai、react、../store/themes、@/utils/useHotkeys 提供的能力
 * [OUTPUT]: 对外导出 default 等接口
 * [POS]: app/components/DarkModeControl.tsx 在 app/components 中承担职责：UI 渲染层组件，组合状态与视图输出
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */
import { useAtomValue, useSetAtom } from "jotai";
import React, { useCallback } from "react";
import { darkModeAtom, themeAtom, themeDarkModeAtom } from "../store/themes";
import useHotkeys from "@/utils/useHotkeys";
import ControlContainer from "./ControlContainer";
import { Switch } from "@/components/switch";

const BackgroundControl: React.FC = () => {
  const darkMode = useAtomValue(themeDarkModeAtom);
  const setDarkMode = useSetAtom(darkModeAtom);
  const theme = useAtomValue(themeAtom);

  const hasLightMode = !!theme.syntax.light;
  const hasDarkMode = !!theme.syntax.dark;
  const canToggle = hasLightMode && hasDarkMode;

  const toggleDarkMode = useCallback(() => {
    if (canToggle) {
      setDarkMode((old) => !old);
    }
  }, [canToggle, setDarkMode]);

  useHotkeys("d", toggleDarkMode);

  return (
    <ControlContainer title="Dark mode">
      <Switch checked={darkMode} onCheckedChange={setDarkMode} disabled={!canToggle} />
    </ControlContainer>
  );
};

export default BackgroundControl;
