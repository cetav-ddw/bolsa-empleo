import React from "react";
import Navbar from "../components/Navbar";
import CardsOffer from "../components/CardsOffer";
import Footer from "../components/Footer";
import MyProvider from "../aplication/provider";
import Suscriber from "../components/Suscriber";

function Ofertas() {
  return (
    <div>
      <Navbar />
      <MyProvider value="Filtrar por tecnico">
        <CardsOffer />
      </MyProvider>
      <Suscriber />
      <Footer />
    </div>
  );
}

export default Ofertas;
