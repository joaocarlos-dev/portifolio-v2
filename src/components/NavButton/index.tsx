import clsx from "clsx";

type NavButtonProps = {} & React.ComponentProps<"button">;

export function NavButton({ ...props }: NavButtonProps) {
  return (
    <button
      className={clsx(
        "flex justify-center items-center",
        "bg-violet-100 w-10 h-10 mx-3 rounded-xl",
        "[&_svg]:text-violet-800",
        "hover:cursor-pointer"
      )}
      {...props}
    />
  );
}
