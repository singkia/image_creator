/**
 * [INPUT]: 依赖 next/server、dub 提供的能力
 * [OUTPUT]: 对外导出 runtime、refProps、GET 等接口
 * [POS]: app/api/shorten-url/route.ts 在 app/api/shorten-url 中承担职责：API 边界层的请求处理单元，连接外部输入与内部能力
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */
import { NextRequest, NextResponse } from "next/server";
import { Dub } from "dub";

export const runtime = "edge";

const dub = new Dub({
  token: process.env.DUB_TOKEN,
});

const tagIdsByRef = {
  codeImage: "clsokhlen0001kz0gxlqfgpp0",
  snippets: "clsokhqzy0003kz0gxdhcycue",
  prompts: "clsokhzja0006kz0g64z47gfr",
  themes: "clsoki8190008kz0gzajzalh7",
  icons: "cltyfpaho0001lwxwdcd93mkc",
  presets: "clu9ko3n300068tq0zhk7bc7f",
  quicklinks: "cm0qhn6fo000w3dl1i22hcgoz",
  desktopClient: "tag_LmjLVKbcZB45xNbcgNPLV0Hh",
};

export type refProps = keyof typeof tagIdsByRef;

const getTagId = (ref: refProps) => {
  return ref ? tagIdsByRef[ref] : undefined;
};

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const urlQuery = searchParams.get("url");
  const refQuery = searchParams.get("ref");

  const url = new URL(urlQuery as string);
  const tagId = getTagId(refQuery as refProps);

  if (!url) {
    return NextResponse.json({ error: "Missing URL" });
  }

  if (!refQuery) {
    return NextResponse.json({ error: "Missing ref" });
  }

  if (!tagId) {
    return NextResponse.json({ error: "Invalid ref" });
  }

  if (
    url.hostname.endsWith("ray.so") ||
    url.hostname.includes("raycastapp.vercel.app") ||
    url.hostname === "localhost"
  ) {
    const link = await dub.links.create({
      url: url.href,
      domain: "go.ray.so",
      tagIds: [tagId],
    });
    return NextResponse.json({ link: `https://ray.so/${link.key}` });
  }

  return NextResponse.json({ error: "Unable to shorten this link" }, { status: 400 });
}
