import React from 'react';
import logo from './logo.svg';
import './App.css';

class Timer extends React.Component{
}
render(){
  return (
    <div classname="container">
	<h1>Timer :{this.state.count}</h1>
	<button onclick ={this.startTimer}>START</button>
	<button onclick ={this.stopTimer}>STOP</button>
	<button onclick ={this.resetTimer}>Reset</button>
  );
}

export default App;
