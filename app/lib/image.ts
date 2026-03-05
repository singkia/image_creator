/**
 * [INPUT]: 依赖 html-to-image 提供的能力
 * [OUTPUT]: 对外导出 toPng、toBlob、toSvg 等接口
 * [POS]: app/lib/image.ts 在 app/lib 中承担职责：模块内部实现单元，承担单一职责并对外暴露稳定接口
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */
import { toPng as htmlToPng, toSvg as htmlToSvg, toBlob as htmlToBlob } from "html-to-image";

const imageFilter = (node: HTMLElement) => node.tagName !== "TEXTAREA" && !node.dataset?.ignoreInExport;

const htmlToImageOptions = {
  filter: imageFilter,
  pixelRatio: 2,
  skipAutoScale: true,
};

type PngOptions = Parameters<typeof htmlToPng>[1];
export const toPng = async (node: HTMLElement, options?: PngOptions) => {
  // sometimes the first render doesn't work fully so we do the rendering twice https://github.com/bubkoo/html-to-image/issues/361
  await htmlToPng(node, {
    ...htmlToImageOptions,
    ...options,
  });
  return htmlToPng(node, {
    ...htmlToImageOptions,
    ...options,
  });
};

type BlobOptions = Parameters<typeof htmlToBlob>[1];
export const toBlob = async (node: HTMLElement, options?: BlobOptions) => {
  return htmlToBlob(node, {
    ...htmlToImageOptions,
    ...options,
  });
};

type SvgOptions = Parameters<typeof htmlToSvg>[1];
export const toSvg = async (node: HTMLElement, options?: SvgOptions) => {
  return htmlToSvg(node, {
    ...htmlToImageOptions,
    ...options,
  });
};
