import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { generatedPokemonType, genericPokemonType } from "../../utils/typer";

// Define or import the necessary variables - these are placeholders
const pokemonTypes: any = {}; // Replace 'any' with the correct type
const images: any = {}; // Replace 'any' with the correct type
const defaultImages: any = {}; // Replace 'any' with the correct type

export const getPokemonsData = createAsyncThunk(
  "pokemon/randomPokemon",
  async (pokemons: genericPokemonType[]) => {
    try {
      const pokemonsData: generatedPokemonType[] = [];
      for await (const pokemon of pokemons) {
        const {
          data,
        }: {
          data: {
            id: number;
            types: { type: genericPokemonType }[];
          };
        } = await axios.get(pokemon.url);
        
        // Example logic - please replace with your actual logic
        const types = data.types.map(
          ({ type: { name } }: { type: { name: string } }) => ({
            [name]: pokemonTypes[name], // Using the placeholder pokemonTypes
          })
        );
        let image: string = images[data.id]; // Using the placeholder images
        if (!image) {
          image = defaultImages[data.id]; // Using the placeholder defaultImages
        }
        
        if (image) {
          pokemonsData.push({
            name: pokemon.name,
            id: data.id,
            image,
            types,
          });
        }
      }
      return pokemonsData;
    } catch (err) {
      console.error(err);
    }
  }
);
