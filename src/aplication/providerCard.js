import React, { useState } from "react";
import IdContext from "../IdContext";

const actualId = "";

const MyProviderCards = (props) => {
  const [contextCards, SetContextCards] = useState(actualId);
  return (
    <div>
      <IdContext.Provider value={[contextCards, SetContextCards]}>
        {props.children}
      </IdContext.Provider>
    </div>
  );
};

export default MyProviderCards;
