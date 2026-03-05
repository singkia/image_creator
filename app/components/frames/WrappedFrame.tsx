/**
 * [INPUT]: 依赖 classnames、jotai、../../store、../../store/padding 提供的能力
 * [OUTPUT]: 对外导出 default 等接口
 * [POS]: app/components/frames/WrappedFrame.tsx 在 app/components/frames 中承担职责：UI 渲染层组件，组合状态与视图输出
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */
import classNames from "classnames";
import { useAtom, useAtomValue } from "jotai";

import { showBackgroundAtom } from "../../store";
import { paddingAtom } from "../../store/padding";
import { themeDarkModeAtom } from "../../store/themes";

import Editor from "../Editor";
import sharedStyles from "./DefaultFrame.module.css";
import styles from "./WrappedFrame.module.css";

const WrappedFrame = () => {
  const darkMode = useAtomValue(themeDarkModeAtom);
  const [padding] = useAtom(paddingAtom);
  const [showBackground] = useAtom(showBackgroundAtom);

  return (
    <div
      className={classNames(
        sharedStyles.frame,
        showBackground && styles.frame,
        !darkMode && styles.frameLightMode,
        !showBackground && sharedStyles.noBackground,
        !showBackground && styles.noBackground,
      )}
      style={{ padding }}
    >
      {!showBackground && <div data-ignore-in-export className={sharedStyles.transparentPattern}></div>}
      {showBackground && (
        <>
          <span className={styles.bottomGlow}></span>
          <span className={styles.border}></span>
          <span className={styles.fade}></span>
          <span className={styles.glowLeft}></span>
          <span className={styles.glowRight}></span>
          <span className={styles.glowBottom}></span>
        </>
      )}
      <div className={styles.window}>
        <Editor />
      </div>
    </div>
  );
};

export default WrappedFrame;
