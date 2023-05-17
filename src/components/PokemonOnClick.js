import React, { useState, useEffect } from "react";
import "./PokemonOnClick.css";
import { useParams } from "react-router-dom";

const PokemonOnClick = () => {
  const { id } = useParams();
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  useEffect(() => {
    console.log(id)
    const fetchPokemon = async () => {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await res.json();
      setSelectedPokemon(data);
    };

    fetchPokemon();
  }, [id]);

  if (selectedPokemon === null) {
    console.log(selectedPokemon);
    return <div>Loading...</div>;
  }

  return (
    <div className="pokemon-details">
      <h2>{selectedPokemon.name}</h2>
      <img
        src={selectedPokemon.sprites.front_default}
        alt={selectedPokemon.name}
      />
      <p>Height: {selectedPokemon.height}</p>
      <p>Weight: {selectedPokemon.weight}</p>
      <p>
        Type: {selectedPokemon.types.map((type) => type.type.name).join(", ")}
      </p>
    </div>
  );
};

export default PokemonOnClick;