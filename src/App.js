import './App.css';
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from './Search';
import rat from './photos/rat.png'

function App() {
 
  return (
		<div className='main'>
			<img className='rat' alt='ratatouille' src={rat} />
			<h1 className='header'>Find the perfect dish!</h1>
			<Search />
		</div>
	);
}


export default App;
