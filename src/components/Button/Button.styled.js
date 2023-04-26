import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const BtnHome = styled(NavLink)`
  padding: 14px 28px;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.22;
  text-transform: uppercase;
  color: black;
  background-color: #2196f3;
  border: none;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  text-decoration: none;
  cursor: pointer;
  &.isSelected {
    background-color: rgb(243 129 7);
  }
  &:hover,
  &:focus {
    background-color: rgb(243 129 7);
  }
`;

export const BtnBox = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-top: 48px;
`;

export const Box = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 48px;
`;
export const Btn = styled.button`
  padding: 14px 28px;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.22;
  text-transform: uppercase;
  color: black;
  background-color: #2196f3;
  border: none;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  cursor: pointer;
  &.isSelected {
    background-color: rgb(243 129 7);
  }
  &:hover,
  &:focus {
    background-color: rgb(243 129 7);
  }
`;
