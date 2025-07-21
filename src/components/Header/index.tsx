import Image from "next/image";
import { TranslatedText } from "../TranslatedText";

export function Header() {
  return (
    <div className="flex flex-col md:flex-row mt-12 md:items-center md:justify-center gap-25">
      <div className="w-[80%] items-start justify-start pl-6">
        <h1 className="text-dark-background dark:text-white text-5xl md:text-6xl/relaxed font-thin">
          <TranslatedText tKey={"greetings_hello"} />
        </h1>
      </div>
      <div className="flex items-center justify-center">
        <Image
          src={"/images/header_photo.png"}
          alt={"header_photo"}
          width={750}
          height={750}
          className="rounded-full inset-shadow-pink-300 inset-shadow"
        />
      </div>
    </div>
  );
}
