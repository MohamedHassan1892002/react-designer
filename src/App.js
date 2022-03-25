import React, { Component } from 'react'
import { Route, Routes   } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import About from './components/About/About'
import Work from './components/Work/Work'
import Contact from './components/Contact/Contact'
import Footer from './components/footer/Footer'
import NotFound from './components/NotFound/NotFound'


export default class App extends Component {
  render() {
  
    return (<>

      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='home' element={<Home/>}/>
        <Route path='work' element={<Work/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Footer/>
      
      
      </>
    )
  }
}

