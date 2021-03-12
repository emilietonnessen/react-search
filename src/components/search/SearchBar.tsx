interface SearchBarProps {
    search: () => void; // <-- Handler to not return anything, so I used void.
    value: string;
    clearSearch: () => void; // <-- Handler to not return anything, so I used void.
    iconType: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ search, value, clearSearch, iconType }) => {
    return (
        <div className="search">
            <input 
                type="text"
                className="search__input"
                placeholder="Search"
                onChange={search}
                value={value} />

            <button
                onClick={clearSearch}
                className="search__icon" >
                <img 
                    src={iconType}
                    alt="Search Icon" />
            </button>
        </div>
    )
}

export default SearchBar;