import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Services from "./Components/Services";
import Project from "./Components/Project";
import Subscription from "./Components/Subscription";
import Locations from "./Components/Locations";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="">
      <Hero />
      <About />
      <Services />
      <Project />
      <Subscription />
      <Locations />
      <Footer />
    </div>
  );
}

export default App;
