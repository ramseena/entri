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
  const [news,setNews] = useState([])

  useEffect(() => {
    const loadNews = async () => {
      try {
        const response = await axios.get(
          'https://newsapi.org/v2/everything?q=apple&from=2021-10-23&to=2021-10-23&sortBy=popularity&apiKey=f53b58e228c14711a3822b8bd223115c'
        )

        setNews(response.data.articles)

        dispatch(storeNews(response.data.articles))
      } catch (error) {}
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
          `https://api.openweathermap.org/data/2.5/weather/?lat=${lat}&lon=${long}&units=metric&APPID=fbba223c97767c85e9da88ed115fb918`
        )

        setData(response.data)
        dispatch(storeWeather(response.data))
      } catch (error) {}
    }
    fetchData()
  }, [])

  return (
    <>
      <div className='App'>
        {/* <Header /> */}
        {data && data.main && Object.keys(data.main).length ? (
          <div style={{ width: '100%', height: '1%' }}>
            <WeatherCard />
          </div>
        ) : null}
        <div>
          <SearchBar />
        </div>
      </div>
    </>
  )
}

export default NewsPage
