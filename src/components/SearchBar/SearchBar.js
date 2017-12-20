import React, { Component } from 'react';

import './SearchBar.css';

class SearchBar extends Component {
    state = {
        search: '',
    }

    render () {
        return (
            <input type="text" value={this.state.search} onChange={(event) => this.onInputChange(event.target.value) } />
        );
    }

    onInputChange(term) {
        this.setState({ search: term });
        this.props.onSearchTermChange(term)
    }
}

export default SearchBar;