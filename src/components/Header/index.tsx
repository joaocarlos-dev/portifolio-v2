import Image from "next/image";
import { TranslatedText } from "../TranslatedText";
import clsx from "clsx";

export function Header() {
  return (
    <div className="flex flex-col md:flex-row pt-50 md:items-center md:justify-center gap-25">
      <div className=" md:w-[70%] items-start justify-start pl-6">
        <h1 className="text-dark-background dark:text-white text-5xl md:text-8xl/relaxed font-thin">
          <TranslatedText ns="common" tKey={"greetings_hello"} />
        </h1>
        <h1 className="text-dark-background dark:text-white text-5xl md:text-8xl/relaxed font-thin">
          <TranslatedText ns="common" tKey={"greetings_hello_2"} />
        </h1>
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
