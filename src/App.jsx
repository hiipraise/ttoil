import "./App.css";
import NavBar from "./component/navbar/navbar";
import About from "./pages/about/about";
import HeroPage from "./pages/heropage/heropage";

function App() {
  return (
    <>
      <NavBar />
      <HeroPage />
      <About />
    </>
  );
}

export default App;
