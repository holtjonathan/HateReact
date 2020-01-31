import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavbarComp from "./Navbar";
import NotFoundPage from "./NotFoundPage";
import Container from "react-bootstrap/Container";
import HatePage from "./Hate";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Router>
        <div>
          <NavbarComp />
          <Container style={{ marginTop: "1em" }}>
            <Switch>
              <Route
                path={`${process.env.PUBLIC_URL}/hate`}
                component={HatePage}
              />
              <Route component={NotFoundPage} />
            </Switch>
          </Container>
        </div>
      </Router>
    </div>
  );
}

export default App;
