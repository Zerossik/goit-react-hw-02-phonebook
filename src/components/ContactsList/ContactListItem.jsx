import PropTypes from 'prop-types';

export function ContactListItem({ contacts, deleteContact }) {
  return contacts().map(({ id, name, number }) => (
    <li key={id}>
      <p>
        {name}: {number}
      </p>
      <button type="button" onClick={() => deleteContact(id)}>
        Delete
      </button>
    </li>
  ));
}
ContactListItem.propTypes = {
  contacts: PropTypes.func.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
