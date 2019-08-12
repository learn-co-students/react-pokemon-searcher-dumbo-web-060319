import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      hp: 0,
      frontUrl: '',
      backUrl: ''
    }
  }

  createPokemon = () => {
    return {
      "height": 0,
      "weight": 0,
      "name": this.state.name,
      "abilities": [
        "overgrow",
        "chlorophyll"
      ],
      "moves": [],
      "stats": [
        {
          "value": 55,
          "name": "special-defense"
        },
        {
          "value": 45,
          "name": "special-attack"
        },
        {
          "value": 50,
          "name": "defense"
        },
        {
          "value": 40,
          "name": "attack"
        },
        {
          "value": 40,
          "name": "speed"
        },
        {
          "value": this.state.hp,
          "name": "hp"
        }
      ],
      "types": [
        "grass",
        "poison"
      ],
      "sprites": {
        "front": this.state.frontUrl,
        "back": this.state.backUrl
      }
    }
  }



  handleSubmit = () => {
    fetch('http://localhost:3000/pokemon', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.createPokemon())
    });
  }

  handleName = (event) => {
    this.setState({...this.state, name: event.target.value})
  }

  handleFront = (event) => {
    this.setState({...this.state, frontUrl: event.target.value})
  }

  handleBack = (event) => {
    this.setState({...this.state, backUrl: event.target.value})
  }

  handleHp = (event) => {
    this.setState({...this.state, hp: event.target.value})
  }



  render() {
    console.log(this.state.frontUrl)
    console.log(this.state.backUrl)
    console.log(this.state.hp)
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input onChange={this.handleName} fluid label="Name" placeholder="Name" name="name" />
            <Form.Input onChange={this.handleHp} fluid label="hp" placeholder="hp" name="hp" />
            <Form.Input onChange={this.handleFront} fluid label="Front Image URL" placeholder="url" name="frontUrl" />
            <Form.Input onChange={this.handleBack} fluid label="Back Image URL" placeholder="url" name="backUrl" />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
