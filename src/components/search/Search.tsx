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

interface Ships {
    id: string;
    name: string;
    url: string;
}

interface SearchProps {
    ships: [] | Ships[];
}

class Search extends Component<SearchProps> {
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
        })
    }

    searchHandler = (event: React.InputEvent<HTMLInputElement>): void => {
        this.setState({
            searchValue: event.target.value,
            searchIcon: cross,
            searchFocus: true
        });
    }

    clearSearchHandler = () => {
        this.setState({
            searchValue: '',
            searchFocus: false,
            searchIcon: magnifyingGlass,
        });
    }

    render() {
        let ships: Ships[] = this.state.ships;
        let search: string = this.state.searchValue.trim().toLowerCase();

        if (search.length > 0 ) {
            ships = ships.filter(ship => {
                return ship.name.toLowerCase().match(search);
            })
        }

        if(!this.state.searchFocus || search.length === 0) {
            ships = [];
        }

        return (
            <>
                <SearchBar
                    search={this.searchHandler}
                    value={this.state.searchValue}
                    clearSearch={this.clearSearchHandler}
                    iconType={this.state.searchIcon} />

                {ships.map(ship => {
                    return <SearchResults key={ship.id} name={ship.name} />
                })}
                
            </>
        )
    }
    
}

export default Search;