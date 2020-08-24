import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
//import Hello from './Hello';
//import { Button } from '@material-ui/core';
import Paperbase from './Paperbase';
 

interface AppProps { }
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React'
    };
  }
  render() {
    return (
      <Paperbase/>
    );
  }
/*
  renderHelloWorld() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
        </p>
        <button color="primary">Hello World</button>
      </div>    
    );
  }
  */
}

render(<App />, document.getElementById('root'));
