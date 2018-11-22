import React, { Component } from "react";
import "./index.css";
import Navigation from "./components/Navigation";
import Routes from "./components/Routes";
import Footer from "./components/Footer";
import { Container } from "mdbreact";

class App extends Component {
  render() {
    return (
      <div className="flexible-content">
        <Navigation />
        <Container id="content" className="p-5 text-center">
          <Routes />
        </Container>
        <Footer />
      </div>
    );
  }
}

export default App;
