import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {

  state = {
    allPokemon: [],
    copyPokemonArray: [],
    searchInput: ""
  }

  componentDidMount() {
    fetch('http://localhost:3000/pokemon')
    .then(response => response.json())
    .then(data => {
      this.setState({
        allPokemon: data,
        copyPokemonArray: data
      })
    })
  }

  handleSearchChange = (event) => {
    let searchInputValue = event.target.value
    let filteredPokemon = this.state.allPokemon.filter(pokemon => pokemon.name.includes(searchInputValue))

    this.setState({
      searchInput: searchInputValue,
      copyPokemonArray: filteredPokemon
    })
  }

  createPokemon = (pokemon) => {
    let newPokemonArray = [...this.state.allPokemon, pokemon]
    this.setState({
      allPokemon: newPokemonArray,
      copyPokemonArray: newPokemonArray
    })
  }

  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search value={this.state.searchInput} onSearchChange={this.handleSearchChange} showNoResults={false} />
        <br />
        <PokemonCollection allPokemon={this.state.copyPokemonArray} />
        <br />
        <PokemonForm createPokemon={this.createPokemon}/>
      </div>
    )
  }
}

export default PokemonPage
