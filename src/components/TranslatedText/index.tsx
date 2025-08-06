"use client";

import { useTranslation } from "react-i18next";

type TranslatedTextProps = {
  tKey: string;
  ns?: string;
  components?: {
    [key: string]: React.ReactNode;
  };
};

export function TranslatedText({ tKey, ns }: TranslatedTextProps) {
  const { t } = useTranslation(ns);

  return <>{t(tKey)}</>;
}
