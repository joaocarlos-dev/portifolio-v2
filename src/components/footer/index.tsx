import { TranslatedText } from "../TranslatedText";

export function Footer() {
  return (
    <footer className="bg-white text-dark-background dark:bg-dark-background dark:text-white w-full mt-5">
      <div className="mx-auto mt-4 h-[2px] w-[90%] bg-pink-400 md:w-[100%] rounded-full" />
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-lg font-semibold">João Henrique</div>

        <nav className="flex flex-wrap gap-4 text-sm">
          <a className="" href="#about">
            <TranslatedText ns="navbar" tKey={"about"} />
          </a>
          <a className="" href="#experiences">
            <TranslatedText ns="navbar" tKey={"experiences"} />
          </a>
          <a className="" href="#projects">
            <TranslatedText ns="navbar" tKey={"projects"} />
          </a>
          <a className="" href="#contact">
            <TranslatedText ns="navbar" tKey={"contact"} />
          </a>
        </nav>

        <div className="text-xs text-gray-600 dark:text-gray-300">
          © {new Date().getFullYear()} João Henrique.
        </div>
      </div>
    </footer>
  );
}
