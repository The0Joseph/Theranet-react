
interface OptionalParams extends RequestInit {
    headers?: HeadersInit;
}

const API_URL = " http://127.0.0.1:8000/api/v1/"

export const fetchData = async (endpoint: string, optionalParams: OptionalParams = {}) => {

    const token = localStorage.getItem("token")
    optionalParams.headers = {
        ...optionalParams.headers,
        Authorization: `Token ${token}`
    };

    let req = await fetch(API_URL + endpoint, optionalParams)

    if (req.status == 401) {
        localStorage.token = null
        return null
    }

    return await req.json()

}

export const login = async (data: FormData) => await fetchData("auth/login/", {method: "POST", body:data})

export const validateToken = async () =>  await fetchData("auth/", { method: "POST" })

export const getChannels = async() => await fetchData("channels/")

export const getDevices = async() => await fetchData("devices/")