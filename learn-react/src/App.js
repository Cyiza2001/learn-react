import React from "react";
import { useEffect } from "react";
import "./App.css";
import SearchIcon from "./search.svg";

//56a8f03b
const API_URL = "http://www.omdbapi.com?apikey=56a8f03b";
const movie1 = {
  Title: "Amazing Spiderman Syndrome",
  Year: "2012",
  imdbID: "tt2586634",
  Type: "movie",
  Poster: "N/A",
};

const App = () => {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data.Search);
  };

  useEffect(() => {
    searchMovies("spiderman");
  }, []);

  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input
          placeholder="search for movies"
          value="superman"
          onChange={() => {}}
        />
        <img src={SearchIcon} alt="search" onClick={() => {}} />
      </div>
      <div className="container"></div>
    </div>
  );
};

export default App;
