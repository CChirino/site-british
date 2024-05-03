// MapComponent.js
import React, { useState, useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import BuildingMarker from './BuildingMarker';
import BuildingCard from './BuildingCard';

const MapComponent = () => {
  const mapRef = useRef(null);
  const [selectedBuilding, setSelectedBuilding] = useState(null);
  const [buildings, setBuildings] = useState([]);

  useEffect(() => {
    // Inicializar el mapa de Leaflet.js
    const map = L.map('map').setView([10.4905863,-66.8931011], 15);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);
    mapRef.current = map;

    // Cargar datos de edificios (simulando una API)
    const buildingData = [
      {
        id: 1,
        name: 'Facultad de Arquitectura y Urbanismo',
        coordinates: [10.4899838,-66.8874361],
        description: 'Escuela de Arquitectura.'
      },
      // Agrega más edificios aquí
    ];
    setBuildings(buildingData);

    return () => {
      // Limpiar el mapa al desmontar el componente
      map.remove();
    };
  }, []);

  return (
    <div className="flex">
      <div id="map" style={{ height: '500px', flex: '1' }}>
        {buildings.map(building => (
          <BuildingMarker
            key={building.id}
            building={building}
            onMarkerClick={setSelectedBuilding}
            mapRef={mapRef.current}
          />
        ))}
      </div>
      {selectedBuilding && (
        <div className="bg-white p-4 rounded shadow ml-4" style={{ flex: '0 0 300px' }}>
          <BuildingCard building={selectedBuilding} />
        </div>
      )}
    </div>
  );
};

export default MapComponent;