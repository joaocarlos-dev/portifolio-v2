import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enAbout from "./en/about.json";
import enExperiences from "./en/experiences.json";
import ptAbout from "./pt/about.json";
import ptExperiences from "./pt/experiences.json";
import enCommon from "./en/common.json";
import ptCommon from "./pt/common.json";
import enNavbar from "./en/navbar.json";
import ptNavbar from "./pt/navbar.json";

const navigatorLng = navigator.language;

i18n.use(initReactI18next).init({
  resources: {
    en: {
      about: enAbout,
      experiences: enExperiences,
      common: enCommon,
      navbar: enNavbar,
    },
    pt: {
      about: ptAbout,
      experiences: ptExperiences,
      common: ptCommon,
      navbar: ptNavbar,
    },
  },
  lng: navigatorLng.includes("pt") ? "pt" : "en",
  fallbackLng: "pt",
  interpolation: {
    escapeValue: false,
  },
});
