import AuthStyle from './auth-style';
import logo from '@src/assets/Images/logo.png';
import {
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Link,
} from '@mui/material';
import { authTelephone, authPassword } from "./verify";
import { ChangeEvent, FormEvent } from 'react';
import { useImmer } from 'use-immer';

function Logo() {
  return (
    <div className="logo">
      <img src={logo} alt="logo" />
      <span>VUTINA CHAT</span>
    </div>
  );
}

function AccountForm() {
  type FormDataType = {
    telephone: string;
    password: string;
  };
  const [formData, setFormData] = useImmer<FormDataType>({
    telephone: "",
    password: "",
  });

  const validateField = (fieldName: keyof FormDataType, value: string) => {
    switch (fieldName) {
      case "telephone":
        return authTelephone(value);
      case "password":
        return authPassword(value);
      default:
        return true;
    }
  };

  const [fieldErrors, setFieldErrors] = useImmer<
    Record<keyof FormDataType, boolean>
  >({
    telephone: false,
    password: false,
  });

  const handleBlur = (fieldName: keyof FormDataType) => {
    const value = formData[fieldName];
    if (value.trim() === "") {
      setFieldErrors((draft) => {
        draft[fieldName] = false;
      });
      return;
    }
    const isValid = validateField(fieldName, value);
    setFieldErrors((draft) => {
      draft[fieldName] = !isValid;
    });
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((draft) => {
      draft[name as keyof FormDataType] = value;
    });
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const isTelephoneValid = authTelephone(formData.telephone);
    const isPasswordValid = authPassword(formData.password);

    if (isTelephoneValid && isPasswordValid) {
      console.log("1");
    } else {
      console.log("2");
    }
  };

  type InputType = {
    label: "账户" | "电话" | "密码";
    id: keyof FormDataType;
    type: "text" | "password";
  };

  const inputFields: InputType[] = [
    { label: "电话", id: "telephone", type: "text" },
    { label: "密码", id: "password", type: "password" },
  ];

  return (
    <form onSubmit={handleSubmit}>
      {inputFields.map((field) => (
        <div key={field.id} className="info">
          <label htmlFor={field.id}>{field.label}</label>
          <TextField
            error={fieldErrors[field.id]}
            helperText={fieldErrors[field.id] ? "输入不合法" : ""}
            className="input"
            type={field.type}
            id={field.id}
            label={field.id}
            autoComplete="off"
            name={field.id}
            value={formData[field.id]}
            onChange={handleChange}
            onBlur={() => handleBlur(field.id)}
          />
        </div>
      ))}
      <div className="tips">
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="记住登录状态"
        />
        <Link>忘记密码?</Link>
      </div>
      <Button type="submit" className="login" variant="contained">
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
