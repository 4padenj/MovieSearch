import { useEffect, useState } from "react";
import './App.css'

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=8b54340d'

const App = () => {
const [movies, setMovies] = useState([]);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data.Search)
    setMovies(data.Search)

    return data
  }

  // const MovieList = movies.map(movie => {
  //   return (
  //     <div className="movie-card">
  //       <image>IMAGE</image>
  //       <h3>{movie.Title}</h3>
  //       <h5>Year</h5>
  //     </div>
  //   )
  // })

  

  useEffect(() => {
    // searchMovies('Ironman');
  }, []);

  return (
    <div>
      <h1>Hello Paden</h1>
      <button onClick={() => {searchMovies('Bear')}}>Search!</button>
      <div>
        {movies[0] ? 
          movies[0].Title :
          "no title"
        }
        <pre>{JSON.stringify(movies, null, 2)}</pre>
        {/* {() => {movies.map(movie => {
          

        })}} */}
      </div>
    </div>
  )
};

export default App;