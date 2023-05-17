import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./GridPhoto.css";

const useHandlePokemonClick = () => {
  const navigate = useNavigate();


  const handlePokemonClick = (pokemonUrl) => {
    navigate(`/pokemon/${pokemonUrl.split("/")[6]}`);
  };

  return handlePokemonClick;
}

const PokemonImage = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const handlePokemonClick = useHandlePokemonClick();

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=1273") //full is 1281//
      .then((response) => response.json())
      .then((data) => {
        setPokemonList(data.results);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="grid-container">
      {pokemonList.map((pokemon) => (
        <div key={pokemon.name} className="pokemon" onClick={() => handlePokemonClick(pokemon.url)}>
          <h3>{pokemon.id}</h3>
          <h3>{pokemon.name}</h3>
          <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split('/')[6]}.png`} alt={pokemon.name} />
        </div>
      ))}
    </div>
  );
};

export default PokemonImage;