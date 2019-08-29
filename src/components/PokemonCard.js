import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  state = {
    clicked: false
  }


  clickHandler = (e) => {
    this.setState({
      clicked: !this.state.clicked
    })
  }

  handleFavoriteClick = () => {
    console.log("dill")
  }

  render() {

    const hpObj = this.props.stats.find(stat => stat.name === 'hp')

    return (
      <Card onClick={(e) => this.clickHandler(e)}>
        <div onClick={this.handleFavoriteClick}>
          <div className="image" >
            {
              this.state.clicked === true 
              ?
              <img src={this.props.pokemon.sprites.back} />
              :
              <img src={this.props.pokemon.sprites.front} />
            }
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
               {hpObj.value} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
