import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [chars, setChars] = useState("");

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(res => setChars(res.data.results));
  }, []);

  const keys = Object.keys(chars);

  return (
    <div>
      <h3>Characters</h3>
      <section className="character-list grid-view">
        {keys.map(key => {
          return (
            <div className="card-container">
              <CharacterCard char={chars[key]} />
            </div>
          );
        })}
      </section>
    </div>
  );
}
