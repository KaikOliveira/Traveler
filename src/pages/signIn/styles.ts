/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { lighten } from 'polished';

import img from '../../assets/images/Image.png';

export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 700px;
  background: #F5F8FA;
`;

export const Background = styled.div`
  flex: 1;
  background: url(${img}) no-repeat center;
  background-size: cover;
`;

export const Content = styled.div`
  width: 420px;

  h1 {
    color: #123952;
    font-size: 36px;
    font-weight: 600;

    margin-bottom: 44px;
  }
`;

export const Button = styled.button`
  width: 416px;
  height: 72px;
  background: #F25D27;
  border-radius: 10px;
  border: 0 none;
  margin-top: 80px;
  font-size: 18px;
  font-weight: 500;
  color: #fff;
  transition: all 0.3s ease-in;
  cursor: pointer;

  &:hover {
    background: ${lighten(0.2, '#F25D27')};
  }
`;
