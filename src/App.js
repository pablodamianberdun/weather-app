import React, { Fragment, useState, useEffect } from "react";
import Header from "./components/Header";
import Forecast from "./components/Forecast"
import { BACKGROUND, DATACONTAINER } from "./styles/App.styled"
import axios from "axios"


function App() {
    const [city, setCity] = useState("");
    const [getApi, setGetApi] = useState(false);
    const [weather, setWeather] = useState("");
    const [error, setError] = useState(false);
	const [img, setImg] = useState("https://cdn.pixabay.com/photo/2016/08/12/20/14/fields-1589613_960_720.jpg")

	
    if (getApi) {
		const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=fa17ec1c7d684c94614d3a196892c3d0`;
		async function getWeather() {
			const response = await fetch(url);
            const data = await response.json();
            setGetApi(false);
            if (data.cod === "404") {
				setError(true);
            } else {
				setError(false);
                setWeather(data);
            }
        }
		getWeather();
    }

	useEffect( () => {
		const getBackground = async () => {
			const url = 'https://pixabay.com/api/?key=19949153-2db7b3c8211ebbbd16f59e64d&q=weather&category=travel&orientation=horizontal&per_page=100&image_type=photo&pretty=true'
			const response = await axios.get(url)
			const links = response.data.hits
			const index = Math.floor(Math.random() * links.length)
			const picture = links[index];
			setImg(picture.largeImageURL)
		}
		getBackground()
	}, [])


    return (
        <Fragment>
			<BACKGROUND style={{backgroundImage: `url(${img})`}}></BACKGROUND>
            <DATACONTAINER>
				<Header
					title="Weather App"
					setCity={setCity}
					setGetApi={setGetApi}
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
