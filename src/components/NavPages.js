import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Home from './home/Home'
import Posts from './posts/Posts'
import Settings from './settings/Settings'
import Trips from './trips/Trips'

function NavPages() {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path='/settings' element={<Settings />} />
            <Route path='/posts' element={<Posts />} />
            <Route path='/trips' element={<Trips />} />
        </Routes>
    )
}

export default NavPages