import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    clicked: false
  }

  handleFlipClick = () => {
    this.setState({
      clicked: !this.state.clicked
    })
    // this.setState((prevState) => {
    //   return { clicked: !prevState.clicked }
    //})
  }

  render() {
    let { name, height, sprites, stats } = this.props.pokemon
    let hp = stats.find(statObject => { return statObject.name === "hp" })
    return (
      <Card onClick={ this.handleFlipClick }>
        <div>
          <div className="image">
            <img src={ 
              this.state.clicked
                ?
              sprites.back
                :
              sprites.front 
              } alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{ name }</div>
            {/* this.props.pokemon.name */}
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              { hp.value } HP
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
