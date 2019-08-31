import React from 'react'
import { Card } from 'semantic-ui-react'
import PokemonCard from './PokemonCard'

const PokemonCollection = ({filteredPokemon, toggleImage}) => {
  return (
    <Card.Group itemsPerRow={6}>
      {filteredPokemon.map(i => <PokemonCard key={i.id} pokemon={i} toggleImage={toggleImage} />)}
    </Card.Group>
  );
}

export default PokemonCollection;

// class PokemonCollection extends React.Component {
//   render() {
//     return (
      // <Card.Group itemsPerRow={6}>
      //   {this.props.filteredPokemon.map(i => <PokemonCard key={i.id} pokemon={i} toggleImage={toggleImage} />)}
      // </Card.Group>
//     )
//   }
// }
//
// export default PokemonCollection
