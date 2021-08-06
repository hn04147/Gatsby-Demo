import * as React from "react"
import { useState } from "react"
import { Link, navigate } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const SideMenu = ({ isClose, setIsClose }) => {


  return (
    <>
      <div
        style={{
          background: "#11161d",
          position: "absolute",
          top: "0",
          left: "0",
          zIndex: "10",
          width: "100%",
          height: "100vh",
        }}
      >
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
            to="/mainPage"
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
            <h3 style={{ fontFamily: "Roboto Condensed", }}>CONTACT</h3>
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
      </div>
    </>
  )
}

export default SideMenu