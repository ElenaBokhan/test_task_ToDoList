import './App.css';
import React from "react";
import { ListContainer } from "./components/List";
import NewTaskForm from './components/addNewTaskForm';

class App extends React.Component{	
	render(){
		return 	<div className = "container">
					<header>
						<div></div>
						<div></div>
					</header>
					<main>
						<NewTaskForm />						
						<ListContainer />											
					</main>
					<footer></footer>					
				</div>		
	}
}

export default App