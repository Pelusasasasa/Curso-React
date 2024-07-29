import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getPokemons } from "./store/slices/pokemon/thunks"

export const PokemonApp = () => {

  const dispatch = useDispatch();
  const {page, pokemons = [], isLoading} = useSelector( state => state.pokemons);

  useEffect(() => {

    dispatch( getPokemons() );
    
  }, []);
  
  return (
    <>
        <h3>Pokemon App</h3>
        <hr />
        { <span>Loading: { !isLoading ? 'True' : 'False'  }</span> }

        <ul>
            {pokemons.map((pokemon) => (
              <li key={pokemon.name}>{pokemon.name}</li>
            ))}
        </ul>
        <button onClick={() => dispatch( getPokemons(page) )}>Next</button>
    </>
  )
}
