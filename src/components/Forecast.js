import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import WeatherCard from "./WeatherCard"

const Forecast = ({ cityWeather }) => {

    return (
        <Container>
            <Row >
                <Col xs={12} md={6} className="col p-5 d-flex flex-row align-items-center">
					<WeatherCard 
						data={cityWeather}
					/>
                </Col>
                <Col xs={12} md={6} className="col p-5 d-flex flex-row align-items-center">
                    COLUMNA 2
                </Col>
            </Row>
        </Container>
    );
};

export default Forecast;