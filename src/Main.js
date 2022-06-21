import React from 'react';
import FoodList from './FoodList';
import FoodSearch from './FoodSearch';
import Search from './Search'
import Col from 'react-bootstrap/Col';
import { Container, Row } from 'react-bootstrap';
import CustomToggle from './CustomToggle';



function Main(props) {
	
	return (
		<Container className='mainCard'>
			<Row md={4} lg={2}>
				<Col>
					<Search />
				</Col>
		
			</Row>
		</Container>
	);
}

export default Main;