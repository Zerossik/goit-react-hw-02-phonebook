export function PhoneInput({ number, hendleChange }) {
  return (
    <input
      type="tel"
      name="number"
      value={number}
      pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
      title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
      required
      onChange={hendleChange}
      placeholder="+380000000000"
    />
  );
}
