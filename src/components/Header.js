import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import tuma from '../assets/tuma.png'

const Header = () => {
  return (
    <header>
      <div className="nav-area">
        <Link href="/" className="logo">
        <img id ="logo" src={tuma} alt="" /> 
        {/* <i>Tumaini Ministries</i> */}
        </Link>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;