"use client";

import { TranslatedText } from "../TranslatedText";
import clsx from "clsx";
import { useTranslation } from "react-i18next";
import { useState } from "react";

export function Contact() {
  const { t } = useTranslation("contact");

  const namePlaceholder = t("enter_name");
  const emailPlaceholder = t("enter_email");
  const subjectPlaceholder = t("enter_subject");
  const messagePlaceholder = t("enter_message");

  const FORMSPREE_URL = process.env.NEXT_PUBLIC_FORMSPREE;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!FORMSPREE_URL) {
      console.error("Formspree endpoint not defined on .env");
      return;
    }

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert("Message sent!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        alert("Error");
      }
    } catch (error) {
      console.error(error);
      alert("Connection error");
    }
  };

  return (
    <div className="pt-50 md:pt-60 min-h-screen p-5">
      <div className="flex items-center text-dark-background dark:text-white gap-25">
        <h1 className="text-4xl md:text-7xl">
          <TranslatedText ns="contact" tKey={"title"} />
        </h1>
      </div>
      <div className="mt-4 h-[2px] w-[90%] bg-pink-400 md:w-[100%] md:mx-0 rounded-full" />
      <div className="p-4 mx-auto bg-dark-background dark:bg-white mt-10">
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="text-sm text-white dark:text-dark-background mb-2 block font-semibold">
              <TranslatedText ns="contact" tKey={"name"} />
            </label>
            <input
              name="name"
              type="text"
              required
              placeholder={namePlaceholder}
              value={formData.name}
              onChange={handleChange}
              className={clsx(
                "w-full py-2.5 px-4 text-slate-900",
                " dark:bg-gray-100 bg-white border border-gray-200",
                "dark:focus:border-slate-900 focus:border-pink-700 text-sm outline-0 transition-all"
              )}
            />
          </div>
          <div>
            <label className="text-sm text-white dark:text-dark-background mb-2 block font-semibold">
              Email
            </label>
            <input
              name="email"
              type="email"
              placeholder={emailPlaceholder}
              maxLength={254}
              required
              value={formData.email}
              onChange={handleChange}
              className={clsx(
                "w-full py-2.5 px-4 text-slate-900",
                " dark:bg-gray-100 bg-white border border-gray-200",
                "dark:focus:border-slate-900 focus:border-pink-700 text-sm outline-0 transition-all"
              )}
            />
          </div>
          <div>
            <label className="text-sm text-white dark:text-dark-background mb-2 block font-semibold">
              <TranslatedText ns="contact" tKey={"subject"} />
            </label>
            <input
              name="subject"
              type="text"
              required
              placeholder={subjectPlaceholder}
              value={formData.subject}
              onChange={handleChange}
              className={clsx(
                "w-full py-2.5 px-4 text-slate-900",
                " dark:bg-gray-100 bg-white border border-gray-200",
                "dark:focus:border-slate-900 focus:border-pink-700 text-sm outline-0 transition-all"
              )}
            />
          </div>
          <div>
            <label className="text-sm text-white dark:text-dark-background mb-2 block font-semibold">
              <TranslatedText ns="contact" tKey={"message"} />
            </label>
            <textarea
              name="message"
              placeholder={messagePlaceholder}
              rows={6}
              required
              value={formData.message}
              onChange={handleChange}
              className={clsx(
                "w-full px-4 text-slate-900 dark:bg-gray-100 bg-white border",
                "border-gray-200 dark:focus:border-slate-900 focus:border-pink-700",
                "text-sm pt-3 outline-0 transition-all"
              )}
            ></textarea>
          </div>
          <button
            type="submit"
            className={clsx(
              "text-dark-background bg-white dark:bg-dark-background dark:text-white",
              "font-semibold hover:bg-slate-300 dark:hover:bg-violet-950",
              "tracking-wide text-sm px-4 py-2.5 w-full border-0 outline-0 cursor-pointer"
            )}
          >
            <TranslatedText ns="contact" tKey={"send"} />
          </button>
        </form>
      </div>
    </div>
  );
}
