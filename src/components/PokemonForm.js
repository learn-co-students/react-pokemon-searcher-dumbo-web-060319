import React from 'react'
import { Form } from 'semantic-ui-react'

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

  handleInput=(e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  handleSubmit=(e)=>{
    if(this.state.name && this.state.hp && this.state.frontUrl && this.state.backUrl){
      const{name,hp,frontUrl,backUrl}=this.state
      e.preventDefault()
      fetch('http://localhost:3000/pokemon',{
        method:"POST",
        headers:{
          'Content-Type': "application/json",
          "Accept": "application/json"
        },
        body:JSON.stringify({
          name:name,
          stats:[
            {},{},{},{},{},
            {value:hp,
            nane:"hp"
          }],
          sprites: {
            front: frontUrl,
            back: backUrl
          }
        })
      }).then(response => response.json())
      .then(this.props.handlePokemonForm)
    }
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input onChange={this.handleInput} fluid label="Name" placeholder="Name" name="name" />
            <Form.Input onChange={this.handleInput} fluid label="hp" placeholder="hp" name="hp" />
            <Form.Input onChange={this.handleInput} fluid label="Front Image URL" placeholder="url" name="frontUrl" />
            <Form.Input onChange={this.handleInput} fluid label="Back Image URL" placeholder="url" name="backUrl" />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
