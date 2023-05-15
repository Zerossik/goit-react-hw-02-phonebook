export function ContactsList({ title, contacts }) {
  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {contacts.map(({ id, name, number }) => (
          <li key={id}>
            {name}: {number}
          </li>
        ))}
      </ul>
    </div>
  );
}
