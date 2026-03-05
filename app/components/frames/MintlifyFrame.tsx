/**
 * [INPUT]: 依赖 classnames、jotai、../../store、../../store/padding 提供的能力
 * [OUTPUT]: 对外导出 default 等接口
 * [POS]: app/components/frames/MintlifyFrame.tsx 在 app/components/frames 中承担职责：UI 渲染层组件，组合状态与视图输出
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */
import classNames from "classnames";
import { useAtom, useAtomValue } from "jotai";

import { fileNameAtom, showBackgroundAtom } from "../../store";
import { paddingAtom } from "../../store/padding";
import { themeDarkModeAtom } from "../../store/themes";
import mintlifyPatternDark from "../../assets/mintlify-pattern-dark.svg?url";
import mintlifyPatternLight from "../../assets/mintlify-pattern-light.svg?url";

import Editor from "../Editor";
import sharedStyles from "./DefaultFrame.module.css";
import styles from "./MintlifyFrame.module.css";

const MintlifyFrame = () => {
  const darkMode = useAtomValue(themeDarkModeAtom);
  const [padding] = useAtom(paddingAtom);
  const [showBackground] = useAtom(showBackgroundAtom);
  const [fileName, setFileName] = useAtom(fileNameAtom);

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
        <span className={styles.patternWrapper}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={darkMode ? mintlifyPatternDark : mintlifyPatternLight} alt="" className={styles.pattern} />
        </span>
      )}
      <div className={styles.window}>
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
            {fileName.length === 0 ? <span>Untitled-1</span> : null}
          </div>
        </div>
        <Editor />
      </div>
    </div>
  );
};

export default MintlifyFrame;
