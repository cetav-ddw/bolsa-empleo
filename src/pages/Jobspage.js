import React from "react";
import Jobsview from "../components/Jobsview";
import styled from "styled-components";

function JobsPage() {

  return (
    <Container>
      <Jobsview />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export default JobsPage;