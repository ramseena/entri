import React, { useEffect, useState } from 'react'
import './SearchBar.css'
import ArticleItem from '../ArticleItem/ArticleItem'
import { storeNews, storeWeather } from '../../redux/actions'
import { useSelector, useDispatch } from 'react-redux'

const SearchBar = props => {
  const newsData = useSelector(state => state.news)
  const [input, setInput] = useState('')
  const [news, setNews] = useState(newsData)
  const [defaultNews, setDefaultNews] = useState(newsData)

  const [loading, isLoading] = useState(newsData ? false : true)
  const dispatch = useDispatch()

  useEffect(() => {
    const filtered = news.filter(item => {
      return item.content.toLowerCase().includes(input.toLowerCase())
    })

    dispatch(storeNews(filtered))
    setDefaultNews(filtered)
  }, [input])
  const GetData = () => {
    setNews(newsData)
    setDefaultNews(newsData)
  }
  useEffect(() => {
    GetData()
  }, [newsData])
  const SortByDate = () => {
    const sortedNews = news.slice().sort((a, b) => {
      return new Date(b.publishedAt) - new Date(a.publishedAt)
    })
    setDefaultNews(sortedNews)
    dispatch(storeNews(sortedNews))
  }

  const handleSearch = input => {
    setInput(input)
  }
  return loading ? (
    <div>LOADING.....</div>
  ) : (
    <div>
      <div>
        <input
          type='text'
          style={{
            width: '50%',
            justifyContent: 'center',
            alignItems: 'center',
            height: '9%',
            margin: 8,
            padding: 10,
            borderRadius: 20,
            borderColor: '#000'
          }}
          value={input}
          onChange={e => handleSearch(e.target.value)}
          placeholder='search anything'
        />
        <button className='btn' onClick={() => SortByDate()}>
          Sort By Date
        </button>
        <br></br>
        <section className='Additional'>
          {defaultNews.map(item => {
            return <ArticleItem key={item.title} item={item}></ArticleItem>
          })}
        </section>
      </div>
    </div>
  )
}

export default SearchBar
