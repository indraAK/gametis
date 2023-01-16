import { IoGameController, IoTrendingUp, IoHeart } from "react-icons/io5";

export const navbarLinks = [
  { name: "Home", to: "/" },
  { name: "Popular", to: "/popular" },
  { name: "Liked Games", to: "/liked" },
];

export const appbarLinks = [
  { name: "Home", icon: IoGameController, to: "/" },
  { name: "Popular", icon: IoTrendingUp, to: "/popular" },
  { name: "Liked", icon: IoHeart, to: "/liked" },
];

export const gameCategories = [
  "MMO",
  "MMORPG",
  "Shooter",
  "Strategy",
  "Moba",
  "Card",
  "Racing",
  "Sports",
  "Social",
  "Fighting",
];
