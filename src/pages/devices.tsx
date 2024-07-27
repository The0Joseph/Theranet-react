import { useEffect } from "react";
import { fetchData } from "../utils/utils";

function Devices() {

    const getDevices = async() => {
        const req = await fetchData("devices/")
    }


    useEffect(() => {
        getDevices()

    }, []);

    return (
    <>
    
    </> 
    );
}

export default Devices;