/**
 * [INPUT]: 依赖 ./og-image.png、next 提供的能力
 * [OUTPUT]: 对外导出 default、metadata、Layout 等接口
 * [POS]: app/components/layout.tsx 在 app/components 中承担职责：UI 渲染层组件，组合状态与视图输出
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */
import OgImage from "./og-image.png";
import { Metadata } from "next";

const title = "Ray.so Components";
const description = "Component playground for the ray.so ecosystem.";
const ogUrl = OgImage.src;

export const metadata: Metadata = {
  title: title,
  description: description,
  openGraph: {
    url: "/components",
    title: title,
    description: description,
    images: [
      {
        url: ogUrl,
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
  },
  twitter: {
    title: title,
    description: description,
    images: [
      {
        url: ogUrl,
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
