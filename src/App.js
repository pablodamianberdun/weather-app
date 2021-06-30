import React, { Fragment, useState, useEffect } from "react";
import Header from "./components/Header";
import DataContainer from "./components/DataContainer";
import Error from "./components/Error";
import { BGCONTAINER, BGIMAGE, CONTAINER } from "./styles/app.styled";
import { getWeather, getForecast } from "./api/openWeather";
import Spinner from "./components/Spinner";
import background from "./assets/backgrounds/main-background.jpg";

function App() {
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState("");
    const [error, setError] = useState(false);
    const [forecast, setForecast] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (city === "") return;

        const getData = async () => {
            const data = await getWeather(city);

            if (data.cod === "404") {
                setError(true);
            } else {
                setError(false);
                setWeather(data);
            }
        };

        getData();
    }, [city]);

    useEffect(() => {
        if (weather === "") return;

        const getData = async () => {
            setLoading(true);
            const forecastData = await getForecast(
                weather.coord.lat,
                weather.coord.lon
            );
            setForecast(forecastData);
            setLoading(false);
        };

        getData();
    }, [weather]);

    return (
        <Fragment>
            <BGCONTAINER>
                <BGIMAGE src={background} />
            </BGCONTAINER>

            <CONTAINER>
                <Header title="Weather App" setCity={setCity} />
                {error ? (
                    <Error message="There was an error. Try again" />
                ) : null}

                {loading ? <Spinner /> : null}

                {weather && forecast && !loading ? (
                    <DataContainer cityWeather={weather} forecast={forecast} />
                ) : null}
            </CONTAINER>
        </Fragment>
    );
}

export default App;
