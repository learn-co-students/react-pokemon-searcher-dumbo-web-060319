import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    cardClicked: false
  }


  handleToggle = () => {
    this.setState({cardClicked: !this.state.cardClicked})
  }

  frontCard = () => {
    const {height, weight, name, abilities, moves, stats, types, sprites} = this.props.pokemon;
    const hp = stats.find(stat => stat.name === "hp");
    return(
      <div onClick={this.handleToggle}>
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
    );
  }

  backCard = () => {
    const {height, weight, name, abilities, moves, stats, types, sprites} = this.props.pokemon;
    const nonHp = stats.filter(stat => stat.name !== "hp");
    return(
      <div onClick={this.handleToggle}>
        <div className="image">
          <img src={sprites.back} alt="oh no!" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
            {nonHp.map(stat => <span key={stat.name}>{stat.name}: {stat.value}<br/></span>)}
        </div>
      </div>
    );
  }

  render() {
    return (
      <Card>
        {this.state.cardClicked ? this.backCard() : this.frontCard()}
      </Card>
    )
  }
}

export default PokemonCard
