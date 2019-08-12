import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

	state = {
    pokemons: []
  }

  filterPokemons = (pokemons) => {
    let filterList = pokemons.filter(pokemon => pokemon.name.includes(this.props.search));
    return filterList.length > 0 ? filterList : pokemons
  }

  render() {
    console.log(this.props.search)
    return (
      <Card.Group itemsPerRow={6}>
				{this.filterPokemons(this.state.pokemons).map(pokemon => <PokemonCard pokemon={pokemon} key={pokemon.id}/>)}
      </Card.Group>
    )
  }

  componentDidMount() {
    fetch('http://localhost:3000/pokemon')
    .then(res => res.json())
    .then(pokemons => this.setState({pokemons}))
  }
}

export default PokemonCollection
