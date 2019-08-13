import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

  makePokemonCard = () => {
   return this.props.allPokemon.map((pokemon) => 
      (
        <PokemonCard key={pokemon.id} pokemon={pokemon}/>
      )
    )
  }

  render() {
    return (
      <Card.Group itemsPerRow={6}>
        {this.makePokemonCard()}
      </Card.Group>
    )
  }
}

export default PokemonCollection
