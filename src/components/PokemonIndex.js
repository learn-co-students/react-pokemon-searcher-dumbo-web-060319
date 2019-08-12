import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {

  state = {
    search: ""
  }

  handleSearch = (event) => {
    this.setState({search: event.target.value })
  }
  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={this.handleSearch} showNoResults={false} />
        <br />
        <PokemonCollection search={this.state.search}/>
        <br />
        <PokemonForm />
      </div>
    )
  }
}

export default PokemonPage
