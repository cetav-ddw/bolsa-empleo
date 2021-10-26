import React from "react";
import Navbar from '../components/Navbar'
import {Hero}  from "../components/Hero";
import Cards from "../components/Cards";
import Suscriber from "../components/Suscriber";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import MyProvider from "../aplication/provider";
import ExploreButton from "../components/Explorebutton"
import styled  from "styled-components";


function Home() {
    return (
        <div>
            <Navbar />
            <Hero />
            <PrincipalTitle>Ofertas de empleo</PrincipalTitle>
            <MyProvider>
                <Cards />
            </MyProvider>
            <ExploreButton/>
            <Suscriber />
            <Banner />
            <Footer />
        </div>
    )}

    const PrincipalTitle = styled.h1`
    font-family: 'Poppins', sans-serif;
    color: #292929;
    font-size: 26px;
    font-weight: bold;
    margin-left: 16px;
    margin-top: 40px;
    @media(min-width:834px){
        font-size: 37px;
        margin-left: 32px;
        margin-top: 50px;
    }
`

export default Home;
