import React from "react";
import styled from "styled-components";

const Card = styled.div`
    color: white;
    background-color: rgba(8, 104, 205, 0.5);
    text-align: center;
	padding: 30px;
	margin-right: auto;
	margin-left: auto;
    margin-bottom: 60px;
    width: 100%;
    height: 20rem;
    border-radius: 10px;

	display: flex;
	flex-direction: column;
	align-items:center;	
	justify-content: center;

    @media (min-width: 768px) {
        width: 30%;
    }
`;

const CityName = styled.h1 ` 
	display: block;
	font-size: 8vw;
	margin: 0;

	@media (min-width: 768px) {
		font-size: 3vw;
	}

	@media (min-width: 900px) {
		font-size: 2.5vw;
	}

`

const IMG = styled.img`
	width: 30%;
`

function WeatherCard({ weatherCity }) {
    const { main, name, weather } = weatherCity;
	console.log(weatherCity)

    return (
        <Card>
            <CityName>{name}</CityName>
            <h2>{main.temp} ºC</h2>
            <p>Min: {main.temp_min} ºC</p>
            <p>Max: {main.temp_max} ºC</p>
			<IMG src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`} alt={weather[0].description}/>
			<p style={{"margin": 0}}>{weather[0].main}</p>
        </Card>
    );
}

export default WeatherCard;
