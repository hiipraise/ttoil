import "./App.css";
import NavBar from "./component/navbar/navbar";
import About from "./pages/about/about";
import HeroPage from "./pages/heropage/heropage";
import Service from "./pages/service/service";
import Footer from "./component/footer/footer";
import Location from "./pages/location/location";

function App() {
  return (
    <>
      <NavBar />
      <HeroPage />
      <About />
      <Service />
      <Location />
      <Footer />
    </>
  );
}

export default App;
