/**
 * [INPUT]: 依赖 @/app/api/shorten-url/route、@/components/toast 提供的能力
 * [OUTPUT]: 对外导出 BASE_URL、shortenUrl 等接口
 * [POS]: utils/common.ts 在 utils 中承担职责：工具模块中的纯函数单元，被上层组件与路由复用
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */
import { refProps } from "@/app/api/shorten-url/route";
import { toast } from "@/components/toast";

export const BASE_URL = {
  development: "http://localhost:3000",
  preview: `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`,
  production: "https://www.ray.so",
}[process.env.NEXT_PUBLIC_VERCEL_ENV || "development"] as string;

export async function shortenUrl(url: string, ref: refProps) {
  const response = await fetch(`${BASE_URL}/api/shorten-url?url=${encodeURIComponent(url)}&ref=${ref}`).then((res) =>
    res.json(),
  );

  if (response.link) {
    return response.link as string;
  }

  console.error("Failed to shorten URL", response);

  throw new Error("Unable to shorten this link");
}
