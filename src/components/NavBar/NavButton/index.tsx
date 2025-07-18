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
        "dark:[&_svg]:text-white [&_svg]:text-dark-background",
        "md:bg-white dark:bg-dark-background"
      )}
      {...props}
    >
      {children}
    </button>
  );
}
