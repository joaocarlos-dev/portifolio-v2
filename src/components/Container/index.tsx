type ContainerProps = {
  children: React.ReactNode;
};

export function Container({ children }: ContainerProps) {
  return (
    <div className="bg-background min-h-screen dark:bg-dark-background">
      <div className="z-10 max-w-screen-lg mx-auto">{children}</div>
    </div>
  );
}
