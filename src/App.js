import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/home";
import PopularGames from "./pages/popular-games";
import LikedGames from "./pages/liked-games";
import GameDetails from "./pages/game-details";
import NotFound from "./pages/404";
import Layout from "./components/layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="popular" element={<PopularGames />} />
        <Route path="liked" element={<LikedGames />} />
        <Route path="games/:id" element={<GameDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
