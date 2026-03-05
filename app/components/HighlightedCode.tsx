/**
 * [INPUT]: 依赖 classnames、react、../util/languages、./Editor.module.css 提供的能力
 * [OUTPUT]: 对外导出 default 等接口
 * [POS]: app/components/HighlightedCode.tsx 在 app/components 中承担职责：UI 渲染层组件，组合状态与视图输出
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */
import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { Language, LANGUAGES } from "../util/languages";

import styles from "./Editor.module.css";
import { highlightedLinesAtom, highlighterAtom, loadingLanguageAtom } from "../store";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { themeDarkModeAtom, themeAtom } from "../store/themes";

type PropTypes = {
  selectedLanguage: Language | null;
  code: string;
};

const HighlightedCode: React.FC<PropTypes> = ({ selectedLanguage, code }) => {
  const [highlightedHtml, setHighlightedHtml] = useState("");
  const highlighter = useAtomValue(highlighterAtom);
  const setIsLoadingLanguage = useSetAtom(loadingLanguageAtom);
  const highlightedLines = useAtomValue(highlightedLinesAtom);
  const darkMode = useAtomValue(themeDarkModeAtom);
  const theme = useAtomValue(themeAtom);
  const themeName = theme.id === "tailwind" ? (darkMode ? "tailwind-dark" : "tailwind-light") : "css-variables";

  useEffect(() => {
    const generateHighlightedHtml = async () => {
      if (!highlighter || !selectedLanguage || selectedLanguage === LANGUAGES.plaintext) {
        return code.replace(/[\u00A0-\u9999<>\&]/g, (i) => `&#${i.charCodeAt(0)};`);
      }

      const loadedLanguages = highlighter.getLoadedLanguages() || [];
      const hasLoadedLanguage = loadedLanguages.includes(selectedLanguage.name.toLowerCase());

      if (!hasLoadedLanguage && selectedLanguage.src) {
        setIsLoadingLanguage(true);
        await highlighter.loadLanguage(selectedLanguage.src);
        setIsLoadingLanguage(false);
      }

      let lang = selectedLanguage.name.toLowerCase();
      if (lang === "typescript") {
        lang = "tsx";
      }

      return highlighter.codeToHtml(code, {
        lang: lang,
        theme: themeName,
        transformers: [
          {
            line(node, line) {
              node.properties["data-line"] = line;
              if (highlightedLines.includes(line)) this.addClassToHast(node, "highlighted-line");
            },
          },
        ],
      });
    };

    generateHighlightedHtml().then((newHtml) => {
      setHighlightedHtml(newHtml);
    });
  }, [code, selectedLanguage, highlighter, setIsLoadingLanguage, setHighlightedHtml, highlightedLines, themeName]);

  return (
    <div
      className={classNames(styles.formatted, selectedLanguage === LANGUAGES.plaintext && styles.plainText)}
      dangerouslySetInnerHTML={{
        __html: highlightedHtml,
      }}
    />
  );
};

export default HighlightedCode;
