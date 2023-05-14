import { Component } from 'react';
import { NameInput } from 'components/NameInput/NameInput';
import { PhoneInput } from 'components/PhoneInput/PhoneInput';

export class PhoneForm extends Component {
  state = {
    name: '',
    number: '',
  };

  hendleChange = evt => {
    console.log(evt.target.value);
    // this.setState({
    //   name: evt.target.value,
    //   number: evt.target.value,
    // });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form onChange={this.hendleChange}>
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
