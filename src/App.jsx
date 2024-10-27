import React from 'react'
import { RouterProvider } from 'react-router-dom'
import route from './route/AppRoute'

const App = () => {
  return (
    <RouterProvider router={route}/>
  )
}

export default App