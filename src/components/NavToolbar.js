import {Link} from "react-router-dom";
import logo from './Images/Pokemon-Logo-PNG4.png';
import pokedex from "./Images/Pokedex.png"
import "./GridPhoto.css";
import wavingPikachu from "./Images/WavingPikachu.gif";
import pokeball from "./Images/PokeBall.png"


function NavigationBar() {
    const goBack = () => {
        window.history.back();
      };


    return (
      <div>
        <nav className="navbar">
        <div onClick={goBack}>
          <img src={wavingPikachu} alt="" className="navlogo2" />
        </div>
        <img src={pokeball} alt="" className="pokeball" />
          <Link to="/">
            <img src={logo} alt="" className="navlogo" />
          </Link>
        <img src={pokeball} alt="" className="pokeball" />
          <Link to="/AllPokemon">
            <img src={pokedex} alt="pokedex" className="navlogopokedex" />
          </Link>
          
        </nav>
      </div>
    );
  
}
  export default NavigationBar;
