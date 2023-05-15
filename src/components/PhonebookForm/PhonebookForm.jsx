import { Component } from 'react';
import { NameInput } from 'components/NameInput/NameInput';
import { PhoneInput } from 'components/PhoneInput/PhoneInput';
import { nanoid } from 'nanoid';

export class PhoneForm extends Component {
  state = {
    name: '',
    number: '',
  };

  hendleChange = evt => {
    const { name, value } = evt.target;
    this.setState({
      [name]: value,
    });
  };

  hendleSubmit = evt => {
    evt.preventDefault();
    const { name, number } = this.state;
    const { addContact } = this.props;
    const id = nanoid(10);
    addContact({ id: id, name: name, number: number });
    this.resetForm();
  };

  resetForm = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form onSubmit={this.hendleSubmit}>
        <label>
          Name
          <br />
          <NameInput name={name} hendleChange={this.hendleChange} />
        </label>
        <br />
        <label>
          Number <br />
          <PhoneInput number={number} hendleChange={this.hendleChange} />
        </label>
        <br />
        <button type="submit">Add contact</button>
      </form>
    );
  }
}
