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
    this.fetchPokemon();
  }

  fetchPokemon = () =>
    fetch(API)
      .then(res => res.json())
      .then(this.loadPokemon);

  loadPokemon = pokemonData => {
    this.setState({
      pokemonList: [...pokemonData],
      pokemonListCopy: [...pokemonData]
    });
  };

  handleChange = searchTerm => {
    let filteredList = this.state.pokemonList.filter(pokemon =>
      pokemon.name.includes(searchTerm)
    );
    this.setState({
      searchTerm,
      pokemonListCopy: filteredList
    });
  };

  handlePokemonPost = pokemon => {
    // return if a pokemon already exsists
    if (this.hasPokemon(pokemon)) return alert('POKEMON ALREADY EXSISTS');
    // Fetch One pokemon from pokeApi
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
      .then(res => res.json())
      // then set that pokemon to a variable, foundPokemon
      .then(pokemonData => {
        // Destructure pokemonData to match what we want in Our database
        let {
          id,
          name,
          height,
          weight,
          abilities,
          moves,
          stats,
          types,
          sprites
        } = pokemonData;
        // newPokemon will be a pokemon with those attributes
        let newPokemon = {
          id,
          name,
          height,
          weight,
          abilities: abilities.map(oneAbility => oneAbility.ability.name),
          moves,
          stats: stats.map(oneStat => {
            let statObj = { name: oneStat.stat.name, value: oneStat.base_stat };
            return statObj;
          }),
          types: types.map(oneType => oneType.type.name),
          sprites: { front: sprites.front_default, back: sprites.back_default }
        };
        // Post that pokemon to our database
        this.postPokemon(newPokemon);
      })
      .catch(err => {
        alert('COULD NOT FIND POKEMON');
        return console.error(err.stack);
      });
    console.log('Submitted!');
  };

  postPokemon = pokemon => {
    const url = 'http://localhost:3000/pokemon'
    fetch(url, {
      method: 'POST',
      headers: {
       'Content-Type': 'application/json'
      },
      body: JSON.stringify(pokemon)
    }).then(res => res.json())
      .then(this.slapPokemonOnDom)
      .catch(err => {
        console.log(`COULD NOT POST TO ${url}`)
      })
  }

  slapPokemonOnDom = pokeData => {
    let {pokemonList, pokemonListCopy} = this.state
    this.setState({
      pokemonList: [...pokemonList, pokeData],
      pokemonListCopy: [...pokemonListCopy, pokeData]
    });
  }

  // If the pokemon is in our list
  hasPokemon = pokemon => {
    let foundPokemon = this.state.pokemonList.find(
      onePokemon => onePokemon.name.toLowerCase() === pokemon.name.toLowerCase()
    );
    if (foundPokemon) {
      return true;
    } else {
      return false;
    }
  };

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
        <PokemonForm handlePokemonPost={this.handlePokemonPost} />
      </div>
    );
  }
}

export default PokemonPage;
