import './App.css';
import Main from './Main';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import ReactDOM from 'react-dom/client';
import FoodSearch from './FoodSearch';
import FoodList from './FoodList';
import CustomToggle from './CustomToggle';
import Search from './Search';

function App() {
 
  return (
		<div className='cards'>
			<Main />
			
		</div>
	);
}


export default App;
