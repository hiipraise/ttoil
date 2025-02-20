import { useState } from "react";
import TtoilLogo from "../../assets/icon/ttoilLogo";
import {
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBDropdownItem,
} from "mdb-react-ui-kit";
import MenuBar from "../../assets/icon/menubar";
import "./navbar.css";

const NavBar = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
    // console.log("Menu Toggled: ", menuVisible);
  };

  return (
    <nav>
      <a href="#" className="menubar" onClick={toggleMenu}>
        <MenuBar />
      </a>
      <ul className="ul-1 ">
        <li>
          <a href="../../pages/about/about.jsx">ABOUT</a>
        </li>
        <li>
          <a href="../../pages/service/service.jsx">SERVICES</a>
        </li>
        <li>
          <a href="../../pages/product/product.jsx">PRODUCTS</a>
        </li>
      </ul>
      <TtoilLogo />
      <ul className={`ul-2 ${menuVisible ? "visible" : ""}`}>
        <li>
          <a href="../../pages/location/location.jsx">LOCATION</a>
        </li>
        <li>
          <a href="../../pages/contact/contact.jsx">CONTACT</a>
        </li>
        <li>
          <MDBDropdown>
            <MDBDropdownToggle tag="a" className="btn btn-primary">
              LANGUAGE
            </MDBDropdownToggle>
            <MDBDropdownMenu>
              <MDBDropdownItem link>ENGLISH</MDBDropdownItem>
              <MDBDropdownItem link>AZERBAIJANI</MDBDropdownItem>
              <MDBDropdownItem link>RUSSIAN</MDBDropdownItem>
            </MDBDropdownMenu>
          </MDBDropdown>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;