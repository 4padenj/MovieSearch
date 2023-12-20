import { useEffect, useState } from "react";
import './App.css'
import SearchIcon from './search.svg'
import MovieCard from "./MovieCard";

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=8b54340d'

const movie1 = {
  "Title": "Wild Man to Ironman",
  "Year": "2018",
  "imdbID": "tt9823994",
  "Type": "movie",
  "Poster": "N/A"
}

const App = () => {
const [movies, setMovies] = useState([]);
const [searchInput, setSearchInput] = useState("");

  const searchMovies = async (title) => {
    if (title != "") {
      const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data.Search)
    setMovies(data.Search)
    setSearchInput("")

    return data
    }
    
  }

  

  

  useEffect(() => {
    searchMovies('');
  }, []);

  return (
    <div className="app">
      <h1>MovieSeason</h1>

      <div className="search">
        <input
          placeholder="Search for movies"
          value={searchInput}
          
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <img 
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchInput)}
        />
      </div>
      { movies?.length > 0
        ? (
          <div className="container">
            {movies.map((movie) => (
              <MovieCard movie={movie} />

            ))}
          </div>
          
        ) : ( 
          <div className="empty">
            <h2>Search our movies!</h2>
          </div>
      )}
      
    </div>
  );
};

export default App;