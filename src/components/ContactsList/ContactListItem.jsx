import PropTypes from 'prop-types';
import { ContactListButton, ContactItem } from './ContactsList.styled';

export function ContactListItem({ contacts, deleteContact }) {
  return contacts().map(({ id, name, number }) => (
    <ContactItem key={id}>
      <p>
        {name}: {number}
      </p>
      <ContactListButton type="button" onClick={() => deleteContact(id)}>
        Delete
      </ContactListButton>
    </ContactItem>
  ));
}
ContactListItem.propTypes = {
  contacts: PropTypes.func.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
