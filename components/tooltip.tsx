/**
 * [INPUT]: 依赖 react、@radix-ui/react-tooltip、@/utils/cn 提供的能力
 * [OUTPUT]: 对外导出当前文件定义的组件/函数/类型接口
 * [POS]: components/tooltip.tsx 在 components 中承担职责：UI 渲染层组件，组合状态与视图输出
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */
"use client";

import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { cn } from "@/utils/cn";

const TooltipProvider = TooltipPrimitive.Provider;

const Tooltip = TooltipPrimitive.Root;

const TooltipTrigger = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Trigger>
>(({ className, ...props }, ref) => <TooltipPrimitive.Trigger ref={ref} className={className} {...props} />);
TooltipTrigger.displayName = TooltipPrimitive.Trigger.displayName;

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <TooltipPrimitive.Portal>
    <TooltipPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        `px-3 py-2 bg-gray-4 text-gray-12 rounded-lg text-sm leading-none select-none will-change-transform z-10
        data-[side=bottom]:animate-slideDownAndFade 
        data-[side=left]:animate-slideLeftAndFade 
        data-[side=right]:animate-slideRightAndFade 
        data-[side=top]:animate-slideUpAndFade`,
        className,
      )}
      {...props}
    />
  </TooltipPrimitive.Portal>
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
