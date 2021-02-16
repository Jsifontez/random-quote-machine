import React from 'react'
import '../styles/Layout.css'

const Layout = (props) => {
  return (
    <main className="layout">
      {props.children}
    </main>
  )
}

export default Layout
