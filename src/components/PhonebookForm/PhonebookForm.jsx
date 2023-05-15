import { Component } from 'react';
import { NameInput } from 'components/NameInput/NameInput';
import { PhoneInput } from 'components/PhoneInput/PhoneInput';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

export class PhoneForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handlerChange = evt => {
    const { name, value } = evt.target;
    this.setState({
      [name]: value,
    });
  };

  handlerSubmit = evt => {
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
      <form onSubmit={this.handlerSubmit}>
        <label>
          Name
          <br />
          <NameInput name={name} handlerChange={this.handlerChange} />
        </label>
        <br />
        <label>
          Number <br />
          <PhoneInput number={number} handlerChange={this.handlerChange} />
        </label>
        <br />
        <button type="submit">Add contact</button>
      </form>
    );
  }
}
PhoneForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};
