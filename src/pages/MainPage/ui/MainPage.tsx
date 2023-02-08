import { useTranslation } from "react-i18next";

interface MainPageProps {
}

const MainPage = (props: MainPageProps) => {
  const {t} = useTranslation("mainPage")

  return (
    <div>{t("main")}</div>
  )
};

export default MainPage;
