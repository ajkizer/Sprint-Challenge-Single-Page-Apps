import React from "react";

export default function EpisodeChard(props) {
  const episode = props.episode;
  console.log(episode);
  return (
    <div className="episode-card">
      <h3 className="card-content">{episode.name}</h3>
      <h4 className="card-content">{episode.episode}</h4>
      <p className="card-content">Date Aired: {episode["air_date"]}</p>
    </div>
  );
}
