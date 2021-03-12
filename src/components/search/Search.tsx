import { Component } from 'react';
import magnifyingGlass from '../../assets/magnifying-glass.svg';
import cross from '../../assets/cross.svg';
import { api } from '../../constants/api';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';

interface State {
    ships: [];
    searchFocus: boolean;
    searchIcon: string;
    searchValue: string;
}

class Search extends Component {
    state: State = {
        ships: [],
        searchFocus: false,
        searchIcon: magnifyingGlass,
        searchValue: '',
    }

    componentDidMount() {
        fetch(api)
        .then(response => response.json())
        .then(ships => {
            this.setState({ships: ships});
            console.log(this.state.ships)
        })
    }

    render() {
        return (
            <>
                <SearchBar />
                
                <SearchResults />
            </>
        )
    }
    
}

export default Search;