import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import CharacterCard from "./components/CharacterCard";
import EpisodeCard from "./components/EpisodeCard";
import LocationCard from "./components/LocationCard";

const dataGrabber = () => {
  const [chars, setChars] = useState("");
  const [episodes, setEpisodes] = useState("");
  const [locations, setLocations] = useState("");

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(res => console.log(res));
  }, []);

  return <div />;
};

export default dataGrabber;
