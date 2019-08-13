import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

  render() {

    const pokes = this.props.pokemon.map(poke => <PokemonCard key={poke.id}
                        name={poke.name}
                        frontImg={poke.sprites.front}
                        backImg={poke.sprites.back}
                        hp={poke.stats}
                      />)
    // console.log(pokes);
    return (
      <Card.Group itemsPerRow={6}>

        {pokes}

      </Card.Group>
    )
  }
}

export default PokemonCollection
