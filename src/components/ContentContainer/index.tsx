import clsx from "clsx";

type ContentContainerProps = {
  children: React.ReactNode;
};

export function ContentContainer({ children }: ContentContainerProps) {
  return (
    <div
      className={clsx(
        "fixed flex",
        "bg-nav-background dark:bg-dark-nav-background",
        "overflow-hidden",
        "mt-8",
        "rounded-2xl"
      )}
    >
      <div className="w-[95vw] h-[80vh] flex justify-center">{children}</div>
    </div>
  );
}
