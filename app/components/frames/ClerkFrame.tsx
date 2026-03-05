/**
 * [INPUT]: 依赖 classnames、jotai、../../store、../../store/padding 提供的能力
 * [OUTPUT]: 对外导出 default 等接口
 * [POS]: app/components/frames/ClerkFrame.tsx 在 app/components/frames 中承担职责：UI 渲染层组件，组合状态与视图输出
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */
import classNames from "classnames";
import { useAtom, useAtomValue } from "jotai";

import { showBackgroundAtom } from "../../store";
import { paddingAtom } from "../../store/padding";
import { themeDarkModeAtom } from "../../store/themes";
import clerkPattern from "../../assets/clerk/pattern.svg?url";

import Editor from "../Editor";
import sharedStyles from "./DefaultFrame.module.css";
import styles from "./ClerkFrame.module.css";

const ClerkFrame = () => {
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
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={clerkPattern} alt="" className={styles.pattern} />
        </>
      )}
      <div className={styles.window}>
        <div className={styles.code}>
          <Editor />
        </div>
      </div>
    </div>
  );
};

export default ClerkFrame;
