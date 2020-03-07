import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

/////////////////////////////////STYLES///////////////////////////////////

const CardStyle = styled.div`
    border: 2px solid black;
    padding: 2% 5%;
    border-radius: 20px;
    background-color: silver;
    margin-bottom: 5%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 50%;
    font-family: Verdana;
`;

/////////////////////////////////STYLES///////////////////////////////////

const Card = (props) => {
    return (
        <CardStyle>
            <h1>{props.Name}</h1>
            <h4>Gender: </h4><p>{props.Gender}</p>
            <h4>Height: </h4><p>{props.Height}</p>
            <h4>Mass: </h4><p>{props.Mass}</p>
            <h4>Hair Color: </h4><p>{props.HairColor}</p>
        </CardStyle>
    );
}

export default Card;