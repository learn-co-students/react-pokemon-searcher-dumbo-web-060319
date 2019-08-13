import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  render() {
    let pokeList = this.props.pokemonList.map(pokemon => <PokemonCard key={pokemon.id} pokemon={pokemon}/>)
    return (
      <Card.Group itemsPerRow={6}>
        {pokeList}
      </Card.Group>
    )
  }
}

export default PokemonCollection
