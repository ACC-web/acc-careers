import React from "react"
import HeaderArea from "../components/header/HeaderArea"
import Footer from "../components/footer/footer"
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