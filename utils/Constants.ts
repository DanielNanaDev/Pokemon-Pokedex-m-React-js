import axios from 'axios';

export const pokemonAPI = "https://crudcrud.com/api/5cadf221da134d7b8cc7671bc83b96bf";
export const pokemonsRoute = `${pokemonAPI}/pokemon?limit=5000`;
export const pokemonRoute = `${pokemonAPI}/pokemon`;
export const pokemonSpeciesRoute = `${pokemonAPI}/pokemon-species`;
export const trainerRoute = `${pokemonAPI}/trainer`;


export const pokemonTabs = {
  description: "description",
  evolution: "evolution",
  locations: "locations",
  moves: "moves",
};

// Funksjon for å oppdatere Pokemonen med trenerens ID
export const updatePokemonWithTrainer = async (pokemonId: string, trainerId: string): Promise<any> => {
  try {
    const response = await axios.put(`${pokemonRoute}/${pokemonId}`, { trainerId });
    return response.data;
  } catch (error) {
    console.error('Feil ved oppdatering av Pokémon med treneren:', error);
    throw error;
  }
};

// Funksjon for å oppdatere treneren med Pokemon ID
export const updateTrainerWithPokemon = async (trainerId: string, pokemonId: string): Promise<any> => {
  try {
    const response = await axios.put(`${trainerRoute}/${trainerId}`, { pokemonId });
    return response.data;
  } catch (error) {
    console.error('Feil ved oppdatering av treneren med Pokémonen:', error);
    throw error;
  }
};
