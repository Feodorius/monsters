import './App.css';
import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: []
    };
  }

  render() {

    return (
      <div className="App">
        <CardList>
          {this.state.monsters.map(monster =>
            <h1 key={monster.id}>{monster.name}</h1>
          )}
        </CardList>
      </div>
    );
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(resp => resp.json())
      .then(resp => this.setState({ monsters: resp }));
  }
}

export default App;
