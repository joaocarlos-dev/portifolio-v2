"use client";

import {
  BriefcaseIcon,
  CodeIcon,
  FileTextIcon,
  LanguagesIcon,
  MailIcon,
  MenuIcon,
  MoonStarIcon,
  UserCircleIcon,
  XIcon,
} from "lucide-react";
import { NavButton } from "../NavButton";
import clsx from "clsx";
import { useEffect, useState } from "react";
import Link from "next/link";

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, []);

  const linkClasses = clsx(
    "px-4",
    "flex items-center justify-start gap-2 cursor-pointer",
    "shrink-0",
    "text-violet-100 font-semibold text-md"
  );

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
          <div className="w-full flex justify-end">
            <NavButton
              onClick={() => {
                setIsOpen(false);
              }}
            >
              <XIcon />
            </NavButton>
          </div>

          <div className="flex flex-col gap-4 mt-15">
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
        </div>

        <div
          className={clsx(
            "bg-violet-500",
            "w-[90%] h-16 rounded-3xl",
            "flex flex-row items-center justify-between",
            "relative overflow-hidden"
          )}
        >
          <NavButton
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <MenuIcon />
          </NavButton>

          <div className="flex z-10">
            <NavButton>
              <LanguagesIcon />
            </NavButton>
            <NavButton>
              <MoonStarIcon />
            </NavButton>
          </div>
        </div>
      </div>
    </nav>
  );
}
