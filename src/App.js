import React, { Component } from 'react';
import Header from './Components/Header';
import Finder from './Components/Finder';
import PokeDex from './Components/Pokedex';
import axios from 'axios'
import './App.css';

class App extends Component{
  constructor(){
    super()
    this.state={
      caughtPokemon: []
    }
    this.catchPokemon = this.catchPokemon.bind(this)
    this.savedName = this.savedName.bind(this)
    this.releasePokemon = this.releasePokemon.bind(this)
  }

componentDidMount(){
  axios.get('/api/pokemon')
  .then(res =>{
    this.setState({
      caughtPokemon: res.data
    })
  })
}

catchPokemon(pokemon){
  axios.post('api/pokemon', {pokemon})
  .then(res =>{
    this.setState({
      caughtPokemon: res.data
    })
  })
}

releasePokemon(id){
  axios.delete(`/api/pokemon/${id}`)
  .then(res => {
    this.setState({
      caughtPokemon: res.data
    })
  })
}

savedName(id, newName){
  axios.put(`/api/pokemon/${id}`, {name: newName})
  .then(res => {
    this.setState({
      caughtPokemon: res.data
    })
  })
}

  render(){
  return (
      <div className="App">
        <Header />
        <Finder catchPokemon={this.catchPokemon}/>
        <PokeDex
        releasePokemon={this.releasePokemon}
        saveName={this.savedName}
         caughtPokemon={this.state.caughtPokemon} 
         />
      </div>
    );
  }
}

export default App;
