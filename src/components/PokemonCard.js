import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    clicked: false
  }
  handleClick = () => {
    this.setState({
      clicked: !this.state.clicked
    })
    // this.setState((prevState) => {
    //   return {clicked: !prevState.clicked}
    // })
  }

  render() {
    let {name, height, sprites, stats} = this.props.pokemon
    let hpObject = stats.find(stat => {return stat.name === "hp"})
    return (
      <Card onClick={this.handleClick}>
        <div>
          <div className="image">
            <img alt="oh no!" src={
              this.state.clicked
              ?
              sprites.back 
              :
              sprites.front}/>
          </div>
          <div className="content">
            <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
               {hpObject.value} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
