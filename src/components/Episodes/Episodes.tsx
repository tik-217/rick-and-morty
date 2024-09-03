// react
import { useState } from "react";

// components
import BtnToMore from "../BtnToMore/BtnToMore";

// hooks
import useGetData from "../../hooks/useGetData";
import useScrollView from "../../hooks/useScrollView";

// styles
import "./Episodes.css";

export default function Episodes() {
  const [nextUrlPage, setNextUrlPage] = useState(1);

  const { rickAM: episodes, haveNextPage } = useGetData({
    url: "https://rickandmortyapi.com/api/episode",
    nextUrlPage,
  });

  const { lastNodeElem } = useScrollView({
    setNextUrlPage,
    haveNextPage,
  });

  return (
    <>
      <div className="greeting">
        <p className="greeting__text">Эпизоды</p>
      </div>
      <ul className="listItems">
        {episodes.results &&
          episodes.results.map((el, i) => {
            const trigerElemIndex = episodes.results.length - 5 === i + 1;

            if (trigerElemIndex) {
              return (
                <li key={el.id} className="listItems__item" ref={lastNodeElem}>
                  <div className="listItems__info">
                    <span className="listItems__infoItem">
                      <b>Название:</b> {el.name}
                    </span>
                    <BtnToMore path={"categories/episodes"} id={el.id} />
                  </div>
                </li>
              );
            } else {
              return (
                <li key={el.id} className="listItems__item">
                  <div className="listItems__info">
                    <span className="listItems__infoItem">
                      <b>Название:</b> {el.name}
                    </span>
                    <BtnToMore path={"categories/episodes"} id={el.id} />
                  </div>
                </li>
              );
            }
          })}
      </ul>
    </>
  );
}
