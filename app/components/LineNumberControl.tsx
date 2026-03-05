/**
 * [INPUT]: 依赖 jotai、react、@/utils/useHotkeys、./ControlContainer 提供的能力
 * [OUTPUT]: 对外导出 default 等接口
 * [POS]: app/components/LineNumberControl.tsx 在 app/components 中承担职责：UI 渲染层组件，组合状态与视图输出
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import React, { useCallback } from "react";
import useHotkeys from "@/utils/useHotkeys";
import ControlContainer from "./ControlContainer";
import { Switch } from "@/components/switch";
import { showLineNumbersAtom } from "../store";
import { themeAtom, themeLineNumbersAtom } from "../store/themes";

const LineNumberControl: React.FC = () => {
  const theme = useAtomValue(themeAtom);
  const showLineNumbers = useAtomValue(themeLineNumbersAtom);
  const setShowLineNumbers = useSetAtom(showLineNumbersAtom);
  const isDisabled = theme.partner && !theme.lineNumbersToggleable;
  const toggleShowLineNumbers = useCallback(() => {
    if (isDisabled) return;
    setShowLineNumbers((old) => !old);
  }, [setShowLineNumbers, isDisabled]);

  useHotkeys("n", toggleShowLineNumbers);

  return (
    <ControlContainer title="Line numbers">
      <Switch checked={showLineNumbers} onCheckedChange={setShowLineNumbers} disabled={isDisabled} />
    </ControlContainer>
  );
};

export default LineNumberControl;
