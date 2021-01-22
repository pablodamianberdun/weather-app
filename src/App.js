import React, { useState } from "react";
import Header from "./components/Header";
import WeatherCard from "./components/WeatherCard";
import Footer from './components/Footer'
import styled from "styled-components";
import background from './img/sky-50e9d54143_1280.jpg'

const Main = styled.div ` 
	min-height: 100vh;
    background-image: url(${background});
    background-repeat: no-repeat;
	background-attachment: fixed;
	background-position: center;
	background-size: cover;
	position: relative;
`

function App() {
    const [city, setCity] = useState({});
    const [getApi, setGetApi] = useState(false);
    const [weather, setWeather] = useState([]);
    const [error, setError] = useState(false);

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.name}&units=metric&appid=fa17ec1c7d684c94614d3a196892c3d0`;

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
                data.id = city.id;
                setWeather([...weather, data]);
            }
        }
    }

    return (
        <Main>
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
                        <WeatherCard
                            key={weatherCity.id}
                            weatherCity={weatherCity}
                        />
                    ))}
                </div>
            ) : null}
			<Footer/>
        </Main>
    );
}

export default App;
