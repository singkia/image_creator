/**
 * [INPUT]: 依赖 react、./Controls.module.css、./BackgroundControl、./DarkModeControl 提供的能力
 * [OUTPUT]: 对外导出 default 等接口
 * [POS]: app/components/Controls.tsx 在 app/components 中承担职责：UI 渲染层组件，组合状态与视图输出
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */
import React from "react";

import styles from "./Controls.module.css";
import BackgroundControl from "./BackgroundControl";
import DarkModeControl from "./DarkModeControl";
import ExportButton from "./ExportButton";
import LanguageControl from "./LanguageControl";
import PaddingControl from "./PaddingControl";
import ThemeControl from "./ThemeControl";
import LineNumberControl from "./LineNumberControl";

const Controls: React.FC = () => {
  return (
    <div className={styles.controls}>
      <ThemeControl />
      <BackgroundControl />
      <DarkModeControl />
      <LineNumberControl />
      <PaddingControl />
      <LanguageControl />
    </div>
  );
};

export default Controls;
