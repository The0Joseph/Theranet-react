import { authStatusStore } from "./store/authStatusStore";
import {
  RouterProvider,
} from "react-router-dom";
import { useEffect } from "react";
import { routes } from "./routes/routes";



function App() {

  const { checkToken } = authStatusStore()

  useEffect(() => {
    checkToken();
  }, []);



  return (
    <RouterProvider router={routes}>
    </RouterProvider>
  )


}

export default App;
