import { Component } from 'react';
import { Section } from './Section/Section';
import { PhoneForm } from './PhonebookForm/PhonebookForm';

export class App extends Component {
  state = {
    contacts: [],
  };

  render() {
    return (
      <Section title={'Phonebook'}>
        <PhoneForm />
      </Section>
    );
  }
}
