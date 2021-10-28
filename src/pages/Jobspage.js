import React from "react";
import Footer from "../components/Footer";
import Jobsview from "../components/Jobsview";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import MyProviderCards from "../aplication/providerCard"

function JobsPage() {
  
  return (
    <Container>
      <Navbar />
      <MyProviderCards>
        <Jobsview />
      </MyProviderCards>
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export default JobsPage;
