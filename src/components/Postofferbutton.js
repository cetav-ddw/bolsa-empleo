import { Link } from "react-router-dom";
import styled from "styled-components";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
function PostOfferButton() {
  return (
    <WrapperPost>
      <ButtonPost>
        <AnchorWrapper>
          <Link to="/publicar">
            <ButtonEdit>
              <p>Publicar Oferta Laboral</p>
              <ArrowIcon />
            </ButtonEdit>
          </Link>
        </AnchorWrapper>
      </ButtonPost>
    </WrapperPost>
  );
}

export default PostOfferButton;

const WrapperPost = styled.div`
  margin: 40px 0;
`;

const AnchorWrapper = styled.div`
  width: 100%;
  a {
    text-decoration: none;
  }
  @media (min-width: 834px) {
    width: 100%;
  }
`;

const ButtonEdit = styled.div`
  align-items: center;
  background-color: #5755cc;
  border-radius: 5px;
  color: white;
  display: flex;
  justify-content: space-between;
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

const ButtonPost = styled.div`
  display: flex;
  margin: 0 auto;
  width: 343px;
  @media (min-width: 834px) {
    width: 770px;
  }
  @media (min-width: 1440px) {
    display: none;
  }
`;

const ArrowIcon = styled(ArrowForwardIosIcon)`
  color: #ffffff;
`;
