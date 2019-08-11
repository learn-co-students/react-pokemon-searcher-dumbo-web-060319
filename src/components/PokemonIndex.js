import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {

  state={
    allpokemons:[],
    searchTerm:''
  }
  componentDidMount(){
    fetch('http://localhost:3000/pokemon')
    .then(response=>response.json())
    .then(data=>{this.setState({allpokemons:data})})
    .catch(e => console.error(e))
  }

  handleSearch=(e, { value })=>{
    this.setState({searchTerm:value})
  }

  toDisplayImage=()=>{
    // return this.state.allpokemons[0].sprites.front
  }

  handlePokemonForm=(pokemon)=>{

    this.setState({allpokemons:[...this.state.allpokemons,pokemon]})
  }


  render() {
    let toDisplayPokemons= this.state.allpokemons.filter(pokemon=>{return pokemon.name.includes(this.state.searchTerm)})
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={_.debounce(this.handleSearch, 500)} showNoResults={false} />
        <br />
        <PokemonCollection toDisplayPokemons={toDisplayPokemons}/>
        <br />
        <PokemonForm  handlePokemonForm={this.handlePokemonForm}/>
      </div>
    )
  }
}

export default PokemonPage
