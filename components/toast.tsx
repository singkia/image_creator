/**
 * [INPUT]: 依赖 sonner 提供的能力
 * [OUTPUT]: 对外导出当前文件定义的组件/函数/类型接口
 * [POS]: components/toast.tsx 在 components 中承担职责：UI 渲染层组件，组合状态与视图输出
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */
"use client";
import { Toaster as Sonner, toast } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      theme="dark"
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-gray-12 group-[.toaster]:border-gray-3 group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-gray-11",
          actionButton: "group-[.toast]:bg-brand/15 group-[.toast]:text-brand",
          cancelButton: "group-[.toast]:bg-gray-a3 group-[.toast]:text-gray-a11",
        },
      }}
      {...props}
    />
  );
};

export { Toaster, toast };
