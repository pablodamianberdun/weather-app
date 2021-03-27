import React, { Fragment, useState, useEffect } from "react";
import Header from "./components/Header";
import Forecast from "./components/Forecast"
import { BACKGROUND, DATACONTAINER } from "./styles/App.styled"
import { getWeather, getPicture } from "./services/openWeather"


function App() {
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState("");
    const [error, setError] = useState(false);
	const [img, setImg] = useState("")

	
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
				const picture = await getPicture(city)
				setImg(picture)
			} catch (error) {
				const picture = await getPicture("forecast")
				setImg(picture)
			}
		}

		getData()
		setBackground()
	},[city])


    return (
        <Fragment>
			<BACKGROUND style={{backgroundColor: "#263A52", backgroundImage: `url(${img})`}}></BACKGROUND>
            <DATACONTAINER>
				<Header
					title="Weather App"
					setCity={setCity}
				/>
				{error ? (
					<p className="error">There was an error. Try again</p>
				) : null}

				{weather ? <Forecast cityWeather={weather}/> : null}
			</DATACONTAINER>
        </Fragment>
    );
}

export default App;