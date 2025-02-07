import React from "react";
import "./navbar.css";
import TtoilLogo from "../../assets/icon/ttoilLogo";
import {
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBDropdownItem,
} from "mdb-react-ui-kit";
import MenuBar from "../../assets/icon/menubar";

const NavBar = () => {
  return (
    <nav>
      <ul>
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
      <ul>
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
      <a href="#" className="menubar">
        MENU <MenuBar />
      </a>
    </nav>
  );
};

export default NavBar;
