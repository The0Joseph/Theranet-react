import LoginForm from "../components/loginForm";
import '../assets/login.css'
import { FormEvent } from "react";
import { fetchData } from "../utils/utils";

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

import { init, setKeyMap } from '@noriginmedia/norigin-spatial-navigation';

init({
  debug: true,
  visualDebug: true,
});
setKeyMap({
  left: 37, // 'ArrowLeft'
  up: 38, // 'ArrowUp'
  right: 39, // 'ArrowRight'
  down: 40, // 'ArrowDown'
  enter: 13 // 'Enter'
});

const MySwal = withReactContent(Swal)


type LoginPageProps = {
    handleAuthenticated : () => void
}

function LoginPage({ handleAuthenticated }: LoginPageProps) {

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()

        const data = new FormData(e.currentTarget)
        const req = await fetchData("auth/login/", { body: data, method: "POST" })
        console.log(req)
        if (req.hasOwnProperty("token")) {
            localStorage.token = req.token
                handleAuthenticated()
        } else {
            MySwal.fire('Error!', req.message, "error")
        }
    }

    return (
        <>

            <div className="background">
                <div className="shape"></div>
                <div className="shape"></div>
            </div>
            <LoginForm handleSubmit={handleSubmit} />
        </>
    );
}

export default LoginPage;