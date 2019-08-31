import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

const JSON_URL = 'http://localhost:3000/pokemon'

class PokemonIndex extends React.Component {
  state = {
    pokemonData: [],
    query: ''
  }

  componentDidMount() {
    fetch(JSON_URL)
      .then(res => res.json())
      .then(data => this.setState({
        pokemonData: data
    }))
  }

  handleSearchChange = (e, { value }) => {
    this.setState({
      query: value
    });
  }

  toggleImage = pokemon => {
    const col = this.state.pokemonData
    const i = col.indexOf(pokemon)
    this.setState({
      pokemonData: [
        ...col.slice(0, i),
        { ...pokemon, isClicked: !pokemon.isClicked },
        ...col.slice(i + 1)
      ]
    })
  }

  addPokemon = pokemon => {
    this.setState({ pokemonData: [...this.state.pokemonData, pokemon] })
  }

  render() {
    const filteredPokemon = this.state.pokemonData.filter(p =>
      p.name.includes(this.state.query))
    return (
      <div>
        <br />
        <Search
          onSearchChange={_.debounce(this.handleSearchChange, 200)}
          showNoResults={false}
        />
        <br />
        <PokemonCollection filteredPokemon={filteredPokemon} toggleImage={this.toggleImage} />
        <br />
        <PokemonForm addPokemon={this.addPokemon} />
      </div>
    )
  }
}

export default PokemonIndex
