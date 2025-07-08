import { LanguagesIcon, MenuIcon, MoonStarIcon } from "lucide-react";
import { NavButton } from "../NavButton";
import clsx from "clsx";

export function NavBar() {
  return (
    <nav>
      <div className="flex justify-center mt-5">
        <div
          className={clsx(
            "bg-violet-500",
            "w-[90%] h-16 rounded-3xl",
            "flex flex-row items-center justify-between"
          )}
        >
          <NavButton>
            <MenuIcon />
          </NavButton>
          <div className="flex ">
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
