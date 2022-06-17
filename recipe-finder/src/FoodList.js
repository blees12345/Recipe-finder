import React from 'react';

function FoodList({searchString,handleChange,handleSubmit}) {
    return (
			<form onSubmit={handleSubmit}>
				<label htmlFor='searchString'>Search:</label>
				<input
                    type='text'
					value={searchString}
					id='searchString'
					onChange={handleChange}
					required></input>
				<button type='submit'>Search</button>
				
			</form>
		);
       
}


export default FoodList;