import { div } from 'prelude-ls';
import React from 'react';

class App extends React.Component{
  state = {
    count: 0,
  }
  handleInc=()=>{
    this.setState({count: this.state.count+1});
  }
  handleDec=()=>{
    this.setState({count:this.state.count-1});
  }
  handleRes=()=>{
    this.setState({count:0});
  }
    render(){
    return(
      <div>
        <h1>The Counter value is: {this.state.count}</h1>
        <button onClick={this.handleInc}>Increment</button>
        <button onClick={this.handleDec}>Decrement</button>
        <button onClick={this.handleRes}>Reset</button>
      </div>
    )
  }
}
export default App;
