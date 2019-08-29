import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'



class PokemonPage extends React.Component {

  state = {
    pokemon: [],
    searchTerm: ""
  }

  componentDidMount() {
    fetch("http://localhost:3000/pokemon")
    .then(resp => resp.json())
    .then(data => this.setState({
      pokemon: data
    }))
  }

  handleNewPokemonSubmit = (newPokemon) => {

    const pokemon = {
      name: newPokemon.name,
      stats: [
        {
          value: newPokemon.hp,
          name: "hp"
        }
      ],
      sprites: {
        front: newPokemon.frontUrl,
        back: newPokemon.backUrl
      }
    }
    
    fetch('http://localhost:3000/pokemon', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(pokemon)
    })
    .then(resp => resp.json())
    .then(data => this.setState({
      pokemon: [...this.state.pokemon, pokemon]
    }))
  }

  handleChange = (e) => {
    this.setState({
      searchTerm: e.target.value
    })    
  }

  render() {
    const filteredPokemon = this.state.pokemon
    .filter(pokemon => pokemon.name.includes(this.state.searchTerm))
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <input 
          type="search" 
          placeholder="Search" 
          value={this.state.searchTerm} 
          onChange={(e) => this.handleChange(e)}
          />
        <br />
        <br />
        <br />
        <PokemonCollection 
          pokemon={filteredPokemon}
          clicked={this.state.clicked}
        />
        <br />
        <PokemonForm handleNewPokemonSubmit={this.handleNewPokemonSubmit} />

      </div>
    )
  }
}

export default PokemonPage
