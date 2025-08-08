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
import { GrDocument, GrGithub, GrMail } from "react-icons/gr";
import { LiaLinkedinIn } from "react-icons/lia";
import { NavDropdownButton } from "./NavDropdownButton";
import { useTranslation } from "react-i18next";
import "../../locales/i18n";
import { useTheme } from "@/app/providers/ThemeProvider";
import { TranslatedText } from "../TranslatedText";
import { usePathname } from "next/navigation";

export function NavLinks() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const getHref = (sectionId: string) => {
    return isHomePage ? `#${sectionId}` : `/#${sectionId}`;
  };

  const linkClasses = clsx(
    "px-3",
    "flex items-center justify-start gap-2 cursor-pointer",
    "text-violet-100 font-semibold text-[0.9rem]",
    "md:text-[1.1rem]",
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
        "md:flex md:flex-row md:mt-0 md:gap-20 md:flex-wrap md:pl-20 md:w-full"
      )}
    >
      <a className={linkClasses} href={getHref("about")}>
        <TranslatedText ns="navbar" tKey={"about"} />
      </a>
      <a className={linkClasses} href={getHref("experiences")}>
        <TranslatedText ns="navbar" tKey={"experiences"} />
      </a>
      <a className={linkClasses} href={getHref("projects")}>
        <TranslatedText ns="navbar" tKey={"projects"} />
      </a>
      <a className={linkClasses} href={getHref("contact")}>
        <TranslatedText ns="navbar" tKey={"contact"} />
      </a>
    </div>
  );
}

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const { i18n } = useTranslation();
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

            <NavLinks />

            <div className="flex flex-wrap mb-4 [&_svg]:text-white">
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
              <NavButton>
                <a
                  className="text-dark-background dark:text-white"
                  target="_blank"
                  href={"mailto:joaohenriquejorgecarlos@gmail.com"}
                >
                  <GrMail size={30} />
                </a>
              </NavButton>
              <NavButton>
                <a
                  className="text-dark-background dark:text-white"
                  target="_blank"
                  href={"https://flowcv.com/resume/t5l86svd7vvr"}
                >
                  <GrDocument size={30} />
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
            <NavLinks />
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
            <a
              className={clsx(
                "px-3",
                "flex items-center justify-start gap-2 cursor-pointer",
                "text-violet-100 font-semibold text-[0.9rem]",
                "md:text-[1.1rem]",
                "md:rounded-2xl rounded-xl py-1",
                "md:dark:text-dark-text text-dark-background"
              )}
              href="#"
            >
              {"< />"}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
