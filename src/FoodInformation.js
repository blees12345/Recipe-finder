import { Button, Modal, Card, Container } from 'react-bootstrap';
import { useState } from 'react'; 
import FoodRecipe from './FoodRecipe';

function FoodInformation({show, handleClose, recipe}) {
    // const [selectedRecipe, setselectedRecipe] = useState();
    const [recipeInfo, setrecipeInfo] = useState(null)
    const [shows, setShow] = useState(false);
    const handleShow = () => setShow(true);


if (recipe === null) return null
function fetchFoodRecipe(recipe) {
	// setselectedRecipe(recipe);
setrecipeInfo(recipe)
	handleShow();


}

	return (
		<>
			<Modal className='modal' show={show} onHide={handleClose}>
				<Modal.Header className='text' closeButton>
					<Modal.Title className='text'>Food Information</Modal.Title>
				</Modal.Header>
				<Modal.Body className='text'>
					<div className='nutritionFacts'>
						<p>
							Protein: {Math.floor(recipe.totalNutrients.PROCNT.quantity)}
							{recipe.totalNutrients.PROCNT.unit}
						</p>
						<p>
							Fat: {Math.floor(recipe.totalNutrients.FAT.quantity)}
							{recipe.totalNutrients.FAT.unit}
						</p>
						<p>
							Carbs: {Math.floor(recipe.totalNutrients.CHOCDF.quantity)}
							{recipe.totalNutrients.CHOCDF.unit}
						</p>
						<p>
							{' '}
							Sugar: {Math.floor(recipe.totalNutrients.SUGAR.quantity)}
							{recipe.totalNutrients.SUGAR.unit}
						</p>
						<p>
							Sodium: {Math.floor(recipe.totalNutrients.NA.quantity)}
							{recipe.totalNutrients.NA.unit}
						</p>
                            <h2>Ingredients</h2>
						<div className='nutritionFacts'>
							<p>{recipe.ingredientLines[0]}</p>
							<p>{recipe.ingredientLines[1]}</p>
							<p>{recipe.ingredientLines[2]}</p>
							<p>{recipe.ingredientLines[3]}</p>
							<p>{recipe.ingredientLines[4]}</p>

							{/* {recipe.ingredientLines.map} */}
						</div>
						<Button
							onClick={() => {
								fetchFoodRecipe(recipe.url);
								console.log('clickeed ');
							}}>
							{' '}
							Food Recipe
						</Button>
					</div>
				</Modal.Body>
				<Modal.Footer>
					<Button variant='secondary' onClick={handleClose}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
			{/* <FoodRecipe
				handleClose={handleClose}
				recipe={selectedRecipe}
				show={show}
			/> */}
		</>
	);
}

export default FoodInformation
