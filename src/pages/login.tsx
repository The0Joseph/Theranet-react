import "../assets/login.css";
import { FormEvent, useEffect } from "react";
import { login } from "../services/api";
import { authStatusStore } from "../store/authStatusStore";
import { FocusContext, useFocusable } from "@noriginmedia/norigin-spatial-navigation";
import InputForm from "../components/inputForm";
import ButtonForm from "../components/buttonForm";


function LoginPage() {
  const setAuthStatus = authStatusStore((state) => state.setStatus);

  const { ref, focusSelf, focusKey } = useFocusable({
    saveLastFocusedChild: false,
    trackChildren: true,
    autoRestoreFocus: true,
    isFocusBoundary: false,
    focusKey: "loginform",
    forceFocus:false,
    onArrowPress: () => true,
  });

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const isLogin = await login(data);
    if (isLogin) setAuthStatus("authenticated");
  }



  useEffect(() => {
    focusSelf();
  }, [focusSelf]);




  return (
    <FocusContext.Provider value={focusKey}>
      <>
        <div className="background">
          <div className="shape"></div>
          <div className="shape"></div>
        </div>

        <form onSubmit={handleSubmit} ref={ref}>
          <h3>Login </h3>

          <InputForm
            label="Nombre de usuario"
            inputType="text"
            name="username"
          />

          <InputForm
            label="contraseña"
            inputType="password"
            name="password"
          />

        <ButtonForm text="Iniciar Sesión" />
          
        </form>
      </>
    </FocusContext.Provider>
  );
}

export default LoginPage;
