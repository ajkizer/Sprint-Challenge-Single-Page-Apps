import React from "react";

export default function LocationCard(props) {
  const location = props.location;
  console.log(location);
  return (
    <div className="location-card">
      <h3 className="card-content">{location.name}</h3>
      <h4 className="card-content">Type: {location.type}</h4>
      <p className="card-content">Dimension: {location.dimension}</p>
    </div>
  );
}
