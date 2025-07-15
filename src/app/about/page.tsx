import { ContentContainer } from "@/components/ContentContainer";
import { TranslatedText } from "@/components/TranslatedText";
import clsx from "clsx";

export default function AboutPage() {
  return (
    <div className="flex justify-center">
      <ContentContainer>
        <div className="flex flex-col items-center">
          <h1 className="text-5xl pt-3 text-lime-400 dark:text-violet-700">
            <TranslatedText tKey={"about_hello"} />
          </h1>
          <p
            className={clsx(
              "text-violet-100 dark:text-dark-text",
              "text-justify indent-8 leading-7",
              "px-4 pt-2"
            )}
          >
            <TranslatedText tKey={"about_text"} />
          </p>
        </div>
      </ContentContainer>
    </div>
  );
}
