import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import WeatherCard from "./WeatherCard"

const Forecast = ({ cityWeather }) => {

    return (
        <Container>
            <Row>
                <Col xs={12} md={6} className="col">
					<WeatherCard 
						data={cityWeather}
					/>
                </Col>
                <Col xs={12} md={6} className="col">
                    COLUMNA 2
                </Col>
            </Row>
        </Container>
    );
};

export default Forecast;