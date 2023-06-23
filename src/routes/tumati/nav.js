import { useState } from 'react';
import '../../routes/tumati/nav.css'
import logo from '../../assets/tumati-logo.jpeg'

export default function Nav() {
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
              <a href="/homeT">Home</a>
            </li>
            <li>
              <a href="/aboutT">About</a>
            </li>
            <li>
              <a href="/programs">Our Programs</a>
            </li>
            <li>
              <a href="/team">Team</a> 
            </li>
            <li>
              <a href="/blog">Blog</a>
            </li>
            <li>
              <a href="/contactT">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }