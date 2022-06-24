import { Button, Modal } from 'react-bootstrap';
import { useState } from 'react'; 


function FoodInformation({show, handleClose, recipe}) {
    
    const [recipeInfo, setrecipeInfo] = useState(null)
    const [shows, setShow] = useState(false);
    const handleShow = () => setShow(true);


if (recipe === null) return null

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
							{recipe.ingredientLines.map((Ingredients, index) => {
								return (
									<ul key={index}>
										<li >{Ingredients}</li>
									</ul>
								);
							})}
						</div>
						<a  href={recipe.url}>
							More Info
						</a>
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

export default FoodInformation
