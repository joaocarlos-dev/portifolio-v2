import Image from "next/image";
import { TranslatedText } from "../TranslatedText";

export function About() {
  return (
    <div className="relative flex min-h-screen">
      <div className="absolute top-0 left-8 h-full flex justify-center items-start">
        <div className="text-white text-xl font-bold tracking-widest select-none rotate-90 origin-top-left whitespace-nowrap">
          {"-".repeat(80)}
        </div>
      </div>

      <div className="flex flex-col md:flex-row w-full px-16 py-20 gap-10 text-white ">
        <div className="md:w-1/2 ">
          <h2 className="text-2xl font-bold mb-4">
            <TranslatedText tKey={"about_me"} />
          </h2>
          <p className="text-[0.7rem] text-justify">
            <TranslatedText tKey={"about_me_text"} />
          </p>
          <Image
            src={"/images/notebook_new.png"}
            alt={"notebook_art"}
            width={350}
            height={350}
            className="pt-4"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-2xl font-bold mb-4">
            <TranslatedText tKey={"about_me_education"} />
          </h2>
          <p className="text-[0.7rem] text-justify">
            <TranslatedText tKey={"about_me_education_text"} />
          </p>
          <Image
            src={"/images/education_new.png"}
            alt={"education_art"}
            width={350}
            height={350}
            className="pt-4"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-2xl font-bold mb-4">
            <TranslatedText tKey={"about_me_hobby"} />
          </h2>
          <p className="text-[0.7rem] text-justify">
            <TranslatedText tKey={"about_me_hobby_text"} />
          </p>
          <Image
            src={"/images/hobby.png"}
            alt={"hobby_art"}
            width={200}
            height={200}
            className="pt-4"
          />
        </div>
      </div>
    </div>
  );
}
