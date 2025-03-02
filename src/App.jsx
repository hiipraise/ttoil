import "./App.css";
import NavBar from "./component/navbar/navbar";
import About from "./pages/about/about";
import HeroPage from "./pages/heropage/heropage";
import Service from "./pages/service/service";
import Footer from "./component/footer/footer";
import Location from "./pages/location/location";
import Contact from "./pages/contact/contact";
import Product from "./pages/product/product"; 

function App() {
  return (
    <>
      <NavBar />
      <HeroPage />
      <About />
      <Service />
      <Product />
      <Location />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
