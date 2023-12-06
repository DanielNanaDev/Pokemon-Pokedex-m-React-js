import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { pokemonsRoute } from "../../utils/Constants";

export const getInitialPokemonData = createAsyncThunk(
  "pokemon/Data",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(pokemonsRoute);
      return data.results;
    } catch (err) {
      console.error("An error occurred:", err);
      return rejectWithValue("oppsto en feil (err melding)"); 
    }
  }
);
