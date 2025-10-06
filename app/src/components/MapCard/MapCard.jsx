import MapCardOSM from "./MapCardOSM";
import "./MapCard.css";

export default function MapCard() {
  const Cuiaba = { lat:  -15.58943 , lng:  -56.10488 };
  const Caceres = { lat: -16.07725, lng:  -57.67104};

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