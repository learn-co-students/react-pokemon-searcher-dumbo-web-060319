import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

const JSON_URL = 'http://localhost:3000/pokemon'

class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonData: []
    };
  }

  componentDidMount() {
    fetch(JSON_URL)
    .then(res => res.json())
    .then(data => this.setState({
      pokemonData: data,
      query: ''
    }))
  }

  handleSearchChange = () => {
    return  _.debounce((e, data) => this.setState({
    query: data.value
  }), 200)}

  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search
          onSearchChange={this.handleSearchChange()}
          showNoResults={false}
        />
        <br />
        <PokemonCollection pokemonData={this.state.pokemonData} />
        <br />
        <PokemonForm />
      </div>
    )
  }
}

export default PokemonIndex
