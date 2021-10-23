
import {Type} from './types'

export const storeNews = (data)=>({
type:Type.STORE_NEWS,
payload:data
})

export const storeWeather = (data)=>({
    type:Type.STORE_WEATHER,
    payload:data
    })
    