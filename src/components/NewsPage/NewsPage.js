import React, { useState, useEffect } from 'react'
import './NewsPage.css'

import axios from 'axios'

import WeatherCard from '../weather/WeatherCard'
import { useSelector, useDispatch } from 'react-redux'
import SearchBar from '../SearchBar/SearchBar'
import { storeNews, storeWeather } from '../../redux/actions'

import { LoadNews } from './../../services/request'

function NewsPage () {
  const dispatch = useDispatch()

  const [lat, setLat] = useState([])
  const [long, setLong] = useState([])
  const [data, setData] = useState({})

  useEffect(() => {
    const loadNews = async () => {
      const response = await LoadNews()

      dispatch(storeNews(response.data.articles))
    }

    loadNews()
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      try {
        navigator.geolocation.getCurrentPosition(function (position) {
          setLat(position.coords.latitude)
          setLong(position.coords.longitude)
        })

        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=fbba223c97767c85e9da88ed115fb918`
        )
console.log(response.data)
      
        dispatch(storeWeather(response.data))
      } catch (error) {

      }
    }
    fetchData()
  }, [])

  return (
    <>
      <div className='App'>
        {/* <Header /> */}
       
          <div style={{ width: '100%', height: '1%' }}>
            
            <WeatherCard />
          </div>
    
        <div>
          <SearchBar />
        </div>
      </div>
    </>
  )
}

export default NewsPage
