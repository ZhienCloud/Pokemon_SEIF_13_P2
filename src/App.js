import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"; 
import PokemonImage from './components/PokemonImage';
import PokemonOnClick from './components/PokemonOnClick';
import Home from "./components/Home";


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/AllPokemon" element={<PokemonImage />} />
          <Route path="/pokemon/:id" element={<PokemonOnClick/>} />

     
          
        </Routes>
      </div>
    </Router>
  );
}





export default App;
