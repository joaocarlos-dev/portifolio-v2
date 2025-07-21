import Image from "next/image";
import { TranslatedText } from "../TranslatedText";
import clsx from "clsx";

export function Header() {
  return (
    <div className="flex flex-col md:flex-row mt-12 md:items-center md:justify-center gap-25">
      <div className="w-[80%] items-start justify-start pl-6">
        <h1 className="text-dark-background dark:text-white text-5xl md:text-6xl/relaxed font-thin">
          <TranslatedText tKey={"greetings_hello"} />
        </h1>
      </div>
      <div
        className={clsx(
          "rounded-full ring-4",
          "ring-purple-400 shadow-[0_0_100px_#975eff]",
          "dark:ring-pink-300  dark:shadow-[0_0_50px_#ec4899]"
        )}
      >
        <Image
          src="/images/header_photo.png"
          alt="header_photo"
          width={700}
          height={700}
          className="rounded-full mix-blend-multiply"
        />
      </div>
    </div>
  );
}
