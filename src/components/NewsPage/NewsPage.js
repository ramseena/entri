import React, { useState, useEffect } from 'react'
import './NewsPage.css'

import axios from 'axios'

import WeatherCard from '../weather/WeatherCard'
import { useSelector, useDispatch } from 'react-redux'
import SearchBar from '../SearchBar/SearchBar'
import { storeNews, storeWeather } from '../../redux/actions'
import Select from 'react-select';
import Header from '../Header'
// import { LoadNews} from './../../services/request'


function NewsPage () {
  const dispatch = useDispatch()
  

 
  const [lat, setLat] = useState([])
  const [long, setLong] = useState([])
  const [data, setData] = useState([])

  const [news, setNews] = useState([])
  
  useEffect(() => {
    
   
    const loadNews = async () => {
    try{
      const response = await axios.get(
        'https://newsapi.org/v2/everything?q=tesla&apiKey=f53b58e228c14711a3822b8bd223115c'
      )
      console.log(response.data)
      setNews(response.data.articles)
    
      dispatch(storeNews(response.data.articles))
    
     
    }
  
    catch(error){
   
     
    }
  }
    
    loadNews()
  }, [])
 

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude)
        setLong(position.coords.longitude)
      })

      await fetch(
        `https://api.openweathermap.org/data/2.5/weather/?lat=${lat}&lon=${long}&units=metric&APPID=fbba223c97767c85e9da88ed115fb918`
      )
        .then(res => res.json())
        .then(result => {
          setData(result)
          dispatch(storeWeather(result))
          console.log(result)
        })
    }
    fetchData()
  }, [lat, long])
 

  
  return (
    <>
    <div className='App'>
        {/* <Header /> */}
        {typeof data.main != 'undefined' ? (
        
        <div style={{width:"100%",height:"1%"}}>
        <WeatherCard weatherData={data} />
        </div>
       
      ) : (
        null
      )}
     

        <SearchBar item ={news} />
       
    </div>
</>

      
     
    
  )}


export default NewsPage

