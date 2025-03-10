import { useState } from "react";
import { useTranslation } from 'react-i18next';
import TtoilLogo from "../../assets/icon/ttoilLogo";
import MenuBar from "../../assets/icon/menubar";
import "./navbar.css";
import {
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBDropdownItem,
} from "mdb-react-ui-kit";

const NavBar = ({ aboutRef, servicesRef, productsRef, locationRef, contactRef, activeSection, setActiveSection }) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const scrollToSection = (ref, section) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
    setActiveSection(section);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setActiveSection("");
  };

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <nav>
      <a href="#" className="menubar" onClick={toggleMenu}>
        <MenuBar />
      </a>
      <ul className="ul-1 ">
        <li>
          <a
            href="#about"
            className={activeSection === "about" ? "active" : ""}
            onClick={() => scrollToSection(aboutRef, "about")}
          >
            {t('ABOUT')}
          </a>
        </li>
        <li>
          <a
            href="#services"
            className={activeSection === "services" ? "active" : ""}
            onClick={() => scrollToSection(servicesRef, "services")}
          >
            {t('SERVICES')}
          </a>
        </li>
        <li>
          <a
            href="#products"
            className={activeSection === "products" ? "active" : ""}
            onClick={() => scrollToSection(productsRef, "products")}
          >
            {t('PRODUCTS')}
          </a>
        </li>
      </ul>
      <a href="#" onClick={scrollToTop}>
        <TtoilLogo />
      </a>
      <ul className={`ul-2 ${menuVisible ? "visible" : ""}`}>
        <li>
          <a
            href="#location"
            className={activeSection === "location" ? "active" : ""}
            onClick={() => scrollToSection(locationRef, "location")}
          >
            {t('LOCATION')}
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className={activeSection === "contact" ? "active" : ""}
            onClick={() => scrollToSection(contactRef, "contact")}
          >
            {t('CONTACT')}
          </a>
        </li>
        <li>
          <MDBDropdown>
            <MDBDropdownToggle tag="a" className="btn btn-primary">
              {t('LANGUAGE')}
            </MDBDropdownToggle>
            <MDBDropdownMenu>
              <MDBDropdownItem link onClick={() => handleLanguageChange('en')}>{t('ENGLISH')}</MDBDropdownItem>
              <MDBDropdownItem link onClick={() => handleLanguageChange('az')}>{t('AZERBAIJANI')}</MDBDropdownItem>
              <MDBDropdownItem link onClick={() => handleLanguageChange('ru')}>{t('RUSSIAN')}</MDBDropdownItem>
            </MDBDropdownMenu>
          </MDBDropdown>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;