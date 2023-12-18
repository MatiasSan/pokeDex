import { NavLink } from 'react-router-dom';
import charmander from '../assets/img/charmander.png';

const Header = () => {
  const setActiveClass = ({ isActive }) => (isActive ? 'active' : 'inactive');
  return (
    <>
      <header className="bg-info">
        <nav className="navigationBar">
          <div className="logo">
            <h3 className="webName">Pokédex</h3>
            <div className="icon">
              <img className="char_img" src={charmander} alt="" />
            </div>
          </div>
          <div className="linkSection">
            <NavLink className={setActiveClass} to="/">
              Home
            </NavLink>
            <NavLink className={setActiveClass} to="/pokemons">
              Pokemones
            </NavLink>
          </div>
        </nav>
      </header>
    </>
  );
};
export default Header;
