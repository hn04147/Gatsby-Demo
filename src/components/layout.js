import * as React from "react"
import { useState } from "react"
import PropTypes from "prop-types"

import "./layout.css"
import { StaticImage } from "gatsby-plugin-image"
import SideMenu from "../components/sidemenu"

const Layout = ({ children }) => {
  const [isClose, setIsClose] = useState(true)

  return (
    <div style={{ position: "relative" }}>
      <div style={{ position: "relative" }}>
        {/* GOODBOY DIGITAL LOGO */}
        <a
          href="/"
          style={{
            zIndex: "9",
            right: "18px",
            top: "18px",
            width: "35px",
            height: "21px",
            position: "fixed",
          }}
        >
          <StaticImage src="../images/gb_logo.png" alt="GoodBoy Digital Logo" />
        </a>

        {/* THREE DOTS BUTTON */}
        <div
          className="threeDotButton"
          style={{
            opacity: "1",
            transform: "matrix(1, 0, 0, 1, 0, 0)",
            width: "66px",
            height: "60px",
            position: "fixed",
            left: "0",
            top: "0",
            cursor: "pointer",
            zIndex: "11",
          }}
          onClick={() => {
            setIsClose(!isClose)
          }}
        >
          <i
            id="line1"
            style={{
              transform: isClose
                ? "matrix(1, 0, 0, 1, 0, -9)"
                : "matrix(0.7071, 0.7071, -0.7071, 0.7071, 0, 0)",
              width: "26px",
              height: "2px",
              background: "#FFFFFF",
              position: "absolute",
              left: "33%",
              top: "50%",
              margin: "-1px, 0, 0, -13px",
              cursor: "pointer",
            }}
          ></i>
          <i
            id="line2"
            style={{
              opacity: isClose ? "1" : "0",
              width: "26px",
              height: "2px",
              background: "#FFFFFF",
              position: "absolute",
              left: "33%",
              top: "50%",
              margin: "-1px, 0, 0, -13px",
              cursor: "pointer",
            }}
          ></i>
          <i
            id="line3"
            style={{
              transform: isClose
                ? "matrix(1, 0, 0, 1, 0, 9)"
                : "matrix(0.7071, -0.7071, 0.7071, 0.7071, 0, 0)",
              width: "26px",
              height: "2px",
              background: "#FFFFFF",
              position: "absolute",
              left: "33%",
              top: "50%",
              margin: "-1px, 0, 0, -13px",
              cursor: "pointer",
            }}
          ></i>
        </div>
        {isClose ? (<main>{children}</main>) : null}
        
      </div>
      {isClose ? null : (
        <SideMenu/>
      )}
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
