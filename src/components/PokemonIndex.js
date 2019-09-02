import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'

class PokemonPage extends React.Component {
  state={
    search: ''
  }

  filter = (e) => {
    this.setState({search : e.target.value})
  }
  render() {
    const filtered = this.props.pokemons.filter(pokemon => pokemon.name.includes(this.state.search))    
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <input type ="text" value={this.state.search} onChange={this.filter}/>
        <br />
        <PokemonForm newPokemon={this.props.newPokemon} />
        <br />
        <PokemonCollection pokemons={filtered} />
      </div>
    )
  }
}

export default PokemonPage
