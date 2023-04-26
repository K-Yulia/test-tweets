import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, List, LinkStyled, Container } from './Layout.styled';

export const Layout = () => {
  return (
    <>
      <Header>
        <Container>
          <List>
            <li>
              <LinkStyled to="/">Home</LinkStyled>
            </li>
            <li>
              <LinkStyled to="/tweets">Tweets</LinkStyled>
            </li>
          </List>
        </Container>
      </Header>
      <main>
        <Container>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </Container>
      </main>
    </>
  );
};
