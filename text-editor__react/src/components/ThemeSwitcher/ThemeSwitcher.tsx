import ModeNightIcon from "@mui/icons-material/ModeNight";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import "./ThemeSwitcher.scss";

export const ThemeSwitcher = () => {
  const handleThemeClick = (str: string) => {
    console.log(str);
  };

  return (
    <div className="theme-switcher__wrapper" aria-label="Theme toggle">
      <button
        className="button_theme button_theme-light"
        onClick={() => handleThemeClick("light")}
      >
        <WbSunnyIcon></WbSunnyIcon>
      </button>
      <span className="theme-switcher__line">|</span>
      <button
        className="button_theme button_theme-dark"
        onClick={() => handleThemeClick("dark")}
      >
        <ModeNightIcon></ModeNightIcon>
      </button>
    </div>
  );
};
