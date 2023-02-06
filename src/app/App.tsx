import { Link } from "react-router-dom";
import { cx } from "shared/lib/classNames/classNames";
import { useTheme } from "./providers/ThemeProvider";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar";
import "./styles/index.scss";



const App = () => {
  const {theme} = useTheme();

  return (
    <div className={cx("app", {}, [theme])}>
      <Navbar />

      <AppRouter />
    </div>
  )

}

export default App;