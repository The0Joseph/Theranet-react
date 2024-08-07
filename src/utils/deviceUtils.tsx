import { device } from "../types"

export const getIconDevice = (device:device["device"])=>{

    const  icons = {
        pc : "https://www.crucial.mx/content/dam/crucial/articles/for-pc-builders/new025-how-to-upgrade-your-pc/modern-gaming-pc.jpg.transform/medium-jpg/img.jpg",
        mobile : "https://imgmedia.larepublica.pe/640x371/larepublica/original/2022/04/17/625b7c6bebb34633e300de9b.webp",
        smarttv :"https://www.lg.com/es/lg-experience/images/lg-lab/2023/what-is-a-smart-tv/lg-experience-lg-lab-what-is-a-smart-tv-key-visual.jpg",
    }

    return icons[device]
    
}