/**
 * [INPUT]: 依赖 @/api/store、@/utils/cn、@raycast/icons、next/image 提供的能力
 * [OUTPUT]: 对外导出 AIExtension 等接口
 * [POS]: components/ai-extension.tsx 在 components 中承担职责：UI 渲染层组件，组合状态与视图输出
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */
import { Extension } from "@/api/store";
import { cn } from "@/utils/cn";
import { AtSymbolIcon } from "@raycast/icons";
import Image from "next/image";

export function AIExtension({
  extension,
  fallback,
  variant = "primary",
}: {
  extension?: Extension;
  fallback: string;
  variant?: "primary" | "secondary";
}) {
  const icon = extension?.icons.dark || extension?.icons.light;

  return (
    <span
      className={cn(
        "whitespace-nowrap relative top-[2px] inline-flex items-center px-[3px] py-[4px] rounded-[4px] text-[13px] font-medium leading-none",
        variant === "primary" ? "bg-gray-a4 text-gray-12" : "bg-gray-a2 text-gray-a10 group-hover:bg-gray-a3",
      )}
    >
      <AtSymbolIcon
        className={cn(
          "w-[12px] h-[12px] mr-[2px]",
          variant === "primary" ? "text-gray-a10" : "text-gray-a8  group-hover:text-gray-a10",
        )}
      />
      {extension?.name || fallback}
      {extension && icon && (
        <Image
          src={icon}
          alt={extension.title}
          width={12}
          height={12}
          className={cn(
            "w-[12px] h-[12px] ml-[4px]",
            variant === "primary" ? "opacity-100" : "opacity-80 group-hover:opacity-100",
          )}
        />
      )}
    </span>
  );
}
