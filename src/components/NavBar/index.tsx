"use client";

import {
  BriefcaseIcon,
  CodeIcon,
  FileTextIcon,
  LanguagesIcon,
  MailIcon,
  MenuIcon,
  MoonStarIcon,
  SunIcon,
  UserCircleIcon,
  XIcon,
} from "lucide-react";
import { NavButton } from "./NavButton";
import clsx from "clsx";
import { useEffect, useState } from "react";
import Link from "next/link";
import { GrGithub } from "react-icons/gr";
import { LiaLinkedinIn } from "react-icons/lia";
import { NavDropdownButton } from "./NavDropdownButton";

export function NavLinks() {
  const linkClasses = clsx(
    "px-3",
    "flex items-center justify-start gap-2 cursor-pointer",
    "text-violet-100 font-semibold text-xl",
    "md:text-[1rem]",
    "transition ease-in-out duration-400",
    "hover:bg-violet-300 md:rounded-2xl"
  );

  return (
    <div
      className={clsx(
        "flex flex-col gap-4 mt-15",
        "md:flex md:flex-row md:mt-0 md:gap-1 md:flex-wrap"
      )}
    >
      <Link className={linkClasses} href={"#"}>
        <UserCircleIcon />
        About
      </Link>
      <Link className={linkClasses} href={"#"}>
        <BriefcaseIcon />
        Experiences
      </Link>
      <Link className={linkClasses} href={"#"}>
        <CodeIcon />
        Projects
      </Link>
      <Link className={linkClasses} href={"#"}>
        <MailIcon />
        Contact
      </Link>
      <Link className={linkClasses} href={"#"}>
        <FileTextIcon />
        Curriculum
      </Link>
    </div>
  );
}

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, []);

  return (
    <nav>
      <div className="flex justify-center pt-5">
        <div
          className={clsx(
            "h-screen w-1/2 bg-violet-500 absolute top-0 left-0",
            "transition-transform duration-500 transform",
            "z-50 flex flex-col items-center p-4",
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

            <NavLinks />

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
            "bg-violet-500",
            "w-[90%] h-16 rounded-3xl",
            "flex flex-row items-center justify-between"
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
                { label: "EN", onClick: () => {} },
                { label: "PT", onClick: () => {} },
              ]}
            />
            <NavDropdownButton
              label={<MoonStarIcon />}
              options={[
                { icon: <MoonStarIcon />, onClick: () => {} },
                { icon: <SunIcon />, onClick: () => {} },
              ]}
            ></NavDropdownButton>
          </div>
        </div>
      </div>
    </nav>
  );
}
