// react
import { useState } from "react";

// react-router-dom
import { Link } from "react-router-dom";

// styles
import "./Navigation.css";

export default function Navigation() {
  const [navListOpen, setNavListOpen] = useState(false);

  return (
    <ul className={"navList"}>
      <li className={"navList__item"}>
        <Link to={"/"}>Главная</Link>
      </li>
      <li className={"navList__item"}>
        <details
          open={navListOpen}
          onMouseLeave={() => setNavListOpen(false)}
          className="subTitle"
        >
          <summary className="subTitle__title">
            <span onMouseEnter={() => setNavListOpen(true)}>Категории</span>
          </summary>
          <ul className="categoriesNav">
            <li className="categoriesNav__item">
              <Link to={"/heroes"}>Герои</Link>
            </li>
            <li className="categoriesNav__item">
              <Link to={"/episodes"}>Эпизоды</Link>
            </li>
            <li className="categoriesNav__item">
              <Link to={"/locations"}>Локации</Link>
            </li>
          </ul>
        </details>
      </li>
    </ul>
  );
}
