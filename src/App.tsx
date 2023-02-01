import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";
import { Suspense } from "react";
import "./index.scss";

const App = () => {
  return (
    <div className="app">
      <Link to="/" >Главная</Link>
      <Link to="/about" >О сайте</Link>

      <Suspense fallback="">
        <Routes>
          <Route path="/" element={<MainPageAsync />} />
          <Route path="/about" element={<AboutPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  )

}

export default App;