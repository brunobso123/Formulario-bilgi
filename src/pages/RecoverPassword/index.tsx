import { Link } from "react-router-dom";
import { useState } from "react";
import jpIMG from "../../assets/logo.png";
import { LayoutComponents } from "../../components/LayoutComponents";

export const Recover = () => {
  const [email, setEmail] = useState("");
  
  return (
    <LayoutComponents>
      <form className="login-form">
        <span className="login-form-tittle">Recuperar Senha</span>
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
        <div className="container-login-form-btn">
          <button className="login-form-btn" type="submit">
            Enviar
          </button>
        </div>
        <div className="text-center">
          <span className="txt1">Já possui Conta?</span>
          <Link to="/login" className="txt2">
            Entrar.
          </Link>
        </div>
      </form>
    </LayoutComponents>
  );
};
