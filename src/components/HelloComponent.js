import React from 'react';

class HelloComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      txtUsername: 'Infosys',
      formErrors: {
        txtUsernameErr: '',
      },
      fieldValidity: {
        txtUsername: false,
      },
      formValid: false,
    };
    this.getName = (event) => {
      this.validateUsername(event);
      this.setState({ txtUsername: event.target.value });
    };
  }

  validateUsername = (event) => {
    const name = event.target.value;
    var formErrors = this.state.formErrors;
    var fieldValidity = this.state.fieldValidity;

    if (name.length < 5) {
      formErrors.txtUsernameErr = 'Cannot be less than 5';
      fieldValidity.txtUsername = false;
    } else {
      formErrors.txtUsernameErr = '';
      fieldValidity.txtUsername = true;
    }

    this.setState({ formErrors: formErrors });
    this.setState({ formValid: fieldValidity.txtUsername });
  };

  render = () => {
    return (
      <form>
        <input
          type="text"
          name="txtUsername"
          value={this.state.txtUsername}
          onChange={this.getName}
        />

        <div id="errorMsg">{this.state.formErrors.txtUsernameErr}</div>
      </form>
    );
  };
}

export default HelloComponent;
