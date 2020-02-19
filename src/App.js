import React from "react";
import "./assets/css/style.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import routes from containers
import Home from "./containers/Home";
import Characters from "./containers/Characters";
import Comics from "./containers/Comics";
import Favorites from "./containers/Favorites";

// import components
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";

function App() {
  return (
    <>
      <div className="app-container">
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/characters">
              <Characters></Characters>
            </Route>
            {/* <Route path="/characters/:id">
            <Character></Character>
          </Route> */}
            <Route path="/comics">
              <Comics></Comics>
            </Route>
            {/* <Route path="/comics/:id">
            <Comic></Comic>
          </Route> */}
            <Route path="/favorites">
              <Favorites></Favorites>
            </Route>
          </Switch>
        </Router>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
