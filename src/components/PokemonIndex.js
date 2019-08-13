import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {

  state = {
    pokemon: [],
    copiedPokemon: [],
    searchTerm: ''
  }

  onPokeCreate = (newPoke) => {
    this.setState(prevState => ({
      pokemon: [...prevState.pokemon, newPoke],
      copiedPokemon: [...prevState.copiedPokemon, newPoke]
    }))
  }

  componentDidMount() {
    fetch("http://localhost:3000/pokemon")
      .then(resp => resp.json())
      .then(pokemon => this.setState({
        pokemon: pokemon,
        copiedPokemon: pokemon
      }))
  }

  handleSearch = (term) => {
    let pokeFilter = this.state.pokemon.filter(poke => poke.name.includes(term))
    this.setState({
      searchTerm: term,
      copiedPokemon: pokeFilter
    })
  }

  render() {
    // console.log(this.state.pokemon)
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={(e) => this.handleSearch(e.target.value)}
                value={this.state.searchTerm}
                showNoResults={false} />
        <br />
        <PokemonCollection pokemon={this.state.copiedPokemon}/>
        <br />
        <PokemonForm onPokeCreate={this.onPokeCreate}/>
      </div>
    )
  }
}

export default PokemonPage
