import React from "react";
import Navbar from "../components/Navbar";
import { Hero } from "../components/Hero";
import Cards from "../components/CardsHome";
import Suscriber from "../components/Suscriber";
import Footer from "../components/Footer";
import Banner from "../components/Banner";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Cards/>
      <Suscriber />
      <Banner />
      <Footer />
    </div>
  );
}

export default Home;