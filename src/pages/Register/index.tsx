import { useForm, SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { LayoutComponents } from "../../components/LayoutComponents";

import jpIMG from "../../assets/logo.png";

type FormData = {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
};

const newCycleFormValidationSchema = z
  .object({
    name: z.string().min(1, "Por favor, forneça um nome válido!"),
    email: z.string().email("Por favor, forneça um e-mail válido!"),
    password: z.string().min(6, "A senha deve ter no mínimo 6 caracteres"),
    passwordConfirm: z.string(),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: "As senhas não correspondem",
  });

export const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { isValid },
    getValues,
  } = useForm<FormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  return (
    <LayoutComponents>
      <form onSubmit={handleSubmit(onSubmit)} className="login-form">
        <span className="login-form-tittle">Cadastre-se</span>
        <span className="login-form-tittle">
          <img src={jpIMG} alt="logo" />
        </span>

        <div className="wrap-input">
          <input
            className={`input ${getValues("name") ? "has-val" : ""}`}
            type="text"
            {...register("name")}
          />
          <span className="focus-input" data-placeholder="Nome"></span>
        </div>

        <div className="wrap-input">
          <input
            className={`input ${getValues("email") ? "has-val" : ""}`}
            type="email"
            {...register("email")}
            autoComplete="username" 
          />
          <span className="focus-input" data-placeholder="E-mail"></span>
        </div>

        <div className="wrap-input">
          <input
            className={`input ${getValues("password") ? "has-val" : ""}`}
            type="password"
            {...register("password")}
            autoComplete="new-password"
          />
          <span className="focus-input" data-placeholder="Senha"></span>
        </div>

        <div className="wrap-input">
          <input
            className={`input ${getValues("passwordConfirm") ? "has-val" : ""}`}
            type="password"
            {...register("passwordConfirm")}
            autoComplete="new-password"
          />
          <span
            className="focus-input"
            data-placeholder="Confirmar Senha"
          ></span>
        </div>

        <div className="container-login-form-btn">
          <button className="login-form-btn" type="submit" disabled={!isValid}>
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
