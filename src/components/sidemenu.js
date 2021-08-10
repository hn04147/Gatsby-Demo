import * as React from "react"
import { Link } from "gatsby"
import { useEffect, useState } from "react"
import styled from "styled-components"

const SideMenu = ({ isClose, setIsClose }) => {
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
    <>
      <Container>
        <div
          style={{
            position: "relative",
            color: "#FFFFFF",
            paddingLeft: "18%",
            top: "28%",
          }}
        >
          <Link
            to="/mainPage"
            style={{ textDecoration: "none", color: "#FFFFFF" }}
            onClick={() => {
              setIsClose(!isClose)
            }}
          >
            <h3 style={{ fontFamily: "Roboto Condensed" }}>HOME</h3>
          </Link>
          <Link
            to="/caseStudiesPage"
            style={{ textDecoration: "none", color: "#FFFFFF" }}
            onClick={() => {
              setIsClose(!isClose)
            }}
          >
            <h3 style={{ fontFamily: "Roboto Condensed" }}>CASESTUDIES</h3>
          </Link>
          <Link
            to="/aboutPage"
            style={{ textDecoration: "none", color: "#FFFFFF" }}
            onClick={() => {
              setIsClose(!isClose)
            }}
          >
            <h3 style={{ fontFamily: "Roboto Condensed" }}>ABOUT</h3>
          </Link>
          <Link
            to="/culturePage"
            style={{ textDecoration: "none", color: "#FFFFFF" }}
            onClick={() => {
              setIsClose(!isClose)
            }}
          >
            <h3 style={{ fontFamily: "Roboto Condensed" }}>CULTURE</h3>
          </Link>
          <Link
            to="/labPage"
            style={{ textDecoration: "none", color: "#FFFFFF" }}
            onClick={() => {
              setIsClose(!isClose)
            }}
          >
            <h3 style={{ fontFamily: "Roboto Condensed" }}>LAB</h3>
          </Link>
          <Link
            to="/contactPage"
            style={{ textDecoration: "none", color: "#FFFFFF" }}
            isContact={true}
          >
            <h3 style={{ fontFamily: "Roboto Condensed" }}>CONTACT</h3>
          </Link>
        </div>

        <div
          style={{
            position: "relative",
            color: "#FFFFFF",
            paddingLeft: "18%",
            top: "50%",
          }}
        >
          <Link
            to="https://www.pixijs.com/"
            style={{
              textDecoration: "none",
              color: "#FFFFFF",
              float: "left",
              height: "100%",
            }}
          >
            <h5 style={{ fontFamily: "Roboto Condensed" }}>PixiJS</h5>
          </Link>
          <Link
            to="https://apply.workable.com/goodboydigital/"
            style={{
              textDecoration: "none",
              color: "#FFFFFF",
              float: "left",
              paddingLeft: "40px",
              paddingRight: "40px",
            }}
          >
            <h5 style={{ fontFamily: "Roboto Condensed" }}>Careers</h5>
          </Link>
          <Link
            to="https://medium.com/goodboy-digital"
            style={{
              textDecoration: "none",
              color: "#FFFFFF",
              float: "left",
            }}
          >
            <h5 style={{ fontFamily: "Roboto Condensed" }}>Blog</h5>
          </Link>
        </div>
      </Container>
    </>
  )
}

export default SideMenu

const Container = styled.div`
  background: #11161d;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 100vh;
  margin-left: 0;

  @media only screen and (min-width: 720px) {
  }
`