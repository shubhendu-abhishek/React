import React from 'react';

export class HelloPlanets extends React.Component{
	constructor(props){
		super(props);
		console.log(props);
		this.state = {
			counter:0
		};
		console.log(this.state.counter);
		this.updateThisCounter = this.updateThisCounter.bind(this);
		// setInterval(()=>{
		// 	this.setState({counter: this.state.counter + 1});
		// },1000);
	};
	updateThisCounter(){
		this.setState({counter:this.state.counter+1});
	}
	render(){
		return <div>
					<span>{this.state.counter}</span>
			<button onClick={this.updateThisCounter}>Update Counter</button>
		       </div>
	}
}

HelloPlanets.propTypes = {
	num: React.PropTypes.number
}

HelloPlanets.defaultProps = {
	num: 10
};