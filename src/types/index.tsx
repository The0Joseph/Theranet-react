export type ChannelResponse = {
 data : categorieChannel[]
}

export type categorieChannel = {
    name : string
    channels : channel[]
}

export type channel ={
    name : string
    slug: string
    image : string
}

export type device = {
    name : string
    device :  "mobile" |"smarttv" |"pc"
    id : string
}

export type devicesResponse = {
    data : device[]
}

export type channelDetail = {
    type : string
    k1? : string
    k2? : string
    url : string
}