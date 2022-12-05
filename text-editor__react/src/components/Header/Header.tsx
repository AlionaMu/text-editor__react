import { useTranslation } from "react-i18next";
import "./Header.scss";

export const Header = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language: string) => {
    console.log(language);
    i18n.changeLanguage(language);
  };
  return (
    <header className="header">
      <h1 className="header__title">{t("header.title")}</h1>
      <div className="header__switch-container">
        <button type="button" onClick={() => changeLanguage("ru")}>
          ru
        </button>
        <button type="button" onClick={() => changeLanguage("en")}>
          en
        </button>
      </div>
    </header>
  );
};
