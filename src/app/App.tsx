import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import { cx } from "shared/lib/classNames/classNames";
import { useTheme } from "./providers/ThemeProvider";
import "./styles/index.scss";
import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";



const App = () => {
  const {theme, toggleTheme} = useTheme();

  return (
    <div className={cx("app", {}, [theme])}>
      <button onClick={toggleTheme}>Тема</button>
      <Link to="/" >Главная</Link>
      <Link to="/about" >О сайте</Link>

      <Suspense fallback="">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Suspense>
    </div>
  )

}

export default App;