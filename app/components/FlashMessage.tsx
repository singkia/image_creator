/**
 * [INPUT]: 依赖 react、jotai、react-transition-group、../store/flash 提供的能力
 * [OUTPUT]: 对外导出 default 等接口
 * [POS]: app/components/FlashMessage.tsx 在 app/components 中承担职责：UI 渲染层组件，组合状态与视图输出
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */
import React, { useEffect, useRef, useState, useMemo } from "react";
import { useAtom } from "jotai";
import { CSSTransition } from "react-transition-group";
import { derivedFlashMessageAtom, flashShownAtom } from "../store/flash";
import classNames from "classnames";
import useAudio from "../util/useAudio";

import styles from "./FlashMessage.module.css";

const FlashMessage: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [flashMessage] = useAtom(derivedFlashMessageAtom);
  const [flashShown] = useAtom(flashShownAtom);

  const [playing, toggle] = useAudio("unlock.mp3");
  useEffect(() => {
    if (flashMessage?.variant === "unlock" && flashShown) {
      toggle();
    }
  }, [flashMessage]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <CSSTransition in={flashShown} nodeRef={containerRef} timeout={500} classNames={styles} unmountOnExit>
      {flashMessage?.variant === "unlock" ? (
        <div className={styles.unlockContainer} ref={containerRef}>
          <div className={styles.coin}>
            <div className={classNames(styles.coinFront, styles.coinSide)}>{flashMessage?.icon}</div>
            <div className={classNames(styles.coinBack, styles.coinSide)}>{flashMessage?.icon}</div>
          </div>
          <span className={styles.unlockFlash}>{flashMessage?.message}</span>
        </div>
      ) : (
        <div className={styles.container} ref={containerRef}>
          <span className={styles.flash}>
            {flashMessage?.icon}
            {flashMessage?.message}
          </span>
        </div>
      )}
    </CSSTransition>
  );
};

export default FlashMessage;
