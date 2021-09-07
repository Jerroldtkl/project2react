import React, { useState, useEffect } from "react";
import Data from "./landmark/Data";
import Design from "./style/designLayout/Design";
import Navbar from "./style/navbar/Navbar";
import { Redirect, Route, Switch } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <div>
        <Design />
        <Data />
      </div>
    </React.Fragment>
  );
}

export default App;
