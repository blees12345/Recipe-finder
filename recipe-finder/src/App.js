import './App.css';
import Main from './Main';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
 
  // let URL = `https://api.edamam.com/search?app_id=7982e14e&app_key=bb6c086fa71a24496f481ed4846ad618%09&q=`;
 
  // const searchResults = () => {
		
	// 	// fetch(URL)
	// 	// 	.then((res) => res.json())
	// 	// 	.then((res) => ())
	// 	// 	.catch(console.error);
	// };
  return (
    
    <div className="App">
      
      <Main/>
    </div>
  );
}

export default App;
