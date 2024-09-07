// components
import BtnToBack from "../BtnToBack/BtnToBack";

// hooks
import useCheckItemInJson from "../../hooks/useCheckItemInJson";

// episodesData
import episodesData from "../../data/episode.json";

// styles
import "./EpisodesCard.css";

export default function EpisodesCard() {
  const currentEpisode = useCheckItemInJson({ json: episodesData });

  return (
    <div className="episodesCard">
      <div className="episodesCard__info">
        <BtnToBack />
        {currentEpisode ? (
          <>
            <section className="episodesCard__section">
              <h3 className="episodesCard__title">Название:</h3>
              <span>{currentEpisode.name}</span>
            </section>
            <section className="episodesCard__section">
              <h3 className="episodesCard__title">Эпизод:</h3>
              <span>{currentEpisode.episode}</span>
            </section>
            <section className="episodesCard__section">
              <h3 className="episodesCard__title">В эфире с:</h3>
              <span>{currentEpisode.air_date}</span>
            </section>
          </>
        ) : (
          <h3>Такого эпизода нет</h3>
        )}
      </div>
    </div>
  );
}
