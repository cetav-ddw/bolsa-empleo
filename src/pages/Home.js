import { Link } from "react-router-dom"
import styled from "styled-components"
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function Home() {
    return(
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
    )
}

export default Home

const WrapperPost = styled.div`

`

const AnchorWrapper = styled.div`
    width: 100%;

    a{
        text-decoration: none;
    }

    @media (min-width: 834px) {
        width: 100%;
    }
`

const ButtonEdit = styled.div`
    align-items: center;
    background-color: #5755CC;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    padding: 18px 16px;
    text-decoration: none;

    a{
        text-decoration: none;
    }

    p{
        color: white;
        font-size: 22px;
        font-weight: medium;
        margin: 0;
        text-decoration: none;
    }
`

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
`

const ArrowIcon = styled(ArrowForwardIosIcon)`
    color: #ffffff;
`

const ExploreWrapper = styled.div`
    display: flex;
    margin: 0 auto;
    width: 343px;

    @media (min-width: 834px) {
        width: 770px;
    }

    @media (min-width: 1440px) {
        justify-content: right;
        width: 1040px;
    }
`

const ExploreAnchor = styled.div`
    width: 100%;

    a{
        text-decoration: none;
    }

    @media (min-width: 834px) {
        width: 100%;
    }

    @media (min-width: 1440px) {
        width: 170px;
    }
`

const ExploreButton = styled.div`
    background-color: #5755CC;
    border-radius: 5px;
    color: white;
    display: flex;
    justify-content: center;
    padding: 18px 16px;
    text-decoration: none;

    a{
        text-decoration: none;
    }

    p{
        color: white;
        font-size: 22px;
        font-weight: medium;
        margin: 0;
        text-decoration: none;
    }
`