import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  padding: 24px;
  border-bottom: 1px solid transparent;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
export const Container = styled.div`
  width: 100%;
  margin: 0;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  @media screen and (min-width: 480px) {
    width: 480px;
    padding-left: 10px;
    padding-right: 10px;
  }
  @media screen and (min-width: 768px) {
    width: 768px;
    padding-left: 15px;
    padding-right: 15px;
  }
  @media screen and (min-width: 1280px) {
    width: 1440px;
    padding-left: 20px;
    padding-right: 20px;
  }
`;

export const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
`;

export const LinkStyled = styled(NavLink)`
  font-size: 22px;
  font-weight: 900;
  text-transform: uppercase;
  text-decoration: none;
  color: #212121;
  &.active {
    color: rgb(243 129 7);
  }
  &:hover {
    text-decoration: underline;
  }
`;
