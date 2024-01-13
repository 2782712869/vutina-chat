import AuthStyle from './auth-style';
import logo from '@src/assets/Images/logo.png';
import {
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Link,
} from '@mui/material';

function Logo() {
  return (
    <div className="logo">
      <img src={logo} alt="logo" />
      <span>VUTINA CHAT</span>
    </div>
  );
}

function AccountForm() {
  return (
    <form>
      <div className="info">
        <label htmlFor="username">账户</label>
        <TextField
          className="input"
          type="text"
          id="username"
          label="Username"
          autoComplete="off"
        />
      </div>
      <div className="info">
        <label htmlFor="telephone">电话</label>
        <TextField
          className="input"
          type="text"
          id="telephone"
          label="Telephone"
          autoComplete="off"
        />
      </div>
      <div className="info">
        <label htmlFor="password">密码</label>
        <TextField
          className="input"
          type="password"
          id="password"
          label="Password"
          autoComplete="off"
        />
      </div>
      <div className="tips">
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="记住登录状态"
        />
        <Link>忘记密码?</Link>
      </div>
      <Button className="login" variant="contained">
        登入\自动注册
      </Button>
    </form>
  );
}

function Account() {
  return (
    <div className="account">
      <h2>欢迎来到vutina chat</h2>
      <h3>登入您的账户</h3>
      <AccountForm />
    </div>
  );
}

export default function Auth() {
  return (
    <AuthStyle>
      <div className="auth">
        <Logo />
        <Account />
      </div>
    </AuthStyle>
  );
}
