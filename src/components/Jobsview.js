import React from "react";
import styled from "styled-components";
import Jobsinfo from "./Jobsinfo";

function Jobsview() {
    return (
        <Container>
            <Jobsinfo
                logo = "/img/company-img.png"
                title = "Front-end Developer"
                salarie = "$1200 / month"
                company = "Accenture"
                career = "Desarollo web"
                description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque viverra efficitur sem id. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque viverra efficitur sem id."
                email = "erudito@gmail.com"
                jobImg = "/img/img-job.png"
                alt = "Kendoll"
            />
        </Container>
    )
}

export default Jobsview 

const Container = styled.div`
    height: 100%;
    //border: 2px solid #292929;
`

