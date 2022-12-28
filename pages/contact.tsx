import React from 'react';
import { HeroBanner } from '../components';
import { ContactForm } from '../components/contact/contact-form';
import Head from 'next/head';

type ContactPageProps = {};

const ContactPage = (props: ContactPageProps) => {
  return (
    <>
    <Head>
      <title>Contact us</title>
    </Head>
      <HeroBanner title='Contact us' description='Wanna something to say?' />
      <ContactForm />
    </>
  );
};

export default ContactPage;
