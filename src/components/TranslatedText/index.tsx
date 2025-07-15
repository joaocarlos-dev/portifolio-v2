"use client";

import { useTranslation } from "react-i18next";

type TranslatedTextProps = {
  tKey: string;
  components?: {
    [key: string]: React.ReactNode;
  };
};

export function TranslatedText({ tKey }: TranslatedTextProps) {
  const { t } = useTranslation();

  return <>{t(tKey)}</>;
}
