import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export default function PageListCharacters(props) {
  const [pages, setPages] = useState(1);
  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character/`).then(res => {
      setPages(res.data.info.pages);
    });
  }, []);

  function pageGenerator() {
    for (let i = 1; i < pages; i++) {
      return <span>{i}</span>;
    }
  }

  return <div className="page-container">{pageGenerator()}</div>;
}
