import * as React from "react"
import { useState, useEffect } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import "./layout.css"
import SideMenu from "../components/sidemenu"
import GoodBoyLogo from "../images/gb_logo.png"
import GoodBoyLogo2 from "../images/goodboy2x.png"

const Layout = ({ children }) => {
  const [isClose, setIsClose] = useState(true)
  const [screenWidth, setScreenWidth] = useState(2000)
  const [screenHeight, setScreenHeight] = useState(2000)

  const handleResize = () => {
    setScreenWidth(window.innerWidth)
    setScreenHeight(window.innerHeight)
  }

  useEffect(() => {
    handleResize()
  }, [])

  useEffect(() => {
    window.addEventListener("resize", handleResize)
  }, [])

  return (
    <div style={{ position: "relative" }}>
      <div style={{ position: "relative" }}>
        <Link
          to="/mainPage"
          style={{
            zIndex: "9",
            right: "18px",
            top: "18px",
            width: screenWidth < 720 ? "35px" : "120px",
            height: "21px",
            position: "fixed",
          }}
        >
          <img
            src={screenWidth < 720 ? GoodBoyLogo : GoodBoyLogo2}
            alt="GoodBoy Digital Logo"
          />
        </Link>

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
        {isClose ? <main>{children}</main> : null}
      </div>
      {isClose ? null : <SideMenu setIsClose={setIsClose} isClose={isClose} />}
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
