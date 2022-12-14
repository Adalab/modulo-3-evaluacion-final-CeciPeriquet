import '../styles/components/FilterBySpecies.scss';
import PropTypes from 'prop-types';
function FilterBySpecies(props) {
  const handleInput = (ev) => {
    props.handleFilterSpecies(ev.target.value);
  };
  return (
    <fieldset className="species">
      <input
        type="checkbox"
        name="human"
        value="Human"
        className="check_input"
        onChange={handleInput}
        checked={props.filterBySpecies.includes('Human')}
      />
      <label htmlFor="human" className="check_label">
        Human
      </label>

      <input
        type="checkbox"
        name="alien"
        value="Alien"
        className="check_input"
        onChange={handleInput}
        checked={props.filterBySpecies.includes('Alien')}
      />
      <label htmlFor="alien" className="check_label">
        Alien
      </label>
    </fieldset>
  );
}
FilterBySpecies.propTypes = {
  handleFilterSpecies: PropTypes.func.isRequired,
  filterBySpecies: PropTypes.array.isRequired,
};

export default FilterBySpecies;
