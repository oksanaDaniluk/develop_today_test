import React, { useState, FormEvent } from 'react';
import { NextPage } from 'next';
import axios from 'axios';
import styled from 'styled-components';
import Layout from '../components/MyLayout';

const StyledH2 = styled.h2`
  text-align: center;
`;

const StyledForm = styled.form`
  display: flex; 
  align-items: center;
  flex-direction: column;
  & .form__label_input input {
    width: 500px;
    height: 40px;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid grey;
    outline: none;
    margin 10px;
  }
  & .form__label_textarea textarea {
    width: 500px;
    height: 100px;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid grey;
    outline: none;
    resize: none;
  }
  & .form__button {
    width: 200px;
    color: #fff;
    background: #090a0b;
    padding: 10px;
    border-radius: 10px;
    &:hover {
      cursor: pointer;
      opacity: 1,
    }
  }
  & .form__error-container {
    heigth: 30px;
    display: block;
  }
`;

const New: NextPage = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [error, setError] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setTitle(value);
  };

  const handleTextareaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.target;

    setBody(value);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();

    if (title.trim() && body.trim()) {
      await axios.post('https://simple-blog-api.crew.red/posts', { title, body });
      setTitle('');
      setBody('');
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <Layout>
      <StyledH2>New post</StyledH2>
      <StyledForm onSubmit={handleSubmit}>
        <label htmlFor="title-input" className="form__label_input">
          <input
            autoComplete="off"
            id="title-input"
            className="new-post"
            placeholder="Enter title"
            onChange={handleInputChange}
            value={title}
          />
        </label>
        <label htmlFor="body-texarea" className="form__label_textarea">
          <textarea
            className="new-post"
            placeholder="Write your post"
            onChange={handleTextareaChange}
            value={body}
          />
        </label>
        <div className="form__error-container">
          {error ? (<p className="error-text">please fill in all fields</p>) : (<p className="error-text"> </p>)}
        </div>
        <button type="submit" className="form__button">
          add
        </button>
      </StyledForm>
    </Layout>
  );
};


export default New;
