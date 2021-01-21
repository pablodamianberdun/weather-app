import React, { Fragment, useState } from "react";
import illustration from "./img/Weather-rafiki.svg";
import Header from "./components/Header";
import WeatherCard from "./components/WeatherCard";
import styled from "styled-components";

const Image = styled.img`
    max-width: 100%;
    transform: scale(1.2);
    display: block;
    margin: 50px auto;

    @media (min-width: 768px) {
        max-width: 40%;
        margin: 10px auto;
    }
`;

function App() {
    const [city, setCity] = useState("");
    const [getApi, setGetApi] = useState(false);
    const [weather, setWeather] = useState([]);
    const [error, setError] = useState(false);

    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=fa17ec1c7d684c94614d3a196892c3d0`;

    if (getApi) {
        getWeather();
        async function getWeather() {
            const response = await fetch(url);
            const data = await response.json();
            setGetApi(false);
            if (data.cod === "404") {
                setError(true);
            } else {
                setError(false);
                setWeather([...weather, data]);
            }
        }
    }

    return (
        <Fragment>
            <Header
                title="Weather App"
                setCity={setCity}
                setGetApi={setGetApi}
            />
            {error ? (
                <p className="error">There was an error. Try again</p>
            ) : null}

            {weather.length !== 0 ? (
                <div className="container cards-container">
                    {weather.map((weatherCity) => (
                        <WeatherCard weatherCity={weatherCity} />
                    ))}
                </div>
            ) : (
                <div className="container">
                    <Image src={illustration} alt="Weather Illustration" />
                </div>
            )}
        </Fragment>
    );
}

export default App;
