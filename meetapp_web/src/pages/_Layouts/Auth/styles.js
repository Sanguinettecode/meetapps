import styled from 'styled-components';

import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 50px;

    input {
      height: 50px;
      border-radius: 4px;
      border: none;
      padding: 20px;
      color: #fff;
      background: rgba(0, 0, 0, 0.2) !important;
      margin-bottom: 10px;
      font-size: 16px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.5);
      }
    }
    button {
      height: 50px;
      border-radius: 4px;
      border: none;
      color: #fff;
      background: #f94d6a;
      font-size: 18px;
      font-weight: bold;

      transition: background 0.2s;
      &:hover {
        background: ${darken(0.1, '#f94d6a')};
      }
    }
  }
  a {
    text-decoration: none;
    display: block;
    font-size: 16px;
    color: rgba(255, 255, 255, 0.8);
    margin-top: 20px;
    transition: color 0.2s;
    &:hover {
      color: ${darken(0.3, '#fff')};
    }
  }
`;
