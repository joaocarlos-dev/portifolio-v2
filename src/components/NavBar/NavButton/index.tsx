import clsx from "clsx";

type NavButtonProps = {} & React.ComponentProps<"button">;

export function NavButton({ children, ...props }: NavButtonProps) {
  return (
    <button
      className={clsx(
        "flex justify-center items-center",
        "w-10 h-10 mx-3 rounded-xl",
        "hover:cursor-pointer",
        "transition ease-in-out duration-400",
        "hover:bg-violet-300",
        "dark:hover:bg-dark-background",
        "dark:[&_svg]:text-white"
      )}
      {...props}
    >
      {children}
    </button>
  );
}
