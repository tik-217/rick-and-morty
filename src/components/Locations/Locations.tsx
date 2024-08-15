// components
import PageTitle from "../PageTitle/PageTitle";
import BtnToMore from "../BtnToMore/BtnToMore";

// locationsData
import locationsData from "../../data/location.json";

// hooks
import useSortingByParams from "../../hooks/useSortingByParams";

// types
import { ILoaction } from "../../types";

// styles
import "./Locations.css";

export default function Locations() {
  const sortedLocations = useSortingByParams<ILoaction>({
    object: locationsData,
  });

  return (
    <>
      <PageTitle text={"Локации"} />
      <ul className="listItems">
        {sortedLocations.map((el) => (
          <li key={el.id} className="listItems__item">
            <div className="listItems__info">
              <span className="listItems__infoItem">
                <b>Название:</b> {el.name}
              </span>
              <BtnToMore path={"locations"} id={el.id} />
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
