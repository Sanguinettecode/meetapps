import styled from 'styled-components';

export const Container = styled.div`
  align-self: center;
  margin-bottom: 30px;

  label {
    display: flex;
    flex-direction: column;
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }

    img {
      height: 300px;
      width: 900px;
      border-radius: 4px;
    }
    input {
      display: none;
    }
    div {
      height: 300px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: absolute;
      text-align: center;
      align-self: center;
      color: #fff;
      font-size: 16px;

      span {
        margin-top: 10px;
      }
    }
  }
`;
