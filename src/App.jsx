import React from 'react'
import './App.css'
import HeaderComponent from './components/HeaderComponent/HeaderComponent'
import PostComponent from './components/PostComponent/PostComponent'
import FooterComponent from './components/FooterComponent/FooterComponent'

const App = () => {
  return (
    <React.Fragment>
      <HeaderComponent/>
      <PostComponent/>
      <FooterComponent/>
    </React.Fragment>
  )
}

export default App



