import { styled, css } from 'styled-components';

const logoStyle = css`
  .logo {
    width: 40%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    box-sizing: border-box;

    img {
      width: 250px;
      height: auto;
      filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.15));
    }

    span {
      font-size: 30px;
      font-weight: 500;
      margin-top: 20px;
      color: #1976d2;
      text-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    }
  }
`;

const accountFormStyle = css`
  form {
    display: flex;
    width: 100%;
    flex-direction: column;

    .info {
      width: 80%;
      margin-bottom: 15px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .input {
        width: 90%;
        height: 70px;
      }
    }

    .tips {
      font-size: 14px;

      .forget {
        cursor: pointer;
        color: #1976d2;
      }
    }

    .login {
      width: 40%;
      height: 50px;
      margin: 15px 0;
      font-size: 16px;
      letter-spacing: 0.1em;
      background-color: #1976d2;
      color: #fff;
      border: none;
      border-radius: 4px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      cursor: pointer;

      &:hover {
        background-color: #1565c0;
      }
    }
  }
`;

const accountStyle = css`
  .account {
    width: 60%;
    padding: 0 25px;

    h3 {
      margin: 20px 0;
      font-size: 24px;
    }

    ${accountFormStyle};
  }
`;

const authStyle = css`
  .auth {
    width: 1180px;
    height: 90vh;
    padding-top: 35px;
    background: linear-gradient(to bottom right, #f0f0f0, #dfe6e9);
    border-radius: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
    display: flex;
    color: #37474f;
    font-family: 'Roboto', sans-serif;

    ${logoStyle};
    ${accountStyle};
  }
`;

const AuthStyle = styled.div`
  ${authStyle};
`;

export default AuthStyle;
