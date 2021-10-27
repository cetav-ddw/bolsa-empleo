import React from "react";
import Navbar from '../components/Navbar'
import {Hero}  from "../components/Hero";
import Cards from "../components/CardsHome";
import Suscriber from "../components/Suscriber";
import Footer from "../components/footer";
import Banner from "../components/Banner";
import MyProvider from "../aplication/provider";
import Jobsview from "../components/Jobsview";

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
            <Jobsview/>
        </div>
    )}

export default Home;