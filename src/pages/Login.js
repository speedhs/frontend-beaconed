// LoginPage.js
import React from 'react';
import Button from '../components/Button';
import InputField from '../components/InputField';

const Login = () => {
  return (
    <div>
      <h1>Login</h1>
      <form>
        <InputField type="text" placeholder="Username" />
        <InputField type="password" placeholder="Password" />
        <Button>Login</Button>
      </form>
    </div>
  );
};

export default Login;
