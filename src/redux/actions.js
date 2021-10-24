
import {Type} from './types'

export const storeNews = (data)=>({
type:Type.STORE_NEWS,
payload:data
})

export const storeWeather = (data)=>({
    type:Type.STORE_WEATHER,
    payload:data
    })
    
    export const searchWords = (data)=>({
        type:Type.SEARCH_WORD,
        payload:data
        })
        
        export const sortByDate = (data)=>({
            type:Type.SORT_NEWS,
            payload:data
            })