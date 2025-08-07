import clsx from "clsx";
import { TranslatedText } from "../TranslatedText";
import { FloatingImage } from "../About/FloatingImage";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  return (
    <div className="pt-50 md:pt-60 min-h-screen">
      <div className="flex items-center">
        <h1
          className={clsx(
            "text-dark-background dark:text-white",
            "text-4xl md:text-7xl pl-4 md:pl-0"
          )}
        >
          <TranslatedText ns="projects" tKey={"title"} />
        </h1>
        <div className="pl-40 hidden md:flex">
          <FloatingImage
            src={"/images/notebook.png"}
            alt={"notebook_art"}
            width={300}
            height={300}
          />
        </div>
      </div>
      <div className="mt-4 h-[2px] w-[90%] mx-4 bg-pink-400 md:w-[100%] md:mx-0 rounded-full" />
      <div
        className={clsx(
          "py-15 flex flex-wrap justify-center gap-5 md:gap-10 w-full"
        )}
      >
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
}
