import { useState } from 'react';
import FoodList from './FoodList';


function FoodSearch(props) {
	const [searchString, setSearchString] = useState('');

	function handleChange(event) {
		setSearchString(event.target.value);
	}

	function handleSubmit(event) {
		event.preventDefault();
		console.log(searchString);
	}

	return (
		<div>
			<FoodList
				searchString={searchString}
				handleSubmit={handleSubmit}
				handleChange={handleChange}
			/>
		</div>
	);

}

export default FoodSearch;
