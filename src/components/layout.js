import React from "react"
import { Link } from "gatsby"
import HeaderArea from "../components/header/HeaderArea"
import Footer from "../components/footer/footer"
import "fontsource-montserrat/300.css" // All styles included.
import "fontsource-montserrat/400.css" // All styles included.
import "fontsource-montserrat/700.css" // All styles included.

import './base.css'
import Container from './container'
import Navigation from './navigation'

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
        <h1 className="main-heading">
          <Link to="/">{title}</Link>
        </h1>
    )
  } else {
    header = (
        <Link className="header-link-home" to="/">
          {title}
        </Link>
    )
  }

  return (
      <div className="global-wrapper" data-is-root-path={isRootPath}>
        <HeaderArea />
        <main>{children}</main>
          <Footer />
      </div>
  )
}

export default Layout