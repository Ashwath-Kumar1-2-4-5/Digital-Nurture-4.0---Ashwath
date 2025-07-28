import React from 'react';

const validEmailRegex = RegExp(
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);

const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
  return valid;
};

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: '',
      email: '',
      password: '',
      errors: {
        fullName: '',
        email: '',
        password: '',
      },
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case 'fullName':
        errors.fullName =
          value.length < 5 ? 'Full Name must be 5 characters long!' : '';
        break;
      case 'email':
        errors.email = validEmailRegex.test(value)
          ? ''
          : 'Email is not valid!';
        break;
      case 'password':
        errors.password =
          value.length < 8 ? 'Password must be 8 characters long!' : '';
        break;
      default:
        break;
    }

    this.setState({ errors, [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();

    if (validateForm(this.state.errors)) {
      if (this.state.fullName.length < 5) {
         alert('Full Name must be 5 characters long!');
         return;
      }
      if (!validEmailRegex.test(this.state.email)) {
          alert('Email is not valid!');
          return;
      }
      if (this.state.password.length < 8) {
          alert('Password must be 8 characters long!');
          return;
      }

      alert('Valid Form');
      this.setState({
          fullName: '',
          email: '',
          password: '',
          errors: { fullName: '', email: '', password: '' }
      });
    } else {
      if (this.state.errors.fullName.length > 0) {
        alert(this.state.errors.fullName);
        return;
      }
      if (this.state.errors.email.length > 0) {
        alert(this.state.errors.email);
        return;
      }
      if (this.state.errors.password.length > 0) {
        alert(this.state.errors.password);
        return;
      }
      alert('Please fill all fields correctly.');
    }
  }

  render() {
    const { errors } = this.state;

    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <h1 className="main-heading">Register Here!!!</h1>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="fullName">Name:</label>
              <input
                type="text"
                name="fullName"
                value={this.state.fullName}
                onChange={this.handleChange}
                noValidate
              />
              {errors.fullName.length > 0 && (
                <span className="error">{errors.fullName}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                noValidate
              />
              {errors.email.length > 0 && (
                <span className="error">{errors.email}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
                noValidate
              />
              {errors.password.length > 0 && (
                <span className="error">{errors.password}</span>
              )}
            </div>

            <div className="submit">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Register;