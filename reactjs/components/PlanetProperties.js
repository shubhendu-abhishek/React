import React from 'react';

export class PlanetProperties extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return <button onClick={this.props.triggerParentUpdate}>Update Parent</button>
	}
}