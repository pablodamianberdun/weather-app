import React, { Fragment, useState, useEffect } from "react";
import Header from "./components/Header";
import DataContainer from "./components/DataContainer"
import Error from "./components/Error"
import { BGCONTAINER, BGIMAGE, CONTAINER } from "./styles/app.styled"
import { getWeather, getPicture, getForecast } from "./services/openWeather"
import Spinner from "./components/Spinner"


function App() {
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState("");
    const [error, setError] = useState(false);
	const [img, setImg] = useState("")
	const [forecast, setForecast] = useState("")
	const [loading, setLoading] = useState(true)


	useEffect( () => {
		const setDefaultBackground = async () => {
			const picture = await getPicture("forecast")
			setImg(picture)
		}
		setDefaultBackground()
	}, [])

	
    useEffect ( () => {
		if (city === "") return

		const getData = async () => {
			const data = await getWeather(city)

			if (data.cod === "404") {
				setError(true);
			} else {
				setError(false);
				setWeather(data);
			}
		}

		const setBackground = async () => {
			try {
				setLoading(true)
				const picture = await getPicture(city)
				setImg(picture)
			} catch {
				const picture = await getPicture("forecast")
				setImg(picture)
			}
		}

		getData()
		setBackground()
	},[city])


	useEffect ( () => {
		if (weather === "") return

		const getData = async () => {
			const forecastData = await getForecast(weather.coord.lat, weather.coord.lon)
			setForecast(forecastData)
		}

		getData()
		
	}, [weather])


    return (
        <Fragment>
			<BGCONTAINER>
				<BGIMAGE src={img} onLoad={ () => setLoading(false)}/>
			</BGCONTAINER>

            <CONTAINER>
				<Header
					title="Weather App"
					setCity={setCity}
				/>
				{error ? (
					<Error message="There was an error. Try again"/>
				) : null}

				{loading ? (
					<Spinner/>
				) : null}

				{weather && forecast && !loading ? (
					<DataContainer cityWeather={weather} forecast={forecast}/>
				) : null}
			</CONTAINER>
        </Fragment>
    );
}

export default App;