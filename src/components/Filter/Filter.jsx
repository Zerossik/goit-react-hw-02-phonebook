export function Filter({ filter, hendleChangeFilter }) {
  return (
    <label>
      Find Contacts by name
      <br />
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={hendleChangeFilter}
      />
    </label>
  );
}
