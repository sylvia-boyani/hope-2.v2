import Navbar from './Navbar';
import MobileNav from "./MobileNav";
import { Link } from 'react-router-dom';
import tuma from '../assets/new-logo.png'

const Header = () => {
  return (
    <header>
      <div className="nav-area">
        <Link href="/" className="logo">
        <img id ="logo" src={tuma} alt="" /> 
        {/* <i>Tumaini Ministries</i> */}
        </Link>
        <Navbar />

        <MobileNav />
      </div>
    </header>
  );
};

export default Header;