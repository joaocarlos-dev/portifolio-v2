"use client";

import { TranslatedText } from "@/components/TranslatedText";
import clsx from "clsx";
import { ChevronDownIcon } from "lucide-react";
import { useEffect, useState } from "react";

type ExperienceCardType = {
  companyTitle: string;
  jobTitle: string;
  companyStartDate: string;
  companyEndDate: string;
  companyDescription: string[];
};

export function ExperienceCard({
  companyTitle,
  jobTitle,
  companyDescription,
  companyStartDate,
  companyEndDate,
}: ExperienceCardType) {
  const [isOpen, setIsOpen] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
    } else {
      const timeout = setTimeout(() => {
        setShouldRender(false);
      }, 500);

      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

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
        <div className="flex flex-col">
          <h3 className="text-white font-semibold text-xl">
            <TranslatedText ns="experiences" tKey={companyTitle} />
          </h3>
          <h3 className="text-white font-semibold text-[1rem]">
            <TranslatedText ns="experiences" tKey={jobTitle} />
          </h3>
        </div>
        <div className="flex gap-4">
          <p className="text-slate-800">
            <TranslatedText ns="experiences" tKey={companyStartDate} />
          </p>
          -
          <p className="text-slate-800">
            <TranslatedText ns="experiences" tKey={companyEndDate} />
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

      {shouldRender && (
        <div
          className={clsx(
            "px-6 py-4 text-dark-background bg-white transition-opacity duration-500",
            isOpen ? "opacity-100" : "opacity-0"
          )}
        >
          <ul className="list-disc list-inside text-sm md:text-base space-y-1">
            {companyDescription.map((line, index) => (
              <li key={index}>
                <TranslatedText ns="experiences" tKey={line} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
