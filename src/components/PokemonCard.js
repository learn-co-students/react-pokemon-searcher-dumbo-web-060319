import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  state={
    clicked:false
  }

  handleClick=()=>{
    this.setState({clicked:!this.state.clicked})
  }
  render() {
    return (
      <Card>
        <div>
          <div onClick={this.handleClick} className="image">
            <img src={this.state.clicked? this.props.sprites.back:this.props.sprites.front}  alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{this.props.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.stats[5].value}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
