import "../assets/login.css";
import { FormEvent } from "react";
import { fetchData } from "../utils/utils";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

type LoginPageProps = {
  handleAuthenticated: () => void;
};

function LoginPage({ handleAuthenticated }: LoginPageProps) {
  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    const req = await fetchData("auth/login/", { body: data, method: "POST" });
    if (req.hasOwnProperty("token")) {
      localStorage.token = req.token;
      handleAuthenticated();
    } else {
      MySwal.fire("Error!", req.message, "error");
    }
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
