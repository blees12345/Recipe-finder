import { useEffect, useState } from 'react';
import FoodList from './FoodList';
// import FoodInfo from './FoodInfo';
// import {Card} from 'react-bootstrap/Card';
import { Button, Row, Card, Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import CustomToggle from './CustomToggle';
import { Routes, Route } from 'react-router-dom';
import FoodInformation from './FoodInformation';

	

function Search(props) {
	const [searchString, setSearchString] = useState('');
	const [result, setResult] = useState([]);
	const [active, setActive] = useState('')

	const API_ID = process.env.REACT_APP_API_ID;
	const API_KEY = process.env.REACT_APP_API_KEY;

	function handleChange(event) {
		setSearchString(event.target.value);
	} 

	function handleSubmit(event) {
		event.preventDefault();
	
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
// function fetchFoodInfo(event){
// event.preventDefault();

// console.log('clicked')
// }

	// useEffect(()=>{
	//     handleSubmit();
	// },[])
	return (
		<>
			<FoodList
				searchString={searchString}
				handleSubmit={handleSubmit}
				handleChange={handleChange}
			/>
			
					<div className='results'>
						{result.map((result, index) => {
							return (
					
						<Card className='card'>
							<Card.Img src={result.recipe.image} />
							<Card.Body>
								<Card.Title>{result.recipe.label}</Card.Title>
								<Card.Text>
									Calories: {Math.floor(result.recipe.calories)}
								</Card.Text>
								<Button onClick={<FoodInformation/>}>Food Information</Button>
							</Card.Body>
						</Card>
					
							)})}
					</div>
		
		</>
	);
}

export default Search;

	{/* <div className=" col=11 col-md-6 col-lg-3 mx-0 mb-4" key={index}> */}
						{/* {Array.from({ length: 4 }).map((_, idx) => ( */}
						{/* <Col className='col'> */}

							{
								/* </Col> */
							}
							{
								/* ))} */
							}
							{
								/* </div> */
							}
							{
								/* {active === 'buttonData' && (
							<Card data={result.recipe.label} cardIndex='0' />
						)} */
							}