export function NameInput({ name, hendleChange }) {
  return (
    <input
      type="text"
      name="name"
      value={name}
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      required
      onChange={hendleChange}
      placeholder="Your Name"
    />
  );
}