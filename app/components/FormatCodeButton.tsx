/**
 * [INPUT]: 依赖 @raycast/icons、../util/formatCode、jotai、../store/code 提供的能力
 * [OUTPUT]: 对外导出 default 等接口
 * [POS]: app/components/FormatCodeButton.tsx 在 app/components 中承担职责：UI 渲染层组件，组合状态与视图输出
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */
"use client";

import { WandIcon } from "@raycast/icons";
import formatCode, { formatterSupportedLanguages } from "../util/formatCode";
import { useAtom } from "jotai";
import { codeAtom, selectedLanguageAtom } from "../store/code";
import useHotkeys from "@/utils/useHotkeys";
import { Button } from "@/components/button";
import { toast } from "@/components/toast";
import { cn } from "@/utils/cn";
import { useSyncExternalStore } from "react";

const FormatButton: React.FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useAtom(selectedLanguageAtom);
  const [code, setCode] = useAtom(codeAtom);
  const isClient = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );

  const handleFormatCode = () => {
    const isSupportedLanguage = formatterSupportedLanguages.includes(selectedLanguage?.name || "");
    if (!isSupportedLanguage) {
      return toast.error("Formatting is not supported for this language");
    }
    if (!code || !selectedLanguage) {
      return;
    }
    const language = selectedLanguage;
    toast.promise(
      formatCode(code, language).then((formatted) => {
        setCode(formatted);
        // Sometimes hljs thinks the formatted code is a different language
        // than the original, so we enforce the original language here
        setSelectedLanguage(language);
      }),
      {
        loading: "Formatting code...",
        success: "Formatted code!",
        error: (error) => {
          const errorMessage = error.message;
          return {
            message: "Code formatting failed",
            description: () => (
              <pre className="w-full overflow-auto text-xs scrollbar-hide bg-gray-a3 p-2.5 rounded max-w-[300px]">
                <code className="w-full">{errorMessage}</code>
              </pre>
            ),
          };
        },
      },
    );
  };

  useHotkeys("shift+option+f", (event) => {
    event.preventDefault();
    handleFormatCode();
  });

  if (!isClient) {
    return null;
  }

  return (
    <Button
      onClick={handleFormatCode}
      variant="transparent"
      className={cn(
        "hidden",
        selectedLanguage && formatterSupportedLanguages.includes(selectedLanguage.name) && "md:inline-flex",
      )}
    >
      <WandIcon width={16} height={16} />
      Format Code
    </Button>
  );
};

export default FormatButton;
