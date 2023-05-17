import React, { useState, useEffect } from 'react';
import './GridPhoto.css';
import { Link } from 'react-router-dom';

const PokemonSearch = ({ filterValue }) => {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      if (filterValue !== "") {
        const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${filterValue.toLowerCase()}`;
        try {
          const res = await fetch(pokemonUrl);
          if (res.ok) {
            const data = await res.json();
            setPokemon(data);
          } 
        } catch (error) {
          console.error('Error occurred while fetching Pokémon:', error);
        }
      }
    };

    fetchPokemon();
  }, [filterValue]);

  return (
    <div className='pokemon'>
      {pokemon && (
        <div>
          <h3>{pokemon.name}</h3>
          <Link to={`/pokemon/${pokemon.id}`}>
            <img src={pokemon.sprites.front_default} alt={pokemon.name}  />
          </Link>
        </div>
      )}
    </div>
  );
};

export default PokemonSearch;