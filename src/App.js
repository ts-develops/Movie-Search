import {useEffect} from "react";

// 6f262a79
const API = 'http://www.omdbapi.com?apikey=6f262a79'

const App = () => {

    const searchMovies = async (title) => {
        const response = await fetch(`${API}&s=${title}`)
        const data = await response.json()

        console.log(data.Search)
    }

    useEffect(() => {
        searchMovies('Spiderman')
    }, []);

    return( 
        <h1>Hello</h1>
    );
}

export default App