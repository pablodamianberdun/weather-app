import React from "react";
import WeatherCard from "./WeatherCard";
import ForecastCard from "./ForecastCard";
import { CONTAINER, FORECASTCONTAINER } from "../styles/dataContainer.styled";

const DataContainer = ({ cityWeather, forecast }) => {
    return (
        <CONTAINER>
            <div className="col p-4 p-md-5 d-flex flex-row align-items-center">
                <WeatherCard data={cityWeather} />
            </div>

            <div className="p-2 p-md-5">
                <FORECASTCONTAINER>
                    {forecast
                        ? forecast.daily.map((day, index) => (
                              <ForecastCard
                                  key={index}
                                  timezone={forecast.timezone}
                                  forecast={day}
                              />
                          ))
                        : null}
                </FORECASTCONTAINER>
            </div>
        </CONTAINER>
    );
};

export default DataContainer;
