import React from "react";
import Navbar from '../components/Navbar'
import Cards from "../components/Cards";
import Footer from "../components/Footer";
import Filter from "../components/Filter";
import MyProvider from "../aplication/provider"
import Banner from "../components/Banner";

function Ofertas() {
    return (
        <div>
            <Navbar />
            <MyProvider value = "Filtrar por tecnico">
                <Filter />
                <Cards />
            </MyProvider>
            <Banner />
            <Footer />
        </div>
    )}

export default Ofertas;