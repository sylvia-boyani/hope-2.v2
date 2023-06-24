import { useState } from 'react';
import '../../routes/tumati/nav.css'
import logo from '../../assets/tumati-logo.jpeg'
import { HashLink as Link} from 'react-router-hash-link'

function Nav() {
    const [isNavExpanded, setIsNavExpanded] = useState(false)

    return (
      <nav className="navigation">
        <img id ="logo" src={logo} alt="" /> 
        <a href="/" className="brand-name">
          TUMATI
        </a>
        
        <button className="hamburger"
        onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          {/* icon from heroicons.com */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="white"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div
          className={
            isNavExpanded ? "navigation-menu expanded" : "navigation-menu"}>
          <ul>
            <li>
              <Link to="#homeT">Home</Link>
            </li>
            <li>
              <Link to="#aboutT">About</Link>
            </li>
            <li>
              <Link to="#programsT">Our Programs</Link>
            </li>
            <li>
              <Link to="#teamT">Team</Link> 
            </li>
            <li>
              <Link to="#blog">Blog</Link>
            </li>
            <li>
              <Link to="#contactT">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }

export default Nav;