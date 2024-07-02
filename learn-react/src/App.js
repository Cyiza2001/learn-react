import React from "react";
import { useEffect } from "react";

//56a8f03b
const API_URL = "http://www.omdbapi.com?apikey=56a8f03b";

const App = () => {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data.Search);
  };

  useEffect(() => {
    searchMovies("spiderman");
  }, []);

  return <h1>APP</h1>;
};

export default App;
