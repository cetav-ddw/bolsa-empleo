import React from "react";
import Navbar from "../components/Navbar";
import CardsOffer from "../components/CardsOffer";
import Footer from "../components/Footer";
import MyProvider from "../aplication/provider";
import Suscriber from "../components/Suscriber";
import Banner from "../components/Banner";
import { Hero } from "../components/Hero";

function Ofertas() {
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

export default Ofertas;
