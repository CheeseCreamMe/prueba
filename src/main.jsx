import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter,Route,Routes } from 'react-router-dom'

import Index from './assets/pages'
import AboutUs from './assets/pages/aboutUs'
import { NotFound } from './assets/pages/Error'
import ContactUs from './assets/pages/contactUs'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes >
    <Route path='/' element={<Index/>}>
       <Route path='about' element= {<AboutUs/>}/>
       <Route path='contact' element= {<ContactUs/>}/>
        <Route path='*' element={<NotFound/>}/>
    </Route>

  </Routes>
  </BrowserRouter>,
)
