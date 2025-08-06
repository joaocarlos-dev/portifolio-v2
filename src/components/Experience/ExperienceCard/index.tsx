"use client";

import { TranslatedText } from "@/components/TranslatedText";
import clsx from "clsx";
import { ChevronDownIcon } from "lucide-react";
import { useState } from "react";

type ExperienceCardType = {
  companyTitle: string;
  companyDate: string;
  companyDescription: string;
};

export function ExperienceCard({
  companyTitle,
  companyDescription,
  companyDate,
}: ExperienceCardType) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={clsx(
        "w-[90%] md:w-full mx-auto rounded-3xl overflow-hidden",
        "bg-gradient-to-r from-blue-500 via-purple-400 to-pink-400",
        "transition-all duration-700 ease-in-out hover:cursor-pointer shadow shadow-black",
        isOpen ? "max-h-[500px]" : "max-h-[90px]"
      )}
      onClick={() => setIsOpen((prev) => !prev)}
    >
      <div className="h-[90px] flex px-6 items-center justify-between">
        <h3 className="text-white font-semibold text-xl">
          <TranslatedText ns="experiences" tKey={companyTitle} />
        </h3>
        <div className="flex gap-4">
          <p className="text-slate-800">
            <TranslatedText ns="experiences" tKey={companyDate} />
          </p>
          <ChevronDownIcon
            className={clsx(
              "ml-auto transition-transform duration-500",
              isOpen && "rotate-180",
              "text-slate-800"
            )}
          />
        </div>
      </div>

      {isOpen && (
        <div className="bg-white px-6 py-4 text-dark-background">
          <p className="text-sm md:text-base">
            <TranslatedText ns="experiences" tKey={companyDescription} />
          </p>
        </div>
      )}
    </div>
  );
}
