/**
 * [INPUT]: 依赖 next/dynamic、react 提供的能力
 * [OUTPUT]: 对外导出 default 等接口
 * [POS]: app/components/NoSSR.tsx 在 app/components 中承担职责：UI 渲染层组件，组合状态与视图输出
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */
import dynamic from "next/dynamic";
import React, { PropsWithChildren } from "react";

const NoSSR: React.FC<PropsWithChildren> = ({ children }) => <React.Fragment>{children}</React.Fragment>;

export default dynamic(() => Promise.resolve(NoSSR), {
  ssr: false,
});
