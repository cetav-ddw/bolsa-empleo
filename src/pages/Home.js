import React from "react";
import Navbar from '../components/Navbar'
import {Hero}  from "../components/Hero";
import PostOffer from "../components/Postoffer";
import Cards from "../components/Cards";
import Suscriber from "../components/Suscriber";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import MyProvider from "../aplication/provider";

function Home() {
    return (
        <div>
            <Navbar />
            <Hero />
            <PostOffer />
            <MyProvider>
                <Cards />
            </MyProvider>
            <Suscriber />
            <Banner />
            <Footer />
        </div>
    )}

export default Home;
