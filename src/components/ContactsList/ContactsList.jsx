import PropTypes from 'prop-types';
import { List } from './ContactsList.styled';

export function ContactsList({ title, children }) {
  return (
    <div>
      <h2>{title}</h2>
      <List>{children}</List>
    </div>
  );
}
ContactsList.propTypes = {
  title: PropTypes.string.isRequired,
};
