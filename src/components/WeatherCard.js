import React from "react";
import styled from "styled-components";

const Card = styled.div`
    color: white;
    background-color: rgba(8, 104, 205, 0.5);
    text-align: center;
    padding: 30px;
    margin: 30px 10px;
    width: 100%;
    height: 20rem;
    border-radius: 10px;

    @media (min-width: 768px) {
        width: 30%;
    }
`;

function WeatherCard({ weatherCity }) {
    const { main, name } = weatherCity;

    return (
        <Card>
            <h1>{name}</h1>
            <h2>{main.temp} ºC</h2>
            <p>Min: {main.temp_min} ºC</p>
            <p>Max: {main.temp_max} ºC</p>
        </Card>
    );
}

export default WeatherCard;
