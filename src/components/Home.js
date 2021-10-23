import React from "react";
import Navbar from '../components/Navbar'
import {Hero}  from "../components/Hero";
import Postofferbutton from "../components/Postofferbutton"
import Cards from "../components/Cards";
import Suscriber from "../components/Suscriber";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import MyProvider from "../aplication/provider";
import ExploreButton from "../components/Explorebutton"

function Home() {
    return (
        <div>
            <Navbar />
            <Hero />
            <Postofferbutton />
            <MyProvider>
                <Cards />
            </MyProvider>
            <ExploreButton/>
            <Suscriber />
            <Banner />
            <Footer />
        </div>
    )}

export default Home;
