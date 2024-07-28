import "../assets/login.css";
import { FormEvent } from "react";
import { login } from "../services/api";
import { authStatusStore } from "../store/authStatusStore";

function LoginPage() {
  const setAuthStatus = authStatusStore((state) => state.setStatus);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const isLogin = await login(data);
    if (isLogin) setAuthStatus("authenticated");
  }

  return (
    <>
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>

      <form onSubmit={handleSubmit}>
        <h3>Login </h3>
        <label htmlFor="username">Nombre de Usuario</label>
        <input
          type="text"
          placeholder="Nombre de usuario"
          id="username"
          name="username"
          required
        />
        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          placeholder="contraseña"
          id="password"
          name="password"
          required
        />
        <button>Iniciar Sesión</button>
      </form>
    </>
  );
}

export default LoginPage;
