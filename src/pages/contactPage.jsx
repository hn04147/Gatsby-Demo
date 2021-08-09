import * as React from "react"
import { useState, useEffect, useRef } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { navigate } from "@reach/router"
import Layout from "../components/layout"
import Seo from "../components/seo"
import ContactMap from "../images/contact_map.jpeg"

const ContactPage = () => {
  const [screenWidth, setScreenWidth] = useState(2000)
  const [screenHeight, setScreenHeight] = useState(2000)

  useEffect(() => {
    setScreenHeight(window.innerHeight)
    setScreenWidth(window.innerWidth)
  }, [])


  return (
    <Layout>
      <div
        style={{
          margin: "0 auto",
          position: "relative",
          height: "100vh",
          width: "100%",
          overflow: "hidden",
        }}
      >
        <div>
          <img
            src={ContactMap}
            style={{
              width: screenWidth,
              height: screenHeight,
              objectFit: "cover",
            }}
            alt="Contact Background"
          />
        </div>
        <div
          style={{
            position: "absolute",
            top: "27%",
            left: "10%",
            width: "80%",
            height: "100%",
            color: "#FFFFFF",
            fontFamily: "Roboto Condensed",
          }}
        >
          <h1 style={{ display: "flex", justifyContent: "center" }}>
            Contact Us
          </h1>
          <div
            style={{
              width: "100px",
              height: "4px",
              background: "#ECEDF1",
              margin: "1em auto 2em",
            }}
          ></div>
          <div style={{ width: "80%", margin: "0 auto 0 auto" }}>
            <p
              style={{
                fontSize: "15px",
                fontWeight: "500",
                color: "#FFFFFF",
                margin: ".5em auto .8em auto",
                textAlign: "center",
              }}
            >
              hello@goodboydigital.com
            </p>
            <p
              style={{
                fontSize: "15px",
                fontWeight: "500",
                color: "#FFFFFF",
                margin: ".5em auto .8em auto",
                textAlign: "center",
              }}
            >
              +44 20 8533 1177
            </p>
            <p
              style={{
                fontSize: "17px",
                fontWeight: "300",
                color: "#AEB4BB",
                margin: "0 auto .8em auto",
                textAlign: "center",
              }}
            >
              _OUR TECH
            </p>
            <p
              style={{
                fontSize: "15px",
                fontWeight: "500",
                color: "#FFFFFF",
                margin: ".2em auto .8em auto",
                textAlign: "center",
              }}
            >
              PixiJS.com
            </p>
            <p
              style={{
                fontSize: "17px",
                fontWeight: "300",
                color: "#AEB4BB",
                margin: "0 auto .8em auto",
                textAlign: "center",
              }}
            >
              _FIND US
            </p>
            <p
              style={{
                fontSize: "15px",
                fontWeight: "500",
                color: "#FFFFFF",
                margin: ".2em auto 2em auto",
                textAlign: "center",
              }}
            >
              Unit B1, Matchmakers Wharf, Homerton Road, London, E95FF, UK
            </p>
            <p
              style={{
                fontSize: "15px",
                fontWeight: "300",
                color: "#AEB4BB",
                margin: "0 auto 4em auto",
                textAlign: "center",
              }}
            >
              © 2021 Goodboy Digital Ltd. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ContactPage