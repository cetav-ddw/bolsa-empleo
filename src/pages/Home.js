import React from "react";
import Navbar from "../components/Navbar";
import { Hero } from "../components/Hero";
import Cards from "../components/CardsHome";
import Suscriber from "../components/Suscriber";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import MyProviderCards from "../aplication/providerCard";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <MyProviderCards>
        <Cards />
      </MyProviderCards>
      <Suscriber />
      <Banner />
      <Footer />
    </div>
  );
}

export default Home;
