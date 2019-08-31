import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: props.pokemon.sprites.front
    };
  }

  handleClick = () => {
    const newImage = this.state.image === this.props.pokemon.sprites.front ? this.props.pokemon.sprites.back : this.props.pokemon.sprites.front
    this.setState({
      image: newImage
    });
  }

  render() {
    return (
      <Card>
        <div onClick={this.handleClick}>
          <div className="image">
            <img src={this.state.image} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokemon.stats[5].value}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
