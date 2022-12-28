import React, { FormEvent } from 'react';
import { Button } from '../ui/button';
import styles from './contact-form.module.css';
import { useRef, useContext } from 'react';
import StatusContext from '../../context/context';
import { Contact, sendContacts } from '../../lib/contact-utils';

export const ContactForm = () => {
  const { setStatus } = useContext(StatusContext);
  const inputNameRef = useRef<HTMLInputElement | null>(null);
  const inputEmailRef = useRef<HTMLInputElement | null>(null);
  const inputTextRef = useRef<HTMLTextAreaElement | null>(null);

  const handleSubmitForm = async (e: FormEvent) => {
    e.preventDefault();

    const message: Contact = {
      name: inputNameRef.current!?.value,
      email: inputEmailRef.current!?.value,
      text: inputTextRef.current!?.value,
    };
    setStatus('pending');
    try {
      await sendContacts(message);
      setStatus('success');
      inputNameRef.current!.value = '';
      inputEmailRef.current!.value = '';
      inputTextRef.current!.value = '';
    } catch (error) {
      setStatus('error');
    }
  };
  return (
    <form onSubmit={handleSubmitForm} className={styles.form}>
      <h3>Got ideas? Let's team up.</h3>
      <p>Tell us more about yourself and what you're got on mind.</p>
      <input ref={inputNameRef} required={true} type='text' placeholder='Your name' />
      <input ref={inputEmailRef} required={true} type='email' placeholder='Your email' />
      <textarea
        ref={inputTextRef}
        minLength={10}
        rows={5}
        style={{ resize: 'none' }}
        required={true}
        placeholder='Your text'
      />
      <Button name='Submit' />
    </form>
  );
};
