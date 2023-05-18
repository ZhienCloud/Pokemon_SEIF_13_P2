import React, { useState, useEffect } from "react";
import "./GridPhoto.css";
import { useParams } from "react-router-dom";
import dancingPikachu from "./Images/DancingPikachu.gif";
import { useNavigate } from "react-router-dom";

const useHandlePokemonClick = () => {
  const navigate = useNavigate();

  const handlePokemonClick = (pokemonUrl) => {
    const pokemonId = pokemonUrl.split("/")[6];
    navigate(`/pokemon/${pokemonId}`);
  };

  return handlePokemonClick;
};

const PokemonEvolution = () => {
  const { id } = useParams();
  const [evolution, setEvolution] = useState(null);
  const [hoveredPokemon, setHoveredPokemon] = useState(null);
  const handlePokemonClick = useHandlePokemonClick();
  
  useEffect(() => {
    const fetchEvolution = async () => {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
      const data = await res.json();
      const evolutionChainUrl = data.evolution_chain.url;
      const evolutionRes = await fetch(evolutionChainUrl);
      const evolutionData = await evolutionRes.json();
      setEvolution(evolutionData);
    };

    fetchEvolution();
  }, [id]);

  if (evolution === null) {
    return <div><img src={dancingPikachu} alt="Loading" /></div>;
  }

  const getEvolutionChain = (chain) => {
    const evolutionChain = [];
    let currentEvolution = chain;
  
    while (currentEvolution) {
      const speciesName = currentEvolution.species.name;
      const speciesId = currentEvolution.species.url.split("/").slice(-2, -1)[0];
      const spriteUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${speciesId}.png`;
      const pokemonUrl = currentEvolution.species.url;
      evolutionChain.push({ speciesName, spriteUrl, pokemonUrl });
  
      if (currentEvolution.evolves_to.length > 0) {
        currentEvolution = currentEvolution.evolves_to[0];
      } else {
        currentEvolution = null;
      }
    }
  
    return evolutionChain;
  };
  

  const evolutionChainData = getEvolutionChain(evolution.chain);





  
  return (
    
<div className="grid-container-species">
  {evolutionChainData.map((pokemon) => (
    <div
      key={pokemon.speciesName}
      className={`pokemon ${pokemon.speciesName === hoveredPokemon ? "hovered" : ""}`}
      onClick={() => handlePokemonClick(pokemon.pokemonUrl)}
      onMouseEnter={() => setHoveredPokemon(pokemon.speciesName)}
      onMouseLeave={() => setHoveredPokemon(null)}
    >
      <h2>{pokemon.speciesName}</h2>
      <img className="evolution-image" src={pokemon.spriteUrl} alt={pokemon.speciesName} />
    </div>
  ))}
</div>
  );
};




export default PokemonEvolution;