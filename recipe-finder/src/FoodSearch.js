import { useEffect, useState } from 'react';
import FoodList from './FoodList';
import FoodInfo from './FoodInfo';
import Card from 'react-bootstrap/Card';



function FoodSearch(props) {
	const [searchString, setSearchString] = useState('');
    const [result, setResult] = useState([]);

	function handleChange(event) {
		setSearchString(event.target.value);
	}

	function handleSubmit(event) {
		event.preventDefault();
        const API_ID = process.env.REACT_APP_API_ID;
        const API_KEY = process.env.REACT_APP_API_KEY
        const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${searchString}&app_id=${API_ID}&app_key=${API_KEY}&imageSize=REGULAR`;

        fetch(url)
        .then((res) =>{
            return res.json();
        })
        .then((data)=>{
            setResult(data.hits)
            console.log(data.hits)
        })
        .catch((err) => {
            console.log(err)
        })
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
            {result.map((result)=>{
                return (
									// 	<div className='card'>
									// 	<p>{result.recipe.label}</p>

									//    <p>{result.recipe.url}</p>
									//    <img src="result.recipe." />
									// 		</div>
									<Card style={{ width: '18rem' }}>
										<Card.Img variant='top' src='holder.js/100px180' />
										<Card.Body>
											<Card.Title>{result.recipe.label}</Card.Title>
											<Card.Text>
												Calories: {Math.floor(result.recipe.calories)}
											</Card.Text>
											{/* <Button variant='primary'>Go somewhere</Button> */}
										</Card.Body>
									</Card>
								);
            })}
         
		</div>
	);

}

export default FoodSearch;
