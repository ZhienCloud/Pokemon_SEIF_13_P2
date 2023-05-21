import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"; 
import PokemonImage from './components/AllPokemon';
import PokemonOnClick from './components/PokemonOnClick';
import Home from "./components/Home";
import NavigationBar from './components/NavToolbar';



function App() {
  return (
    <Router>
      <div className="App">
        <NavigationBar/>
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
