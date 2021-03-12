// I made this to test out the use of query searching as I don't know much, but want to make the use of the rest of my time. I've got 1 hour left when starting on this branch.

// I'm writing this in .js and not .tsx while testing and trying the code.

// https://developers.google.com/web/updates/2016/01/urlsearchparams
// https://www.youtube.com/watch?v=BOQ9mmUd3dI

import { Component } from "react";
import { api } from '../../constants/api';
import magnifyingGlass from '../../assets/magnifying-glass.svg';

class Search extends Component {
    state = {
        ships: [],
        searchValue: '',
        searchIcon: magnifyingGlass,
    }

    componentDidMount() {
        const params = new URLSearchParams();

        const url = api + `/${params.toString()}`
        console.log(url);

        /* fetch(url)
            .then(response => response.text())
            .then(console.log) */

        fetch(url)
            .then(response => response.json())
            .then(ships => {
                this.setState({ships: ships});
                console.log(ships)
            });
        }

    render () {
        return (
            <>
                <div className="search">
                    <input 
                        type="text"
                        className="search__input"
                        placeholder="Search"/>

                    <button
                        
                        className="search__icon" >
                        <img 
                            src={magnifyingGlass}
                            alt="Search Icon" />
                    </button>
                </div>



                {this.state.ships.map(ship => {
                    return (
                        <div className="search-result">
                            {ship.name}
                        </div>
                    )
                })}
            </>
        )
    }
}

export default Search;