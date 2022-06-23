import { Button, Modal, Card, Container } from 'react-bootstrap';
import { useState } from 'react'; 

function FoodInformation({show, handleClose, recipe}) {
if (recipe === null) return null
	return (
		<>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Food Information</Modal.Title>
					<p>{recipe.totalNutrients.NA.quantity}</p>
				</Modal.Header>
				<Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
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
