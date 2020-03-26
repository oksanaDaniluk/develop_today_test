import React, { useState } from 'react';
import axios from 'axios';
import { NextPage } from 'next';
import Link from 'next/link';
import styled from 'styled-components';
import Layout from '../components/MyLayout';

const StyledButton = styled.button`
  margin: 30px auto;
  width: 100px;
  color: #fff;
  background: #090a0b;
  padding: 10px;
  border-radius: 10px;
`;

const StyledPostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

const StyledPost = styled.div`
  padding: 10px;
  margin: 20px;
  font-size: 1.5rem;
  font-weight: 600;
  list-style: none;
  border: 1px solid;
  border-radius: 10px;
`;

interface Props {
  post: Post;
}

const Post: NextPage<Props> = ({ post }) => {
  const [isDeleted, setIsDeleted] = useState(false);

  const handleDelete = async () => {
    await axios.delete(`https://simple-blog-api.crew.red/posts/${post.id}`);
    setIsDeleted(true);
  };

  return (
    <StyledPostWrapper>
      {isDeleted
        ? (
          <Layout>
            <Link href="/">
              <StyledButton>
                Back
              </StyledButton>
            </Link>
          </Layout>
        )
        : (
          <Layout>
            <StyledPost>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
              <StyledButton
                type="button"
                onClick={handleDelete}
              >
                remove post
              </StyledButton>
            </StyledPost>
          </Layout>
        )}
    </StyledPostWrapper>
  );
};

Post.getInitialProps = async (context) => {
  const { id } = context.query;
  const response = await axios.get(`https://simple-blog-api.crew.red/posts/${id}`);
  const { data } = response;

  return {
    post: data,
  };
};

export default Post;
