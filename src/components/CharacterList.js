import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import PageListCharacters from "./PageListCharacters";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [chars, setChars] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/?page=${page}`)
      .then(res => {
        setChars(res.data.results);
      });
  }, [page]);

  const keys = Object.keys(chars);

  return (
    <div>
      <h3>Characters</h3>
      {/* <PageListCharacters /> */}
      <section className="character-list grid-view">
        {keys.map(key => {
          return (
            <div className="card-container-characters">
              <CharacterCard char={chars[key]} />
            </div>
          );
        })}
      </section>
    </div>
  );
}
