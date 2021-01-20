import React, { Fragment, useState } from "react";
import illustration from "./img/Weather-rafiki.svg";
import Header from "./components/Header";
import styled from "styled-components";

const Image = styled.img`
    max-width: 100%;
    display: block;
    margin: 50px auto;
    transform: scale(1.5);

    @media (min-width: 768px) {
        max-width: 60%;
        margin: 10px auto;
        transform: none;
        transform: scale(1.2);
    }
`;

function App() {
	const [city, setCity] = useState('');
	const [getApi, setGetApi] = useState(false)
	const [weather, setWeather] = useState([])
	
	const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=fa17ec1c7d684c94614d3a196892c3d0`;
	
	if(getApi){
		async function getWeather (){
			const response = await fetch(url)
			const data = await response.json()
			setGetApi(false)
			setWeather([...weather, data])
		}
		getWeather()
	}
	

    return (
        <Fragment>
            <Header
				title="Weather App"
				setCity={setCity}
				setGetApi={setGetApi}
            />

            <div className="form-container">
                <Image
                    src={illustration}
                    alt="Weather Illustration"
                    className="weather-illustration"
                />
            </div>
        </Fragment>
    );
}

export default App;
