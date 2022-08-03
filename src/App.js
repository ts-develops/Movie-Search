import {useEffect} from "react";
import MovieCard from "./MovieCard";
import './App.css'
import SearchIcon from './search.svg'

const API = 'http://www.omdbapi.com?apikey=6f262a79'

const App = () => {

    const searchMovies = async (title) => {
        const response = await fetch(`${API}&s=${title}`)
        const data = await response.json()

        console.log(data.Search)
    }

    const movie1 = {
        "Title": "Italian Spiderman",
        "Year": "2007",
        "imdbID": "tt2705436",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BYjFhN2RjZTctMzA2Ni00NzE2LWJmYjMtNDAyYTllOTkyMmY3XkEyXkFqcGdeQXVyNTA0OTU0OTQ@._V1_SX300.jpg"
    }

    useEffect(() => {
        searchMovies('Spiderman')
    }, []);

    return( 
        <div className="app">
            <h1> MovieSearch</h1>

            <div className="search">
                <input 
                placeholder="Search your Movie"
                value=''
                onChange={() => {}}
                />
                <img src={SearchIcon} alt='search' onClick={() => {}}/>
            </div>

            <div className="container">
            <MovieCard movie1={movie1}/>
            </div>
        </div>
    );
}

export default App