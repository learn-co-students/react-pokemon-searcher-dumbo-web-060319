import { Card } from 'semantic-ui-react'
import React from 'react';

const PokemonCard = ({pokemon, toggleImage}) => {
  const { name, stats, sprites, isClicked } = pokemon
  const url = isClicked ? sprites.back : sprites.front
  const hp = stats.find(s => s.name === 'hp').value || 50

  return (
    <Card>
      <div onClick={() => toggleImage(pokemon)}>
        <div className="image">
          <img src={url} alt="!" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp} hp
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;

// class PokemonCard extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       image: props.pokemon.sprites.front
//     };
//   }
//
//   render() {
//     return (
//       <Card>
//         <div onClick={this.handleClick}>
//           <div className="image">
//             <img src={this.state.image} alt="oh no!" />
//           </div>
//           <div className="content">
//             <div className="header">{this.props.pokemon.name}</div>
//           </div>
//           <div className="extra content">
//             <span>
//               <i className="icon heartbeat red" />
//               {this.props.pokemon.stats[5].value}
//             </span>
//           </div>
//         </div>
//       </Card>
//     )
//   }
// }
//
// export default PokemonCard
