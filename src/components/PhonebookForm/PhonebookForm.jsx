import { Component } from 'react';
import { NameInput } from 'components/NameInput/NameInput';
import { PhoneInput } from 'components/PhoneInput/PhoneInput';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { FormButton } from './PhonebookForm.styled';
import { StyledLabel, Required } from 'components/Styled/Label.styled';

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
        <StyledLabel>
          Name<Required>*</Required>
          <br />
          <NameInput name={name} handlerChange={this.handlerChange} />
        </StyledLabel>
        <br />
        <StyledLabel>
          Number<Required>*</Required>
          <br />
          <PhoneInput number={number} handlerChange={this.handlerChange} />
        </StyledLabel>
        <br />
        <FormButton type="submit">Add contact</FormButton>
      </form>
    );
  }
}
PhoneForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};
