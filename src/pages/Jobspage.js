import React from "react";
import Footer from "../components/footer";
import Jobsview from "../components/Jobsview";
import Navbar from "../components/Navbar";
import styled from "styled-components";

function JobsPage() {
    return (
        <Container>
            <Navbar/>
            <Jobsview/>
            <Footer />
        </Container>
    )
}

const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
`

export default JobsPage