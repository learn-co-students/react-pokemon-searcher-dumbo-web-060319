import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  render() {
    return (
      <Card.Group itemsPerRow={6}>
        {this.props.pokemonData.map(i => <PokemonCard key={i.id} pokemon={i} />)}
      </Card.Group>
    )
  }
}

export default PokemonCollection
