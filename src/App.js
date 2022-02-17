import {Component} from 'react';
import logo from './logo.svg';
import './App.css';


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a 
//         className="App-link" 
//         href="https://reactjs.org" 
//         target="_blank" 
//         rel="noopener noreferrer">
//         </a>
//       </header>
//     </div>
//   );
// }


class App extends Component{
  constructor(){
    super();

    this.state = {
      string : "vishal sangole"
    }
  }
  render(){
    return(
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {/* Edit <code>src/App.js</code> and nope ista to reload. */}
          {this.state.string}
        </p>
        <button onClick={() => { this.setState({string : "vishal R. sangole"})
        }}>change state</button>

        {/* <a 
        className="App-link" 
        href="https://reactjs.org" 
        target="_blank" 
        rel="noopener noreferrer">
        </a> */}
      </header>
    </div>
    )
  }
}


export default App;
