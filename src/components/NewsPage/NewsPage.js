import React, { useState, useEffect } from 'react'
import './newsPage.css'

import axios from 'axios'

import WeatherCard from '../weather/weatherCard'
import { useDispatch } from 'react-redux'
import SearchBar from '../SearchBar/searchBar'
import { storeNews, storeWeather } from '../../redux/actions'

import { LoadNews } from '../../services/request'

function NewsPage () {
  const dispatch = useDispatch()

  const [lat, setLat] = useState([])
  const [long, setLong] = useState([])

  useEffect(() => {
    const loadNews = async () => {
      const response = await LoadNews()
alert("hi")
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

        dispatch(storeWeather(response.data))
      } catch (error) {}
    }
    fetchData()
  }, [])

  return (
    <>
      <div className='App'>
        <div style={{ width: '100%', height: '1%' }}>
          <WeatherCard />
        </div>

        <div style={{marginLeft:"1.5%"}}>
          <SearchBar />
        </div>
      </div>
    </>
  )
}

export default NewsPage
