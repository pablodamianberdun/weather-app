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
    const [city, setCity] = useState("");

    return (
        <Fragment>
            <Header
                title="Weather App"
                setCity={setCity}
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
