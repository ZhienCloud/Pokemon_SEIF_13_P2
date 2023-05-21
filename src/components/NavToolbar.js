import {Link} from "react-router-dom";
import logo from './Images/Pokemon-Logo-PNG4.png';
import pokedex from "./Images/Pokedex.png"
import "./GridPhoto.css";
import wavingPikachu from "./Images/WavingPikachu.gif";



function NavigationBar() {
    const goBack = () => {
        window.history.back();
      };


    return (
      <div>
        <nav className="navbar">
            <button onClick={goBack}>
                <img src={wavingPikachu} alt="" className="navlogo2"/>
            </button>
          <Link to="/">
            <img src={logo} alt="" className="navlogo" />
          </Link>
  
          <Link to="/AllPokemon">
            <img src={pokedex} alt="pokedex" className="navlogo" />
          </Link>
        </nav>
      </div>
    );
  
}
  export default NavigationBar;
