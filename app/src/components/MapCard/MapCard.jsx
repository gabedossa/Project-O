import MapCardGoogle from "../Google_Maps/MapsGoogle";
import "./MapCard.css";

export default function MapCard() {
  const Cuiaba = { lat: -15.5989, lng: -56.0949 };
  const Caceres = { lat: -16.0732, lng: -57.6889 };

  return (
    <div className="mapCard">
      <div className="mapaLocal">
        <div className="LocalName">
          <p>Cuiabá</p>
        </div>
        <MapCardGoogle local={Cuiaba} />
      </div>
      <div className="mapaLocal">
        <div className="LocalName">
          <p>Cáceres</p>
        </div>
        <MapCardGoogle local={Caceres} />
      </div>
    </div>
  );
}