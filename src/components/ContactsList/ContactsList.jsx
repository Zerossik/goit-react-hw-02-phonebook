import PropTypes from 'prop-types';
export function ContactsList({ title, contacts }) {
  console.log(contacts());
  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {contacts().map(({ id, name, number }) => (
          <li key={id}>
            {name}: {number}
          </li>
        ))}
      </ul>
    </div>
  );
}
ContactsList.propTypes = {
  title: PropTypes.string.isRequired,
  contacts: PropTypes.func.isRequired,
};
