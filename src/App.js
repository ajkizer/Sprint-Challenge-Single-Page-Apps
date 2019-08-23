import React from "react";
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import CharacterList from "./components/CharacterList";
import EpisodeList from "./components/EpisodeList";
import LocationList from "./components/LocationsList";

export default function App() {
  const [locations, setLocations] = useState("");

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/location/")
      .then(res => setLocations(res.data.results));
  }, []);

  return (
    <Router>
      <main>
        {/* <TabNav /> */}
        <Header />
        <Route path="/episodes" component={EpisodeList} />
        <Route path="/characters" component={CharacterList} />
        <Route
          path="/locations"
          component={LocationList}
          locations={locations}
        />
      </main>
    </Router>
  );
}
