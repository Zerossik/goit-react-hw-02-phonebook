import PropTypes from 'prop-types';
import { List } from './ContactsList.styled';
export function ContactsList({ title, contacts }) {
  console.log(contacts());
  return (
    <div>
      <h2>{title}</h2>
      <List>
        {contacts().map(({ id, name, number }) => (
          <li key={id}>
            {name}: {number}
          </li>
        ))}
      </List>
    </div>
  );
}
ContactsList.propTypes = {
  title: PropTypes.string.isRequired,
  contacts: PropTypes.func.isRequired,
};
