import { useEffect, useState } from 'react';
import FoodList from './FoodList';
// import FoodInfo from './FoodInfo';
// import {Card} from 'react-bootstrap/Card';
import { Button, Row, Card, Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import CustomToggle from './CustomToggle';
import { Routes, Route } from 'react-router-dom';
import FoodInformation from './FoodInformation';
import  './App.css'


function Search(props) {
	const [searchString, setSearchString] = useState('');
	const [result, setResult] = useState([]);
	const [active, setActive] = useState('')
	function handleChange(event) {
		setSearchString(event.target.value);
	} 

	function handleSubmit(event) {
		event.preventDefault();
		const API_ID = process.env.REACT_APP_API_ID;
		const API_KEY = process.env.REACT_APP_API_KEY;
		const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${searchString}&app_id=${API_ID}&app_key=${API_KEY}&imageSize=REGULAR`;

		fetch(url)
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				setResult(data.hits);
				console.log(data.hits);
			})
			.catch((err) => {
				console.log(err);
			});
		console.log(url);
	}

	// useEffect(()=>{
	//     handleSubmit();
	// },[])
	return (
		<div>
			<FoodList
				searchString={searchString}
				handleSubmit={handleSubmit}
				handleChange={handleChange}
			/>
			{result.map((result, index) => {
				return (
					<div >
						<Row xs={1} md={1} lg={1} className='g-4'>
							{/* {Array.from({ length: 4 }).map((_, idx) => ( */}
							{/* <Col className='col'> */}
								<Card className='card' key={index}>
									<Card.Img src={result.recipe.image} />
									<Card.Body>
										<Card.Title>{result.recipe.label}</Card.Title>
										<Card.Text>
											Calories: {Math.floor(result.recipe.calories)}
										</Card.Text>
										<Button >
											Food Information
										</Button>
									</Card.Body>
								</Card>
							{/* </Col> */}
							{/* ))} */}
						</Row>
						{/* {active === 'buttonData' && (
							<Card data={result.recipe.label} cardIndex='0' />
						)} */}
					</div>
				);
			})}
		</div>
	);
}
console.log(Button)
export default Search;
