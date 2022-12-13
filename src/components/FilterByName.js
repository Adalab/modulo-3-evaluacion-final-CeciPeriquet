import '../styles/components/FilterByName.scss';

function FilterByName(props) {
  const handleSearch = (ev) => {
    props.handleSearch(ev.target.value);
  };
  return (
    <fieldset className="search-field">
      <label htmlFor="search">Search for your fav character by name</label>
      <input
        className="search-input"
        type="text"
        id="search"
        name="search"
        onInput={handleSearch}
        value={props.searchByName}
      />
    </fieldset>
  );
}

export default FilterByName;
