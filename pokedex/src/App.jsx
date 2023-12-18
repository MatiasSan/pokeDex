import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Home from './views/Home';
import Pokemons from './views/Pokemons';
import PokemonCard from './components/PokemonCard';
import './App.css';

function App() {
  return (
    <>
      <div className="container">
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/pokemons" element={<Pokemons />}></Route>
          <Route path="/pokemons/:pokemon" element={<PokemonCard />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
