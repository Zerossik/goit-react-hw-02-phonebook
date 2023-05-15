import { Component } from 'react';
import { Section } from './Section/Section';
import { PhoneForm } from './PhonebookForm/PhonebookForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = contact => {
    this.setState(
      prevState => ({
        contacts: [...prevState.contacts, contact],
      }),
      () => console.log(this.state)
    );
  };

  hendleChangeFilter = value => {
    console.log(value);
    const { contacts } = this.state;
    this.setState({ filter: value });
    const result = [...contacts].filter(contact =>
      contact.name.toLowerCase().includes(value.toLowerCase())
    );
    console.log(result, value);
  };

  render() {
    const { contacts, filter } = this.state;
    return (
      <Section title={'Phonebook'}>
        <PhoneForm addContact={this.addContact} />
        <Filter filter={filter} hendleChangeFilter={this.hendleChangeFilter} />
        <ContactsList title={'Contacts'} contacts={contacts} />
      </Section>
    );
  }
}
