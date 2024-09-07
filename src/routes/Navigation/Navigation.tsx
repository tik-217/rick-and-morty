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
      <li className={"navList__item navList__item_nested"}>
        <details
          open={navListOpen}
          onMouseLeave={() => setNavListOpen(false)}
          className="subTitle"
        >
          <summary className="subTitle__title">
            <span onMouseEnter={() => setNavListOpen(true)}>
              <Link to={"/categories"}>Категории</Link>
            </span>
          </summary>
          <ul className="categoriesNav">
            <li className="categoriesNav__item">
              <Link to={"/categories/heroes"}>Герои</Link>
            </li>
            <li className="categoriesNav__item">
              <Link to={"/categories/episodes"}>Эпизоды</Link>
            </li>
            <li className="categoriesNav__item">
              <Link to={"/categories/locations"}>Локации</Link>
            </li>
          </ul>
        </details>
      </li>
      <li className="navList__item">
        <Link to={"/login"}>Логин</Link>
      </li>
    </ul>
  );
}
