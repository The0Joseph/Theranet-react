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