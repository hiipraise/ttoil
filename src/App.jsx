import { useRef, useState, useEffect } from "react";
import NavBar from "./component/navbar/navbar";
import About from "./pages/about/about";
import HeroPage from "./pages/heropage/heropage";
import Service from "./pages/service/service";
import Footer from "./component/footer/footer";
import Location from "./pages/location/location";
import Contact from "./pages/contact/contact";
import Product from "./pages/product/product";

function App() {
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const productsRef = useRef(null);
  const locationRef = useRef(null);
  const contactRef = useRef(null);

  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: [0.1, 0.5, 0.9],
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    const sections = [
      aboutRef.current,
      servicesRef.current,
      productsRef.current,
      locationRef.current,
      contactRef.current,
    ];

    sections.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sections.forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  return (
    <div>
      <NavBar
        aboutRef={aboutRef}
        servicesRef={servicesRef}
        productsRef={productsRef}
        locationRef={locationRef}
        contactRef={contactRef}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <section id="hero">
        <HeroPage />
      </section>
      <section id="about" ref={aboutRef} style={{ paddingTop: "80px" }}>
        <About />
      </section>
      <section id="services" ref={servicesRef} style={{ paddingTop: "80px" }}>
        <Service />
      </section>
      <section id="products" ref={productsRef} style={{ paddingTop: "80px" }}>
        <Product />
      </section>
      <section id="location" ref={locationRef} style={{ paddingTop: "80px" }}>
        <Location />
      </section>
      <section id="contact" ref={contactRef} style={{ paddingTop: "80px" }}>
        <Contact />
      </section>
      <Footer />
    </div>
  );
}

export default App;