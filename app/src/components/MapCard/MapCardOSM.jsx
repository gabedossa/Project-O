// src/components/MapCard/MapCardOSM.jsx
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Corrige o ícone do marcador no React (evita erro de imagem quebrada)
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

export default function MapCardOSM({ local }) {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <MapContainer
        center={[local.lat, local.lng]}
        zoom={15}
        style={{ width: '100%', height: '100%' }}
        scrollWheelZoom={true}
        dragging={true}
        touchZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[local.lat, local.lng]} />
      </MapContainer>
    </div>
  );
}