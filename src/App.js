import React from 'react'
import PokemonIndex from './components/PokemonIndex'
import './App.css'

class App extends React.Component{
  state={
    pokemons: []
  }

  componentDidMount(){
    fetch("http://localhost:3000/pokemon")
    .then(res => res.json())
    .then(data => this.setState({pokemons: data }))
  }

  newPokemon=(add)=>{
    console.log(add)
    this.setState({pokemons: [...this.state.pokemons , add]})
    console.log(add)
    fetch("http://localhost:3000/pokemon",{
      method: 'POST',
      headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(add)
    })
  }

  render(){
    const{pokemons} = this.state
    return (
      <div className="App" >
      <PokemonIndex pokemons={pokemons}  newPokemon={this.newPokemon}/>
      </div>

    )
  }

}


export default App
