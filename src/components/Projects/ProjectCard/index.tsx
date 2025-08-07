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
        "bg-gradient-to-t from-pink-400 via-purple-400 to-blue-500",
        "w-70 h-[350px] rounded-4xl hover:cursor-pointer hover:scale-105",
        "shadow shadow-black"
      )}
    >
      <div className="relative w-full h-[50%]">
        <Image
          src={imgUrl}
          alt={alt}
          fill
          className="object-cover rounded-4xl"
        />
      </div>
      <div className="w-full flex flex-col items-center justify-center">
        <p className="text-white font-bold text-[20px] text-center px-2">
          <TranslatedText ns="projects" tKey={projectTitle} />
        </p>
        <p className="text-white font-bold text-[13px] text-center w-[90%] line-clamp-4">
          <TranslatedText ns="projects" tKey={projectDescription} />
        </p>
        <div className="flex [&_svg]:text-white text-4xl pt-8 gap-1">
          {icons.map((Icon, index) => (
            <span key={index}>{Icon}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
