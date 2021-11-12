import React from "react";
import styled from "styled-components";

const Tags = (props) => {
  return (
    <WrapperTags>
      <TogleTags>{props.name}</TogleTags>
    </WrapperTags>
  );
};

const WrapperTags = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  @media (min-width: 1440px) {
    margin-bottom: 16px;
    height: 70px;
  }
`;
const TogleTags = styled.div`
  align-items: center;
  background: #e1ecf4;
  border-radius: 5px;
  color: #0c4066;
  display: flex;
  font-family: "Open Sans", sans-serif;
  font-size: 0.5rem;
  font-weight: bold;
  height: 28px;
  justify-content: center;
  margin-bottom: 8px;
  margin-right: 3px;
  text-align: center;
  text-transform: uppercase;
  width: 94px;
`;

export { WrapperTags, TogleTags, Tags };
