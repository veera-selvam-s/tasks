import React,{Component} from 'react';
import logo from './logo.svg';
import Header from './components/Header'
import Home from './components/Home';
import {TASKS} from './tasks'
import './App.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      tasks:TASKS
    };
  }
  render(){
    return(
      <>
      <Header />
      <Home tasks={this.state.tasks}></Home>
    </>
    );
  }
}

export default App;
