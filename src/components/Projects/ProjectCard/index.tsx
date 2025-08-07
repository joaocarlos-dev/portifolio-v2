import { TranslatedText } from "@/components/TranslatedText";
import clsx from "clsx";
import Image from "next/image";
import { RiNextjsFill, RiReactjsFill } from "react-icons/ri";

export function ProjectCard() {
  return (
    <div
      className={clsx(
        "bg-gradient-to-t from-pink-400 via-purple-400 to-blue-500",
        "w-60 h-[300px] rounded-4xl hover:cursor-pointer hover:scale-105",
        "shadow shadow-black"
      )}
    >
      <div className="relative w-full h-[50%]">
        <Image
          src="/images/img_teste.jpg"
          alt="teste"
          fill
          className="object-cover rounded-4xl"
        />
      </div>
      <div className="w-full flex flex-col items-center justify-center">
        <p className="text-white font-bold text-[20px]">
          <TranslatedText ns="projects" tKey={"items.project_1.title"} />
        </p>
        <p className="text-white font-bold text-[13px] text-center w-[90%] line-clamp-3">
          <TranslatedText ns="projects" tKey={"items.project_1.description"} />
        </p>
        <div className="flex [&_svg]:text-white text-4xl pt-4 gap-1">
          <RiNextjsFill />
          <RiReactjsFill />
        </div>
      </div>
    </div>
  );
}
