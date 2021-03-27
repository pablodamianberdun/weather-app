import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import WeatherCard from "./WeatherCard";

const Forecast = ({ cityWeather }) => {
    return (
        <Container>
            <Row>
                <Col
                    xs={12}
                    md={12}
                    className="col p-5 d-flex flex-row align-items-center rounded"
                >
                    <WeatherCard data={cityWeather} />
                </Col>
            </Row>
        </Container>
    );
};

export default Forecast;
