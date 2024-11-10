import './NavBar.css'
import Fire from "../../assets/fire.png";
import Star from "../../assets/glowing-star.png";
import Party from "../../assets/partying-face.png";
import DarkMode from '../DarkMode/DarkMode';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar">
      <h1>MovieMania</h1>
      <div className="navbar_links">
        <DarkMode></DarkMode>
      
        <NavLink to="/">
          Popular <img src={Fire} alt="Fire emoji" className="navbar_emoji" />
        </NavLink>
        <NavLink to="/top_rated">
          Top Rated <img src={Star} alt="Star emoji" className="navbar_emoji" />
        </NavLink>{" "}
        <NavLink to="/upcoming">
          Upcoming <img src={Party} alt="Party emoji" className="navbar_emoji" />
        </NavLink>
      </div>
    </nav>
  );
};
export default NavBar;
