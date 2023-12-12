import React from 'react';
import LoginForm from '../layout/LoginForm';

interface LoginPageProps {
    setUsername: React.Dispatch<React.SetStateAction<string | null>>;
  }
  
  function Login({ setUsername }: LoginPageProps) {
    return (
      <div>
        <LoginForm setUsername={setUsername} />
      </div>
    );
  }
  
  export default Login;