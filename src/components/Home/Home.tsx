// react-router-dom
import { Outlet } from "react-router-dom";

// components
import PageTitle from "../PageTitle/PageTitle";

// styles
import "./Home.css";

export default function Home() {
  return (
    <>
      <div className="home">
        <PageTitle text={"Приветствую во вселенной Рика и Морти"} />
      </div>
      <Outlet />
    </>
  );
}
