import axios from "axios";

export const getWeather = async (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=fa17ec1c7d684c94614d3a196892c3d0`;

    const response = await fetch(url);
    const data = await response.json();
    return data;
};

export const getPicture = async (cityName) => {
    const url = `https://pixabay.com/api/?key=19949153-2db7b3c8211ebbbd16f59e64d&q=${cityName}&category=travel&orientation=horizontal&per_page=100&image_type=photo&pretty=true`;
    const response = await axios.get(url);
    const links = response.data.hits;
    const index = Math.floor(Math.random() * links.length);
    return links[index].largeImageURL;
};