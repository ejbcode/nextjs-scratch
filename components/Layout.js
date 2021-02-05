import React from 'react'
import Meta from './Meta'
import Nav from './Nav'

const Layout = ({children}) => {
  return (
    <div>
      <Meta />
      <Nav />
        <div className="main">
          {children}
        </div>
      Footer
    </div>
  )
}

export default Layout
