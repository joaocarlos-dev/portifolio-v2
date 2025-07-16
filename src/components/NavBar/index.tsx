"use client";

import {
  LanguagesIcon,
  MenuIcon,
  MoonStarIcon,
  SunIcon,
  XIcon,
} from "lucide-react";
import { NavButton } from "./NavButton";
import clsx from "clsx";
import { useState } from "react";
import Link from "next/link";
import { GrGithub } from "react-icons/gr";
import { LiaLinkedinIn } from "react-icons/lia";
import { NavDropdownButton } from "./NavDropdownButton";
import { useTranslation } from "react-i18next";
import "../../locales/i18n";
import { useTheme } from "@/app/providers/ThemeProvider";

interface NavLinksProps {
  t: (key: string) => string;
}

export function NavLinks({ t }: NavLinksProps) {
  const linkClasses = clsx(
    "px-3",
    "flex items-center justify-start gap-2 cursor-pointer",
    "text-violet-100 font-semibold text-[0.7rem]",
    "md:text-[0.7rem]",
    "transition ease-in-out duration-400",
    "hover:bg-violet-400 md:rounded-2xl rounded-xl py-1",
    "md:dark:text-dark-text",
    "dark:hover:bg-violet-800 md:dark:hover:bg-violet-200"
  );

  return (
    <div
      className={clsx(
        "flex flex-col gap-4 mt-15 ",
        "md:flex md:flex-row md:mt-0 md:gap-1 md:flex-wrap md:pl-8"
      )}
    >
      <Link className={linkClasses} href={"about"}>
        {t("about")}
      </Link>
      <Link className={linkClasses} href={"experiences"}>
        {t("experiences")}
      </Link>
      <Link className={linkClasses} href={"projects"}>
        {t("projects")}
      </Link>
      <Link className={linkClasses} href={"contact"}>
        {t("contact")}
      </Link>
      <Link className={linkClasses} href={"curriculum"}>
        {t("curriculum")}
      </Link>
    </div>
  );
}

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();

  const changeLanguage = (lng: string | undefined) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav>
      <div className="flex justify-center pt-5">
        <div
          className={clsx(
            "h-screen w-1/2 bg-nav-background absolute top-0 left-0",
            "transition-transform duration-500 transform",
            "z-50 flex flex-col items-center p-4",
            "dark:bg-dark-background dark:shadow-2xl",
            isOpen ? "translate-y-0" : "-translate-y-full"
          )}
        >
          <div className="h-full flex flex-col justify-between items-center">
            <div className="w-full flex justify-end">
              <NavButton
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                <XIcon />
              </NavButton>
            </div>

            <NavLinks t={t} />

            <div className="flex mb-4">
              <NavButton>
                <a target="_blank" href={"https://github.com/joaocarlos-dev"}>
                  <GrGithub size={30} />
                </a>
              </NavButton>
              <NavButton>
                <a
                  target="_blank"
                  href={
                    "https://www.linkedin.com/in/joao-henrique-jorge-carlos/"
                  }
                >
                  <LiaLinkedinIn size={30} />
                </a>
              </NavButton>
            </div>
          </div>
        </div>

        <div
          className={clsx(
            "bg-nav-background",
            "w-[80%] h-12 rounded-3xl",
            "flex flex-row items-center justify-between",
            "dark:bg-dark-nav-background"
          )}
        >
          <div className="md:hidden">
            <NavButton
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              <MenuIcon />
            </NavButton>
          </div>

          <div className="hidden md:flex md:flex-1 h-full">
            <NavLinks t={t} />
          </div>

          <div className="flex z-10 ">
            <NavDropdownButton
              label={<LanguagesIcon />}
              options={[
                {
                  label: "EN",
                  onClick: () => {
                    changeLanguage("en");
                  },
                },
                {
                  label: "PT",
                  onClick: () => {
                    changeLanguage("pt");
                  },
                },
              ]}
            />
            <NavButton onClick={toggleTheme}>
              {theme === "light" ? <SunIcon /> : <MoonStarIcon />}
            </NavButton>
          </div>
        </div>
      </div>
    </nav>
  );
}
