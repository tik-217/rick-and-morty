// components
import BtnToMore from "../BtnToMore/BtnToMore";

// episodesData
import episodesData from "../../data/episode.json";

// hooks
import useSortingByParams from "../../hooks/useSortingByParams";

// types
import { IEpisodes } from "../../types";

// styles
import "./Episodes.css";

export default function Episodes() {
  const sortedEpisodes = useSortingByParams<IEpisodes>({
    object: episodesData,
  });

  return (
    <>
      <div className="greeting">
        <p className="greeting__text">Эпизоды</p>
      </div>
      <ul className="listItems">
        {sortedEpisodes.map((el) => (
          <li key={el.id} className="listItems__item">
            <div className="listItems__info">
              <span className="listItems__infoItem">
                <b>Название:</b> {el.name}
              </span>
              <BtnToMore path={"categories/episodes"} id={el.id} />
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
