import styled from 'styled-components';

export const Container = styled.div`
  background: rgba(0, 0, 0, 0.3);
  width: 100%;
  padding: 0 30px;
`;
export const Content = styled.div`
  max-width: 900px;
  margin: 0 auto;
  height: 89px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 34px;
    height: 34px;
  }
  aside {
    display: flex;
    align-items: center;
  }
`;
export const Profile = styled.div`
  display: flex;

  div {
    text-align: right;
    margin-right: 30px;

    strong {
      color: #fff;
      display: block;
      font-size: 14px;
    }
    a {
      color: #999;
      display: block;
      text-decoration: none;
      margin-top: 8px;
    }
  }
  button {
    height: 42px;
    background: #d44059;
    border: none;
    border-radius: 4px;
    padding: 12px 20px;
    color: #fff;
    font-weight: bold;
    font-size: 16px;
  }
`;
