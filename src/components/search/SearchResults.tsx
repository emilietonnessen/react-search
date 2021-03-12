interface SearchResultsProps {
    name: string;
}

const SearchResults: React.FC<SearchResultsProps> = ({ name }) => {
    return (
        <div className="search-result">
            {name}
        </div>
    )
}

export default SearchResults;