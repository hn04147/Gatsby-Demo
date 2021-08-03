import * as React from "react"
import { useState } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const CulturePage = () => {
  return (
    <Layout>
      <Seo title="Culture" />
      <div
        id="header"
        style={{
          width: "100%",
          maxHeight: "800px",
          overflow: "hidden",
          margin: "0",
          position: "relative",
        }}
      >
        <StaticImage
          src="../images/moon_background.jpg"
          style={{
            width: "100%",
            height: "100%",
          }}
          alt="Header Background"
        />
        <div style={{ position: "absolute", top: "40%", width: "80%", left: "10%", color: "#FFFFFF", fontFamily: "Roboto Condensed", textAlign: "center" }}>
          <h2>PLAY HARD, WORK HARD</h2>
          <div
            style={{
              display: "block",
              width: "100px",
              height: "4px",
              background: "#ECEDF1",
              margin: "12px auto 12px",
            }}
          ></div>
          <p style={{ fontSize: "15px", paddingTop: "5px" }}>Play is the beating heart of Goodboy. Whether for business or pleasure - we bring it!</p>
        </div>
      </div>

      <div
        id="members"
        style={{
          background: "#252c39",
          width: "100%",
          height: "500px",
        }}
      >
        <div
          id="members_text"
          style={{
            textAlign: "center",
            paddingTop: "50px",
          }}
        >
          <h3
            style={{
              color: "#ECEDF1",
              fontFamily: "Roboto Condensed",
            }}
          >
            MEET THE GOODBOY GANG
          </h3>
          <div
            style={{
              display: "block",
              width: "100px",
              height: "4px",
              background: "#ECEDF1",
              margin: "12px auto 12px",
            }}
          ></div>
          <h4
            style={{
              color: "#ECEDF1",
              paddingTop: "10px",
              fontFamily: "Roboto Condensed",
            }}
          >
            Teamwork makes the dream work
          </h4>
        </div>
      </div>
    </Layout>
  )
}

export default CulturePage
