/**
 * [INPUT]: 依赖 next/server、../../util/languages、../../store/themes、../../store/padding 提供的能力
 * [OUTPUT]: 对外导出 GET 等接口
 * [POS]: app/api/config/route.ts 在 app/api/config 中承担职责：API 边界层的请求处理单元，连接外部输入与内部能力
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */
import { NextResponse } from "next/server";
import { LANGUAGES } from "../../util/languages";
import { THEMES } from "../../store/themes";
import { PADDING_OPTIONS } from "../../store/padding";

export async function GET() {
  const languages = Object.entries(LANGUAGES).map(([key, { src, ...rest }]) => ({ id: key, ...rest }));
  const themes = Object.entries(THEMES).map(([key, { syntax, icon, ...rest }]) => ({ ...rest }));
  const padding = PADDING_OPTIONS;
  return NextResponse.json({ languages, themes, padding });
}
