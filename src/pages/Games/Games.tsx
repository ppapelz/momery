import React from 'react'
import { Navigate, Route, Routes } from 'react-router'
import NotFound from '../NotFound'
import Momery from './Momery/Momery'
import RockPaper from './RockPaper/RockPaper'

function Games() {
    return (
        <Routes>
            <Route index element={<Momery />} />
            <Route path="momery" element={<Momery/>} />
            <Route path="rps" element={<RockPaper/>} />
            <Route path="*" element={<NotFound />} />
      </Routes>
    )
}

export default Games
