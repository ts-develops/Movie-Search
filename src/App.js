import React, {useEffect, useState} from "react";
import MovieCard from "./MovieCard";
import './App.css'
import SearchIcon from './search.svg'

const API = 'http://www.omdbapi.com?apikey=6f262a79'


const App = () => {
    const [movies, setMovies] = useState([])
    const [searchTerm, setSearchTerm] = useState([""])

    const searchMovies = async (title) => {
        const response = await fetch(`${API}&s=${title}`)
        const data = await response.json()

        setMovies(data.Search)
    }

    useEffect(() => {
        searchMovies('')
    }, []);

    return( 
        <div className="app">
            <h1>MovieStar</h1>

            <div className="search">
                <input 
                placeholder="Search your Movie"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img src={SearchIcon} alt='search' onClick={() => searchMovies(searchTerm)}/>
            </div>

            {
                movies?.length > 0 ? (<div className="container">
                {movies.map((movie) => (<MovieCard movie={movie}/>
                ))}
                </div>
            ) : (
                <div className="empty">
                <h2> No Movies Found</h2>
                </div>
            ) }
            </div>
    );
}

export default App