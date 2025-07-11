import clsx from "clsx";
import { useState, useRef, useEffect } from "react";

type NavDropdownButton = {
  label?: React.ReactNode;
  options: { label?: string; icon?: React.ReactNode; onClick: () => void }[];
} & React.ComponentProps<"button">;

export function NavDropdownButton({ label, options }: NavDropdownButton) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Fecha o menu ao clicar fora
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className={clsx(
          "flex justify-center items-center mx-3",
          "bg-violet-100 w-10 h-10 rounded-xl",
          "text-violet-800",
          "hover:bg-violet-300 transition",
          "dark:hover:bg-slate-700",
          "dark:bg-dark-btn-background dark:[&_svg]:text-background",
          "hover:cursor-pointer"
        )}
      >
        {label}
      </button>

      <div
        className={clsx(
          "absolute left-1/2 -translate-x-1/2 mt-2 w-fit rounded-md bg-white shadow-lg overflow-hidden",
          "flex flex-col",
          "transition-all origin-top duration-500",
          isOpen
            ? "opacity-100 scale-y-100 max-h-96"
            : "opacity-0 max-h-0 pointer-events-none"
        )}
      >
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => {
              option.onClick();
              setIsOpen(false);
            }}
            className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-violet-100 hover:cursor-pointer"
          >
            {option.label}
            {option.icon}
          </button>
        ))}
      </div>
    </div>
  );
}
