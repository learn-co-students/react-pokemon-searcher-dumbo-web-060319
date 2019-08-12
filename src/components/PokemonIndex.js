import React from 'react';
import PokemonCollection from './PokemonCollection';
import PokemonForm from './PokemonForm';
import { Search } from 'semantic-ui-react';
import _ from 'lodash';

const API = 'http://localhost:3000/pokemon';

class PokemonPage extends React.Component {
  state = {
    pokemonList: [],
    pokemonListCopy: [],
    searchTerm: ''
  };

  componentDidMount() {
    this.fetchPokemon()
  }

  fetchPokemon = () =>
    fetch(API)
      .then(res => res.json())
      .then(this.loadPokemon);

  loadPokemon = pokemonData => {
    this.setState({ pokemonList: [...pokemonData], pokemonListCopy:[...pokemonData] })
  };

  handleChange = searchTerm => {
    let filteredList = this.state.pokemonList.filter(pokemon => pokemon.name.includes(searchTerm))
    this.setState({
      searchTerm,
      pokemonListCopy: filteredList
    })
  }

  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search
          onSearchChange={event => this.handleChange(event.target.value)}
          value={this.state.searchTerm}
          showNoResults={false}
        />
        <br />
        <PokemonCollection pokemonList={this.state.pokemonListCopy} />
        <br />
        <PokemonForm />
      </div>
    );
  }
}

export default PokemonPage;
