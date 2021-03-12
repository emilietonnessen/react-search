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

    searchHandler =(event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value);
        this.setState({
            searchValue: event.target.value,
            searchIcon: cross,
            searchFocus: true,
        });
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
                    return <SearchResults key={ship.id} name={ship.name} />
                })}
                
            </>
        )
    }
    
}

export default Search;