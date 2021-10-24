import React, { useEffect, useState } from 'react'
import './SearchBar.css'
import ArticleItem from '../ArticleItem/ArticleItem'
import { searchWords,sortByDate } from '../../redux/actions'
import Select from 'react-select';
import { useSelector, useDispatch } from 'react-redux'

const SearchBar = props => {
  const filterednewsData = useSelector(state => state.filteredNews)
  const newsData = useSelector(state => state.news)
  const [input, setInput] = useState('')
  const[selectedOption,setSelectedOption]=useState("")

  const [loading, isLoading] = useState(newsData ? false : true)
  const dispatch = useDispatch()

  useEffect(() => {
    
    dispatch(searchWords(input))
   
  }, [input])
  useEffect(() => {
    
    dispatch(sortByDate(selectedOption.value))
   
  }, [selectedOption])

  

  const handleSearch = input => {
    setInput(input)
  }
  const customStyles = {
    control: base => ({
      ...base,
      height: 30,marginTop:45,
      minHeight: 35,width:"50%"
    })
  };
  const actions = [
    { label: "Sort by date",value:0},
    { label: "ALL", value: 1 },
   
    
    
  ]
 const handleChange = (selectedOption) => {
 setSelectedOption(selectedOption)
   
  };
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
         <Select style={customStyles} options={ actions } value={selectedOption.label} placeholder={"filter"}
        onChange={(item)=>handleChange(item)}/>
           
        </div>
        <br></br>
        <section className='Additional'>
          {filterednewsData .map(item => {
            return <ArticleItem key={item.title} item={item}></ArticleItem>
          })}
        </section>
      </div>
    </div>
  )
}

export default SearchBar
