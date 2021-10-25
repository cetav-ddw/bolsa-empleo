import React from "react";
import Cards from "../components/Cards";
import Footer from "./Footer";
import Filter from "../components/Filter";
import MyProvider from "../aplication/provider"
import Banner from "../components/Banner";
import Secondnavbar from "../components/Secondnavbar";

function Ofertas() {
    return (
        <div>
            <Secondnavbar />
            <MyProvider value = "Filtrar por tecnico">
                <Filter />
                <Cards />
            </MyProvider>
            <Banner />
            <Footer />
        </div>
    )}

export default Ofertas;