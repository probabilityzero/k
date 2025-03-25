import { ThemeProvider } from "./hooks/useTheme";
import { Footer } from "./components/Footer";
import { HomeFooter } from "./components/HomeFooter"; // Import your HomeFooter component
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages";
import Machines from "./pages/collections/machines";
import Patterns from "./pages/collections/patterns";
import Audiovisual from "./pages/collections/audiovisuals";
import Miscellaneous from "./pages/collections/miscellaneous";
import Exhibitions from "./pages/exhibitions";
import About from "./pages/about";
import Collections from "./pages/collections";
import ArtPage from "./pages/[artUrl]";

function App() {
  const location = useLocation();

  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen">
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:artUrl" element={<ArtPage />} />
            <Route path="/collections" element={<Collections />} />
            <Route path="/machines" element={<Machines />} />
            <Route path="/patterns" element={<Patterns />} />
            <Route path="/audiovisual" element={<Audiovisual />} />
            <Route path="/miscellaneous" element={<Miscellaneous />} />
            <Route path="/exhibitions" element={<Exhibitions />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        {location.pathname === "/" ? <HomeFooter /> : <Footer />}
      </div>
    </ThemeProvider>
  );
}

export default App;