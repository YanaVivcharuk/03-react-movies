import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./components/App/App.module.css";
import App from "./components/App/App";
import "modern-normalize/modern-normalize.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

const apiKey = import.meta.env.VITE_TMDB_TOKEN;

fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`)
  .then((res) => res.json())
  .then((data) => console.log(data));
