import {Component} from 'react';
import { Cardlist } from './components/card-list/card-list.component';
import './App.css';

class App extends Component{
  constructor(){
    super();

    this.state = {
      monster:[]
    };

 
  }

  componentWillMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(user => this.setState({monster : user}))
  }

  render(){
    return(
      <div className="App">
        <Cardlist>
        {
          this.state.monster.map( monster => (<h1 key={monster.id}> {monster.name} </h1>))
        }
        </Cardlist>

        {/* prop has children property - usefull. */}
      </div>
    );
  }
}


export default App;
