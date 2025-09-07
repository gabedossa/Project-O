import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";

export default function MapCardGoogle({local}) {

  return (
        <div className="mapaLocal">
          <APIProvider apiKey="AIzaSyAjrwIOgTaEJX2CmzUwVdqu-ha-nudohw0">
            <Map 
            center={local} 
            zoom={10} 
            style={{ width: '100%', height: '100%'}}>
                <Marker position={local} />
            </Map>
          </APIProvider>
        </div>
  );
}
