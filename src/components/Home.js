import React from "react";
import {Hero}  from "../components/Hero";
import Postofferbutton from "../components/Postofferbutton"
import Cards from "../components/Cards";
import Suscriber from "../components/Suscriber";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import MyProvider from "../aplication/provider";
import ExploreButton from "../components/Explorebutton";
import Secondnavbar from "../components/Secondnavbar";

function Home() {
    return (
        <div>
            <Secondnavbar/>
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
