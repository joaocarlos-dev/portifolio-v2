import { TranslatedText } from "@/components/TranslatedText";
import clsx from "clsx";
import Image from "next/image";
import { ReactNode } from "react";

type ProjectCardProps = {
  imgUrl: string;
  alt: string;
  projectTitle: string;
  projectDescription: string;
  icons: ReactNode[];
};

export function ProjectCard({
  imgUrl,
  alt,
  projectTitle,
  projectDescription,
  icons,
}: ProjectCardProps) {
  return (
    <div
      className={clsx(
        "bg-[radial-gradient(circle,_#3b82f6,_#8b5cf6,_#ec4899)]",
        "w-70 h-[350px] rounded-4xl hover:cursor-pointer hover:scale-105",
        "shadow shadow-black",
        "flex flex-col"
      )}
    >
      <div className="relative w-full h-[50%]">
        <Image
          src={imgUrl}
          alt={alt}
          fill
          className="object-cover rounded-t-4xl"
        />
      </div>

      <div className="flex flex-col justify-between flex-1 px-3 py-2">
        <div className="flex flex-col items-center text-center gap-1">
          <p className="text-white font-bold text-[20px] px-2">
            <TranslatedText ns="projects" tKey={projectTitle} />
          </p>
          <p className="text-white font-bold text-[13px] w-[90%] line-clamp-4">
            <TranslatedText ns="projects" tKey={projectDescription} />
          </p>
        </div>

        <div className="flex justify-center gap-2 pt-4 [&_svg]:text-white text-3xl">
          {icons.map((Icon, index) => (
            <span key={index}>{Icon}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
