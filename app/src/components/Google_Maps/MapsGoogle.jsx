import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";

export default function MapCardGoogle({ local }) {
  return (
    <div style={{ width: "100%", height: "400px" }}>
      <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
        <Map
          center={local}
          zoom={14}
          style={{ width: "100%", height: "100%" }}
        >
          <Marker position={local} />
        </Map>
      </APIProvider>
    </div>
  );
}