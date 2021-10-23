import React from 'react'
import './App.css'
import { BrowserRouter as Router } from "react-router-dom";



import NewsPage from './components/NewsPage/NewsPage'

import store from './redux/store'
import { Provider } from 'react-redux'
import Navbar from '../src/components/NavBar/NavBar'
function App () {

  
  return (
    <Provider store={store}>
       <Router>
      <Navbar />
   <NewsPage/>
   </Router>
   </Provider>
  )
}

export default App

