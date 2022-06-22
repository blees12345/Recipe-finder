// import React from 'react';
// import {Card, Button} from 'react-bootstrap';
// import { useState, useEffect } from 'react';


// function FoodInformation() {
//      const [result, setResult] = useState([]);
//      const [searchString, setSearchString] = useState('');
// function handleSubmit(event) {
   
// 		event.preventDefault();
// 		const API_ID = process.env.REACT_APP_API_ID;
// 		const API_KEY = process.env.REACT_APP_API_KEY;
// 		const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${searchString}&app_id=${API_ID}&app_key=${API_KEY}&imageSize=REGULAR`;

// 		fetch(url)
// 			.then((res) => {
// 				return res.json();
// 			})
// 			.then((data) => {
// 				setResult(data.hits);
// 				console.log(data.hits);
// 			})
// 			.catch((err) => {
// 				console.log(err);
// 			});
// 		console.log(url);
// 	}
//     return (
// 		<div>
//             {result.map(item => (
//                 <div className='foodInfo'>
//                     <p>{result.recipe.label}</p>
//                 </div>
//             ))}
//         </div>
// 		);
//     }

// export default FoodInformation;