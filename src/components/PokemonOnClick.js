import React, { useState, useEffect } from "react";
import "./GridPhoto.css";
import { useParams, Link } from "react-router-dom";
import dancingPikachu from "./Images/DancingPikachu.gif"
import PokemonEvolution from "./Evolution";

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
    // console.log(selectedPokemon);
    return <div><img classname="loadingPikachu" src={dancingPikachu} alt="Loading"/></div>;
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
      <p className="type">
        Type: {selectedPokemon.types.map((type) => type.type.name).join(", ")}
      </p>
      <p className="evolution-image">Evolution: {<PokemonEvolution/>}</p>
    
      <Link to="/"><button>Home</button></Link>
      <br></br>
      <Link to="/AllPokemon"><button>ALL POKEMON</button></Link>
    </div>
  );
};

export default PokemonOnClick;