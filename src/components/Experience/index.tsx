"use client";

import clsx from "clsx";
import { TranslatedText } from "../TranslatedText";
import { FloatingImage } from "../About/FloatingImage";
import { ExperienceCard } from "./ExperienceCard";
import { useTranslation } from "react-i18next";

export function Experience() {
  const { t } = useTranslation("experiences");

  const InovaiDescription = t("items.inovai.description", {
    returnObjects: true,
  }) as string[];

  const univendasDescription = t("items.univendas.description", {
    returnObjects: true,
  }) as string[];

  return (
    <div className="pt-50 md:pt-80 min-h-screen">
      <div className="flex items-center">
        <h1
          className={clsx(
            "text-dark-background dark:text-white",
            "text-4xl md:text-7xl pl-4 md:pl-0"
          )}
        >
          <TranslatedText ns="experiences" tKey={"title"} />
        </h1>
        <div className="pl-40 hidden md:flex">
          <FloatingImage
            src={"/images/education.png"}
            alt={"education_art"}
            width={300}
            height={300}
          />
        </div>
      </div>
      <div className="mt-4 h-[2px] w-[90%] mx-4 bg-pink-400 md:w-[100%] md:mx-0 rounded-full" />
      <div className="flex flex-col pt-15 pb-15 gap-5">
        <ExperienceCard
          companyTitle={"items.inovai.title"}
          companyStartDate={"items.inovai.start_date"}
          companyEndDate={"items.inovai.end_date"}
          companyDescription={InovaiDescription}
          jobTitle={"items.inovai.jobTitle"}
        />

        <ExperienceCard
          companyTitle={"items.univendas.title"}
          companyStartDate={"items.univendas.start_date"}
          companyEndDate={"items.univendas.end_date"}
          companyDescription={univendasDescription}
          jobTitle={"items.univendas.jobTitle"}
        />
      </div>
    </div>
  );
}
