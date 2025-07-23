import Image from "next/image";
import { TranslatedText } from "../TranslatedText";

export function About() {
  return (
    <div className="relative min-h-screen flex justify-center pt-20">
      <div className="hidden md:flex absolute bottom-24 left-1/2 transform -translate-x-1/2 items-center justify-center z-0">
        <div className="text-white text-xl font-bold tracking-widest select-none rotate-90 whitespace-nowrap">
          {"-".repeat(80)}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 w-full px-8 md:px-16 py-10 gap-10 text-white z-10 ">
        <div className="md:row-start-1 md:col-start-1 pr-5">
          <h2 className="text-2xl font-bold mb-4 md:pt-15">
            <TranslatedText tKey={"about_me"} />
          </h2>
          <p className="text-[1.1rem] text-justify font-sans">
            <TranslatedText tKey={"about_me_text"} />
          </p>
        </div>

        <div className="md:row-start-1 md:col-start-2">
          <Image
            src={"/images/notebook_new.png"}
            alt={"notebook_art"}
            width={350}
            height={350}
            className="pt-4 mx-auto"
          />
        </div>

        <div className="md:row-start-2 md:col-start-1">
          <Image
            src={"/images/education_new.png"}
            alt={"education_art"}
            width={350}
            height={350}
            className="pt-4 mx-auto"
          />
        </div>

        <div className="md:row-start-2 md:col-start-2 pl-5">
          <h2 className="text-2xl font-bold mb-4 md:pt-15">
            <TranslatedText tKey={"about_me_education"} />
          </h2>
          <p className="text-[1.1rem] font-mono text-justify">
            <TranslatedText tKey={"about_me_education_text"} />
          </p>
        </div>

        <div className="md:row-start-3 md:col-start-1 pr-5">
          <h2 className="text-2xl font-bold mb-4 md:pt-8">
            <TranslatedText tKey={"about_me_hobby"} />
          </h2>
          <p className="text-[1.1rem] font-mono text-justify">
            <TranslatedText tKey={"about_me_hobby_text"} />
          </p>
        </div>

        <div className="md:row-start-3 md:col-start-2">
          <Image
            src={"/images/hobby.png"}
            alt={"hobby_art"}
            width={200}
            height={200}
            className="pt-4 mx-auto"
          />
        </div>
      </div>
    </div>
  );
}
