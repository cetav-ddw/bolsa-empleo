import React from "react";
import Navbar from "../components/Navbar";
import CardsOffer from "../components/CardsOffer";
import MyProvider from "../aplication/provider";
import Suscriber from "../components/Suscriber";
import Banner from "../components/Banner";
import { Hero } from "../components/Hero";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Suscriber />
      <MyProvider value="Filtrar por técnico">
        <CardsOffer />
      </MyProvider>
      <Banner />
      <Footer />
    </div>
  );
}

export default Home;
