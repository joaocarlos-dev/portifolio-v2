import Image from "next/image";
import { TranslatedText } from "../TranslatedText";
import clsx from "clsx";
import { GrDocument, GrGithub, GrLinkedin, GrMail } from "react-icons/gr";

export function Header() {
  return (
    <div className="flex flex-col md:flex-row pt-30 md:items-center md:justify-center gap-25">
      <div className=" md:w-[70%] items-start justify-start pl-6">
        <div>
          <h1 className="text-dark-background dark:text-white text-5xl md:text-8xl font-thin">
            <TranslatedText ns="common" tKey={"greetings_hello"} />
          </h1>
          <h1 className="text-dark-background dark:text-white text-5xl md:text-8xl font-thin">
            <TranslatedText ns="common" tKey={"greetings_hello_2"} />
          </h1>
          <div className="hidden md:flex md:flex-row gap-5 pt-5">
            <button>
              <a
                className="text-dark-background dark:text-white"
                target="_blank"
                href={"https://github.com/joaocarlos-dev"}
              >
                <GrGithub size={60} />
              </a>
            </button>
            <button>
              <a
                className="text-dark-background dark:text-white"
                target="_blank"
                href={"https://www.linkedin.com/in/joao-henrique-jorge-carlos/"}
              >
                <GrLinkedin size={60} />
              </a>
            </button>
            <button>
              <a
                className="text-dark-background dark:text-white"
                target="_blank"
                href={"mailto:joaohenriquejorgecarlos@gmail.com"}
              >
                <GrMail size={60} />
              </a>
            </button>
            <button>
              <a
                className="text-dark-background dark:text-white"
                target="_blank"
                href={"https://flowcv.com/resume/t5l86svd7vvr"}
              >
                <GrDocument size={60} />
              </a>
            </button>
          </div>
        </div>
      </div>
      <div className={clsx("flex items-center justify-center relative z-10")}>
        <Image
          src="/images/header_photo.png"
          alt="header_photo"
          width={250}
          height={250}
          className={clsx(
            "rounded-full ring-4",
            "ring-purple-400 shadow-[0_0_100px_#975eff]",
            "dark:ring-pink-300 dark:shadow-[0_0_50px_#ec4899]",
            "md:w-[450px]"
          )}
        />
      </div>
    </div>
  );
}
