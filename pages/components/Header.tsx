import React, { FC } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const linkStyle = {
  marginRight: 15,
};

const StyledHeader = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  display: flex;
  color: #fff;
  background: #090a0b;
  width: 100%;
  height: 50px;
  align-items: center;
  padding: 20px;
`;

const StyledAnchor = styled.a`
  text-decoration: none;
  &:hover {
    cursor: pointer;
    color: #e6e6e6;
  }
`;

const Header: FC = () => (
  <StyledHeader>
    <Link href="/">
      <StyledAnchor style={linkStyle}>Home</StyledAnchor>
    </Link>
  </StyledHeader>
);

export default Header;
