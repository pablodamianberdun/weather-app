import React, { useState, useEffect} from "react";
import styled from "styled-components";
import axios from "axios";

const Card = styled.div`
	/* border: solid 4px green; */
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

    img {
        max-width: 100%;	
    }
`;

function WeatherCard(props) {
    const { main, name, weather } = props.weatherCity;
    const [urlImg, setUrlImg] = useState("");

    useEffect(() => {
        const getCardImage = async () => {
            const url = `https://pixabay.com/api/?key=19949153-2db7b3c8211ebbbd16f59e64d&q=${name}&orientation=vertical&image_type=photo&pretty=true`;
            const response = await axios.get(url);
            const links = response.data.hits;
            const num = Math.floor(Math.random() * links.length);
            const link = links[num];
            setUrlImg(link.largeImageURL);
        };

        getCardImage();
    }, [name, weather]);

    return (
        <Card>
            <BACKGROUND>
				<img src={urlImg} alt=""/>
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
