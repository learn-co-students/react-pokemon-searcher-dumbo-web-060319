import React from 'react'
import { Form } from 'semantic-ui-react'
import PokemonIndex from "./PokemonIndex"

class PokemonForm extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    }
  }

  handleSubmit = (event) => {
      event.preventDefault()
      fetch("http://localhost:3000/pokemon", {
        method: "POST",
        body: JSON.stringify({
          name: this.state.name,
          stats: [{value: this.state.hp, name: "hp"}],
          sprites: {
            front: this.state.frontUrl,
            back: this.state.backUrl
          }
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(res => res.json())
      .then(newPokemon => {
        this.props.addPokemon(newPokemon)
      })
    }


  handleFormChange = (event) => {
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  render() {

    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit} onChange={this.handleFormChange}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" value={this.state.name} />
            <Form.Input fluid label="hp" placeholder="hp" name="hp" value={this.state.hp} />
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" value={this.state.frontUrl} />
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" value={this.state.backUrl}/>
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}


export default PokemonForm
