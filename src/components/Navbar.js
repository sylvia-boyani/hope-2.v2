import { menuItems } from "../menuItems";
import  MenuItems  from "./MenuItems"; 

const Navbar = () => {
  const depthLevel = 0;
  return (
      <nav className="desktop-nav">
      <ul className="menu">
        {menuItems.map((menu, index) => {
          const depthLevel = 0;
          return <MenuItems items={menu} key={index} depthLevel={depthLevel} />;
         })} 
      </ul>
      </nav>
  );
};

export default Navbar;