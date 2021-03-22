import React, { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import WeatherCard from "./WeatherCard";

const CardsCarousel = ({ weather }) => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        const groupCards = () => {
            let container = [];

            for (let i = 0; i < weather.length; i++) {
                if (i % 3 === 0 || i === 0) {
                    let arr = [];
                    arr = weather.slice(i, i + 3);
                    container.push(arr);
                }
            }
            setCards(container);
        };
        groupCards();
    }, [weather]);

    return (
        <div className="container carousel">
            {cards.length ? (
                <Carousel interval={null} controls={false}>
                    {cards.map((group) => (
                        <Carousel.Item>
                            <div className="cards-container">
                                {group.map((card) => (
                                    <WeatherCard weatherCity={card} />
                                ))}
                            </div>
                        </Carousel.Item>
                    ))}
                </Carousel>
            ) : null}
        </div>
    );
};

export default CardsCarousel;

// <div className="cards-container">
// 	{weather.map((weatherCity) => (
// 		<WeatherCard
// 			key={weatherCity.id}
// 			weatherCity={weatherCity}
// 			bgColor="red"
// 		/>
// 	))}
// </div>
