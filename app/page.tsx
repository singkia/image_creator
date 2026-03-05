/**
 * [INPUT]: 依赖 next 的 Metadata 类型，依赖同级 code.tsx 的 Code 组件，依赖 @/utils/common 的 BASE_URL
 * [OUTPUT]: 导出元数据 metadata，导出 Page 组件渲染编辑器主界面
 * [POS]: app/(navigation)/(code) 的入口页面，负责 SEO 和核心 UI 挂载
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */
import type { Metadata } from "next";

import OgPhoto from "./assets/og.png";
import { Code } from "./code";
import { BASE_URL } from "@/utils/common";

const title = "Create beautiful images of your code";
const description =
  "Turn your code into beautiful images. Choose from a range of syntax colors, hide or show the background, and toggle between a dark and light window.";
const ogUrl = OgPhoto.src;

export const metadata: Metadata = {
  title: title,
  description: description,
  openGraph: {
    url: BASE_URL,
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
  keywords: "generate, create, convert, source, code, snippet, image, picture, share, export",
};

export default function Page() {
  return <Code />;
}
