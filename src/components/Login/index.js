import React, { Component } from 'react';

const styles = {
  container: {
    backgroundColor: '#E0E0E0'
  },
  form: {
    width: '250px',
  },
  heading: {
    fontSize: '3em',
    color: '#2A255C',
  },
  subHeading: {
    fontSize: '0.875em',
    marginBottom: '26px'
  },
  infoLink: {
    fontSize: '0.625em',
    color: '#4F4F4F',
    marginBottom: '26px',
    lineHeight: '24px'
  },
  submit: {
    backgroundColor: '#603BCA',
    color: '#fff',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    marginBottom: '0.313em'
  }
};

class Login extends Component {
  render() {
    return (
      <section className="flex flex-grow flex-center" style={styles.container}>
        <form className="text-center" style={styles.form}>
          <h2 className="text-uppercase margin-none" style={styles.heading}>Katha</h2>
          <p className="margin-none" style={styles.subHeading}>Come write in</p>
          <input className="width-full block" type="email" placeholder="Email address" />
          <input className="width-full block" type="password" placeholder="Password" />
          <a className="block" style={{...styles.infoLink, ...styles.forgotPassword}} href="#">Forgot your password?</a>
          <button className="width-full block" style={styles.submit}>Log In</button>
          <a className="block" style={{...styles.infoLink, ...styles.register}} href="#">Don't have an account?</a>
        </form>
      </section>
    );
  }
}

export default Login;