import React from 'react'
import Login from './pages/login/login'
import Regitration from './pages/registration/Regitration'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Home from './pages/Home/Home'
import Fotter from './components/fotter/Fotter'
import Catagoryblogs from './pages/catagoryblogos/catagoryblogs'
import Dedecateblog from './pages/Dadetactedblog/Dadetactedblog'
import { Routes,Route } from 'react-router-dom'

function App() {

  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/blogging_website/" element={ <Home />}/>
      <Route path="/blogging_website/login" element={ <Login />}/>
      <Route path="/blogging_website/Registration" element={ <Regitration />}/>
      <Route path="/blogging_website/Blogs/:category" element={ <Catagoryblogs />}/>
      <Route path="/blogging_website/Blog/:id" element={<Dedecateblog />} />

    </Routes>
    <Fotter/>
    </>
  )
}

export default App
