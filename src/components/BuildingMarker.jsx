// BuildingMarker.js
import React from 'react';
import L from 'leaflet';

const BuildingMarker = ({ building, onMarkerClick, mapRef }) => {
  const markerRef = React.useRef(null);

  React.useEffect(() => {
    // Crear un marcador de Leaflet.js con la información del edificio
    const marker = L.marker(building.coordinates).addTo(mapRef);
    marker.on('click', () => onMarkerClick(building));
    markerRef.current = marker;

    return () => {
      // Eliminar el marcador del mapa al desmontar el componente
      mapRef.removeLayer(marker);
    };
  }, [building, onMarkerClick, mapRef]);

  return null;
};

export default BuildingMarker;