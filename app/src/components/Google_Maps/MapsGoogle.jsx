import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";

export default function MapCardGoogle({local}) {

  return (
        <div className="mapaLocal">
          <APIProvider apiKey="AIzaSyAH3VcxH1F-NS--kxRkhNzp48Tg1tYKa_o">
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
