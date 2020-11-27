import React from 'react';
import logo from '../assets/images/logo.svg';

function Login() {

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit');
  };

  return (
    <div className='login-page'>
      <div className='login-container'>
        <div className='login-content'>
          <img className='login-logo' src={logo} alt='logo'/>
          <h2 className='login-title'>Log in</h2>
          <p className='login-subtitle'>Enter your details below</p>
          <form className='login-form' onSubmit={handleSubmit}>
            <label className='login-form__label'>
              Email:
              <input
                className='login-form__input'
                type='email'
                onKeyPress={(e => {
                  if (e.key === 'Enter') {
                    handleSubmit(e);
                  }
                })}
              />
            </label>
            <label className='login-form__label'>
              Password:
              <input
                className='login-form__input'
                type='password'
                onKeyPress={(e => {
                  if (e.key === 'Enter') {
                    handleSubmit(e);
                  }
                })}
              />
            </label>
            <button className='button button--primary' title='Log in'>Log in</button>
          </form>
        </div>
        <div className='login-signup'>
          <p className='login-signup__text'>Don’t have an account?</p>
          <a className='login-signup__link' href='https://google.lt' title='Sign Up'>Sign Up</a>
        </div>
      </div>
    </div>
  );
}

export default Login;
