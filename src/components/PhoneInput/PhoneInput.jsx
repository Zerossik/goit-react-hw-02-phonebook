import PropTypes from 'prop-types';

export function PhoneInput({ number, handlerChange }) {
  return (
    <input
      type="tel"
      name="number"
      value={number}
      pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
      title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
      required
      onChange={handlerChange}
      placeholder="+380000000000"
    />
  );
}

PhoneInput.propTypes = {
  number: PropTypes.string.isRequired,
  handlerChange: PropTypes.func.isRequired,
};
