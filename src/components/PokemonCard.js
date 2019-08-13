import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    cardClicked: false
  }

  handleCardClick = () => {
    this.setState(prevState => ({cardClicked: !this.state.cardClicked})
    )
  }

  render() {

    return (
      <Card onClick={this.handleCardClick}>
        <div>
          <div className="image">
            <img  alt="oh no!" src={
                      this.state.cardClicked
                        ?
                      this.props.backImg
                        :
                      this.props.frontImg} />
          </div>
          <div className="content">
            <div className="header">{this.props.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {(this.props.hp)[5].value}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
