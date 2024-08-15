// components
import PageTitle from "../PageTitle/PageTitle";
import BtnToMore from "../BtnToMore/BtnToMore";

// heroesData
import heroesData from "../../data/characters.json";

// hooks
import useSortingByParams from "../../hooks/useSortingByParams";

// types
import { IHeroes } from "../../types";

// styles
import "./Heroes.css";

export default function Heroes() {
  const sortedHeroes = useSortingByParams<IHeroes>({ object: heroesData });

  return (
    <>
      <PageTitle text={"Герои"} />
      <ul className="listItems">
        {sortedHeroes.map((el) => (
          <li key={el.id} className="listItems__item">
            <div className="heroes__imageWrap">
              <img src={el.image} alt={el.name} className="heroes__image" />
            </div>
            <div className="listItems__info">
              <span className="listItems__infoItem">
                <b>Имя:</b> {el.name}
              </span>
              <BtnToMore id={el.id} path={"heroes"} />
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
