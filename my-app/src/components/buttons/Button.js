import React from 'react';
import Button from './StyledButton';



const ButtonLink = ({onClick, props, txt, type}) =>{
    <React.Fragment>
        <Button onClick={onClick} {...props} type={type}>{txt}
            <a href="3">Trabajo</a>
        </Button>
    </React.Fragment>
}

export  default ButtonLink