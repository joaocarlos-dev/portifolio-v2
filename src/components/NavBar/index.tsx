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
    "md:rounded-2xl rounded-xl py-1",
    "md:dark:text-dark-text text-dark-background",
    "md:dark:hover:bg-violet-200 md:dark:hover:bg-violet-200",
    ""
  );

  return (
    <div
      className={clsx(
        "flex flex-col gap-4 mt-15 ",
        "md:flex md:flex-row md:mt-0 md:gap-1 md:flex-wrap md:pl-8"
      )}
    >
      <a className={linkClasses} href="#about">
        {t("about")}
      </a>
      <a className={linkClasses} href="#experiences">
        {t("experiences")}
      </a>
      <a className={linkClasses} href="#projects">
        {t("projects")}
      </a>
      <a className={linkClasses} href="#contact">
        {t("contact")}
      </a>
      <a className={linkClasses} href="#curriculum">
        {t("curriculum")}
      </a>
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
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md">
      <div className="flex justify-center pt-5">
        <div
          className={clsx(
            "h-screen w-1/2 bg-background absolute top-0 left-0",
            "transition-transform duration-500 transform",
            "z-50 flex flex-col items-center p-4",
            "bg-dark-background shadow-2xl ",
            isOpen ? "translate-y-0" : "-translate-y-full",
            isOpen ? "shadow-black" : "shadow-none"
          )}
        >
          <div className="h-full flex flex-col justify-between items-center">
            <div className="w-full flex justify-end">
              <NavButton
                onClick={() => {
                  setIsOpen(false);
                }}
                className="text-white hover:cursor-pointer"
              >
                <XIcon />
              </NavButton>
            </div>

            <NavLinks t={t} />

            <div className="flex mb-4 [&_svg]:text-white">
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
            "w-[90vw] mx-auto h-12 rounded-3xl",
            "flex flex-row items-center justify-between",
            "md:dark:bg-dark-nav-background",
            "sm:bg-dark-background"
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
