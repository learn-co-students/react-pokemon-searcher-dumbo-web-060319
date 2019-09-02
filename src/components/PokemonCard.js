import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  state = {
    click: false
  }
  clickEvent = () => {
    this.setState({ click : !this.state.click })
  }
  clickTrue = () => {
    return  <img src = {this.props.pokemon.sprites.front} alt="oh no!" />
  }

  clickFalse = () => {
    return  <img  src = {this.props.pokemon.sprites.back} alt="oh no!" />
  }
  render() {
    const {name, stats } = this.props.pokemon
    const hp = stats.find(stat => stat.name === 'hp')
    return (
      <Card>
        <div onClick={this.clickEvent}>
         <div className="image">
        {this.state.click? this.clickFalse() : this.clickTrue() }
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
