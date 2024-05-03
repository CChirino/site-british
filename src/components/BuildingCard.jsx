// BuildingCard.js
import React from 'react';

const BuildingCard = ({ building }) => {
  return (
    <div>
      <h3 className="text-lg font-bold">{building.name}</h3>
      <p>{building.description}</p>
    </div>
  );
};

export default BuildingCard;