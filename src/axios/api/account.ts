import { customAxios } from "../index";

interface loginProp {
  name: string;
  password: string;
  email: string;
}
const accountLogin = ({ name, password, email }: any) =>
  customAxios.post(`https://robby-user.herokuapp.com/login`, {
    name,
    password,
    email,
  });

const checkLogin = ({ name, password, email }: any) =>
  customAxios.post(`https://robby-user.herokuapp.com/check`, {});

export { accountLogin, checkLogin };
