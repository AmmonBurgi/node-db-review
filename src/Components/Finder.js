import React, {Component} from 'react'
import Grass from './Grass'
import axios from 'axios'

class Finder extends Component{
    constructor(){
        super()
        this.state={
            wildPokemon: []
        }
        this.componentDidMount = this.componentDidMount.bind(this)
    }
    componentDidMount(){
        axios.get('/api/wild-pokemon')
        .then(res => {
            this.setState({
                wildPokemon: res.data
            })
        })
    }

    render(){
        let pokemonList = this.state.wildPokemon.map(pokemon => {
            return <Grass 
            catchPokemon={this.props.catchPokemon}
            key={pokemon.id}
            pokemon={pokemon}
            refreshFn={this.componentDidMount}
            />
        })
        return(
            <div className='finder-box'>
                {pokemonList}
            </div>
        )
    }
}
export default Finder