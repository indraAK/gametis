import { createContext, useEffect, useReducer } from "react";

export const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addToFavorite: (game) => {},
  gameIsFavorite: (gameId) => {},
});

const favoriteReducer = (favorites, action) => {
  switch (action.type) {
    case "ADD_FAVORITE":
      return [action.payload, ...favorites];
    case "REMOVE_FAVORITE":
      return favorites.filter(
        (favoriteGame) => favoriteGame.id !== action.payload
      );
    default:
      return favorites;
  }
};

export default function FavoritesContextProvider({ children }) {
  const [favorites, dispatch] = useReducer(favoriteReducer, [], () => {
    return JSON.parse(localStorage.getItem("favoriteGames")) ?? [];
  });

  const gameIsFavorite = (gameId) => {
    return favorites.some((favoriteGame) => favoriteGame.id === gameId);
  };

  const addToFavorite = (game) => {
    if (gameIsFavorite(game.id)) {
      dispatch({ type: "REMOVE_FAVORITE", payload: game.id });
    } else {
      dispatch({ type: "ADD_FAVORITE", payload: game });
    }
  };

  useEffect(() => {
    localStorage.setItem("favoriteGames", JSON.stringify(favorites));
  }, [favorites]);

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        totalFavorites: favorites.length,
        addToFavorite,
        gameIsFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}
