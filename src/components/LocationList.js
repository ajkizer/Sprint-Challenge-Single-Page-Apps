import axios from "axios";
import LocationCard from "./LocationCard";
import React from "react";
import { useState, useEffect } from "react";

export default function LocationList() {
  // TODO: Add useState to track data from useEffect
  const [locations, setLocations] = useState("");

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/location/")
      .then(res => setLocations(res.data.results));
  }, []);

  const keys = Object.keys(locations);

  return (
    <div>
      <h3>Locations</h3>
      <section className="location-list grid-view">
        {keys.map(key => {
          return (
            <div className="card-container">
              <LocationCard location={locations[key]} />
            </div>
          );
        })}
      </section>
    </div>
  );
}
