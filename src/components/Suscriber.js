import React from "react";
import styled from "styled-components";


function Suscriber() {
  const info = {
    name: "Suscríbete a nuestro newsletter",
    label: "Ingrese su Email:",
    image: "img/email.svg",
    url: `https://gmail.us5.list-manage.com/subscribe/post?u=89a21ad8fc7a9ac4952f237b8&id=3db6decf58`,
    paragraph:
      "Suscríbete a nuestro newsletter para recibir nuevas ofertas laborales en tu correo.",
  };

  return (
    <Wrapper>
      <Mailchimp id="mc_embed_signup">
        <Container>
          <Image src={info.image} alt="Subscribir" />
        </Container>
        <Form
          action={info.url}
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_blank"
          noValidate
        >
          <div id="mc_embed_signup_scroll">
            <Title>{info.name}</Title>
            <Paragraph>{info.paragraph}</Paragraph>
            <div className="mc-field-group">
              <Label htmlFor="mce-EMAIL">{info.label}</Label>
              <Flex>
                <Email
                  type="email"
                  defaultValue=""
                  name="EMAIL"
                  className="required email"
                  id="mce-EMAIL"
                  placeholder="E-mail"
                />
                <SuscribeButton className="clear">
                  <Button
                    type="submit"
                    value="Suscribirse"
                    name="subscribe"
                    id="mc-embedded-subscribe"
                    className="button"
                  />
                </SuscribeButton>
              </Flex>
            </div>
            <div id="mce-responses" className="clear">
              <Error className="response" id="mce-error-response"></Error>
              <Success className="response" id="mce-success-response"></Success>
            </div>
            {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
            <Aria aria-hidden="true">
              <input
                type="text"
                name="b_89a21ad8fc7a9ac4952f237b8_3db6decf58"
                tabIndex={-1}
                defaultValue=""
              />
            </Aria>
          </div>
        </Form>
      </Mailchimp>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 48px auto;
  width: 343px;
  @media (min-width: 834px) {
    width: 770px;
  }
  @media (min-width: 1440px) {
    width: 1040px;
  }
`

const Title = styled.h2`
  color: #292929;
  font-family: "Poppins", sans-serif;
  font-size: 1.625rem;
  font-weight: 700;
  @media (min-width: 834px) {
    font-size: 2.313rem;
  }
`;
const Label = styled.label`
  display: block;
  font-family: "Open Sans", sans-serif;
  font-size: 1.125rem;
  font-weight: 500;
  margin-top: 10px;
`;

const Email = styled.input`
  border-radius: 8px;
  border: 2px solid #7c7c7c;
  color: #292929;
  font-family: "Open Sans", sans-serif;
  font-size: 1rem;
  height: 54px;
  margin-top: 10px;
  padding-left: 5px;
  width: 100%;
  
  @media (min-width: 834px) {
    margin-top: 0;
    width: 64%;
  }
  @media (min-width: 1440px) {
    width: 73%;
  }
`;

const Paragraph = styled.p`
  color: #5e5e5e;
  font-family: "Open Sans", sans-serif;
  font-size: 1.3rem;
  font-weight: bold;
  margin-top: 14px;
`;

const Button = styled.input`
  -webkit-appearance: button;
  background: #CD552D;
  border-radius: 5px;
  border: none;
  color: #fff;
  font-family: "Poppins", sans-serif;
  font-size: 22px;
  font-weight: bold;
  margin-left: 188px;
  margin-top: 20px;
  padding: 12px 16px;

  @media (min-width: 834px) {
    margin-left: 0;
    margin-top: 0;
    padding: 12px 16px;
  }

  @media (min-width: 1440px) {
    &:hover{
      background-color: #712E17;
    }
  }
`;
const Error = styled.div`
  display: "none";
`;
const Success = styled.div`
  display: "none";
`;

const Aria = styled.div`
  position: absolute;
  left: -5000px;
`;
const Container = styled.div`
  width: 25%;
`;
const Form = styled.form`
  @media (min-width: 834px) {
    width: 60%;
  }
`;
const Image = styled.img`
  display: none;
  @media (min-width: 834px) {
    display: block;
    height: 300px;
    padding-top: 38px;
    width: 100%;
  }
`;
const Mailchimp = styled.div`
  margin-bottom: 48px;
  @media (min-width: 834px) {
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin-top: 48px;
  }
`;
const SuscribeButton = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const Flex = styled.div`
  @media (min-width: 834px) {
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin-top: 16px;
  }
`;
export default Suscriber;
