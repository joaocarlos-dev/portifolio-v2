import clsx from "clsx";

type NavButtonProps = {} & React.ComponentProps<"button">;

export function NavButton({ children, ...props }: NavButtonProps) {
  return (
    <button
      className={clsx(
        "flex justify-center items-center",
        "bg-violet-100 w-10 h-10 mx-3 rounded-xl",
        "[&_svg]:text-violet-800",
        "hover:cursor-pointer",
        "transition ease-in-out duration-400",
        "hover:bg-violet-300",
        "dark:bg-dark-btn-background dark:[&_svg]:text-dark-svg dark:hover:bg-dark-background"
      )}
      {...props}
    >
      {children}
    </button>
  );
}
