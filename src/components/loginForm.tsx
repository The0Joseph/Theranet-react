import {
    FocusContext,
    useFocusable,
  } from "@noriginmedia/norigin-spatial-navigation";
  import { FormEventHandler, useEffect } from "react";
  
  type LoginFormProps = {
    handleSubmit: FormEventHandler;
  };
  
  function LoginForm({ handleSubmit }: LoginFormProps) {
    const { ref, focusSelf, focusKey } = useFocusable({
      focusable: true,
      focusKey: "LOGIN-ITEMS",
    });
  
    useEffect(() => {
      focusSelf();
    }, [focusSelf]);
  
    return (
      <FocusContext.Provider value={focusKey}>
          <form onSubmit={handleSubmit} ref={ref} >
            <h3>Login </h3>
            <label htmlFor="username">Nombre de Usuario</label>
            <input
              type="text"
              placeholder="Nombre de usuario"
              id="username"
              name="username"
              required
              ref={useFocusable({focusKey:"username"}).ref}
            />
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              placeholder="contraseña"
              id="password"
              name="password"
              required
              ref={useFocusable({focusKey:"password"}).ref}

            />
            <button
            ref={useFocusable().ref}>Iniciar Sesión</button>
          </form>
       </FocusContext.Provider>
    );
  }
  
  export default LoginForm;