import React, { createContext, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ImageContainer from "./components/ImageContainer/ImageContainer";
import ImageDetailsContainer from "./components/ImageDetailsContainer/ImageDetailsContainer";
export const imageContext = createContext();
function App() {
  const [totalImage, setTotalImage] = useState([]);
  return (
    <imageContext.Provider value={[totalImage, setTotalImage]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <ImageContainer />
          </Route>
          <Route path="/imageDetails/:id">
            <ImageDetailsContainer />
          </Route>
        </Switch>
      </Router>
    </imageContext.Provider>
  );
}

export default App;
