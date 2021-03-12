// I made this to test out the use of query searching as I don't know much, but want to make the use of the rest of my time. I've got 1 hour left when starting on this branch.

// I'm writing this in .js and .tsx while testing and trying the code.

// https://developers.google.com/web/updates/2016/01/urlsearchparams

import { Component } from "react";
import { api } from '../../constants/api';
import magnifyingGlass from '../../assets/magnifying-glass.svg';
import cross from '../../assets/cross.svg';

class Search extends Component {
    state = {
        ships: [],
        searchValue: '',
        searchIcon: magnifyingGlass,
    }

    componentDidMount() {
        fetch(api)
            .then(response => response.json())
            .then(ships => {
                this.setState({ships: ships});
                console.log(ships)
            });
    }


    render () {
        const params = new URLSearchParams('q=search+string&version=1&person=Eric');

        params.get('q') = "search string";
        params.get('version') = 1;
        Array.from(params).length = 3;

        // Set
        params.set('version', 2);

        // Append
        params.append('person', 'Tim');
        params.getAll('person') = ['Eric', 'Tim'];

        // Delete
        params.delete('person');


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



                <div className="search-result">
                    Search Result
                </div>
            </>
        )
    }


}

export default Search;