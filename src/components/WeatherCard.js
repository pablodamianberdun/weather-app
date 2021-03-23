import React, {useState,useEffect} from "react";
import { ICON, CITY, TEMP } from "../styles/WeatherCard.styled";

const WeatherCard = ({ data }) => {

	const { main, name, weather, sys } = data;
	const [icon, setIcon] = useState("")

	useEffect( () => {
		const getIcon = () => {
			const path = require(`../icons/${weather[0].icon}.svg`)
			setIcon(path.default)
		}
		getIcon()
	}, [weather])

	const round = num => {
		const rounded = Math.round(num)
		return rounded
	}

    return (
        <div className="w-100">
            <CITY>
                {name}, <span>{sys.country}</span>
            </CITY>
			<div className="d-flex align-items-center justify-content-between" >
				<TEMP>{round(main.temp)}º</TEMP>
				<ICON src={icon}/>
			</div>
			<div className="d-flex align-items-center justify-content-between">
				<p>Min: {round(main.temp_min)}º / Max: {round(main.temp_max)}º</p>
				<p>{weather[0].main}</p>
			</div>
        </div>
    );
};

export default WeatherCard;