import styled from 'styled-components';
import { darken } from 'polished';

import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 50px auto 0 auto;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    strong {
      font-size: 32px;
      color: #fff;
    }
    nav {
      display: flex;
    }
  }
`;

export const Action = styled(Link)`
  border: none;
  border-radius: 4px;
  background: ${props => (props.edit ? '#4DBAF9' : '#f94d6a')};
  padding: 12px 35px;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  margin-left: 15px;
  text-decoration: none;
  display: flex;
  align-items: center;

  svg {
    margin-right: 10px;
  }

  &:hover {
    background: ${props =>
      props.edit ? darken(0.1, '#4DBAF9') : darken(0.1, '#F94D6A')};
  }
`;
export const MeetupDetails = styled.div`
  margin-top: 50px;
  img {
    height: 300px;
    width: 100%;
    border-radius: 4px;
  }
  p {
    margin: 25px 0 30px 0;
    display: block;
    width: 100%;
    color: #fff;
    font-size: 16px;
    line-height: 32px;
  }
  div {
    display: flex;
    justify-content: flex-start;
    width: 70%;
    div {
      display: flex;
      align-items: center;
      justify-content: center;
      svg {
        margin-top: -5px;
        font-size: 16px;
      }
      p {
        font-size: 16px;
        color: rgba(255, 255, 255, 0.6);
        display: block;
        padding: 0 20px;
      }
    }
  }
`;
