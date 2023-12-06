import React, { useEffect } from 'react';
import wrapper from '../sections/Wrapper';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { getInitialPokemonData } from '../app/reducers/getInitialPokemonData';
import PokemonCardGrid from '../components/PokemonCardGrid';


function Search() {
  const dispatch = useAppDispatch();

  const {allPokemon} = useAppSelector(({pokemon})=> pokemon)

  useEffect(() => {
    // todo: legge til useEffect logikk function 
    
    dispatch(getInitialPokemonData());
  }, [dispatch]); //  todo: legge til dependencies senere

  useEffect(()=> {
  if(allPokemon)
  {
    const clonedPokemons = [ ...allPokemon];
    const randomPokemonsid = clonedPokemons.sort(() =>Math.random() - Math.random()
    ).slice(0,30);
 
    console.log(randomPokemonsid);
  }
  
  

  },[allPokemon])

  return <> 
  <div className="search">
    <input type="text" name="" id="" />

  </div>
  </>;
}

export default wrapper(Search);
