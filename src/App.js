import React, { Component } from "react";
import "./index.css";
import Navigation from "./components/Navigation";
import Routes from "./components/Routes";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div className="flexible-content">
        <Navigation />
        <main id="content" className="p-5">
          <Routes />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
