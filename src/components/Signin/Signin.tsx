// react-router-dom
import { useLocation, useNavigate } from "react-router-dom";

// react
import { FormEvent, useContext } from "react";

// components
import Input from "../Input/Input";

// providers
import { AuthContext } from "../../providers/Auth/Auth";

// styles
import "./SignIn.css";

export default function Signin() {
  const { signIn } = useContext(AuthContext);

  const navigate = useNavigate();
  const locations = useLocation();

  function onSubmit(formEvent: FormEvent<HTMLFormElement>) {
    formEvent.preventDefault();

    const formData = new FormData(formEvent.currentTarget);

    const userEmail = formData.get("email");

    userEmail &&
      signIn(userEmail.toString(), () => {
        navigate(locations.state?.from ?? "/");
      });
  }

  return (
    <div className="signIn">
      <h3>Login</h3>
      <form onSubmit={(e) => onSubmit(e)} className={"inputsForm"}>
        <div>
          <span>Email</span>
          <Input
            type={"email"}
            name={"email"}
            id={"loginEmail"}
            placeholder={"Email"}
          />
        </div>
        <div>
          <span>Пароль</span>
          <Input
            name={"password"}
            type={"password"}
            id={"loginPassword"}
            placeholder={"Пароль"}
          />
        </div>
        <button type="submit">Войти</button>
      </form>
    </div>
  );
}
