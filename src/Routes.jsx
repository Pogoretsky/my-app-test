import React from "react"
import {Route, Routes} from "react-router-dom"
import Feed from "./Feed";
import Events from "./Events";
import Home from "./Home";
const RoutesComponent = () => {
  return (
      <Routes>
        <Route path="/feed" element={<Feed />} />
        <Route path="/events" element={<Events />}/>
        <Route path="/" element={<Home />}/>
      </Routes>
  );
}

export default RoutesComponent