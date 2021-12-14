import React from "react";
import Navbar from "../components/Navbar";
import Cards from "../components/Cards";
import MyProvider from "../aplication/provider";
import Suscriber from "../components/Suscriber";
import Banner from "../components/Banner";
import { Hero } from "../components/Hero";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Navbar 
        page = ""
      />
      <Hero />
      <Suscriber />
      <MyProvider value="Filtrar por técnico">
        <Cards />
      </MyProvider>
      <Banner />
      <Footer />
    </div>
  );
}

export default Home;
