import React from 'react';
import Search from './Search';
import rat from './photos/rat.png';

function Main(props) {
    return (
			<div>
				<div className='main'>
					<img className='rat' alt='ratatouille' src={rat} />
					<h1 className='header'>Find the perfect dish!</h1>
					<Search />
				</div>
			</div>
		);
}

export default Main;