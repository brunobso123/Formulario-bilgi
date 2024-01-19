import { Link } from "react-router-dom";
import { useState } from "react";
import jpIMG from "../../assets/logo.png";
import { LayoutComponents } from "../../components/LayoutComponents";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  return (
    <LayoutComponents>
      <form className="login-form">
        <span className="login-form-tittle">Bem-vindo</span>
        <span className="login-form-tittle">
          <img src={jpIMG} alt="logo" />
        </span>

        <div className="wrap-input">
          <input
            className={email !== "" ? "has-val input" : "input"}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <span className="focus-input" data-placeholder="E-mail"></span>
        </div>

        <div className="wrap-input">
          <input
            className={password !== "" ? "has-val input" : "input"}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <span className="focus-input" data-placeholder="Senha"></span>
        </div>

        <div className="container-login-form-btn">
          <button className="login-form-btn">Login</button>
        </div>
        <div className="text-center">
          <span className="txt1"></span>
          <Link to="/register" className="txt4">
            Cadastre-se
          </Link>
          <Link to="/recover" className="txt3">
            Esqueci minha senha.
          </Link>
        </div>
      </form>
    </LayoutComponents>
  );
};
