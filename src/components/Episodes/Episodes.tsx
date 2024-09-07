// components
import PageTitle from "../PageTitle/PageTitle";
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
      <PageTitle text={"Эпизоды"} />
      <ul className="listItems">
        {sortedEpisodes.map((el) => (
          <li key={el.id} className="listItems__item">
            <div className="listItems__info">
              <span className="listItems__infoItem">
                <b>Название:</b> {el.name}
              </span>
              <BtnToMore id={el.id} path={"episodes"} />
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
