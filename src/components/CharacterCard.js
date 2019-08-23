import React from "react";

export default function CharacterCard(props) {
  const char = props.char;

  return (
    <div className="character-card">
      <img src={char.image} />
      <h3>{char.name}</h3>
      <p>Species: {char.species}</p>
      <p>Location: {char.location.name}</p>
      <p>Gender: {char.gender}</p>
      <p>Status: {char.status}</p>
    </div>
  );
}
