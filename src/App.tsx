import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { HomePage } from "./components/HomePage";
import { NotFound } from "./components/NotFound";
import { ArtExplore } from "./components/ArtExplore";
import { ExhibitionPage } from "./components/ExhibitionPage";
import { ArtPage } from "./components/ArtPage";

function App() {
  return (
    <div id="content" className="flex h-screen flex-col">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/art" element={<ArtExplore />} />
        <Route
          path="/art/:artwork_api/:artwork_id"
          element={<ArtPage />}
        />
        <Route
          path="/exhibitions/:exhibition_id"
          element={<ExhibitionPage />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
