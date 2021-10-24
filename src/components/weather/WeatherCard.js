import React, { useEffect, useState } from 'react'
import './styles.css'
import moment from 'moment'
import { useSelector, useDispatch } from 'react-redux'
const WeatherCard = () => {
  const weatherData = useSelector(state => state.weather)

  return (
    <>
      {weatherData && Object.keys(weatherData.current || {}).length ? (
        <div className='main'>
          <p className='header'>
            {weatherData.lat},{weatherData.lon}
          </p>
          <div className='flex'>
            <p className='day'>
              {moment().format('dddd')}, <span>{moment().format('LL')}</span>
            </p>
            //
            <p className='description'>{weatherData.current.weather[0].main}</p>
          </div>

          <div className='flex'>
            <p className='temp'>
              Temprature: {weatherData.current['temp']} &deg;C
            </p>
            <p className='temp'>
              Humidity: {weatherData.current['humidity']} %
            </p>
          </div>

          <div className='flex'>
            <p className='sunrise-sunset'>
              Sunrise:{' '}
              {new Date(
                weatherData.current['sunrise'] * 1000
              ).toLocaleTimeString('en-IN')}
            </p>
            <p className='sunrise-sunset'>
              Sunset:{' '}
              {new Date(
                weatherData.current['sunset'] * 1000
              ).toLocaleTimeString('en-IN')}
            </p>
          </div>
        </div>
      ) : (
        <div>Loading Weather data........</div>
      )}
    </>
  )
}

export default WeatherCard
