/**
 * [INPUT]: 依赖 react 提供的能力
 * [OUTPUT]: 对外导出 default、FrameContext 等接口
 * [POS]: app/store/FrameContextStore.tsx 在 app/store 中承担职责：状态管理模块中的原子/状态容器，负责单一状态域
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */
import React, { createContext, PropsWithChildren, RefObject, useRef } from "react";

export const FrameContext = createContext<RefObject<HTMLDivElement | null> | null>(null);

const FrameContextStore: React.FC<PropsWithChildren> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);

  return <FrameContext.Provider value={ref}>{children}</FrameContext.Provider>;
};

export default FrameContextStore;
