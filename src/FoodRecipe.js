import { Button, Modal, Card, Container } from 'react-bootstrap';
import { useState } from 'react';

function FoodRecipe({ show, handleClose, recipe }) {
	if (recipe === null) return null;
    // const foodRecipe = recipe.ingredientLines;
    // const recipeLi = FoodRecipe.map(recipe) =>
    // <li>{foodRecipe}</li>
	return (
		<>
			<Modal className='modal' show={show} onHide={handleClose}>
				<Modal.Header className='text' closeButton>
					<Modal.Title className='text'>Ingredients</Modal.Title>
				</Modal.Header>
				<Modal.Body className='text'>
					<div className='nutritionFacts'>
						<p>{recipe.ingredientLines[0]}</p>
						<p>{recipe.ingredientLines[1]}</p>
						<p>{recipe.ingredientLines[2]}</p>
						<p>{recipe.ingredientLines[3]}</p>
						<p>{recipe.ingredientLines[4]}</p>
                        
						{/* {recipe.ingredientLines.map} */}
					</div>
				</Modal.Body>
				<Modal.Footer>
					<Button variant='secondary' onClick={handleClose}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default FoodRecipe;
