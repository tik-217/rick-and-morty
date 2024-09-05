// react
import { useContext } from "react";

// react-router-dom
import { Link, useNavigate } from "react-router-dom";

// mantine
import { Anchor, Button, Menu } from "@mantine/core";

// providers
import { AuthContext } from "@/shared/context/Auth";

// styles
import "./Navigation.css";

export function Navigation() {
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
        <Anchor component={Link} to={"/"}>
          Главная
        </Anchor>
      </li>
      <li className={"navList__item"}>
        <Menu trigger="hover" position="bottom-start">
          <Menu.Target>
            <Anchor component={Link} to={"/categories"}>
              Категории
            </Anchor>
          </Menu.Target>
          <Menu.Dropdown>
            <Menu.Item>
              <Anchor component={Link} to={"/categories/heroes"}>
                Герои
              </Anchor>
            </Menu.Item>
            <Menu.Item>
              <Anchor component={Link} to={"/categories/episodes"}>
                Эпизоды
              </Anchor>
            </Menu.Item>
            <Menu.Item>
              <Anchor component={Link} to={"/categories/locations"}>
                Локации
              </Anchor>
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </li>
      <li className="navList__item">
        {!user ? (
          <Anchor component={Link} to={"/login"}>
            Логин
          </Anchor>
        ) : (
          <Button
            variant="gradient"
            gradient={{ from: "pink", to: "orange", deg: 70 }}
            onClick={() => handleSignOut()}
          >
            Выйти
          </Button>
        )}
      </li>
    </ul>
  );
}
