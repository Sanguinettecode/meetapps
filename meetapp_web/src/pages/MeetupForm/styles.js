import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 50px auto 0 auto;
  display: flex;
  flex-direction: column;
  padding-bottom: 50px;

  form {
    display: flex;
    flex-direction: column;
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
        font-size: 14px;
        color: rgba(255, 255, 255, 0.5);
      }
    }

    textarea {
      border-radius: 4px;
      border: none;
      padding: 20px;
      color: rgba(255, 255, 255, 0.5);
      background: rgba(0, 0, 0, 0.2) !important;
      margin-bottom: 10px;
      font-size: 16px;
    }
    div {
      display: flex;
      justify-content: flex-end;
      button {
        border: none;
        max-width: 180px;
        border-radius: 4px;
        background: #f94d6a;
        padding: 12px 30px;
        color: #fff;
        font-size: 14px;
        font-weight: bold;
        text-decoration: none;
        display: flex;
        align-items: center;
        margin-top: 20px;

        svg {
          margin-right: 10px;
        }

        &:hover {
          background: ${darken(0.1, '#F94D6A')};
        }
      }
    }
  }
`;
