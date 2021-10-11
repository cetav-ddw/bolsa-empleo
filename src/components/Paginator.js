import React from 'react';
import styled, { StyledComponent } from 'styled-components';

const Paginator = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div>
            <Lista className='pagination'>
                <Prev><img src="img/prev.svg" alt="Previo" /></Prev>
                {pageNumbers.map(number => (
                <Item key={number} className='page-item'>
                    <Link onClick={() => paginate(number)} href='!#' className='page-link'>
                    {number}
                    </Link>
                </Item>
                ))}
                <Next><img src="img/next.svg" alt="Siguiente" /></Next>
            </Lista>
        </div>
    
    );
};


const Lista = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    list-style: none;
    
`
const Item = styled.li`
    margin-right: 8px;
    border: 1px solid #B1B1B1;
    box-sizing: border-box;
    border-radius: 5px;
    width: 35px;
    height: 35px;
    &:hover{
        border: 1px solid #5755CC;
    }

`

const Link = styled.a`
    text-decoration: none;
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    font-weight: 700;
    padding-left: 12px;
    color: #292929;
    &:hover{
        color: #5755CC;
    }
`
const Prev = styled.button`
    background: #B1B1B1;
    border: 1px solid #B1B1B1;
    box-sizing: border-box;
    border-radius: 5px;
    width: 35px;
    height: 35px;
    margin-right: 8px;
`
const Next = styled.button`
    background: transparent;
    border: 1px solid #B1B1B1;
    box-sizing: border-box;
    border-radius: 5px;
    width: 35px;
    height: 35px;
`
export default Paginator;