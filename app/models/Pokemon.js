import { AppState } from "../AppState.js"

export class Pokemon{
    constructor(data){ 
        this.name = data.name || data.results.species.name || ''
        this.nickname = data.nickname || ''
        // @ts-ignore
        // data.sprites.other.official-artwork
        this.img =  data.img || ''
        this.weight = data.weight || 0
        this.height = data.height || 0
        this.types = data.types || []
        this.url = data.url || ''
    }

get pokemonCardTemplate(){
    return /*html*/`
    <div class="dex-card" onclick="app.PokemonController.setActive('${this.ComputeUrlExtension}')">
        <div class="poke-info">
            <div class="poke-name">${this.name}</div>
            <div class="poke-national">#${this.ComputeNumber}</div>
        </div>
    </div>
    `
}

get ComputeNumber (){

    let number = 1
    let final = 0

    AppState.pokemon.forEach( p => {
        if (p.name == this.name){
            final = number
        }
        else{ number ++}
    })

    return final
    
}

get ComputeUrlExtension(){
    let url = this.url
    let extension = ''
    // https://pokeapi.co/api/v2/
    for (let i = 25; i < url.length ; i++){
        extension += url[i]
    }
    return extension
}



}
