import React, { useState, useEffect } from "react";
import "./GridPhoto.css";
import { useParams } from "react-router-dom";
import dancingPikachu from "./Images/DancingPikachu.gif";
import PokemonEvolution from "./Evolution";
import NavigationBar from "./NavToolbar";


const PokemonOnClick = () => {
  const { id } = useParams();
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  useEffect(() => {
    console.log(id);
    const fetchPokemon = async () => {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await res.json();
      setSelectedPokemon(data);
    };

    fetchPokemon();
  }, [id]);

  if (selectedPokemon === null) {
    // console.log(selectedPokemon);
    return (
      <div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <img classname="loadingPikachu" src={dancingPikachu} alt="Loading" />
      </div>
    );
  }

  return (
   <div>
    <div className="pokemon-details">
      <h2>{selectedPokemon.name}</h2>
      <img
        src={selectedPokemon.sprites.front_default}
        alt={selectedPokemon.name}
      />
      <p className="type">
        Type: {selectedPokemon.types.map((type) => type.type.name).join(", ")}
      </p>
      <p className="pokemon-details-text">Height: {selectedPokemon.height}</p>
      <p className="pokemon-details-text">Weight: {selectedPokemon.weight}</p>

      <p>
        <h2 className="h2Evo">Evolution</h2>
        {<PokemonEvolution />}
      </p>

 
    </div>
  </div>
  );
};

export default PokemonOnClick;
