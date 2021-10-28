import { Link } from "react-router-dom";
import styled from "styled-components";

function Explorebutton() {
  return (
    <WrapperPost>
      <ExploreWrapper>
        <ExploreAnchor>
          <Link to="/ofertas">
            <ExploreButton>
              <p>Explorar más</p>
            </ExploreButton>
          </Link>
        </ExploreAnchor>
      </ExploreWrapper>
    </WrapperPost>
  );
}

export default Explorebutton;

const WrapperPost = styled.div`
  margin: 16px 0 32px 0;
  @media (min-width: 1440px) {
    margin: 0;
  }
`;

const ExploreWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  width: 343px;
  @media (min-width: 834px) {
    width: 770px;
  }
  @media (min-width: 1440px) {
    //display: flex;
    display: contents;
  }
`;

const ExploreAnchor = styled.div`
  width: 100%;
  a {
    text-decoration: none;
  }
  @media (min-width: 834px) {
    width: 100%;
  }
  @media (min-width: 1440px) {
    width: 185px;
  }
`;

const ExploreButton = styled.div`
  background-color: #5755cc;
  border-radius: 5px;
  color: white;
  display: flex;
  justify-content: center;
  padding: 18px 16px;
  text-decoration: none;
  a {
    text-decoration: none;
  }
  p {
    font-size: 22px;
    font-weight: medium;
    margin: 0;
    text-decoration: none;
    font-family: "Poppins";
    font-weight: bold;
  }
`;
