import React from "react";
import styled from "styled-components";
import useCardBackground from "../hooks/useCardBackground.jsx"

const Card = styled.div`
	/* border: solid 4px blue; */
    text-align: center;
    margin: 5px;
	
	height: 400px;
	width: 300px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (min-width: 768px) {
        width: 30%;
    }
`;

const BACKGROUND = styled.div`
	/* border: solid 2px blue; */
    position: relative;
	height: 100%;
	width: 100%;
    img {
		border-radius: 10px;
		width: 100%;
  		height:100%;
		size: cover;
        filter: brightness(0.4);
    }
`;
const WEATHERDATA = styled.div`
	/* border: red solid 1px; */
    position: absolute;
	color: white;
	max-width: 300px;


    h1 {
		color: white;
        display: block;
        font-size: 8vw;
        margin: 0;

        @media (min-width: 768px) {
            font-size: 3vw;
        }

        @media (min-width: 900px) {
            font-size: 2.5vw;
        }
    }

	h2{
		color: white;
	}

    img {
        max-width: 100%;
		margin: 0 auto;
    }
`;

function WeatherCard(props) {
    const { main, name, weather } = props.weatherCity;

	const [img, BackgroundImg] = useCardBackground("", name)
    
    return (
        <Card>
            <BACKGROUND>
				<BackgroundImg/>
            </BACKGROUND>
            <WEATHERDATA>
                <h1>{name}</h1>
                <h2>{main.temp} ºC</h2>
                <p>Min: {main.temp_min} ºC</p>
                <p>Max: {main.temp_max} ºC</p>
                <img
                    src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
                    alt={weather[0].description}
                />
                <p style={{ margin: 0 }}>{weather[0].main}</p>
            </WEATHERDATA>
        </Card>
    );
}

export default WeatherCard;
