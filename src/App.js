import React, { Fragment, useState } from "react";
import Header from "./components/Header";
import CardsCarousel from "./components/CardsCarousel"


function App() {
    const [city, setCity] = useState({});
    const [getApi, setGetApi] = useState(false);
    const [weather, setWeather] = useState([]);
    const [error, setError] = useState(false);

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.name}&units=metric&appid=fa17ec1c7d684c94614d3a196892c3d0`;

    if (getApi) {
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
		getWeather();
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

			<CardsCarousel weather={weather}/>

        </Fragment>
    );
}

export default App;
