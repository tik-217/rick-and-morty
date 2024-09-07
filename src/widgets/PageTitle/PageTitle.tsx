// react-router-dom
import { Link } from "react-router-dom";

// components
import { Navigation } from "@/feature/Navigation";

// styles
import "./PageTitle.css";

export function PageTitle({ text }: { text: string }) {
  return (
    <div className="pageTitle">
      <div className="greeting">
        <h1 className="greeting__title">
          <Link to={"/"}>Рик и Морти</Link>
        </h1>
        <p className="greeting__text">{text}</p>
      </div>
      <Navigation />
    </div>
  );
}
