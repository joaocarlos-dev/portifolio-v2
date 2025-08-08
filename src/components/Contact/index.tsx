"use client";

import { RiMailFill } from "react-icons/ri";
import { TranslatedText } from "../TranslatedText";
import clsx from "clsx";
import { useTranslation } from "react-i18next";

export function Contact() {
  const { t } = useTranslation("contact");

  const namePlaceholder = t("enter_name");
  const emailPlaceholder = t("enter_email");
  const subjectPlaceholder = t("enter_subject");
  const messagePlaceholder = t("enter_message");

  return (
    <div className="pt-50 md:pt-60 min-h-screen p-5">
      <div className="flex items-center text-dark-background dark:text-white gap-25">
        <h1 className="text-4xl md:text-7xl">
          <TranslatedText ns="contact" tKey={"title"} />
        </h1>
        <div className="hidden md:text-8xl md:flex">
          <RiMailFill />
        </div>
      </div>
      <div className="mt-4 h-[2px] w-[90%] bg-pink-400 md:w-[100%] md:mx-0 rounded-full" />
      <div className="p-4 mx-auto bg-dark-background dark:bg-white mt-10">
        <form className="space-y-5">
          <div>
            <label className="text-sm text-white dark:text-dark-background font-medium mb-2 block">
              <TranslatedText ns="contact" tKey={"name"} />
            </label>
            <input
              type="text"
              required
              placeholder={namePlaceholder}
              className={clsx(
                "w-full py-2.5 px-4 text-slate-900",
                " dark:bg-gray-100 bg-white border border-gray-200",
                "dark:focus:border-slate-900 focus:border-pink-700 text-sm outline-0 transition-all"
              )}
            />
          </div>
          <div>
            <label className="text-sm text-white dark:text-dark-background font-medium mb-2 block">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              autoComplete={emailPlaceholder}
              maxLength={254}
              required
              className={clsx(
                "w-full py-2.5 px-4 text-slate-900",
                " dark:bg-gray-100 bg-white border border-gray-200",
                "dark:dark:focus:border-slate-900 focus:border-pink-700 text-sm outline-0 transition-all"
              )}
            />
          </div>
          <div>
            <label className="text-sm text-white dark:text-dark-background font-medium mb-2 block">
              <TranslatedText ns="contact" tKey={"subject"} />
            </label>
            <input
              type="text"
              required
              placeholder={subjectPlaceholder}
              className={clsx(
                "w-full py-2.5 px-4 text-slate-900",
                " dark:bg-gray-100 bg-white border border-gray-200",
                "dark:focus:border-slate-900 focus:border-pink-700 text-sm outline-0 transition-all"
              )}
            />
          </div>
          <div>
            <label className="text-sm text-white dark:text-dark-background font-medium mb-2 block">
              <TranslatedText ns="contact" tKey={"message"} />
            </label>
            <textarea
              placeholder={messagePlaceholder}
              rows={6}
              required
              className={clsx(
                "w-full px-4 text-slate-900 dark:bg-gray-100 bg-white border",
                "border-gray-200 dark:focus:border-slate-900 focus:border-pink-700",
                "text-sm pt-3 outline-0 transition-all"
              )}
            ></textarea>
          </div>
          <button
            type="button"
            className={clsx(
              "text-dark-background bg-white dark:bg-dark-background dark:text-white",
              "font-medium hover:bg-slate-300 dark:hover:bg-violet-950",
              "tracking-wide text-sm px-4 py-2.5 w-full border-0 outline-0 cursor-pointer"
            )}
          >
            <TranslatedText ns="contact" tKey={"enter_message"} />
          </button>
        </form>
      </div>
    </div>
  );
}
