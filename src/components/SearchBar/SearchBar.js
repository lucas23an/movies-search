import React, { Component } from 'react';

import './SearchBar.css';

class SearchBar extends Component {
    state = {
        search: '',
    }

    render () {
        return (
            <div className="row">
                <div className="input-field col s6">
                    <i className="material-icons prefix">search</i>
                    <input className="" type="text" value={this.state.search} onChange={(event) => this.onInputChange(event.target.value) } />
                    <div className="search-results"></div>
                </div>
            </div>
        );
    }

    onInputChange(term) {
        this.setState({ search: term });
        this.props.onSearchTermChange(term)
    }
}

export default SearchBar;