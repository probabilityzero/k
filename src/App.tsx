import { ThemeProvider } from "./hooks/useTheme";
import { Route, Routes, useLocation } from "react-router-dom";
import { Footer, HomeFooter } from "./layout/Footer";
import Home from "./pages";
import ArtPage from "./pages/[artUrl]";
import AllCollections from "./pages/collections"; // Optional home for collections list
import CollectionPage from "./pages/collections/[collectionUrl]";
import Exhibitions from "./pages/exhibitions";
import About from "./pages/about";
import Miscellaneous from "./pages/miscellaneous";
import GalleryScroll from "./pages/gallery";

function App() {
  const location = useLocation();

  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen">
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:artUrl" element={<ArtPage />} />
            <Route path="/collections" element={<AllCollections />} />
            <Route path="/collections/:collectionUrl" element={<CollectionPage />} />
            <Route path="/4d" element={<GalleryScroll />} />
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
