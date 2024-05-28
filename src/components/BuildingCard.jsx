import React from 'react';

const BuildingCard = ({ building }) => {
  return (
    <div>
      <h2>{building.name}</h2>
      <p>{building.description}</p>
    </div>
  );
};

export default BuildingCard;
