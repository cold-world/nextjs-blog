import React, { ChangeEvent, FormEvent } from 'react';
import { Button } from '../ui/button';
import styles from './auth-form.module.css';
import { useContext, useState } from 'react';
import StatusContext from '../../context/context';
import { User } from '../../pages/api/auth/signup';
import { signUpHelper } from '../../lib/auth';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';

export const AuthForm = () => {
  const router = useRouter();
  const { setStatus, setisLoginOrSignUp, isLoginOrSignUp } = useContext(StatusContext);
  const [user, setUser] = useState<User>({
    email: '',
    password: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement & HTMLTextAreaElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('pending');
    if (isLoginOrSignUp === 'login') {
      const result = await signIn('credentials', {
        redirect: false,
        email: user.email,
        password: user.password,
      });
      if (result?.ok) {
        setStatus('success');
        router.push('/write-a-post');
        return;
      }
      if (!result?.ok) {
        setStatus('error');
        return;
      }
    }
    try {
      signUpHelper(user);
      setStatus('success');
      setUser({
        email: '',
        password: '',
      });
      setisLoginOrSignUp('login');
    } catch (error) {
      setStatus('error');
    }
  };
  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmitForm}>
        <input
          onChange={handleChange}
          name='email'
          required={true}
          type='email'
          placeholder='Your email'
          value={user.email}
        />
        <input
          onChange={handleChange}
          name='password'
          required={true}
          minLength={6}
          type='password'
          placeholder='Your password'
          value={user.password}
        />
        <Button name='Submit' />
      </form>
      {isLoginOrSignUp === 'login' ? (
        <button onClick={() => setisLoginOrSignUp('signup')} className={styles.button}>
          Create new account
        </button>
      ) : (
        <button onClick={() => setisLoginOrSignUp('login')} className={styles.button}>
          or Login if you have one
        </button>
      )}
    </div>
  );
};
