import React, { FC } from 'react';
import styled from 'styled-components';
import Header from './Header';

const layoutStyle = {
  margin: 0,
  padding: 0,
};

const StyledLayout = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

interface Props {
  children: React.ReactNode;
}

const Layout: FC<Props> = props => (
  <StyledLayout style={layoutStyle}>
    <Header />
    {props.children}
  </StyledLayout>
);

export default Layout;
