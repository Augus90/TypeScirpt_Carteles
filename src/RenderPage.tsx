import React from 'react'
import {Route, Routes} from "react-router-dom"
import Table from './Components/Table'
import App from './App'

const RenderPage = () => {
  return (
    <div>
        <Routes>
            <Route path='/' Component={App} />
            <Route path='/print' Component={Table}/>
        </Routes>
    </div>
  )
}

export default RenderPage