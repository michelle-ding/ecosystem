import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import About from "./pages/About";
import Grok from "./pages/Grok";
import Rec from "./pages/Recommendations";

function AppContent() {
  const location = useLocation();

  // Show header/footer for all pages except landing ("/")
  const showHeaderFooter = location.pathname !== "/";

  return (
    <>
      {showHeaderFooter && <Header />}

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Grok />} />
        <Route path="/contact" element={<Rec />} />
      </Routes>

      {showHeaderFooter && <Footer />}
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
