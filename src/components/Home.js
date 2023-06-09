import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FilterByType from './FilterType';
import PokemonSearch from './PokemonSearch';
import "./GridPhoto.css" 
import logo from './Images/Pokemon-Logo-PNG4.png';
import pika from "./Images/FavPikachu.gif"


const Home = () => {
  const [filterType, setFilterType] = useState('');
  const [filterValue, setFilterValue] = useState('');

  const navigate = useNavigate();

  const handleFilterTypeChange = (event) => {
    setFilterType(event.target.value);
  };

  const handleFilterValueChange = (event) => {
    setFilterValue(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (filterType === 'name') {
      const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${filterValue.toLowerCase()}`;
      try {
        const res = await fetch(pokemonUrl);
        if (res.ok) {
          const data = await res.json();
          const pokemonId = data.id;
          const url = `/pokemon/${pokemonId}`;
          navigate(url);
        } else {
          console.error('Error occurred while fetching Pokémon.');
        }
      } catch (error) {
        console.error('Error occurred while fetching Pokémon:', error);
      }
    }
  };

  const handleAllPokemonClick = () => {
    navigate('/AllPokemon');
  };

  const renderFilterValueInput = () => {
    if (filterType === 'type') {
      return (
        <select value={filterValue} onChange={handleFilterValueChange} className='filterform'>
          <option value="">Select Type</option>
          <option value="fire">Fire</option>
          <option value="water">Water</option>
          <option value="grass">Grass</option>
          <option value="psychic">Psychic</option>
          <option value="dark">Dark</option>
          <option value="steel">Steel</option>
          <option value="fairy">Fairy</option>
          <option value="dragon">Dragon</option>
          <option value="bug">Bug</option>
          <option value="flying">Flying</option>
          <option value="ground">Ground</option>
          <option value="poison">Poison</option>
          <option value="fighting">Fighting</option>
          <option value="ice">Ice</option>
          <option value="electric">Electric</option>
          <option value="normal">Normal</option>
        </select>
      );
    } else {
      return (
        <input
          type="text"
          placeholder="Enter filter value"
          value={filterValue}
          onChange={handleFilterValueChange}
          className='filterform'   
        />
      );
    }
  };

  return (
    <div className='search'>
      <img src={logo} alt="Logo" className='logo'/>
      <form onSubmit={handleSubmit}>
        <label>
          
          <select value={filterType} onChange={handleFilterTypeChange} className='filterform'>
            <option value="">Select Filter</option>
            <option value="name">Name</option>
            <option value="type">Type</option>
          </select>
        </label>
        {renderFilterValueInput() }
      </form>
      {filterType === 'type' && filterValue && (
        <FilterByType filterType={filterType} filterValue={filterValue} navigate={navigate} />
      )}
    {filterType === 'name' && (
  <PokemonSearch filterValue={filterValue} className="pokemonsearch"/>
)}
      <button onClick={handleAllPokemonClick} className='pokedexbutton'>Pokédex</button>
        <div> <img src={pika} alt="smiley" className='pika'/></div>
  </div>

  );
};

export default Home;