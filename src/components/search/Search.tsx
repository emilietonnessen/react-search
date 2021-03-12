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

    searchHandler =(event) => {
        console.log('Searching now!');
    }

    clearSearchHandler = () => {
        console.log('Clear the search!');
    }

    render() {
        return (
            <>
                <SearchBar
                    search={this.searchHandler}
                    value={this.state.searchValue}
                    clearSearch={this.clearSearchHandler}
                    iconType={this.state.searchIcon} />

                {this.state.ships.map(ship => {
                    return <p>{ship.name}</p>
                })}
                
            </>
        )
    }
    
}

export default Search;