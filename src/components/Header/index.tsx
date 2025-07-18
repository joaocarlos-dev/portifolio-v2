import Image from "next/image";
import { TranslatedText } from "../TranslatedText";

export function Header() {
  return (
    <div className="flex flex-col mt-12 md:items-center md:justify-center gap-25">
      <div className="w-[80%] items-start justify-start pl-6">
        <h1 className="text-white  text-5xl md:text-6xl/relaxed font-thin">
          <TranslatedText tKey={"greetings_hello"} />
        </h1>
      </div>
      <div className="flex items-center justify-center">
        <Image
          src={"/images/header_photo.jpeg"}
          alt={"header_photo"}
          width={230}
          height={230}
          className="rounded-full ring-3 ring-pink-300 drop-shadow-[0_0_40px_#ec4899]"
        />
      </div>
    </div>
  );
}
