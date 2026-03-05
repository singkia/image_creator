/**
 * [INPUT]: 依赖 classnames、jotai、../../assets/tailwind/beams.png、../../store 提供的能力
 * [OUTPUT]: 对外导出 default 等接口
 * [POS]: app/components/frames/TailwindFrame.tsx 在 app/components/frames 中承担职责：UI 渲染层组件，组合状态与视图输出
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */
import classNames from "classnames";
import { useAtom, useAtomValue } from "jotai";

import beams from "../../assets/tailwind/beams.png";
import { fileNameAtom, showBackgroundAtom } from "../../store";
import { paddingAtom } from "../../store/padding";
import { themeDarkModeAtom } from "../../store/themes";
import useIsSafari from "../../util/useIsSafari";

import Editor from "../Editor";
import sharedStyles from "./DefaultFrame.module.css";
import styles from "./TailwindFrame.module.css";

const TailwindFrame = () => {
  const darkMode = useAtomValue(themeDarkModeAtom);
  const [padding] = useAtom(paddingAtom);
  const [showBackground] = useAtom(showBackgroundAtom);
  useAtom(fileNameAtom);
  const isSafari = useIsSafari();

  return (
    <div
      className={classNames(
        sharedStyles.frame,
        showBackground && styles.frame,
        !darkMode && styles.frameLightMode,
        !showBackground && sharedStyles.noBackground,
        !showBackground && styles.noBackground,
        isSafari && styles.isSafari,
      )}
      style={{ padding }}
    >
      {!showBackground && <div data-ignore-in-export className={sharedStyles.transparentPattern}></div>}
      {showBackground && (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={beams.src} alt="beams" className={styles.beams} />
        </>
      )}
      <div className={styles.beams} />
      <div className={styles.window}>
        {showBackground && (
          <>
            <span className={styles.gridlinesHorizontal} data-grid></span>
            <span className={styles.gridlinesVertical} data-grid></span>
            <div className={styles.gradient}>
              <div>
                <div className={styles.gradient1}></div>
                <div className={styles.gradient2}></div>
              </div>
            </div>
          </>
        )}
        <div className={classNames(sharedStyles.header, styles.header)}>
          <div className={sharedStyles.controls}>
            <div className={classNames(sharedStyles.control, styles.control)}></div>
            <div className={classNames(sharedStyles.control, styles.control)}></div>
            <div className={classNames(sharedStyles.control, styles.control)}></div>
          </div>
        </div>
        <Editor />
      </div>
    </div>
  );
};

export default TailwindFrame;
