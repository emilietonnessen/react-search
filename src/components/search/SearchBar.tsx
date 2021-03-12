interface SearchBarProps {
    search: () => void; // <-- Handler to not return anything, so I used void.
    value: string;
    clearInput: () => void; // <-- Handler to not return anything, so I used void.
    iconType: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ search, value, clearInput, iconType }) => {
    return (
        <div className="search">
            <input 
                type="text"
                className="search__input"
                placeholder="Search"
                onChange={search}
                value={value} />

            <button>
                <img 
                    src={iconType}
                    alt="Search Icon" />
            </button>
        </div>
    )
}

export default SearchBar;