import React from 'react';
import { Card } from 'semantic-ui-react';

class PokemonCard extends React.Component {
  state = {
    clicked: false
  };

  handleClick = () => this.setState({ clicked: !this.state.clicked });

  render() {
    let { name, sprites, stats, height, weight, types } = this.props.pokemon;
    let pokeHP = stats.find(stat => stat.name === 'hp');
    let typeList = types.map(type => <div className="header">{type}</div>);
    return (
      <Card>
        <div onClick={this.handleClick}>
          <div className="image">
            <img
              alt={name + ' pokemon image'}
              src={this.state.clicked ? sprites.back : sprites.front}
            />
          </div>
          <div className="content">
            <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {pokeHP.value}
            </span>
          </div>
          {this.state.clicked ? (
            <div>
              <div className="header">weight: {weight}</div>
              <div className="header">height: {height}</div>
              <div>{typeList}</div>
            </div>
          ) : null}
        </div>
      </Card>
    );
  }
}

export default PokemonCard;
