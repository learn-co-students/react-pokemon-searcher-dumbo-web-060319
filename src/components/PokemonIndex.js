import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

const API = "http://localhost:3000/pokemon"

class PokemonPage extends React.Component {

  state = {
    allPokemon: [],
    copiedArray: [],
    term: ''
  }



  componentDidMount() {
    fetch(API)
      .then(resp => resp.json())
      .then(data => {
        this.setState({ allPokemon: data, copiedArray: data })
      })
  };

  handleSearch = (term) => {
    let newArrayOfPokemons = this.state.allPokemon.filter(pokemon => {
      return pokemon.name.includes(term)
    })
    
    this.setState({
      term: term,
      copiedArray: newArrayOfPokemons
    })
  }

  addPokemon = (newPokemon) => {
    let addedPokemon = [...this.state.allPokemon, newPokemon]
    this.setState({
      allPokemon: addedPokemon,
      copiedArray: addedPokemon
    })
  }
    
  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={ (event) => this.handleSearch(event.target.value) } value={ this.state.term } showNoResults={false} />
        <br />
        <PokemonCollection allPokemon={ this.state.copiedArray }/>
        <br />
        <PokemonForm addPokemon={ this.addPokemon } />
      </div>
    )
  }
}

export default PokemonPage
