import React, { ChangeEvent, FormEvent } from 'react';
import styles from './write-post-form.module.css';
import { useState, useContext } from 'react';
import { Button } from '../ui/button';
import { Post, sendPost } from '../../lib/post-utils';
import StatusContext from '../../context/context';

export const WritePostForm = () => {
  const { setStatus } = useContext(StatusContext);
  const [post, setPost] = useState<Post>({
    name: '',
    title: '',
    image: '',
    avatar: '',
    text: '',
    date: '',
  });
  const handleChange = (e: ChangeEvent<HTMLInputElement & HTMLTextAreaElement>): void => {
    setPost({
      ...post,
      [e.target.name]: e.target.value,
      date: new Date().toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
    });
  };
  const handleSubmitForm = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('pending');
    try {
      await sendPost(post);
      setStatus('success');
      setPost({
        name: '',
        title: '',
        image: '',
        avatar: '',
        text: '',
        date: '',
      });
    } catch (error) {
      setStatus('error');
    }
  };
  return (
    <form onSubmit={handleSubmitForm} className={styles.form}>
      <h3>Got something to say?</h3>
      <p>Feel free to speak your mind! We're here to listen.</p>
      <input
        onChange={handleChange}
        value={post.name}
        required={true}
        name='name'
        type='text'
        placeholder='Your name'
      />
      <input
        onChange={handleChange}
        value={post.title}
        required={true}
        name='title'
        type='text'
        placeholder='Post title'
      />
      <input
        onChange={handleChange}
        value={post.image}
        name='image'
        required={true}
        type='url'
        placeholder='Post image URL (supports content only from Unsplash.com)'
      />
      <input
        onChange={handleChange}
        value={post.avatar}
        name='avatar'
        required={true}
        type='url'
        placeholder='Your avatar URL (supports content only from Unsplash.com)'
      />
      <textarea
        onChange={handleChange}
        value={post.text}
        rows={3}
        name='text'
        style={{ resize: 'none' }}
        required={true}
        placeholder='Post text'
      />
      <Button name='Submit' />
    </form>
  );
};
