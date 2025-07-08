type ContainerProps = {
  children: React.ReactNode;
};

export function Container({ children }: ContainerProps) {
  return (
    <div className="bg-slate-100 min-h-screen">
      <div className="max-w-screen-lg mx-auto ">{children}</div>
    </div>
  );
}
