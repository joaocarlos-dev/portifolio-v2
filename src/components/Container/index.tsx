import Image from "next/image";

type ContainerProps = {
  children: React.ReactNode;
};

export function Container({ children }: ContainerProps) {
  return (
    <div className="bg-background min-h-screen dark:bg-dark-background overflow-hidden">
      <div className="max-w-screen-lg mx-auto ">
        <Image
          src={"/images/background.png"}
          alt={"binary_background"}
          fill={true}
          className="opacity-10 dark:opacity-50 object-cover z-0 mix-blend-multiply"
        />
        <div className="relative z-10 max-w-screen-lg mx-auto">{children}</div>
      </div>
    </div>
  );
}
