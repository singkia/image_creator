/**
 * [INPUT]: 依赖 react 提供的能力
 * [OUTPUT]: 对外导出 UniqueSvg 等接口
 * [POS]: components/unique-svg.tsx 在 components 中承担职责：UI 渲染层组件，组合状态与视图输出
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */
"use client";

import React, { useId, useLayoutEffect, useRef } from "react";

interface UniqueSvgProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Wrapper that makes SVG IDs unique to avoid conflicts
 * when the same SVG is rendered multiple times on the page.
 */
export function UniqueSvg({ children, className }: UniqueSvgProps) {
  const id = useId();
  const ref = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    if (!ref.current) return;
    const svg = ref.current.querySelector("svg");
    if (!svg) return;

    // Find all elements with IDs and all url() references
    const elementsWithId = svg.querySelectorAll("[id]");
    const idMap = new Map<string, string>();

    // Create new unique IDs
    elementsWithId.forEach((el) => {
      const oldId = el.getAttribute("id")!;
      const newId = `${id.replace(/:/g, "")}_${oldId}`;
      idMap.set(oldId, newId);
      el.setAttribute("id", newId);
    });

    // Update all url(#...) references
    const allElements = svg.querySelectorAll("*");
    allElements.forEach((el) => {
      for (const attr of Array.from(el.attributes)) {
        if (attr.value.includes("url(#")) {
          let newValue = attr.value;
          idMap.forEach((newId, oldId) => {
            newValue = newValue.replace(`url(#${oldId})`, `url(#${newId})`);
          });
          el.setAttribute(attr.name, newValue);
        }
      }
    });
  }, [id, children]);

  return (
    <span ref={ref} className={className}>
      {children}
    </span>
  );
}
