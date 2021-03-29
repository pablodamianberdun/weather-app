import React, {useState, useEffect} from 'react'
import { CARD, ICON } from "../styles/forecastCard.styled"
import moment from "moment-timezone"

const ForecastCard = ({ timezone, forecast }) => {
	const { weather } = forecast

	const getDate = (dt, zone) => moment.tz(dt*1000, zone).format("ddd. DD")

	const [icon, setIcon] = useState("");

    useEffect(() => {
        const getIcon = () => {
            const path = require(`../icons/${weather[0].icon}.svg`);
            setIcon(path.default);
        };
        getIcon();
    }, [weather]);

	const round = (num) => Math.round(num);

	return ( 
		<CARD>
			<p className="text-center">{getDate(forecast.dt, timezone)}</p>
			<ICON src={icon}/>
			<div>
				<p className="mr-2 mb-0 d-inline-block">{round(forecast.temp.min)}º</p>
				<p className="ml-2 mb-0 d-inline-block">{round(forecast.temp.max)}º</p>
			</div>
		</CARD>
	 );
}
 
export default ForecastCard;