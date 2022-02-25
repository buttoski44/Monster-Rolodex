import {Component} from 'react';
import { Cardlist } from './components/card-list/card-list.component';
import './App.css';
import { Card } from './components/card/card.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component{
  constructor(){
    super();

    this.state = {
      monster:[],
      searchFeild : ""
    };

 
  }

  componentWillMount(){
    fetch("https://jsonplaceholder.typicode.com/users") 
    .then(response => response.json())
    .then(user => this.setState({monster : user}))
  }

  render(){

    const {monster ,searchFeild} = this.state;
    const filteredMonsters = monster.filter(monster => monster.name.toLowerCase().includes(searchFeild.toLowerCase()));

    return(
      <div className="App">
        <SearchBox placeholder="serach monsters" 
          handleChange={e => this.setState({searchFeild : e.target.value}, 
          () => console.log(e.target.value))}
        />
        
        <Cardlist monsters ={filteredMonsters}/>

        {/* prop has children property - usefull. */}
      </div>
    );
  }
}


export default App;
