import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

// TODO: Add missing tabs below
// Take a look at React Semantic UI tabs
// https://react.semantic-ui.com/modules/tab/
export default function TabNav() {
  return (
    <div className="nav">
      <Menu>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/characters">Characters</NavLink>
        <NavLink to="/episodes">Episodes</NavLink>
        <NavLink to="/locations">Locations</NavLink>
      </Menu>
    </div>
  );
}
