import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    clicked: false
  }

  handleCardClick = () => {
    this.setState({
      clicked: !this.state.clicked
    })
  }

  render() {
    let {name, sprites, stats } = this.props.pokemon
    let hp = stats.find(stat => stat.name === 'hp')
    return (
      <Card onClick={this.handleCardClick}>
        <div>
          <div className="image">
            <img alt="oh no!" src={this.state.clicked === true ? sprites.back : sprites.front}/>
          </div>
          <div className="content">
            <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {hp.value}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
