import { useEffect, useState } from 'react';
import FoodList from './FoodList';
// import FoodInfo from './FoodInfo';
// import {Card} from 'react-bootstrap/Card';
import { Button,Row, Card, Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import CustomToggle from './CustomToggle';

// import { BrowserRouter, Routes, Route } from 'react-router-dom';

function FoodSearch(props) {
	const [searchString, setSearchString] = useState('');
	const [result, setResult] = useState([]);

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
					// 	<div className='card'>
					// 	<p>{result.recipe.label}</p>

					//    <p>{result.recipe.url}</p>
					//    <img src="result.recipe." />
					// 		</div>
					<Container>
						<Row xs={1} md={2} lg={4} className='g-4'>
							<Col key={index}>
								<Card className='card' style={{ width: '25rem' }}>
									<Card.Img variant='top' src={result.recipe.image} />
									<Card.Body>
										<Card.Title>{result.recipe.label}</Card.Title>
										<Card.Text>
											Calories: {Math.floor(result.recipe.calories)}
										</Card.Text>
										{/* <link to='./FoodInfo.js'> 

								 <a href='{result.recipe.totalDaily}'>
								<Button>Food Information</Button>

								 </a> 

								 </link> */}
									</Card.Body>
								</Card>
							</Col>
						</Row>
					</Container>
					
				);
			})}
		</div>
	);
}

export default FoodSearch;
