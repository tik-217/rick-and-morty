// components
import BtnToMore from "../BtnToMore/BtnToMore";

// hooks
import { useState } from "react";
import useGetData from "../../hooks/useGetData";
import useScrollView from "../../hooks/useScrollView";

// types
import { IResCharacte } from "../../types";

// styles
import "./Locations.css";

export default function Locations() {
  const [nextUrlPage, setNextUrlPage] = useState(1);

  const { rickAM: locations, haveNextPage } = useGetData<IResCharacte>({
    url: "https://rickandmortyapi.com/api/location",
    nextUrlPage,
  });

  const { lastNodeElem } = useScrollView({
    setNextUrlPage,
    haveNextPage,
  });

  return (
    <>
      <div className="greeting">
        <p className="greeting__text">Локации</p>
      </div>
      <ul className="listItems">
        {locations.results &&
          locations.results.map((el, i) => {
            const trigerElemIndex = locations.results.length - 5 === i + 1;

            if (trigerElemIndex) {
              return (
                <li key={el.id} className="listItems__item" ref={lastNodeElem}>
                  <div className="listItems__info">
                    <span className="listItems__infoItem">
                      <b>Название:</b> {el.name}
                    </span>
                    <div>
                      <BtnToMore path={"categories/locations"} id={el.id} />
                    </div>
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
                    <div>
                      <BtnToMore path={"categories/locations"} id={el.id} />
                    </div>
                  </div>
                </li>
              );
            }
          })}
      </ul>
    </>
  );
}
