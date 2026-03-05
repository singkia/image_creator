/**
 * [INPUT]: 依赖 react、./ControlContainer.module.css 提供的能力
 * [OUTPUT]: 对外导出 default 等接口
 * [POS]: app/components/ControlContainer.tsx 在 app/components 中承担职责：UI 渲染层组件，组合状态与视图输出
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */
import React, { PropsWithChildren } from "react";

import styles from "./ControlContainer.module.css";

type PropTypes = {
  title: string;
};

const ControlContainer: React.FC<PropsWithChildren<PropTypes>> = ({ title, children }) => {
  return (
    <div className={styles.container}>
      <strong className={styles.controlTitle}>{title}</strong>
      <div className={styles.control}>{children}</div>
    </div>
  );
};

export default ControlContainer;
