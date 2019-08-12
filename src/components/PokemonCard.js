import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  render() {
    const {height, weight, name, abilities, moves, stats, types, sprites} = this.props.pokemon;
    const hp = stats.find(stat => stat.name === "hp")
    console.log(hp)
    return (
      <Card>
        <div>
          <div className="image">
            <img src={sprites.front} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              HP: {hp.value}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
