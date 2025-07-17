import Image from "next/image";
import { TranslatedText } from "../TranslatedText";

export function Header() {
  return (
    <div className="flex mt-12 items-center justify-center gap-25">
      <div className="w-[30%]">
        <h1 className="text-white text-6xl/relaxed font-thin">
          <TranslatedText tKey={"greetings_hello"} />
        </h1>
      </div>
      <Image
        src={"/images/header_photo.jpeg"}
        alt={"header_photo"}
        width={400}
        height={400}
        className="rounded-full ring-3 ring-pink-300 drop-shadow-[0_0_40px_#ec4899]"
      />
    </div>
  );
}
