import { authStatusStore } from "./store/authStatusStore";
import {
  RouterProvider,
} from "react-router-dom";
import { useEffect } from "react";
import { routes } from "./routes/routes";
import { init, setKeyMap } from "@noriginmedia/norigin-spatial-navigation";


init({
    // debug: true,
    // visualDebug: true,
});
setKeyMap({
    left: 37, // 'ArrowLeft'
    up: 38, // 'ArrowUp'
    right: 39, // 'ArrowRight'
    down: 40, // 'ArrowDown'
    enter: 13, // 'Enter'
});





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
