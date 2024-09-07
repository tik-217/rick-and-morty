// components
import BtnToBack from "../BtnToBack/BtnToBack";

// hooks
import useCheckItemInJson from "../../hooks/useCheckItemInJson";

// locationsData
import locationsData from "../../data/location.json";

// styles
import "./LocationsCard.css";

export default function LocationsCard() {
  const currentLocation = useCheckItemInJson({ json: locationsData });

  return (
    <div className="locationsCard">
      <div className="locationsCard__info">
        <BtnToBack />
        {currentLocation ? (
          <>
            <section className="locationsCard__section">
              <h3 className="locationsCard__title">Название:</h3>
              <span>{currentLocation.name}</span>
            </section>
            <section className="locationsCard__section">
              <h3 className="locationsCard__title">Измерение:</h3>
              <span>{currentLocation.dimension}</span>
            </section>
            <section className="locationsCard__section">
              <h3 className="locationsCard__title">Тип:</h3>
              <span>{currentLocation.type}</span>
            </section>
          </>
        ) : (
          <h3>Такого локации нет</h3>
        )}
      </div>
    </div>
  );
}
