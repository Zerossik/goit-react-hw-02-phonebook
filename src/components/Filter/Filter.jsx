import PropTypes from 'prop-types';

export function Filter({ filter, handlerChangeFilter }) {
  return (
    <label>
      Find Contacts by name
      <br />
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={handlerChangeFilter}
      />
    </label>
  );
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  handlerChangeFilter: PropTypes.func.isRequired,
};
