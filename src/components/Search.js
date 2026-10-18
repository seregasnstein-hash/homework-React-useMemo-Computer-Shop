function Search(props) {
  return (
    <div className="search">
      <input
        className="search__input"
        type="text"
        placeholder="Поиск по названию"
        value={props.search}
        onChange={(event) => props.setSearch(event.target.value)}
      />
    </div>
  );
}

export default Search;
