import React, { Component } from 'react';
import axios from 'axios';

import SearchBar from '../../components/SearchBar/SearchBar';
import MoviesList from '../../components/MoviesList/MoviesList';
import Pagination from '../../components/Pagination/Pagination';

class Movies extends Component {
    constructor() {
        super();
        this.movieSearch = this.movieSearch.bind(this);
        this.updatePage = this.updatePage.bind(this);
        this.updateTerm = this.updateTerm.bind(this);

        this.state = {
            movies: [],
            search: '',
            totalPages: '',
            nextPage: {
                selected: 0
            },
            term: ''
        }
    }

    updatePage(currentPage) {
        this.setState({nextPage: currentPage});
    }

    updateTerm(searchTerm) {
        this.setState({term: searchTerm});
    }

    componentWillUpdate(nextProps, nextState) {
        this.movieSearch(nextState);
    }

    movieSearch(nextState) {
        axios.get('https://jsonmock.hackerrank.com/api/movies/search/?Title=' + nextState.term + '&page=' + nextState.nextPage.selected)
            .then(response => {
                this.state.movies = response.data.data;
                this.state.totalPages = response.data.total_pages;
                if (nextState.term !== this.state.term) {
                    this.state.nextPage.selected = 0;
                }
            });
    }

    render () {
        const movies = this.state.movies.map(movie => {
            return <MoviesList key={movie.imdbID} title={movie.Title} poster={movie.Poster} type={movie.Type} year={movie.Year} />
        });

        return (
            <div className="scrollspy">
                <section>
                    <SearchBar updateTerm={this.updateTerm} />
                </section>
                <div className="row">
                    <div className="col s12 center mb-7">
                        {movies}
                    </div>
                </div>
                <div className="row">
                    <Pagination total_pages={this.state.totalPages} updatePage={this.updatePage}/>
                </div>
            </div>
        );
    }
}

export default Movies;