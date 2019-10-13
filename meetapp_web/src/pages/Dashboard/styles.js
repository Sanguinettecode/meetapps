import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 50px auto;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    strong {
      font-size: 32px;
      color: #fff;
    }

    button {
      border: none;
      border-radius: 4px;
      background: #f94d6a;
      padding: 12px 35px;
      color: #fff;
      font-size: 16px;
      font-weight: bold;
      text-decoration: none;

      &:hover {
        background: ${darken(0.1, '#F94D6A')};
      }
    }
  }

  ul {
    flex: 1;
    margin-top: 50px;
    list-style: none;
  }
`;
export const MeetupItem = styled.button`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  background: rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
  border: none;
  border-radius: 4px;

  &:hover {
    background: ${darken(0.2, '#0002')};
  }

  strong {
    padding: 0 30px;
    text-align: left;
    color: #fff;
    font-size: 16px;
  }
  p {
    padding: 0 94px;
    text-align: right;
    font-size: 14px;
    color: rgba(255, 255, 255, 0.6);
  }
`;
