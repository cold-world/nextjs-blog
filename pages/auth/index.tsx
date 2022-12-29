import Head from 'next/head';
import React, { useContext } from 'react';
import { AuthForm, HeroBanner } from '../../components';
import StatusContext from '../../context/context';

type Props = {};

const AuthPage = (props: Props) => {
  const {isLoginOrSignUp} = useContext(StatusContext);
  return (
    <>
      <Head>
        <title>Log in or Sign up</title>
      </Head>
      <HeroBanner title={isLoginOrSignUp === 'login' ? 'Login' : 'SignUp'} description='Please login or sign up to write a post' />
      <AuthForm />
    </>
  );
};

export default AuthPage;
