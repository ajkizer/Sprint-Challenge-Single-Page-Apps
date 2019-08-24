import axios from "axios";
import EpisodeCard from "./EpisodeCard";
import React from "react";
import { useState, useEffect } from "react";

export default function EpisodeList() {
  // TODO: Add useState to track data from useEffect
  const [episodes, setEpisodes] = useState("");

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/episode/")
      .then(res => setEpisodes(res.data.results));
  }, []);

  const keys = Object.keys(episodes);

  return (
    <div>
      <h3>Episodes</h3>
      <section className="episode-list grid-view">
        {keys.map(key => {
          return (
            <div className="card-container">
              <EpisodeCard episode={episodes[key]} />
            </div>
          );
        })}
      </section>
    </div>
  );
}
