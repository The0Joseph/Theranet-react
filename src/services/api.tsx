import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

interface OptionalParams extends RequestInit {
  headers?: HeadersInit;
}

const API_URL = " http://127.0.0.1:8000/api/v1/";

export const fetchData = async (
  endpoint: string,
  optionalParams: OptionalParams = {}
) => {
  const token = localStorage.getItem("token");
  optionalParams.headers = {
    ...optionalParams.headers,
    Authorization: `Token ${token}`,
  };

  let req = await fetch(API_URL + endpoint, optionalParams);

  if (req.status == 401) {
    localStorage.token = null;
    location.reload();
    return null;
  }

  const json = await req.json();
  if (json.hasOwnProperty("error")) {
    new MySwal("Error !", json.error, "error");
  }

  if (json.hasOwnProperty("message")) {
    new MySwal("mensaje!", json.message, "info");
  }

  return json;
};

export const login = async (data: FormData) => {
  const req = await fetchData("auth/login/", { method: "POST", body: data });
  if (!req.hasOwnProperty("token")) return false;
  localStorage.token = req.token;
  return true;
};

export const validateToken = async () => {
  if (localStorage.token == "null") return false;
  const data = await fetchData("auth/", { method: "POST" });
  if (data != null) localStorage.token = data.token;
  return data != null;
};

export const logout = async () =>
  await fetchData("auth/logout/", { method: "POST" });

export const getChannels = async () => await fetchData("channels/");

export const getDevices = async () => await fetchData("devices/");

export const getChannelData = async (slug: string) => await fetchData("channel/"+slug)

export const deleteDevice = async (data : FormData) => await fetchData("devices/", {method: "DELETE", body:data})