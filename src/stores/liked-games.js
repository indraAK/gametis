import create from "zustand";
import { persist } from "zustand/middleware";

export const useGameStore = create(
  persist((set) => ({
    games: [],
    addGames: (game) => set((state) => ({ games: [game, ...state.games] })),
    removeGame: (gameId) =>
      set((state) => ({
        games: state.games.filter((game) => game.id !== gameId),
      })),
  }),
    {
      name: 'game-storage'
    }
  )
);