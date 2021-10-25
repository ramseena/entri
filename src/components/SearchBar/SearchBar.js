import React, { useEffect, useState } from 'react'
import './searchBar.css'
import ArticleItem from '../ArticleItem/articleItem'
import { searchWords, sortByDate } from '../../redux/actions'
import Select from 'react-select'
import { useSelector, useDispatch } from 'react-redux'
import { actions } from './../../globals/constants'
import LoaderScreen from './../../globals/loader'
const SearchBar = props => {
  const filterednewsData = useSelector(state => state.filteredNews)
  const newsData = useSelector(state => state.news)
  const [input, setInput] = useState('')
  const [selectedOption, setSelectedOption] = useState('')

  const [loading, isLoading] = useState(newsData ? false : true)
  const dispatch = useDispatch()
//search word
  useEffect(() => {
    dispatch(searchWords(input))
  }, [input, dispatch])


  //sort data by date
  useEffect(() => {
    dispatch(sortByDate(selectedOption.value))
  }, [selectedOption, dispatch])
//setting search keyword
  const handleSearch = input => {
    setInput(input)
  }
  const customStyles = {
    control: base => ({
      ...base,
      height: 30,
      marginTop: 45,
      minHeight: 35,
      width: '50%'
    })
  }
//handling filter options
  const handleChange = selectedOption => {
    setSelectedOption(selectedOption)
  }
  return loading ? (
    <div>LOADING.....</div>
  ) : (
    <div>
      <div>
        <div className='FilterView'>
          <input
            type='text'
            style={{
              width: '80%',

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
          <Select
            style={customStyles}
            options={actions}
            value={selectedOption.label}
            placeholder={'filter'}
            onChange={item => handleChange(item)}
          />
        </div>
        <br></br>
        <div style={{justifyContent:"center",alignItems:"center"}}>
          {filterednewsData.length > 0 ? (
            <section className='Additional'>
              {filterednewsData.map(item => {
                return <ArticleItem key={item.title} item={item}></ArticleItem>
              })}
            </section>
          ) : (
            <div ><LoaderScreen/></div>
          )}
        </div>
      </div>
    </div>
  )
}

export default SearchBar
