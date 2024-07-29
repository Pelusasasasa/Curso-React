import { createSlice } from '@reduxjs/toolkit';

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
        pokemons: [],
        page: 0,
        isLoading: false
    },
    reducers: {
        startLoadingPokeons: (state, /* action */ ) => {
            state.isLoading = true;
        },
        setPokemons: (state, action) => {
            state.isLoading = false;
            state.pokemons = action.payload.pokemons;
            state.page = action.payload.page;
        }
    }
});


// Action creators are generated for each case reducer function
export const { startLoadingPokeons, setPokemons } = pokemonSlice.actions;