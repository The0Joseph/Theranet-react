import { useEffect } from "react";
import { validateToken } from "./services/api";
import LoginPage from "./pages/login";
import Loader from "./components/loader";
import HomePage from "./pages/home";
import { authStatusStore } from "./store/authStatusStore";

function App() {
  const authStatus = authStatusStore((state) => state.status);
  const setAuthStatus = authStatusStore((state) => state.setStatus);

  const checkingToken = async () => {
    const token = await validateToken();
    setAuthStatus(token ? "authenticated" : "not-authenticated");
  };

  useEffect(() => {
    checkingToken();
  }, []);

  if (authStatus == "checking") return <Loader />;

  return <>{authStatus == "authenticated" ? <HomePage /> : <LoginPage />}</>;
}

export default App;
