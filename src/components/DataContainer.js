import React  from "react";
import WeatherCard from "./WeatherCard";
import ForecastCard from "./ForecastCard";
import { CONTAINER, FORECASTCONTAINER} from "../styles/dataContainer.styled"

const DataContainer = ({ cityWeather, forecast }) => {
	
    return (
        <CONTAINER>
            
                <div className="col p-4 p-md-5 d-flex flex-row align-items-center">
                    <WeatherCard data={cityWeather} />
                </div>

                <div className="p-2 p-md-5" >	
                    <FORECASTCONTAINER>
                        {forecast
                            ?
							forecast.daily.map((day) => (
                                  <div className="forecast-card m-2">
                                      <ForecastCard key={day.datetime} timezone={forecast.timezone} forecast={day}/>
                                  </div>
                              ))
                            : null
						}
                    </FORECASTCONTAINER>
                </div>
				
        </CONTAINER>
    );
};

export default DataContainer;
