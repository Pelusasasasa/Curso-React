import { pokemonApi } from "../../../api/pokemonApi"
import { setPokemons, startLoadingPokeons } from "./pokemonSlice"

export const getPokemons = ( page = 0 ) => {

    return  async ( dispatch, getState) => {

        dispatch( startLoadingPokeons() )

        //TODO: REALIZAR PETICION HTTP 

        const { data } = await pokemonApi.get(`pokemon?limit=10&offset=${ page * 10 }`)
        dispatch( setPokemons({ pokemons: data.results, page: page + 1}))
    }
}