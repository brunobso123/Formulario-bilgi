import { Link } from "react-router-dom";
import { useState } from "react";
import { LayoutComponents } from "../../components/LayoutComponents";

import jpIMG from "../../assets/logo.png";

export const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  return (
    <LayoutComponents>
      <form className="login-form">
        <span className="login-form-tittle">Registre-se</span>
        <span className="login-form-tittle">
          <img src={jpIMG} alt="logo" />
        </span>

        <div className="wrap-input">
          <input
            className={name !== "" ? "has-val input" : "input"}
            type="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <span className="focus-input" data-placeholder="Nome"></span>
        </div>

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

        <div className="wrap-input">
          <input
            className={newPassword !== "" ? "has-val input" : "input"}
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />

          <span
            className="focus-input"
            data-placeholder="Confirmar Senha"
          ></span>
        </div>

        <div className="container-login-form-btn">
          <button className="login-form-btn" type="submit">
            Cadastrar
          </button>
        </div>

        <div className="text-center">
          <span className="txt1">Já possui cadastro?</span>
          <Link to="/login" className="txt2">
            Acessar Conta.
          </Link>
        </div>
      </form>
    </LayoutComponents>
  );
};
