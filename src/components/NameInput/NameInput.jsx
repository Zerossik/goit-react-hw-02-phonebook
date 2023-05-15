import PropTypes from 'prop-types';
import { Input } from '../Styled/Input.styled';

export function NameInput({ name, handlerChange }) {
  return (
    <Input
      type="text"
      name="name"
      value={name}
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      required
      onChange={handlerChange}
      placeholder="Your Name"
    />
  );
}
NameInput.propTypes = {
  name: PropTypes.string.isRequired,
  handlerChange: PropTypes.func.isRequired,
};
