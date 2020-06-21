import React from 'react';
import logo from './logo.svg';
import './App.css';

class Timer extends React.Component{
	constructor (props){
		super(props)
		this.state={
			count:0
}
this.startTimer=this.startTimer.bind(this);
this.stopTimer=this.stopTimer.bind(this);
this.resetTimer=this.resetTimer.bind(this);
	}
	startTimer(){
		this.timer=setInterval(() =>
		this.setState({
			count:this.state.count=1;
		}):,1000
	}
	}
	stopTimer(){
		clearInterval(this.timer)
	}
	resetTimer(){
		this.setState({count:0})
	}
render(){
  return (
    <div classname="container">
	<h1>Timer :{this.state.count}</h1>
	<button onclick ={this.startTimer}>START</button>
	<button onclick ={this.stopTimer}>STOP</button>
	<button onclick ={this.resetTimer}>Reset</button>
	</div>
  );
}

export default Timer;
