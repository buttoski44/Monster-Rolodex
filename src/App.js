import {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  constructor(){
    super();

    this.state = {
      monster:[
      {
        name : "frankenstein",
        id : "m1"
      },
      {
        name : "dracula",
        id : "m2"
      },
      {
        name : "Zombie",
        id : "m3"
      }
      ]
    };
    // this.state = [
    //   {
    //     name : "frankenstein",
    //     id : "m1"
    //   },
    //   {
    //     name : "dracula",
    //     id : "m2"
    //   },
    //   {
    //     name : "Zombie",
    //     id : "m3"
    //   };
    // ];
      
    
  }
  render(){
    return(
      <div className="App">
        {
          this.state.monster.map( monster => (<h1 key={monster.id}> {monster.name} </h1>))
        }
      
      </div>
    );
  }
}












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


// class App extends Component{
//   constructor(){
//     super();

//     this.state = {
//       string : "vishal sangole"
//     }
//   }
//   render(){
//     return(
//       <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           {/* Edit <code>src/App.js</code> and nope ista to reload. */}
//           {this.state.string}
//         </p>
//         <button onClick={() => { this.setState({string : "vishal R. sangole"})
//         }}>change state</button>

//         {/* <a 
//         className="App-link" 
//         href="https://reactjs.org" 
//         target="_blank" 
//         rel="noopener noreferrer">
//         </a> */}
//       </header>
//     </div>
//     )
//   }
// }



export default App;
