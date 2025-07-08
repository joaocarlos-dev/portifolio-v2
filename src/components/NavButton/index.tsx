type NavButtonProps = {} & React.ComponentProps<"button">;

export function NavButton({}: NavButtonProps) {
  return (
    <button className="bg-violet-100 w-10 h-10 ml-3 rounded-xl [&_svg]:w-10" />
  );
}
