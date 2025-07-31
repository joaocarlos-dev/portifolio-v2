import clsx from "clsx";

type ContentContainerProps = {
  children: React.ReactNode;
};

export function ContentContainer({ children }: ContentContainerProps) {
  return (
    <div
      className={clsx(
        "flex",
        "bg-nav-background dark:bg-dark-nav-background",
        "mt-8",
        "rounded-2xl"
      )}
    >
      <div className="w-full max-w-screen-lg flex justify-center">
        {children}
      </div>
    </div>
  );
}
