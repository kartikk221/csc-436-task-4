const SearchBar = ({ search, setSearch, maxLength, setMaxLength, sortAscending, setSortAscending }) => {
    const searchHandler = (e) => {
        setSearch(e.target.value);
    };

    const maxLengthHandler = (e) => {
        setMaxLength(e.target.value);
    };

    return (
        <>
            <label htmlFor="search">Search Query</label>
            <input type="text" name="search" onChange={searchHandler} value={search} />

            <label htmlFor="max-length">Max Length</label>
            <input type="number" name="max-length" onChange={maxLengthHandler} value={maxLength} />

            <button
                style={{
                    marginTop: '1rem',
                }}
                // Flip the sortAscending state on each click
                onClick={() => setSortAscending((prev) => !prev)}
            >
                Sort Movies By "{sortAscending ? 'Descending' : 'Ascending'}" Length
            </button>
        </>
    );
};

export default SearchBar;
