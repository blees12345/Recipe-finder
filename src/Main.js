import React from 'react';
import FoodList from './FoodList';
import FoodSearch from './FoodSearch';
import Search from './Search'
import Col from 'react-bootstrap/Col';
import { Container, Row } from 'react-bootstrap';
import CustomToggle from './CustomToggle';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FoodInformation from './FoodInformation';
import './App.css'
function Main(props) {
	
	return (
		<div >
				<h1>Find the perfect dish!</h1>
					<Search />
		</div>
					
					
		
	);
}

export default Main;