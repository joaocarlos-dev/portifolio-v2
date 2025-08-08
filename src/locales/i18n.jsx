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
import enProjectsCards from "./en/projectsCards.json";
import ptProjectsCards from "./pt/projectsCards.json";
import enProjectDetails from "./en/project_details.json";
import ptProjectDetails from "./pt/project_details.json";
import enContact from "./en/contact.json";
import ptContact from "./pt/contact.json";

const navigatorLng = navigator.language;

i18n.use(initReactI18next).init({
  resources: {
    en: {
      about: enAbout,
      experiences: enExperiences,
      common: enCommon,
      navbar: enNavbar,
      projects: enProjectsCards,
      project_details: enProjectDetails,
      contact: enContact,
    },
    pt: {
      about: ptAbout,
      experiences: ptExperiences,
      common: ptCommon,
      navbar: ptNavbar,
      projects: ptProjectsCards,
      project_details: ptProjectDetails,
      contact: ptContact,
    },
  },
  lng: navigatorLng.includes("pt") ? "pt" : "en",
  fallbackLng: "pt",
  interpolation: {
    escapeValue: false,
  },
});
