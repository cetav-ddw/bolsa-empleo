import React from "react";
import styled from "styled-components";
import { Wrapper } from "./Hero";



function Suscriber(props){

    return(
        <Wrapper>
            <div id="mc_embed_signup">
                <form action="https://gmail.us5.list-manage.com/subscribe/post?u=89a21ad8fc7a9ac4952f237b8&id=3db6decf58" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
                <div id="mc_embed_signup_scroll">
                    <Titulo>{props.name}</Titulo>
                    <Parrafo> 
                        We have so many ideas for new features that can help our partners manage their units even more efficiently. We promise you that we wont mail bomb you, just once in a month. 
                    </Parrafo>
                    <div className="mc-field-group">
                    <label htmlFor="mce-EMAIL">{props.value}</label>
                    <Input type="email" defaultValue name="EMAIL" className="required email" id="mce-EMAIL" />
                    </div>
                    <div id="mce-responses" className="clear">
                    <div className="response" id="mce-error-response" style={{display: 'none'}} />
                    <div className="response" id="mce-success-response" style={{display: 'none'}} />
                    </div>    {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
                    <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true"><input type="text" name="b_89a21ad8fc7a9ac4952f237b8_3db6decf58" tabIndex={-1} defaultValue /></div>
                    <div className="clear"><input type="submit" defaultValue="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button" /></div>
                </div>
                </form>
            </div>
        </Wrapper>
        
    )

}



const Titulo = styled.h2`
    font-family: 'Poppins', sans-serif;
    font-size: 1.625rem;
    color: #292929;
    font-weight: 700;
`
const Label = styled.label`
`

const Input = styled.input`
    width: 343px;
`

const Parrafo = styled.p`

`

export default Suscriber;


