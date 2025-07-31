import clsx from "clsx";
import { TranslatedText } from "../TranslatedText";
import { FloatingImage } from "./FloatingImage";

export function About() {
  return (
    <div className="relative min-h-screen flex justify-center pt-20">
      <div
        className={clsx(
          "hidden md:flex absolute bottom-24 left-1/2 transform -translate-x-1/2",
          "items-center justify-center z-0"
        )}
      >
        <div
          className={clsx(
            "text-dark-background dark:text-white",
            "text-xl font-bold tracking-widest select-none rotate-90 whitespace-nowrap"
          )}
        >
          {"-".repeat(80)}
        </div>
      </div>

      <div
        className={clsx(
          "grid grid-cols-1 md:grid-cols-2",
          "w-full px-8 md:px-16 py-10 gap-10 z-10",
          "text-dark-background dark:text-white"
        )}
      >
        <div className="md:row-start-1 md:col-start-1 pr-5 lg:pr-20">
          <h2 className="text-2xl font-bold mb-4 md:pt-15">
            <TranslatedText tKey={"about_me"} />
          </h2>
          <p className="text-[1.1rem] text-justify font-sans">
            <TranslatedText tKey={"about_me_text"} />
          </p>
        </div>

        <div className="md:row-start-1 md:col-start-2">
          <FloatingImage
            src={"/images/notebook.png"}
            alt={"notebook_art"}
            width={350}
            height={350}
          />
        </div>

        <div className="md:row-start-2 md:col-start-2 pl-5 lg:pl-20">
          <h2 className="text-2xl font-bold mb-4 md:pt-15">
            <TranslatedText tKey={"about_me_education"} />
          </h2>
          <p className="text-[1.1rem] font-mono text-justify">
            <TranslatedText tKey={"about_me_education_text"} />
          </p>
        </div>
        <div className="md:row-start-2 md:col-start-1">
          <FloatingImage
            src={"/images/education.png"}
            alt={"education_art"}
            width={350}
            height={350}
          />
        </div>

        <div className="md:row-start-3 md:col-start-1 pr-5 lg:pr-20">
          <h2 className="text-2xl font-bold mb-4 md:pt-8">
            <TranslatedText tKey={"about_me_hobby"} />
          </h2>
          <p className="text-[1.1rem] font-mono text-justify">
            <TranslatedText tKey={"about_me_hobby_text"} />
          </p>
        </div>

        <div className="md:row-start-3 md:col-start-2">
          <FloatingImage
            src={"/images/hobby.png"}
            alt={"hobby_art"}
            width={240}
            height={240}
          />
        </div>
      </div>
    </div>
  );
}
