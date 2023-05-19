import { AppState } from "../AppState.js";
import { pokemonService } from "../services/PokemonService.js";
// import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

// Private Functions

function _drawPokemon() {
    console.log('Drawing Pokemon')
    let template = ''
    AppState.pokemon.forEach(p => {
        template += p.pokemonCardTemplate
    })

    setHTML('nationalPokedex', template)
}

export class PokemonController{
    constructor(){
        console.log('Online: Pokemon Controller');
        pokemonService.Online()
        // _drawPokemon()

        this.getPokemonFromApi()
        AppState.on('pokemon', _drawPokemon)
        AppState.on('account', _drawPokemon)
    }

    async getPokemonFromApi() {
        try {
            await pokemonService.getPokemonFromApi()
        } catch (error) {
            Pop.error(error)
        }
    }

    async setActive(url){
        try {
            await pokemonService.setActive(url)
        } catch (error) {
            Pop.error(error)
        } 
    }
}
