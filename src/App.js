import React from 'react';
import logo from './logo.svg';
import './App.css';
 class Pff extends React.Component{
  componentDidMount(){setTimeout(function(){ alert("Hello message"); },2000);}
  componentWillUnmount(){alert('Goodbye')}
  render(){return <div></div>}
}
function App() {
  return (
    <div className="App">
     <Pff></Pff>
    </div>
  );
}

export default App;
