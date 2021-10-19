import React, {useState} from "react";
import { FilterContext } from "../filterContext";

const filterOptions = 'Filtrar por tecnico'



const MyProvider = (props) =>{
    const [context,setContext] = useState(filterOptions)
    return(
        <div>
            <FilterContext.Provider value = {[context,setContext]}>
                {props.children}
            </FilterContext.Provider>
        </div>
    )
}

export default MyProvider;
