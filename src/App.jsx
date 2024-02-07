import { useState } from 'react'
import { BrowserRoute, Route, Routes} from 'react-router-dom'
import Home from './Components/Home/Home'
import Header from './Components/Header/Header'
import Form from './Components/Form/Form'
import ListNews from './Components/ListNews/ListNews'
import Footer from './Components/Footer/Footer'
import './App.css'

function App() {
  return(
    <BrowserRoute>
    <Header />
      <Routes>
        <Route path='/' element={ <Home/> }/>
        <Route path='/form' element= { <Form/> }/>
        <Route path='/list' element= { <ListNews/> }/>
      </Routes>
      <Footer />
    </BrowserRoute>
  )
}

export default App
