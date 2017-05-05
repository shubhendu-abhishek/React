import React from 'react';
import ReactDOM from 'react-dom';
import { HelloPlanets } from './components/HelloPlanet';
// Simple way to create component , ES6 provide better way to create compoment with class.
// function HelloPlanet(props){
// 	console.log(props);
// 	return <h1>Hello {props.name}</h1>
// }

ReactDOM.render( 
	< div >
	 { 5 * 2 }
	  < HelloPlanets name = "Earth" num = { 5 } /> 
	< /div>,
    document.getElementById('firstapp')
);
