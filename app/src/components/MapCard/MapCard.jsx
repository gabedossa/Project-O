import MapCardGoogle from "../Google_Maps/MapsGoogle";
import "./MapCard.css"

export default function MapCard() {
  const Cuiaba = { lat: -33.8688, lng: 151.2195  }
  const Caceres = { lat: -33.8688, lng: 151.2195  }
  return (
    <div className="mapCard">
        <div className="mapaLocal">
          <div className="LocalName">
            <p>Cuiabá</p>
          </div>
          <MapCardGoogle local={Cuiaba}></MapCardGoogle>
        </div>
        <div className="mapaLocal">
          <div className="LocalName">
            <p>Cáceres</p>
          </div>
          <MapCardGoogle local={Caceres}></MapCardGoogle>
        </div>
      </div>
  );
}
