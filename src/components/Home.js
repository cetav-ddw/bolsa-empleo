import React from "react";
import Navbar from '../components/Navbar'
import {Hero}  from "../components/Hero";
import Cards from "./CardsHome";
import Suscriber from "../components/Suscriber";
import Footer from "./Footer";
import Banner from "../components/Banner";
import MyProvider from "../aplication/provider";

function Home() {
    return (
        <div>
            <Navbar />
            <Hero />
            <MyProvider>
                <Cards />
            </MyProvider>
            <Suscriber />
            <Banner />
            <Footer />
        </div>
    )}

export default Home;