import React, { Component } from 'react';
import axios from 'axios';

import SearchBar from '../../components/SearchBar/SearchBar';
import MoviesList from '../../components/MoviesList/MoviesList';
import Pagination from '../../components/Pagination/Pagination';
import './Movies.css';

class Movies extends Component {
    state = {
        movies: [],
        search: '',
        totalPages: ''
    }

    movieSearch(term) {
        axios.get('https://jsonmock.hackerrank.com/api/movies/search/?Title=' + term)
            .then(response => {
                this.setState({movies: response.data.data});
                this.setState({totalPages: response.data.total_pages});
            });
    }

    render () {
        const movies = this.state.movies.map(movie => {
            return <MoviesList key={movie.imdbID} title={movie.Title} poster={movie.Poster} type={movie.Type} year={movie.Year} />
        });

        const movieSearch = (term) => { this.movieSearch(term)}
        return (
            <div className="container">
                <section>
                    <SearchBar onSearchTermChange={ movieSearch } />
                </section>
                <div className="row">
                    {movies}
                </div>
                <div className="row">
                    <Pagination />
                </div>
            </div>
        );
    }
}

export default Movies;