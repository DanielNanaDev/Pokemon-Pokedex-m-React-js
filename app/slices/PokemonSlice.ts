import { createSlice } from '@reduxjs/toolkit';
import { getInitialPokemonData } from '../reducers/getInitialPokemonData';

// Define the PokemonTypeInitialState interface
interface PokemonTypeInitialState {
    allPokemon: any; 
    randomPokemons: any; 
}

// Defined interface for initialState
const initialState: PokemonTypeInitialState = {
    allPokemon: undefined,
    randomPokemons: undefined,
};

export const PokemonSlice = createSlice({
    name: "pokemon",
    initialState, 
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getInitialPokemonData.fulfilled, (state, action) => {
            state.allPokemon = action.payload;
        });
    },
});

export const {} = PokemonSlice.actions;
