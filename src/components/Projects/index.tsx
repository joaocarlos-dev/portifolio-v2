import clsx from "clsx";
import { TranslatedText } from "../TranslatedText";
import { FloatingImage } from "../About/FloatingImage";
import { ProjectCard } from "./ProjectCard";
import {
  RiFirebaseFill,
  RiFlutterFill,
  RiNextjsFill,
  RiNodejsFill,
  RiReactjsFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import {
  SiDart,
  SiFastapi,
  SiPython,
  SiSqlite,
  SiTypescript,
} from "react-icons/si";

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
        <ProjectCard
          imgUrl={"/images/projects/the_blog.png"}
          alt={"the_blog_project_image"}
          projectTitle={"items.the_blog.title"}
          projectDescription={"items.the_blog.description"}
          icons={[
            <RiNextjsFill key="next" />,
            <RiReactjsFill key="react" />,
            <RiNodejsFill key="node" />,
            <SiTypescript key="typescript" />,
            <RiTailwindCssFill key="tailwind" />,
            <SiSqlite key="sqlite" />,
          ]}
        />
        <ProjectCard
          imgUrl={"/images/projects/maismix.png"}
          alt={"maismix_project_image"}
          projectTitle={"items.maismix.title"}
          projectDescription={"items.maismix.description"}
          icons={[
            <RiFlutterFill key="flutter" />,
            <SiDart key="dart" />,
            <RiFirebaseFill key="firebase" />,
          ]}
        />
        <ProjectCard
          imgUrl={"/images/projects/algvis.png"}
          alt={"algvis_project_image"}
          projectTitle={"items.algvis.title"}
          projectDescription={"items.algvis.description"}
          icons={[
            <RiNextjsFill key="next" />,
            <RiReactjsFill key="react" />,
            <SiTypescript key="typescript" />,
            <RiTailwindCssFill key="tailwind" />,
            <SiPython key="python" />,
            <SiFastapi key="fastapi" />,
          ]}
        />
      </div>
    </div>
  );
}
