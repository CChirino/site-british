import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import markerIconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
import markerIconUrl from 'leaflet/dist/images/marker-icon.png';
import markerShadowUrl from 'leaflet/dist/images/marker-shadow.png';

// Definir el icono personalizado
const customIcon = new L.Icon({
  iconRetinaUrl: markerIconRetinaUrl,
  iconUrl: markerIconUrl,
  shadowUrl: markerShadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const BuildingMarker = ({ building, onMarkerClick, mapRef }) => {
  const markerRef = useRef(null);

  useEffect(() => {
    if (mapRef) {
      // Crear un marcador de Leaflet.js con la información del edificio y el icono personalizado
      const marker = L.marker(building.coordinates, { icon: customIcon })
        .addTo(mapRef)
        .bindPopup(`
          <b>${building.name}</b><br>
          ${building.description}<br>
          <a href="${building.link}" target="_blank">Más información</a>
        `);

      marker.on('click', () => {
        onMarkerClick(building);
        marker.openPopup();
      });

      markerRef.current = marker;

      return () => {
        // Eliminar el marcador del mapa al desmontar el componente
        if (mapRef && mapRef.hasLayer(marker)) {
          mapRef.removeLayer(marker);
        }
      };
    }
  }, [building, onMarkerClick, mapRef]);

  return null;
};

export default BuildingMarker;
