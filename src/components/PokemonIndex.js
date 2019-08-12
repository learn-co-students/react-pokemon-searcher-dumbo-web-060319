import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {

  state = {
    pokemonList: [],
    copiedArray: [],
    term: ""
  }

  componentDidMount() {
    fetch("http://localhost:3000/pokemon")
    .then(response => response.json())
    .then(data => {this.setState({
      pokemonList: data,
      copiedArray: data
    })})
  }

  handleSearch = (term) => {
    let newPokemonArray = this.state.pokemonList.filter(pokemon => {
      return pokemon.name.includes(term)
    })
    this.setState({
      term: term,
      copiedArray: newPokemonArray
    })
  }

  addPokemon = (newPokemon) => {
    console.log(newPokemon)
    this.setState({
      pokemonList: [...this.state.pokemonList, newPokemon],
      copiedArray: [...this.state.copiedArray, newPokemon]
    })
  }

  render() {
   
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={(event) => this.handleSearch(event.target.value)} value={this.state.term} showNoResults={false} />
        <br />
        <PokemonCollection pokemonList={this.state.copiedArray}/>
        <br />
        <PokemonForm addPokemon={this.addPokemon}/>
      </div>
    )
  }
}

export default PokemonPage
