import React, { useState, useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import BuildingMarker from './BuildingMarker';
import BuildingCard from './BuildingCard'; // Asegúrate de que esta línea esté presente

const MapComponent = () => {
  const mapRef = useRef(null);
  const [selectedBuilding, setSelectedBuilding] = useState(null);
  const [buildings, setBuildings] = useState([]);

  useEffect(() => {
    // Inicializar el mapa de Leaflet.js
    const map = L.map('map').setView([10.4905863, -66.8931011], 16);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);
    mapRef.current = map;

    // Cargar datos de edificios (simulando una API)
    const buildingData = [
      {
        id: 1,
        name: 'Facultad de Arquitectura y Urbanismo',
        coordinates: [10.4899838, -66.8874361],
        description: 'Escuela de Arquitectura.',
        link: 'http://localhost:5173/facultad-arquitectura'
      },
      {
        id: 2,
        name: 'Biblioteca Central',
        coordinates: [10.491234, -66.890987],
        description: 'Biblioteca principal de la Universidad Central de Caracas.',
        link: 'http://localhost:5173/biblioteca-central'

      },
      {
        id: 3,
        name: 'Facultad de Humanidades',
        coordinates: [10.492345, -66.888765],
        description: 'Facultad que ofrece carreras relacionadas con Humanidades.',
        link: 'http://localhost:5173/facultad-humanidades'

      }
    ];
    setBuildings(buildingData);

    return () => {
      // Limpiar el mapa al desmontar el componente
      if (mapRef.current) {
        mapRef.current.remove();
      }
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
    </div>
  );
};

export default MapComponent;
