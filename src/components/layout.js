import React from "react"
import HeaderArea from "../components/header/HeaderArea"
import Footer from "../components/footer/footer"
import "fontsource-montserrat/300.css" // All styles included.
import "fontsource-montserrat/400.css" // All styles included.
import "fontsource-montserrat/500.css" // All styles included.
import "fontsource-montserrat/700.css" // All styles included.
import './base.css'

const Layout = ({ children }) => {


  return (
      <div className="global-wrapper" >
        <HeaderArea />
        <main>{children}</main>
          <Footer />
      </div>
  )
}

export default Layout