// react-router-dom
import { Link } from "react-router-dom";

// components
import Navigation from "../../routes/Navigation/Navigation";

// styles
import "./PageTitle.css";

export default function PageTitle({ text }: { text: string }) {
  return (
    <div className="pageTitle">
      <Navigation />
      <div className="greeting">
        <h1 className="greeting__title">
          <Link to={"/"}>Рик и Морти</Link>
        </h1>
        <p className="greeting__text">{text}</p>
      </div>
    </div>
  );
}
