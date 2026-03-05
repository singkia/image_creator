/**
 * [INPUT]: 依赖 jotai、react、../store、@/utils/useHotkeys 提供的能力
 * [OUTPUT]: 对外导出 default 等接口
 * [POS]: app/components/BackgroundControl.tsx 在 app/components 中承担职责：UI 渲染层组件，组合状态与视图输出
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */
import { useAtom } from "jotai";
import React from "react";
import { showBackgroundAtom } from "../store";
import useHotkeys from "@/utils/useHotkeys";
import ControlContainer from "./ControlContainer";
import { Switch } from "@/components/switch";

const BackgroundControl: React.FC = () => {
  const [showBackground, setShowBackground] = useAtom(showBackgroundAtom);

  useHotkeys("b", () => {
    setShowBackground((old) => !old);
  });

  return (
    <ControlContainer title="Background">
      <Switch checked={showBackground} onCheckedChange={setShowBackground} />
    </ControlContainer>
  );
};

export default BackgroundControl;
