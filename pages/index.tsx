import React from 'react';
import { NextPage } from 'next';
import Link from 'next/link';
import axios from 'axios';
import styled from 'styled-components';
import Layout from './components/MyLayout';

const StyledButton = styled.button`
  margin: 30px auto;
  width: 150px;
  color: #fff;
  background: #090a0b;
  padding: 10px;
  border-radius: 10px;
  &:hover {
    cursor: pointer;
  }
`;

const StyledAnchor = styled.a`
  text-decoration: none;
  &:hover {
    cursor: pointer;
  }
`;

const StyledMain = styled.main`
  padding: 20px;
  background: #f2f2f2;
`;

const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

const StyledLi = styled.li`
  padding: 10px;
  margin: 10px;
  font-size: 1.5rem;
  font-weight: 600;
  list-style: none;
  border: 1px solid;
  border-radius: 10px;
`;

const StyledP = styled.p`
  font-size: 1rem
`;

interface Props {
  posts: Post[];
}

const Index: NextPage<Props> = ({ posts }) => (
  <Layout>
    <StyledMain>
      <Link href="/posts/new">
        <StyledButton>Add new post</StyledButton>
      </Link>
      <h1>Latests posts</h1>
      <StyledUl>
        {posts.map(post => (
          <StyledLi key={post.id}>
            <Link href="/posts/[id]" as={`/posts/${post.id}`}>
              <StyledAnchor>{post.title}</StyledAnchor>
            </Link>
            <StyledP>{post.body}</StyledP>
          </StyledLi>
        ))}
      </StyledUl>
    </StyledMain>
  </Layout>
);

Index.getInitialProps = async () => {
  const res = await axios('https://simple-blog-api.crew.red/posts');
  const data = await res.data;

  return {
    posts: [...data].reverse(),
  };
};

export default Index;
