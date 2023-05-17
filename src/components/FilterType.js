import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./FilterType.css"

const FilterByType = ({ filterType, filterValue, navigate }) => {
  console.log("filterType:", filterType);
  console.log("filterValue:", filterValue);

  const [pokemonList, setPokemonList] = useState([]);

  const handleFilterByType = async () => {
    let pokemonUrl = "";
    if (filterType === "type") {
      if (filterValue.toLowerCase() === "fire") {
        pokemonUrl = "https://pokeapi.co/api/v2/type/fire";
      } else if (filterValue.toLowerCase() === "water") {
        pokemonUrl = "https://pokeapi.co/api/v2/type/water";
      } else if (filterValue.toLowerCase() === "grass") {
        pokemonUrl = "https://pokeapi.co/api/v2/type/grass";
      } else if (filterValue.toLowerCase() === "psychic") {
        pokemonUrl = "https://pokeapi.co/api/v2/type/psychic";
      } else if (filterValue.toLowerCase() === "dark") {
        pokemonUrl = "https://pokeapi.co/api/v2/type/dark";
      } else if (filterValue.toLowerCase() === "steel") {
        pokemonUrl = "https://pokeapi.co/api/v2/type/steel";
      } else if (filterValue.toLowerCase() === "fairy") {
        pokemonUrl = "https://pokeapi.co/api/v2/type/fairy";
      } else if (filterValue.toLowerCase() === "dragon") {
        pokemonUrl = "https://pokeapi.co/api/v2/type/dragon";
      } else if (filterValue.toLowerCase() === "bug") {
        pokemonUrl = "https://pokeapi.co/api/v2/type/bug";
      } else if (filterValue.toLowerCase() === "flying") {
        pokemonUrl = "https://pokeapi.co/api/v2/type/flying";
      } else if (filterValue.toLowerCase() === "ground") {
        pokemonUrl = "https://pokeapi.co/api/v2/type/ground";
      } else if (filterValue.toLowerCase() === "poison") {
        pokemonUrl = "https://pokeapi.co/api/v2/type/poison";
      } else if (filterValue.toLowerCase() === "fighting") {
        pokemonUrl = "https://pokeapi.co/api/v2/type/fighting";
      } else if (filterValue.toLowerCase() === "ice") {
        pokemonUrl = "https://pokeapi.co/api/v2/type/ice";
      } else if (filterValue.toLowerCase() === "electric") {
        pokemonUrl = "https://pokeapi.co/api/v2/type/electric";
      } else if (filterValue.toLowerCase() === "normal") {
        pokemonUrl = "https://pokeapi.co/api/v2/type/normal";
      } else {
        console.error("Invalid type:", filterValue);
        return;
      }

      try {
        const res = await fetch(pokemonUrl);
        if (res.ok) {
          const data = await res.json();
          const pokemonList = data.pokemon.map((pokemon) => ({
            id: pokemon.pokemon.url.split("/").slice(-2, -1)[0],
            name: pokemon.pokemon.name,
          }));
          setPokemonList(pokemonList);
        } else {
          console.error(
            `Error occurred while fetching ${filterValue} Pokémon.`
          );
        }
      } catch (error) {
        console.error(
          `Error occurred while fetching ${filterValue} Pokémon:`,
          error
        );
      }
    } else {
      const url = `/pokemon?${filterType}=${filterValue}`;
      navigate(url);
    }
  };

  useEffect(() => {
    handleFilterByType();
  }, [filterValue]);

  const renderPokemonList = () => {
    if (!filterType || !filterValue) {
      return null;
    }

    return (
      <div className="grid-container">
      {pokemonList.map((pokemon) => (
        <div key={pokemon.name} className="pokemon">
          {/* <h3>{pokemon.id}</h3> */}
          <h3>{pokemon.name}</h3>
          <Link to={`/pokemon/${pokemon.id}`}>
          <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} alt={pokemon.name} />
        </Link>
        </div>
      ))}
    </div>
  );};
  
  return <div>{renderPokemonList()}</div>;
};



export default FilterByType;
    //   <div className="pokemon">
    //     <h2>Pokémon List:</h2>
    //     {pokemonList.length === 0 ? (
    //       <p>No Pokémon found.</p>
    //     ) : (
    //       <ul className="grid-container">
    //         {pokemonList.map((pokemon) => (
    //           <li key={pokemon.id}>
    //             <Link to={`/pokemon/${pokemon.id}`}>
    //               <img
    //                 src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
    //                 alt={pokemon.name}
    //               />
    //             </Link>
    //             {pokemon.name}
    //           </li>
    //         ))}
    //       </ul>
    //     )}
    //   </div>
    // );