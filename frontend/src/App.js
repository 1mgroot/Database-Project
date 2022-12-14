import React, { useEffect, useState } from 'react';
import './App.css';
import Authors from './components/Authors';
import AuthorLoadingComponent from './components/AuthorLoading';
import {BrowserRouter} from 'react-router-dom'
import Router from './routes';

function App() {
	// const AuthorLoading = AuthorLoadingComponent(Authors);
	// const [appState, setAppState] = useState({
	// 	loading: false,
	// 	authors: null,
	// });

	// useEffect(() => {
	// 	setAppState({ loading: true });
	// 	const apiUrl = `http://127.0.0.1/api/authors/`;
	// 	fetch(apiUrl)
	// 		.then((data) => data.json())
	// 		.then((authors) => {
	// 			setAppState({ loading: false, authors: authors });
	// 		});
	// }, [setAppState]);
	return (
		<BrowserRouter>
		<div className="App">
		  {/* <h1>useRoutes Example</h1> */}
		  <Router />
		</div>
	  	</BrowserRouter>
	);
}
export default App;