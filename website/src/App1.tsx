import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import About from "./pages/About";
import MobileLanding from "./pages/MobileLanding";

function AppContent() {
  const location = useLocation();

  // Detect if the screen is mobile
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);

    handleResize(); // initial check
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Mobile landing overrides everything
  if (isMobile) return <MobileLanding />;

  // Show header/footer for all pages except main landing ("/")
  const showHeaderFooter = location.pathname !== "/";

  return (
    <>
      {showHeaderFooter && <Header />}

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>

      {showHeaderFooter && <Footer />}
    </>
  );
}

// Use HashRouter for GitHub Pages deployment
export default function App() {
  return (
    <HashRouter>
      <AppContent />
    </HashRouter>
  );
}
