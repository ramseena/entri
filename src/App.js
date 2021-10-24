import React from 'react'
import './App.css'
import { BrowserRouter as Router } from "react-router-dom";



import NewsPage from './components/NewsPage/newsPage'

import store from './redux/store'
import { Provider } from 'react-redux'
import Navbar from './components/NavBar/navBar'
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

