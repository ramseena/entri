import React from 'react'
import axios from 'axios'


// import { storeNews, storeWeather } from '../redux/actions'

export async function LoadNews () {
  try {
    const response = await axios.get(
      'https://newsapi.org/v2/everything?q=apple&from=2021-10-23&to=2021-10-23&sortBy=popularity&apiKey=f53b58e228c14711a3822b8bd223115c'
    )
    return response
  } catch (error) {}
}
