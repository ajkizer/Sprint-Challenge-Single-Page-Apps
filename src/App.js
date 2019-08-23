import React from "react";
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import CharacterList from "./components/CharacterList";
import EpisodeList from "./components/EpisodeList";
import LocationList from "./components/LocationList";

export default function App() {
  return (
    <Router>
      <main>
        <TabNav />
        <Header />
        <Route path="/episodes" component={EpisodeList} />
        <Route path="/characters" component={CharacterList} />
        <Route path="/locations" component={LocationList} />
      </main>
    </Router>
  );
}
