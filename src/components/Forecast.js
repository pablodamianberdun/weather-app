import React from 'react'
import { Container, Row, Col} from "react-bootstrap"


const Forecast = ({ cityWeather }) => {
	const { main, name, weather } = cityWeather;
	
	return ( 
		<Container>
			<Row>
				<Col xs={12}  md={6} className="col">COLUMNA 1</Col>
				<Col xs={12}  md={6} className="col">COLUMNA 2</Col>
			</Row>
		</Container>
	 );
}
 
export default Forecast;