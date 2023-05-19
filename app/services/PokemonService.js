import { api } from "./AxiosService.js"
import { pokeApi } from "./AxiosService.js"
import { AppState } from "../AppState.js";
import { Pokemon } from '../models/Pokemon.js'

class PokemonService{
    async setActive(url) {
        const res = await pokeApi.get(url)
        console.log(res.data)
    }
    
    async getPokemonFromApi() {
        const res = await pokeApi.get('/pokemon-species?limit=2000&offset=0')
        AppState.pokemon = res.data.results.map( p => new Pokemon(p))
        
        console.log('getPokemonFromApi()', AppState.pokemon)

        AppState.activePokemon = res.data.results[0].url
        console.log(AppState.activePokemon)

    }

    Online() {
        console.log('Online: Pokemon Service')
    }

}

export const pokemonService = new PokemonService()