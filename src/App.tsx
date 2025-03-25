// src/App.tsx

import React from "react";
import { ThemeProvider } from "./hooks/useTheme";
import { Footer } from "./components/Footer";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages";
import Machines from "./pages/collections/machines";
import Patterns from "./pages/collections/patterns";
import Audiovisual from "./pages/collections/audiovisuals";
import Misc from "./pages/collections/misc";
import Exhibitions from "./pages/exhibitions";
import About from "./pages/about";
import ArtDetail from "./pages/no.000";
import AllCollections from "./pages/collections";

function App() {
  const location = useLocation();

  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen">
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/collections" element={<AllCollections />} />
            <Route path="/machines" element={<Machines />} />
            <Route path="/patterns" element={<Patterns />} />
            <Route path="/audiovisual" element={<Audiovisual />} />
            <Route path="/misc" element={<Misc />} />
            <Route path="/exhibitions" element={<Exhibitions />} />
            <Route path="/about" element={<About />} />
            <Route path="/No.:id" element={<ArtDetail />} />
          </Routes>
        </div>
        {location.pathname !== "/" && <Footer />}
      </div>
    </ThemeProvider>
  );
}

export default App;
