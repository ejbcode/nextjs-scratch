import React from 'react'

const Layout = ({children}) => {
  return (
    <div>
      Header
        <div className="main">
          {children}
        </div>
      Footer
    </div>
  )
}

export default Layout
