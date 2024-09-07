// react
import { useContext, useState } from "react";

// react-router-dom
import { Link, useNavigate } from "react-router-dom";

// providers
import { AuthContext } from "../../providers/Auth/Auth";

// styles
import "./Navigation.css";

export default function Navigation() {
  const [navListOpen, setNavListOpen] = useState(false);

  const navigate = useNavigate();
  const { signOut, user } = useContext(AuthContext);

  const handleSignOut = () => {
    signOut(() => {
      navigate("/");
    });
  };

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
        {!user ? (
          <Link to={"/login"}>Логин</Link>
        ) : (
          <button onClick={() => handleSignOut()}>Выйти</button>
        )}
      </li>
    </ul>
  );
}
