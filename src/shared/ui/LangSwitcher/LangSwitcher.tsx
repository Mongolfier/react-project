import { useTranslation } from "react-i18next";
import { cx } from "shared/lib/classNames/classNames";
import { Button, ThemeButton } from "../Button/ui/Button";
import cls from "./LangSwitcher.module.scss";

interface LangSwitcherProps {
  className?: string;
}

const LangSwitcher = (props: LangSwitcherProps) => {
  const { className } = props;
  const { t, i18n } = useTranslation()

  const toggle = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru")
  }

  return (
      <Button
        className={cx(cls.LangSwitcher, {}, [className])}
        theme={ThemeButton.CLEAR}
        onClick={toggle}
      >
        {t("translate")}
      </Button>
  )
};

export default LangSwitcher;
