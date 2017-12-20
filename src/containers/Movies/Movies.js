import React, { Component } from 'react';
import axios from 'axios';

import SearchBar from '../../components/SearchBar/SearchBar';
import MoviesList from '../../components/MoviesList/MoviesList';
import Pagination from '../../components/Pagination/Pagination';
import './Movies.css';

class Movies extends Component {
    state = {
        movies: [],
        search: ''
    }

    movieSearch(term) {
        axios.get('https://jsonmock.hackerrank.com/api/movies/search/?Title=' + term)
            .then(response => {
                this.setState({movies: response.data.data});
            });
    }

    render () {
        const movies = this.state.movies.map(movie => {
            return <MoviesList key={movie.imdbID} title={movie.Title} />
        });

        const movieSearch = (term) => { this.movieSearch(term)}
        return (
            <div>
                <section>
                    <SearchBar onSearchTermChange={ movieSearch } />
                </section>
                <section>
                    {movies}
                </section>
            </div>
        );
    }
}

export default Movies;