import React from 'react'
import Nav from './Nav'

const Layout = ({children}) => {
  return (
    <div>
      <Nav />
        <div className="main">
          {children}
        </div>
      Footer
    </div>
  )
}

export default Layout
