// react
import { useState } from "react";

// components
import BtnToMore from "../BtnToMore/BtnToMore";

// hooks
import useScrollView from "../../hooks/useScrollView";
import useGetData from "../../hooks/useGetData";

// types
import { IResCharacte } from "../../types";

// styles
import "./Heroes.css";

export default function Heroes() {
  const [nextUrlPage, setNextUrlPage] = useState(1);

  const { rickAM: heroes, haveNextPage } = useGetData<IResCharacte>({
    url: "https://rickandmortyapi.com/api/character",
    nextUrlPage,
  });

  const { lastNodeElem } = useScrollView({
    setNextUrlPage,
    haveNextPage,
  });

  return (
    <>
      <div className="greeting">
        <p className="greeting__text">Герои</p>
      </div>
      <ul className="listItems">
        {heroes.results &&
          heroes.results.map((el, i) => {
            const trigerElemIndex = heroes.results.length - 1 === i + 1;

            if (trigerElemIndex) {
              return (
                <li
                  key={el.id}
                  className="listItems__item"
                  ref={lastNodeElem}
                  data-ref={"THIS"}
                >
                  <div className="heroes__imageWrap">
                    <img
                      src={el.image}
                      alt={el.name}
                      className="heroes__image"
                    />
                  </div>
                  <div className="listItems__info">
                    <span className="listItems__infoItem">
                      <b>Имя:</b> {el.name}
                    </span>
                    <BtnToMore id={el.id} path={"categories/heroes"} />
                  </div>
                </li>
              );
            } else {
              return (
                <li key={el.id} className="listItems__item">
                  <div className="heroes__imageWrap">
                    <img
                      src={el.image}
                      alt={el.name}
                      className="heroes__image"
                    />
                  </div>
                  <div className="listItems__info">
                    <span className="listItems__infoItem">
                      <b>Имя:</b> {el.name}
                    </span>
                    <BtnToMore id={el.id} path={"categories/heroes"} />
                  </div>
                </li>
              );
            }
          })}
      </ul>
    </>
  );
}
