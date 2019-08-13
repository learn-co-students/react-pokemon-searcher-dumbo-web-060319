import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  render() {
    console.log(this.props)
    let arrayOfPokemons = this.props.allPokemon.map(pokemon => <PokemonCard pokemon={ pokemon } key={ pokemon.id }/>)
    
    return (
      <Card.Group itemsPerRow={6}>
        { arrayOfPokemons }
      </Card.Group>
    )
  }
}

export default PokemonCollection
