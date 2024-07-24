
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


export const validateToken = async () => {
    const data = await fetchData("auth/", { method: "POST" })
    if (data != null) localStorage.token = data.token
    return data != null
}