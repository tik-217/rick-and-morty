// components
import BtnToBack from "../BtnToBack/BtnToBack";

// hooks
import useCheckItemInJson from "../../hooks/useCheckItemInJson";

// heroesData
import heroesData from "../../data/characters.json";

// styles
import "./HeroesCard.css";

export default function HeroesCard() {
  const currentEpisode = useCheckItemInJson({
    json: heroesData,
  });

  return (
    <div className="heroesCard">
      <div className="heroesCard__info">
        <BtnToBack />
        {currentEpisode ? (
          <>
            <section className="heroesCard__section">
              <img src={currentEpisode.image} alt={currentEpisode.name} />
            </section>
            <section className="heroesCard__section">
              <h3 className="heroesCard__title">Название:</h3>
              <span>{currentEpisode.name}</span>
            </section>
            <section className="heroesCard__section">
              <h3 className="heroesCard__title">Пол:</h3>
              <span>{currentEpisode.gender}</span>
            </section>
            <section className="heroesCard__section">
              <h3 className="heroesCard__title">Вид:</h3>
              <span>{currentEpisode.species}</span>
            </section>
            <section className="heroesCard__section">
              <h3 className="heroesCard__title">Статус:</h3>
              <span>{currentEpisode.status}</span>
            </section>
            <section className="heroesCard__section">
              {currentEpisode.type && (
                <>
                  <h3 className="heroesCard__title">Тип:</h3>
                  <span>{currentEpisode.type}</span>
                </>
              )}
            </section>
          </>
        ) : (
          <h3>Такого героя нет</h3>
        )}
      </div>
    </div>
  );
}
