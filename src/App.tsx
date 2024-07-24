import { useState, useEffect } from 'react';
import { validateToken } from './utils/utils';
import LoginPage from './pages/login';
import Loader from './components/loader'
import HomePage from './pages/home';





type statusType = {
  status: "checking" | "authenticated" | "not-authenticated"
}

function App() {

  const [appStatus, setappStatus] = useState<statusType>({
    status: "checking"
  });

  const checkingToken = async () => {
    const data = await validateToken()
    setappStatus({ status: data ? "authenticated" : "not-authenticated" })
  }

  const handeleAuthenticated  = () =>{
    setappStatus({status:"authenticated"})
  }

  useEffect(() => {
    checkingToken()

  }, []);

  if (appStatus.status == "checking") return <Loader />

  return (
    <>

      {
        (appStatus.status == 'authenticated') ?
          <HomePage/> : <LoginPage handleAuthenticated={handeleAuthenticated}/>
      }
    </>
  )
}

export default App
