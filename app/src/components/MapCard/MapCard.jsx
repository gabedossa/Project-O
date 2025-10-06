import MapCardOSM from "./MapCardOSM";
import "./MapCard.css";

export default function MapCard() {
  const Cuiaba = { lat: -15.6053, lng: -56.0985 };
  const Caceres = { lat: -16.0751, lng: -57.6867 };

  return (
    <div className="mapCard">
      <div className="mapaLocal">
        <div className="LocalName">
          <p>Cuiabá</p>
        </div>
        <MapCardOSM local={Cuiaba} />
      </div>
      <div className="mapaLocal">
        <div className="LocalName">
          <p>Cáceres</p>
        </div>
        <MapCardOSM local={Caceres} />
      </div>
    </div>
  );
}