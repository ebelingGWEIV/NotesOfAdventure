import i18next from "i18next";
import english from "../public/locales/en/translation.json";
import { SITE_LANG } from "./consts";

export function initI18n() {
  if (i18next.isInitialized) {
    return;
  }

  // Load translations from the repository so static builds never depend on
  // the deployed site being available while the build is running.
  i18next.init({
    resources: {
      en: { translation: english },
    },
    lng: SITE_LANG,
    fallbackLng: "en",
    supportedLngs: ["en"],
  });
}
