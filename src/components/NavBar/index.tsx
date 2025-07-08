import { HamburgerIcon } from "lucide-react";
import { NavButton } from "../NavButton";

export function NavBar() {
  return (
    <nav>
      <div className="flex justify-center mt-5">
        <div className="bg-violet-500 w-[90%] h-16 rounded-3xl flex flex-row items-center">
          <NavButton>
            <HamburgerIcon />
          </NavButton>
        </div>
      </div>
    </nav>
  );
}
