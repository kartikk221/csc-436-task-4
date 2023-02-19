import React from 'react';
import { useState, useEffect } from 'react';
import Movies from './components/Movies';
import SearchBar from './components/SearchBar';
import movieData from './utils/movies';

function App() {
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState('');
    const [maxLength, setMaxLength] = useState('');
    const [sortAscending, setSortAscending] = useState(true);

    useEffect(() => {
        setMovies(
            movieData
                .filter((movie) => {
                    return (
                        movie.title.toUpperCase().includes(search.toUpperCase()) && // Search by name case insensitive
                        ([NaN, 0].includes(parseInt(maxLength, 10)) || parseInt(maxLength, 10) >= movie.length) // Ensure length entered is greater than length of movie
                    );
                })
                .sort((a, b) => {
                    if (sortAscending) {
                        return a.length - b.length;
                    } else {
                        return b.length - a.length;
                    }
                })
        );
    }, [search, maxLength, sortAscending]);

    return (
        <>
            {/* Header Bar for Searching */}
            <SearchBar
                search={search}
                setSearch={setSearch}
                maxLength={maxLength}
                sortAscending={sortAscending}
                setSortAscending={setSortAscending}
                setMaxLength={setMaxLength}
            />
            {/* Output the Movies */}
            <Movies movies={movies} />
        </>
    );
}

export default App;
