import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  constructor() {
    super()

    this.state = {
    name: '',
    stats: [
      {
        value: 0,
        name: "hp"
      }
    ],
    sprites: {
      front: "",
      back: ""
    },
    }
  }

  clickEvent = (event) =>{
    const {name,hp,frontUrl,backUrl} = event.target
    this.setState({
      name: name.value,
      stats:[
        { value : hp.value,
        name: "hp"  }
      ],
      sprites: {
        front:frontUrl.value,
        back: backUrl.value
      }
    }),
    setTimeout( () => {
      console.log(this.props.newPokemon(this.state))
    } , 500);
}


  render() {
    console.log(this.state)
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.clickEvent}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" />
            <Form.Input fluid label="hp" placeholder="hp" name="hp" />
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" />
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
