import vie from "./vie.json";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { LANGUAGE_KEY } from "@movie-ticket/constant";

const resources = {
  vie: {
    translation: vie,
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: localStorage.getItem(LANGUAGE_KEY) || "vie",
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  })
  .catch((err) => {
    throw err;
  });

export default i18n;
