import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'


class PokemonCollection extends React.Component {
  render() {
    let toDisplayPokemons=this.props.toDisplayPokemons.map(pokemon=>{
      return <PokemonCard key={pokemon.id} {...pokemon} />
    })
    return (
      <Card.Group itemsPerRow={6}>
        <h1>Hello From Pokemon Collection</h1>
        {toDisplayPokemons}
      </Card.Group>
    )
  }
}

export default PokemonCollection
