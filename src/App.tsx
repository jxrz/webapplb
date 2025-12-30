import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/utils/ScrollToTop";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Solutions from "@/pages/Solutions";
import Portfolio from "@/pages/Portfolio";
import Brands from "@/pages/Brands";
import Resources from "@/pages/Resources";
import Contact from "@/pages/Contact";



export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<About />} />
        <Route path="/soluciones" element={<Solutions />} />
        <Route path="/portafolio" element={<Portfolio />} />
        <Route path="/marcas" element={<Brands />} />
        <Route path="/recursos" element={<Resources />} />
        <Route path="/contacto" element={<Contact />} />
      </Routes>
    </Router>
  );
}
