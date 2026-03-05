/**
 * [INPUT]: 依赖 classnames、jotai、../../store、../../store/code 提供的能力
 * [OUTPUT]: 对外导出 default 等接口
 * [POS]: app/components/frames/CloudflareFrame.tsx 在 app/components/frames 中承担职责：UI 渲染层组件，组合状态与视图输出
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */
import classNames from "classnames";
import { useAtom, useAtomValue } from "jotai";

import { fileNameAtom, showBackgroundAtom } from "../../store";
import { selectedLanguageAtom } from "../../store/code";
import { flashShownAtom } from "../../store/flash";
import { paddingAtom } from "../../store/padding";
import { themeDarkModeAtom } from "../../store/themes";

import Editor from "../Editor";
import sharedStyles from "./DefaultFrame.module.css";
import styles from "./CloudflareFrame.module.css";

const CloudflareFrame = () => {
  const darkMode = useAtomValue(themeDarkModeAtom);
  const [padding] = useAtom(paddingAtom);
  const [showBackground] = useAtom(showBackgroundAtom);
  const [fileName, setFileName] = useAtom(fileNameAtom);
  const [selectedLanguage] = useAtom(selectedLanguageAtom);
  const flashShown = useAtomValue(flashShownAtom);

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
      <div className={styles.window}>
        <span className={styles.gridlinesHorizontal} data-grid></span>
        <span className={styles.gridlinesVertical} data-grid></span>
        {fileName.length > 0 ? (
          <div className={styles.header}>
            <div className={classNames(sharedStyles.fileName, styles.fileName)} data-value={fileName}>
              <input
                type="text"
                value={fileName}
                onChange={(event) => setFileName(event.target.value)}
                spellCheck={false}
                tabIndex={-1}
                size={1}
              />
            </div>
            <span className={styles.language}>{selectedLanguage?.name}</span>
          </div>
        ) : flashShown ? null : (
          <div className={styles.header} data-ignore-in-export>
            <div className={classNames(sharedStyles.fileName, styles.fileName)} data-value={fileName}>
              <input
                type="text"
                value={fileName}
                onChange={(event) => setFileName(event.target.value)}
                spellCheck={false}
                tabIndex={-1}
                size={1}
              />
              <span>Untitled-1</span>
            </div>
            <span className={styles.language}>{selectedLanguage?.name}</span>
          </div>
        )}
        <Editor />
      </div>
    </div>
  );
};

export default CloudflareFrame;
