export const getWeather = async (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=fa17ec1c7d684c94614d3a196892c3d0`;

    const response = await fetch(url);
    const data = await response.json();
    return data;
};


export const getForecast = async (lat, lon) => {
	const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&lang=sp&exclude=minutely&appid=fa17ec1c7d684c94614d3a196892c3d0&units=metric`

	const response = await fetch(url);
    const data = await response.json();
    return data;
}