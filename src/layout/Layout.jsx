import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
        <header><h4>Logo</h4></header>
        <Outlet/>
        <footer>Footer</footer>
    </div>
  )
}

export default Layout